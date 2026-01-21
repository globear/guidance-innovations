import { motion } from "framer-motion";

const codeSnippets = [
  { code: "const ai = new Agent();", delay: 0 },
  { code: "workflow.execute();", delay: 0.5 },
  { code: "data.transform();", delay: 1 },
  { code: "return insights;", delay: 1.5 },
];

const nodes = [
  { x: 80, y: 20, delay: 0.2 },
  { x: 30, y: 40, delay: 0.6 },
  { x: 70, y: 55, delay: 1 },
  { x: 20, y: 75, delay: 1.4 },
  { x: 60, y: 85, delay: 0.8 },
];

const connections = [
  { x1: 80, y1: 20, x2: 30, y2: 40 },
  { x1: 30, y1: 40, x2: 70, y2: 55 },
  { x1: 70, y1: 55, x2: 20, y2: 75 },
  { x1: 20, y1: 75, x2: 60, y2: 85 },
];

const HeroAnimation = () => {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none overflow-hidden">
      {/* Connection Lines SVG */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {connections.map((line, i) => (
          <motion.line
            key={i}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, delay: i * 0.3, ease: "easeOut" }}
          />
        ))}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" />
            <stop offset="100%" stopColor="hsl(258 90% 66%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Code Blocks */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute code-block"
          style={{
            left: `${15 + i * 12}%`,
            top: `${15 + i * 18}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 0.9, 0.9, 0.9],
            y: [20, 0, -5, 0],
          }}
          transition={{
            duration: 4,
            delay: snippet.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 font-mono text-xs sm:text-sm">
            <span className="text-primary">{">"}</span>
            <span className="text-muted-foreground ml-1">{snippet.code}</span>
            <motion.span
              className="inline-block w-2 h-4 bg-primary ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>
        </motion.div>
      ))}

      {/* Pulsing Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: node.delay, duration: 0.5 }}
        >
          <motion.div
            className="w-3 h-3 rounded-full bg-gradient-tech"
            animate={{
              boxShadow: [
                "0 0 0 0 hsl(217 91% 60% / 0.4)",
                "0 0 0 10px hsl(217 91% 60% / 0)",
                "0 0 0 0 hsl(217 91% 60% / 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: node.delay,
            }}
          />
        </motion.div>
      ))}

      {/* Floating Terminal Window */}
      <motion.div
        className="absolute right-[10%] top-[30%] w-64"
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="bg-card/90 backdrop-blur-md border border-border rounded-xl overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-xs text-muted-foreground ml-2 font-mono">workflow.ts</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-4 font-mono text-xs space-y-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-primary">import</span>
              <span className="text-muted-foreground"> {"{ AI }"} </span>
              <span className="text-primary">from</span>
              <span className="text-accent"> 'guidance'</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <span className="text-muted-foreground/60">// Initialize agent</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <span className="text-primary">const</span>
              <span className="text-foreground"> agent </span>
              <span className="text-primary">=</span>
              <span className="text-accent"> AI</span>
              <span className="text-muted-foreground">.create()</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="flex items-center"
            >
              <span className="text-foreground">agent</span>
              <span className="text-muted-foreground">.run()</span>
              <motion.span
                className="inline-block w-2 h-4 bg-primary ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
