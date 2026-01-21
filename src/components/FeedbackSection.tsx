import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface TeamMember {
  initial: string;
  name: string;
  position: string;
  skills: string[];
  gradient: string;
  isFounder?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    initial: "T",
    name: "Te",
    position: "Founder & Lead Builder",
    skills: ["AI Workflows", "System Architecture", "E-commerce Operations"],
    gradient: "from-primary to-purple-500",
    isFounder: true,
  },
  {
    initial: "A",
    name: "Alex",
    position: "Backend Engineer",
    skills: ["API Design", "Database Architecture", "Cloud Infrastructure"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    initial: "M",
    name: "Maya",
    position: "AI Specialist",
    skills: ["RAG Systems", "LLM Integration", "Prompt Engineering"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    initial: "S",
    name: "Sam",
    position: "Automation Engineer",
    skills: ["n8n Workflows", "Integration APIs", "Process Automation"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

const FeedbackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0]);

  const reasons = [
    {
      title: "Builder, Not Consultant",
      description: "Led by a founder who actively builds systems, not just advises on them. The same standards applied to our own products are applied to client work.",
    },
    {
      title: "Deep Real-World Experience",
      description: "Our systems are informed by real operational experience—multi-platform e-commerce, logistics, customer support workflows, and cross-border operations.",
    },
    {
      title: "Practical Approach to AI",
      description: "We prioritize reliability over novelty, maintainability over shortcuts, and measurable outcomes over marketing language.",
    },
  ];

  return (
    <section id="about" className="relative px-6 py-16 bg-card overflow-hidden" ref={ref}>
      {/* Subtle purple gradient accent - top left */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Subtle accent bar on left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-primary to-indigo-500 opacity-60" />
      
      <div className="mx-auto max-w-7xl relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary leading-tight">
              Why Work
              <br />
              With Us?
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Clients work with us because they need systems that actually 
              function inside real operations.
            </p>

            {/* Founder & Team highlight */}
            <div className="mt-12 p-6 rounded-xl bg-card border border-border glow-hover relative overflow-hidden">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none" />
              
              <div className="relative">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Our Team</p>
                
                {/* Avatars row - clickable */}
                <div className="flex items-center gap-3 mb-4">
                  {teamMembers.map((member) => (
                    <HoverCard key={member.initial} openDelay={100} closeDelay={100}>
                      <HoverCardTrigger asChild>
                        <button
                          onClick={() => setSelectedMember(member)}
                          className={`${member.isFounder ? 'w-14 h-14 text-lg ring-2 ring-primary/30' : 'w-10 h-10 text-sm'} rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center font-bold text-white shrink-0 cursor-pointer transition-all hover:scale-110 hover:ring-2 hover:ring-white/30 ${selectedMember.initial === member.initial ? 'ring-2 ring-white/50' : ''}`}
                        >
                          {member.initial}
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-64 bg-card border-border" side="top">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">{member.name}</h4>
                          <p className="text-xs text-muted-foreground">{member.position}</p>
                          <div className="flex flex-wrap gap-1 pt-2">
                            {member.skills.map((skill) => (
                              <span key={skill} className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-mono">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
                
                {/* Selected member info */}
                <h3 className="font-display text-2xl font-semibold text-foreground">{selectedMember.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{selectedMember.position}</p>
                <div className="flex flex-wrap gap-1 mt-4">
                  {selectedMember.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Reasons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <div 
                key={reason.title}
                className="p-6 rounded-xl border border-border bg-card glow-hover"
              >
                <h3 className="font-semibold text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}

            {/* Technical capabilities */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-xs font-mono text-primary uppercase tracking-wider mb-3">Technical Foundation</p>
              <div className="flex flex-wrap gap-2">
                {["AI agents", "RAG systems", "API design", "Full-stack engineering", "Scalable infrastructure"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
