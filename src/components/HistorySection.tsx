import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Trash2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import type { RewriteHistory } from "@/types/database";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface HistorySectionProps {
  history: Array<
    Pick<
      RewriteHistory,
      "id" | "original_text" | "rewritten_text" | "translation" | "settings" | "created_at"
    >
  >;
  isGuest: boolean;
  onRefresh?: () => void;
  onClearGuest?: () => void;
  onClearUser?: () => void;
}

const HistorySection = ({ history, isGuest, onRefresh, onClearGuest, onClearUser }: HistorySectionProps) => {
  const { toast } = useToast();

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied",
        duration: 2000,
      });
    } catch {
      toast({
        title: "Failed to copy",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (isGuest) return;
    const { error } = await supabase.from("rewrite_history").delete().eq("id", id);
    if (!error) {
      toast({ title: "Deleted" });
      onRefresh?.();
    }
  };

  if (history.length === 0) return null;

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Recent Rewrites</h3>
        {history.length > 0 && (
          isGuest ? (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearGuest}
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              Clear All
            </Button>
          ) : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  Clear All
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear all history?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete all your rewrite history. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={onClearUser}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    Delete All
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )
        )}
      </div>

      <div className="divide-y divide-gray-100">
        {history.map((entry) => (
          <div key={entry.id} className="py-6 group">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr,auto] gap-4 items-start">
              {/* Original */}
              <div className="text-gray-500 text-sm">{entry.original_text}</div>
              
              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center pt-0.5 text-gray-300">
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Rewritten */}
              <div className="text-gray-900 text-base font-medium">
                {entry.rewritten_text}
                {entry.translation && (
                  <div className="mt-1 text-gray-400 text-sm">
                    {entry.translation}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(entry.rewritten_text)}
                  className="h-8 w-8 text-gray-400 hover:text-purple-600"
                >
                  <Copy className="w-4 h-4" />
                </Button>
                {!isGuest && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(entry.id)}
                    className="h-8 w-8 text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorySection;
