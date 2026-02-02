import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import type { ElevenLabsConversation, ConversationOutcome, UserSentiment } from "@/types/database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { RefreshCw, Trash2, Search } from "lucide-react";
import { format } from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ITEMS_PER_PAGE = 10;

// Badge color helpers
const getOutcomeBadgeColor = (outcome: ConversationOutcome): string => {
  const colors: Record<ConversationOutcome, string> = {
    resolved: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    needs_followup: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    transferred: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    abandoned: "bg-red-500/20 text-red-400 border-red-500/30",
    scheduled_callback: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    other: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  };
  return colors[outcome] || colors.other;
};

const getSentimentBadgeColor = (sentiment: UserSentiment | null): string => {
  if (!sentiment) return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  
  const colors: Record<UserSentiment, string> = {
    positive: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    satisfied: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    neutral: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    negative: "bg-red-500/20 text-red-400 border-red-500/30",
    frustrated: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return colors[sentiment] || colors.neutral;
};

const ConversationsDashboard = () => {
  const [conversations, setConversations] = useState<ElevenLabsConversation[]>([]);
  const [filteredConversations, setFilteredConversations] = useState<ElevenLabsConversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [conversationToDelete, setConversationToDelete] = useState<string | null>(null);
  const { toast } = useToast();

  // Fetch conversations from Supabase
  const fetchConversations = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("elevenlabs_conversations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching conversations:", error);
        toast({
          title: "Error",
          description: "Failed to fetch conversations",
          variant: "destructive",
        });
      } else {
        setConversations(data || []);
        setFilteredConversations(data || []);
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchConversations();
  }, []);

  // Filter conversations based on search text
  useEffect(() => {
    if (!searchText.trim()) {
      setFilteredConversations(conversations);
      setCurrentPage(1);
      return;
    }

    const searchLower = searchText.toLowerCase();
    const filtered = conversations.filter(
      (conv) =>
        conv.user_name?.toLowerCase().includes(searchLower) ||
        conv.user_email?.toLowerCase().includes(searchLower) ||
        conv.conversation_summary.toLowerCase().includes(searchLower)
    );
    setFilteredConversations(filtered);
    setCurrentPage(1);
  }, [searchText, conversations]);

  // Delete conversation
  const handleDelete = async (id: string) => {
    try {
      const { error, data } = await supabase
        .from("elevenlabs_conversations")
        .delete()
        .eq("id", id)
        .select();

      if (error) {
        console.error("Error deleting conversation:", error);
        console.error("Error details:", JSON.stringify(error, null, 2));
        toast({
          title: "Error",
          description: `Failed to delete: ${error.message}`,
          variant: "destructive",
        });
      } else {
        console.log("Successfully deleted:", data);
        // Remove from local state
        setConversations((prev) => prev.filter((conv) => conv.id !== id));
        toast({
          title: "Success",
          description: "Conversation deleted successfully",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: `An unexpected error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setDeleteDialogOpen(false);
      setConversationToDelete(null);
    }
  };

  const openDeleteDialog = (id: string) => {
    setConversationToDelete(id);
    setDeleteDialogOpen(true);
  };

  // Pagination
  const totalPages = Math.ceil(filteredConversations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentConversations = filteredConversations.slice(startIndex, endIndex);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">
              Conversations
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Total: {filteredConversations.length} conversation{filteredConversations.length !== 1 ? 's' : ''}
            </p>
          </div>
          <Button
            onClick={fetchConversations}
            disabled={loading}
            variant="outline"
            className="gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, email, or summary..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Table */}
        <div className="rounded-lg border border-border bg-card">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="max-w-md">Summary</TableHead>
                  <TableHead className="max-w-md">Thai Translation</TableHead>
                  <TableHead>Outcome</TableHead>
                  <TableHead>Sentiment</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-32 text-center">
                      <div className="flex items-center justify-center">
                        <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : currentConversations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-32 text-center">
                      <p className="text-muted-foreground">
                        {searchText ? "No conversations match your search" : "No conversations found"}
                      </p>
                    </TableCell>
                  </TableRow>
                ) : (
                  currentConversations.map((conversation) => (
                    <TableRow key={conversation.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">
                        {conversation.user_name || "-"}
                      </TableCell>
                      <TableCell>{conversation.user_email || "-"}</TableCell>
                      <TableCell className="max-w-md">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="line-clamp-2 text-sm cursor-help">
                              {conversation.conversation_summary}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-md">
                            <p className="whitespace-pre-wrap">{conversation.conversation_summary}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell className="max-w-md">
                        {conversation.thai_translation ? (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="line-clamp-2 text-sm cursor-help">
                                {conversation.thai_translation}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-md">
                              <p className="whitespace-pre-wrap">{conversation.thai_translation}</p>
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getOutcomeBadgeColor(conversation.conversation_outcome)}
                        >
                          {conversation.conversation_outcome.replace(/_/g, " ")}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {conversation.user_sentiment ? (
                          <Badge
                            variant="outline"
                            className={getSentimentBadgeColor(conversation.user_sentiment)}
                          >
                            {conversation.user_sentiment}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {format(new Date(conversation.created_at), "MMM d, yyyy")}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openDeleteDialog(conversation.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination */}
        {!loading && filteredConversations.length > 0 && (
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredConversations.length)} of{" "}
              {filteredConversations.length}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="flex items-center gap-2 px-4">
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Conversation</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this conversation? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => conversationToDelete && handleDelete(conversationToDelete)}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      </div>
    </TooltipProvider>
  );
};

export default ConversationsDashboard;
