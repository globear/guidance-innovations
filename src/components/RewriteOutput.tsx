import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface RewriteOutputProps {
  rewrittenText: string;
  translation?: string | null;
}

const RewriteOutput = ({ rewrittenText, translation }: RewriteOutputProps) => {
  const [copiedRewrite, setCopiedRewrite] = useState(false);
  const [copiedTranslation, setCopiedTranslation] = useState(false);
  const { toast } = useToast();

  const handleCopy = async (text: string, type: "rewrite" | "translation") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "rewrite") {
        setCopiedRewrite(true);
        setTimeout(() => setCopiedRewrite(false), 2000);
      } else {
        setCopiedTranslation(true);
        setTimeout(() => setCopiedTranslation(false), 2000);
      }
      toast({
        title: "Copied",
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="h-full flex flex-col gap-6">
      {/* Rewritten Text */}
      <div className="flex-1 relative group">
        <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleCopy(rewrittenText, "rewrite")}
            className="h-8 w-8 text-gray-400 hover:text-purple-600"
          >
            {copiedRewrite ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
        <p className="text-lg lg:text-xl text-gray-800 whitespace-pre-wrap leading-relaxed">
          {rewrittenText}
        </p>
      </div>

      {/* Translation (if available) */}
      {translation && (
        <div className="pt-6 border-t border-gray-100 relative group">
          <div className="absolute top-6 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopy(translation, "translation")}
              className="h-8 w-8 text-gray-400 hover:text-purple-600"
            >
              {copiedTranslation ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          <p className="text-sm text-gray-500 font-medium mb-2">Translation</p>
          <p className="text-lg text-gray-600 whitespace-pre-wrap leading-relaxed">
            {translation}
          </p>
        </div>
      )}
    </div>
  );
};

export default RewriteOutput;
