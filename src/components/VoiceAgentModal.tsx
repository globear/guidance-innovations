import { useEffect, useState, useCallback, useRef } from "react";
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
  const [isMuted, setIsMuted] = useState(false);
  const isStartingRef = useRef(false);
  // #region agent log
  const mountIdRef = useRef(Math.random().toString(36).slice(2, 8));
  const renderCountRef = useRef(0);
  renderCountRef.current++;
  fetch('http://127.0.0.1:7242/ingest/d17e8854-0ca9-4ddd-8d5e-ef0849150967',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VoiceAgentModal.tsx:RENDER',message:'Component render',data:{mountId:mountIdRef.current,renderCount:renderCountRef.current,isOpen,isStartingRef:isStartingRef.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B,C'})}).catch(()=>{});
  // #endregion

  // ElevenLabs Agent ID - Replace with your actual Agent ID from ElevenLabs dashboard
  const AGENT_ID = "agent_0601kfk3bw5ffwmbnq5xjzhgeeeb";

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to ElevenLabs agent");
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d17e8854-0ca9-4ddd-8d5e-ef0849150967',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VoiceAgentModal.tsx:onConnect',message:'ElevenLabs connected',data:{mountId:mountIdRef.current,isStartingRef:isStartingRef.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,D'})}).catch(()=>{});
      // #endregion
    },
    onDisconnect: () => {
      console.log("Disconnected from ElevenLabs agent");
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d17e8854-0ca9-4ddd-8d5e-ef0849150967',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VoiceAgentModal.tsx:onDisconnect',message:'ElevenLabs disconnected - BEFORE reset',data:{mountId:mountIdRef.current,isStartingRefBefore:isStartingRef.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,D'})}).catch(()=>{});
      // #endregion
      isStartingRef.current = false;
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d17e8854-0ca9-4ddd-8d5e-ef0849150967',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VoiceAgentModal.tsx:onDisconnect',message:'ElevenLabs disconnected - AFTER reset',data:{mountId:mountIdRef.current,isStartingRefAfter:isStartingRef.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
    },
    onError: (error) => {
      console.error("ElevenLabs error:", error);
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d17e8854-0ca9-4ddd-8d5e-ef0849150967',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VoiceAgentModal.tsx:onError',message:'ElevenLabs error',data:{mountId:mountIdRef.current,error:String(error)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
      // #endregion
      isStartingRef.current = false;
    },
    onMessage: (message) => {
      console.log("Message:", message);
    },
    micMuted: isMuted,
  });

  const { status, isSpeaking } = conversation;

  // Request microphone permission
  const requestMicPermission = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Important: Stop the tracks immediately to avoid keeping the mic open (ghost stream)
      stream.getTracks().forEach((track) => track.stop());
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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d17e8854-0ca9-4ddd-8d5e-ef0849150967',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VoiceAgentModal.tsx:startConversation',message:'startConversation called',data:{mountId:mountIdRef.current,isStartingRefBefore:isStartingRef.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,B'})}).catch(()=>{});
    // #endregion
    if (isStartingRef.current) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d17e8854-0ca9-4ddd-8d5e-ef0849150967',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VoiceAgentModal.tsx:startConversation',message:'BLOCKED - already starting',data:{mountId:mountIdRef.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,B'})}).catch(()=>{});
      // #endregion
      return;
    }
    isStartingRef.current = true;

    const permitted = await requestMicPermission();
    if (permitted) {
      try {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/d17e8854-0ca9-4ddd-8d5e-ef0849150967',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VoiceAgentModal.tsx:startConversation',message:'Calling startSession',data:{mountId:mountIdRef.current,agentId:AGENT_ID},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,D'})}).catch(()=>{});
        // #endregion
        await conversation.startSession({
          agentId: AGENT_ID,
          connectionType: "websocket",
        });
      } catch (error) {
        console.error("Failed to start conversation:", error);
        isStartingRef.current = false;
      }
    } else {
      isStartingRef.current = false;
    }
  }, [conversation, requestMicPermission]);

  // End conversation
  const endConversation = useCallback(async () => {
    isStartingRef.current = false;
    await conversation.endSession();
    onClose();
  }, [conversation, onClose]);

  // Auto-start when modal opens
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d17e8854-0ca9-4ddd-8d5e-ef0849150967',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VoiceAgentModal.tsx:useEffect-autostart',message:'Auto-start effect triggered',data:{mountId:mountIdRef.current,isOpen,status,isStartingRef:isStartingRef.current,willStart:isOpen && status === "disconnected" && !isStartingRef.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,E'})}).catch(()=>{});
    // #endregion
    if (isOpen && status === "disconnected" && !isStartingRef.current) {
      startConversation();
    }
  }, [isOpen, status, startConversation]);

  // Cleanup on unmount
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d17e8854-0ca9-4ddd-8d5e-ef0849150967',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VoiceAgentModal.tsx:useEffect-cleanup',message:'Cleanup effect MOUNTED',data:{mountId:mountIdRef.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    return () => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d17e8854-0ca9-4ddd-8d5e-ef0849150967',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VoiceAgentModal.tsx:useEffect-cleanup',message:'Cleanup effect UNMOUNT running',data:{mountId:mountIdRef.current,status},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      if (status === "connected") {
        conversation.endSession();
      }
      isStartingRef.current = false;
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
                    isMuted ? "bg-muted text-destructive" : ""
                  }`}
                  onClick={() => setIsMuted(!isMuted)}
                  disabled={status !== "connected"}
                >
                  {isMuted ? (
                    <MicOff className="h-5 w-5" />
                  ) : (
                    <Mic className="h-5 w-5 text-primary" />
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
