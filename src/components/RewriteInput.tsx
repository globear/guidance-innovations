import { Textarea } from "@/components/ui/textarea";

interface RewriteInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

const RewriteInput = ({ value, onChange, maxLength = 5000 }: RewriteInputProps) => {
  const characterCount = value.length;
  const isNearLimit = characterCount > maxLength * 0.9;

  return (
    <div className="relative h-full flex flex-col">
      <Textarea
        id="original-text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type or paste your message here..."
        className="flex-1 min-h-[300px] text-lg lg:text-xl resize-none border-none focus:ring-0 focus-visible:ring-0 p-0 bg-transparent placeholder:text-gray-300"
        maxLength={maxLength}
      />
      <div className="mt-2 flex justify-end">
        <span
          className={`text-xs ${
            isNearLimit ? "text-yellow-600" : "text-gray-300"
          }`}
        >
          {characterCount} / {maxLength}
        </span>
      </div>
    </div>
  );
};

export default RewriteInput;
