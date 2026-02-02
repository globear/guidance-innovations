import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Wallet, Eye } from "lucide-react";
import { toast } from "sonner";

interface CryptoDonationProps {
  address: string;
}

export function CryptoDonation({ address }: CryptoDonationProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRevealAndCopy = async () => {
    setIsRevealed(true);
    await copyToClipboard();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast.success("Wallet address copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy address");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 mt-8 p-4 rounded-xl bg-white/50 border border-purple-100 max-w-sm mx-auto shadow-sm">
      <div className="flex items-center gap-2 text-sm text-purple-900 font-medium">
        <Wallet className="w-4 h-4 text-purple-600" />
        <span>Donate with crypto (USDT)</span>
      </div>
      
      {!isRevealed ? (
        <Button 
          variant="outline" 
          onClick={handleRevealAndCopy}
          className="w-full bg-white border-purple-100 text-gray-500 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 transition-all"
        >
          <Eye className="w-3 h-3 mr-2" />
          Click to show & copy address
        </Button>
      ) : (
        <div className="flex items-center gap-2 w-full animate-in fade-in zoom-in-95 duration-200">
          <div className="flex-1 bg-white px-3 py-2 rounded-md border border-purple-100 text-xs text-gray-500 font-mono truncate select-all">
            {address}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 h-8 w-8 bg-white hover:bg-purple-50 text-gray-400 hover:text-purple-600 border border-transparent hover:border-purple-100"
            onClick={copyToClipboard}
          >
            {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
          </Button>
        </div>
      )}
    </div>
  );
}
