import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface ControlPanelProps {
  tone: string;
  length: string;
  targetLanguage: string;
  onToneChange: (tone: string) => void;
  onLengthChange: (length: string) => void;
  onLanguageChange: (language: string) => void;
}

const toneOptions = [
  { value: "neutral", label: "Neutral" },
  { value: "casual", label: "Casual" },
  { value: "professional", label: "Professional" },
  { value: "formal", label: "Formal" },
  { value: "friendly", label: "Friendly" },
  { value: "confident", label: "Confident" },
  { value: "apologetic", label: "Apologetic" },
  { value: "direct", label: "Direct" },
];

const lengthOptions = [
  { value: "shorter", label: "Shorter" },
  { value: "same", label: "Same length" },
  { value: "longer", label: "Longer" },
];

const languageOptions = [
  { value: "none", label: "English (No Translation)" },
  { value: "zh", label: "Chinese (Simplified)" },
  { value: "es", label: "Spanish" },
  { value: "th", label: "Thai" },
  { value: "de", label: "German" },
  { value: "ja", label: "Japanese" },
  { value: "fr", label: "French" },
];

const ControlPanel = ({
  tone,
  length,
  targetLanguage,
  onToneChange,
  onLengthChange,
  onLanguageChange,
}: ControlPanelProps) => {
  return (
    <div className="flex flex-wrap gap-6 mb-4">
      {/* Tone Selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500 font-medium">Tone:</span>
        <Select value={tone} onValueChange={onToneChange}>
          <SelectTrigger
            id="tone-select"
            className="w-auto h-auto p-0 border-none shadow-none bg-transparent text-base font-semibold text-purple-900 focus:ring-0 hover:text-purple-700 gap-1"
          >
            <SelectValue placeholder="Select tone" />
          </SelectTrigger>
          <SelectContent>
            {toneOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Length Selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500 font-medium">Length:</span>
        <Select value={length} onValueChange={onLengthChange}>
          <SelectTrigger
            id="length-select"
            className="w-auto h-auto p-0 border-none shadow-none bg-transparent text-base font-semibold text-purple-900 focus:ring-0 hover:text-purple-700 gap-1"
          >
            <SelectValue placeholder="Select length" />
          </SelectTrigger>
          <SelectContent>
            {lengthOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Language Selector */}
      <div className="flex items-center gap-2 ml-auto">
        <span className="text-sm text-gray-500 font-medium">Translate to:</span>
        <Select value={targetLanguage} onValueChange={onLanguageChange}>
          <SelectTrigger
            id="language-select"
            className="w-auto h-auto p-0 border-none shadow-none bg-transparent text-base font-semibold text-purple-900 focus:ring-0 hover:text-purple-700 gap-1"
          >
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languageOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ControlPanel;
