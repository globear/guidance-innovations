import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, X, Phone } from "lucide-react";
import { useConversation } from "@elevenlabs/react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface VoiceAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VoiceAgentModal = ({ isOpen, onClose }: VoiceAgentModalProps) => {
  const { t } = useLanguage();
  const [hasPermission, setHasPermission] = useState(false);
  const [permissionError, setPermissionError] = useState(false);

  // ElevenLabs Agent ID - Replace with your actual Agent ID from ElevenLabs dashboard
  const AGENT_ID = "agent_0601kfk3bw5ffwmbnq5xjzhgeeeb";

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to ElevenLabs agent");
    },
    onDisconnect: () => {
      console.log("Disconnected from ElevenLabs agent");
    },
    onError: (error) => {
      console.error("ElevenLabs error:", error);
    },
    onMessage: (message) => {
      console.log("Message:", message);
    },
  });

  const { status, isSpeaking } = conversation;

  // Request microphone permission
  const requestMicPermission = useCallback(async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
      setPermissionError(false);
      return true;
    } catch (error) {
      console.error("Microphone permission denied:", error);
      setPermissionError(true);
      return false;
    }
  }, []);

  // Start conversation
  const startConversation = useCallback(async () => {
    const permitted = await requestMicPermission();
    if (permitted) {
      try {
        await conversation.startSession({
          agentId: AGENT_ID,
        });
      } catch (error) {
        console.error("Failed to start conversation:", error);
      }
    }
  }, [conversation, requestMicPermission]);

  // End conversation
  const endConversation = useCallback(async () => {
    await conversation.endSession();
    onClose();
  }, [conversation, onClose]);

  // Auto-start when modal opens
  useEffect(() => {
    if (isOpen && status === "disconnected") {
      startConversation();
    }
  }, [isOpen, status, startConversation]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (status === "connected") {
        conversation.endSession();
      }
    };
  }, []);

  const getStatusText = () => {
    if (permissionError) return t("voiceAgent.microphoneError");
    if (status === "connecting") return t("voiceAgent.connecting");
    if (isSpeaking) return t("voiceAgent.speaking");
    if (status === "connected") return t("voiceAgent.listening");
    return t("voiceAgent.ready");
  };

  const getStatusColor = () => {
    if (permissionError) return "text-red-400";
    if (isSpeaking) return "text-cyan-400";
    if (status === "connected") return "text-green-400";
    return "text-muted-foreground";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={endConversation}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="gradient-blob gradient-blob-blue absolute -right-20 -top-20 h-40 w-40 opacity-30" />
              <div className="gradient-blob gradient-blob-purple absolute -left-20 -bottom-20 h-40 w-40 opacity-30" />
              <div className="absolute inset-0 grid-pattern opacity-10" />
            </div>

            {/* Header */}
            <div className="relative flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground">
                  {t("voiceAgent.title")}
                </span>
              </div>
              <button
                onClick={endConversation}
                className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main Content */}
            <div className="relative flex flex-col items-center justify-center py-12 px-6 space-y-8">
              {/* Voice Visualization */}
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div
                  animate={{
                    scale: isSpeaking ? [1, 1.2, 1] : 1,
                    opacity: isSpeaking ? [0.3, 0.6, 0.3] : 0.2,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-tech blur-xl"
                  style={{ margin: "-20px" }}
                />

                {/* Main circle */}
                <div
                  className={`relative h-32 w-32 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                    isSpeaking
                      ? "border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                      : status === "connected"
                      ? "border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                      : "border-border"
                  } bg-card/80 backdrop-blur-sm`}
                >
                  {/* Audio visualization bars */}
                  <div className="flex gap-1 items-end h-12">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: isSpeaking
                            ? [8, 32 + Math.random() * 16, 8]
                            : status === "connected"
                            ? [6, 12, 6]
                            : 6,
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6 + i * 0.1,
                          ease: "easeInOut",
                        }}
                        className={`w-1.5 rounded-full transition-colors duration-300 ${
                          isSpeaking
                            ? "bg-cyan-400"
                            : status === "connected"
                            ? "bg-primary/60"
                            : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Text */}
              <div className="text-center space-y-2">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t("voiceAgent.agentName")}
                </h3>
                <p className={`text-sm font-mono ${getStatusColor()}`}>
                  {getStatusText()}
                </p>
                {permissionError && (
                  <p className="text-xs text-muted-foreground mt-2 max-w-xs">
                    {t("voiceAgent.microphoneHelp")}
                  </p>
                )}
              </div>

              {/* Controls */}
              <div className="flex gap-4 items-center">
                {/* Mute/Unmute button */}
                <Button
                  variant="outline"
                  size="icon"
                  className={`h-14 w-14 rounded-full border-border bg-card hover:bg-muted transition-all ${
                    conversation.isSpeaking ? "opacity-50" : ""
                  }`}
                  onClick={async () => {
                    if (status === "disconnected") {
                      await startConversation();
                    }
                  }}
                  disabled={status === "connecting"}
                >
                  {status === "connected" ? (
                    <Mic className="h-5 w-5 text-primary" />
                  ) : (
                    <MicOff className="h-5 w-5 text-muted-foreground" />
                  )}
                </Button>

                {/* End Call button */}
                <Button
                  onClick={endConversation}
                  className="h-14 px-8 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 transition-all"
                >
                  <Phone className="h-4 w-4 mr-2 rotate-[135deg]" />
                  {t("voiceAgent.endCall")}
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="relative p-4 border-t border-border bg-muted/30">
              <p className="text-xs text-center text-muted-foreground/60 font-mono">
                {t("voiceAgent.poweredBy")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VoiceAgentModal;
