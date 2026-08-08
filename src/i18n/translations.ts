export const translations = {
  en: {
    header: {
      services: "Services",
      products: "Products",
      packages: "Packages",
      about: "About",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    appHome: {
      projectsTitle: "Projects & Services",
      projectsSubtitle: "Explore our innovation ecosystem",
    },
    package: {
      meta: {
        title: "AI Assistant Packages | Guidance Innovation Co., Ltd.",
        description: "Managed AI chat assistants for Thai businesses. Free personalized demo, three service tiers from $129/mo, and optional add-ons. Answers questions, captures leads, books appointments 24/7.",
      },
      hero: {
        label: "AI assistant packages",
        headline: "Your AI assistant for leads and bookings",
        description: "An agent trained on your business that talks to visitors, answers what they actually ask, and turns the conversation into a lead or a booking.",
        primaryCta: "Start your request",
        secondaryCta: "See the free demo",
      },
      whatItDoes: {
        label: "What it does",
        heading: "A real assistant for your website",
        items: [
          "Answers questions about your services, hours, pricing, and policies",
          "Captures name, contact, and intent from every real conversation",
          "Books appointments and passes the details straight to you",
          "Knowledge system we build and retrain as your business changes",
          "Routes leads to your email, WhatsApp, or LINE automatically",
          "Works for you 24/7",
        ],
      },
      howItWorks: {
        label: "How it works",
        heading: "From free demo to live assistant",
        steps: [
          {
            title: "Free demo",
            description: "We build a working assistant from your public business info so you can try it before paying.",
          },
          {
            title: "Choose a plan",
            description: "Pick the level that fits. Tell us your website, contact number, and LINE for an accurate quote.",
          },
          {
            title: "We build and connect",
            description: "Knowledge base, widget design, channels, and booking flows set up and tested on your site.",
          },
          {
            title: "We run it with you",
            description: "Monitoring, knowledge updates, reporting, and support every month — not a one-time handoff.",
          },
        ],
      },
      demo: {
        label: "Free personalized demo",
        heading: "Try a working AI assistant built for your business before you buy",
        paragraph1: "We create a demonstration from publicly available information about your business: services, locations, opening hours, prices, contact details, and FAQs.",
        paragraph2: "You experience a working AI assistant on a demonstration version of your website before purchasing. The demo is clearly separated from paid services.",
        importantLabel: "Important:",
        importantText: "The demo is not yet connected to the official business website or internal systems.",
        cta: "Request your free demo",
        scrollHint: "Scroll to continue the conversation",
        widget: {
          business: "Your business",
          tagline: "Always here to help",
          botGreeting: "Hi! I can help you with services, hours, pricing, and booking. What would you like to know?",
          userQuestion: "Do you offer appointments on weekends?",
          botAnswer: "Yes, we are open Saturday and Sunday from 10am to 6pm. Would you like me to reserve a slot?",
          inputPlaceholder: "Type your question...",
        },
      },
      packages: {
        label: "Managed service packages",
        heading: "Choose the level that fits your business",
        description: "Every plan is a managed subscription. Prices start from the amounts below — we send an accurate quote after reviewing your business.",
        recommended: "Recommended",
        excludesPrefix: "Excludes:",
        cta: "Choose this plan",
        bestForLabel: "Best for",
        website: {
          name: "AI Website Assistant",
          price: "starting from $129/mo",
          term: "6-month minimum",
          bestFor:
            "Businesses that want a polished 24/7 website assistant—answering visitor questions from publicly available information on your site.",
          features: [
            "Installation on one existing website",
            "Knowledge base from publicly available business info",
            "Standard AI chat, logo + greeting customization, one interface color",
            "Contact and booking links",
            "Managed hosting, monitoring, minor updates, technical maintenance",
            "Included AI usage allowance",
            "Standardized widget layout",
          ],
          exclusions: [
            "Private documents",
            "Custom interface design",
            "Social-channel integrations",
            "Lead qualification",
            "Booking automation",
          ],
        },
        business: {
          name: "AI Business Assistant",
          price: "starting from $199/mo",
          term: "6-month minimum",
          bestFor:
            "Service businesses—spas, clinics, salons, and similar—that need private knowledge, branded chat, and reliable lead capture.",
          features: [
            "Everything in Website Assistant",
            "Private knowledge base from owner-provided documents",
            "Designated Google Drive folder for approved materials",
            "Customized widget design",
            "Customer interaction records sent to shared Google Sheet",
            "Basic lead capture, conversation categorization, human handoff instructions",
            "Monthly customer-question insights",
            "One standard channel integration (LINE OA or email)",
            "Additional channels optional",
          ],
        },
        sales: {
          name: "AI Sales and Booking Agent",
          price: "starting from $389/mo",
          term: "12-month minimum",
          bestFor:
            "Teams ready to convert conversations into bookings—with calendar sync, structured qualification, and clearer sales follow-through.",
          features: [
            "Everything in Business Assistant",
            "Structured lead capture and qualification, contact validation, service-interest identification, lead categorization",
            "Booking/calendar integration, appointment requests, internal notifications, reminders",
            "Conversation summaries, lead-management dashboard, conversion insights, human escalation",
          ],
          note: "Custom CRM integrations, telephone AI, SMS, voice, outbound follow-up, complex multi-channel systems require separate quotation.",
        },
        enterprise: {
          label: "Enterprise",
          title: "Custom Enterprise AI",
          description:
            "Built for large-scale operations that need dedicated infrastructure—separate AI models, databases, and servers—plus tailored workflows, stronger security controls, and priority support. We design the architecture with you and provide a custom quotation after a detailed requirements review.",
          cta: "Discuss Enterprise",
        },
      },
      noWebsite: {
        label: "No website yet?",
        heading: "We can build the site and the AI assistant together",
        optionA: {
          label: "Option A",
          title: "Website setup + AI plan",
          price: "starting from ฿15,000",
          note: "one-time website setup fee + selected AI plan",
          cta: "Request website setup",
        },
        optionB: {
          badge: "Bundle",
          label: "Option B",
          title: "Website + AI Assistant bundle",
          price: "starting from ฿5,500/mo",
          note: "12-month minimum, no upfront website fee",
          features: [
            "Up to 5 pages",
            "Responsive design",
            "Basic SEO, business info, contact buttons, Google Maps",
            "Hosting, minor maintenance, and AI Website Assistant",
          ],
          cta: "Request bundle",
        },
      },
      addOns: {
        label: "Optional add-ons",
        heading: "Extend the assistant as you grow",
        note: "Pricing for add-ons depends on scope. Contact us for a tailored quote.",
        items: [
          { label: "Additional channels", detail: "LINE, WhatsApp, Instagram, Messenger, email" },
          { label: "Additional languages", detail: "Localize the assistant for more markets" },
          { label: "Additional branches", detail: "Multi-location knowledge and routing" },
          { label: "Expanded private knowledge bases", detail: "More documents, more detail" },
          { label: "Booking systems", detail: "Calendar integrations and scheduling" },
          { label: "CRM integrations", detail: "Connect your existing sales pipeline" },
          { label: "Web voice", detail: "Voice-enabled assistant on your site" },
          { label: "Telephone AI", detail: "AI handling inbound phone calls" },
          { label: "SMS", detail: "Outbound and inbound SMS support" },
          { label: "Outbound follow-up", detail: "Proactive lead follow-up sequences" },
          { label: "Advanced analytics", detail: "Deeper conversation and conversion insights" },
          { label: "Source-code / self-hosting transfer", detail: "Own the deployment and infrastructure" },
        ],
      },
      subscription: {
        label: "Managed AI service subscription",
        heading: "What your subscription covers",
        description: "Every package is a Managed AI Service Subscription — not merely a maintenance fee. We run the AI system for you so you can focus on your customers.",
        items: [
          "AI system access",
          "Hosting and infrastructure",
          "Usage within plan allowance",
          "Monitoring and security updates",
          "Backups and bug fixes",
          "Knowledge updates",
          "Reporting",
          "Integration maintenance",
          "Technical support",
        ],
        disclaimerLabel: "Starting from",
        disclaimerText: "pricing is shown publicly. Final pricing depends on conversation volume, knowledge-base size, communication channels, booking systems, and required integrations.",
      },
      quote: {
        text: "We combine business strategy, modern design, and AI-assisted development to help small businesses launch faster and look more professional online. We are not here to sell you a website and disappear — we run it with you.",
        author: "— Te, founder and top builder",
      },
      wizardIntro: {
        label: "Get started",
        heading: "Get a quote",
        description: "Choose a plan, then tell us your website, contact number, and LINE. We review your business and reply within 1–2 business days.",
      },
      wizard: {
        steps: ["Your plan", "Your details", "Review", "Done"],
        optional: "(optional)",
        empty: "—",
        step1: {
          heading: "Choose your plan",
          description: "Pick the level that fits. You can change this later — nothing is charged now.",
          packageLabel: "Package or free demo",
          websiteLabel: "Do you have a website?",
          addOnsLabel: "Anything to add on?",
          addOnsHint: "Select what interests you. We quote based on scope — no commitment.",
          continueLocked: "Complete this step to continue",
        },
        packages: {
          demo: {
            label: "Free Personalized AI Demo",
            price: "Free",
            explanation:
              "We create a demo AI customer assistant right on your current homepage. Use the link we send you, then try it out directly on your current site.",
          },
          website: { label: "AI Website Assistant", price: "from $129/mo" },
          business: { label: "AI Business Assistant", price: "from $199/mo" },
          sales: { label: "AI Sales & Booking Agent", price: "from $389/mo" },
        },
        websiteStatuses: {
          have: "I have an existing website",
          need: "I need a website built",
          bundle: "I want the website + AI bundle",
        },
        addOnCategories: [
          {
            label: "Channels & reach",
            options: [
              "Additional LINE / WhatsApp / Instagram / Messenger / email channels",
              "Additional languages",
              "Additional branches",
            ],
          },
          {
            label: "Knowledge & integrations",
            options: [
              "Expanded private knowledge base",
              "Booking / calendar integration",
              "CRM integration",
            ],
          },
          {
            label: "Advanced capabilities",
            options: [
              "Web voice",
              "Telephone AI",
              "SMS",
              "Outbound follow-up",
              "Advanced analytics",
              "Source-code / self-hosting transfer",
            ],
          },
        ],
        step2: {
          heading: "Where should we send your quote?",
          description: "We will review your business and send an accurate quote.",
          descriptionWithPlan: "We will review your business and send an accurate quote for the {plan}.",
          nameLabel: "Your name",
          namePlaceholder: "Your name",
          businessLabel: "Business name",
          businessPlaceholder: "Your business",
          websiteLabel: "Your website",
          websitePlaceholder: "www.yourbusiness.com or your Facebook / Google Maps page",
          websiteHint: "This lets us check your services and pricing so the quote is accurate.",
          phoneLabel: "Contact number",
          phonePlaceholder: "+66 ...",
          lineLabel: "LINE ID",
          linePlaceholder: "@yourbusiness",
          emailLabel: "Email",
          emailPlaceholder: "you@business.com",
          contactMethodLabel: "How should we contact you?",
          contactMethods: ["LINE", "Phone call", "Email", "WhatsApp"],
          messageLabel: "Anything else we should know?",
          messagePlaceholder: "Your goals, current setup, busiest questions from customers...",
        },
        step3: {
          heading: "Review your request",
          description: "Please confirm before sending. We reply within 1–2 business days with an accurate quote.",
          planSection: "Plan",
          packageLabel: "Package",
          websiteStatusLabel: "Website status",
          addOnsLabel: "Add-ons",
          contactSection: "Contact",
          nameLabel: "Name",
          businessLabel: "Business",
          websiteLabel: "Website",
          phoneLabel: "Phone",
          lineLabel: "LINE ID",
          emailLabel: "Email",
          preferredLabel: "Preferred contact",
          notesLabel: "Notes",
          consent: "I confirm my contact details are correct and consent to Guidance Innovation reaching out about this request.",
        },
        step4: {
          thankYou: "Thank you!",
          received: "Request received",
          body: "We have your details and will review your business. Expect an accurate quote within 1–2 business days.",
          viaContact: "We will reply via {method}.",
          resubmit: "Submit another request",
        },
        nav: {
          back: "Back",
          continue: "Continue",
          review: "Review request",
          send: "Send request",
          sending: "Sending...",
        },
        errors: {
          package: "Please select a package or demo",
          websiteStatus: "Please select your website status",
          name: "Name is required",
          businessName: "Business name is required",
          phone: "Contact number is required",
          emailRequired: "Email is required",
          emailInvalid: "Please enter a valid email",
          websiteUrl: "Please share your website so we can quote accurately",
          consent: "Please confirm your contact details",
          submit: "Could not save your request. Please try again or email hello@guidanceinnovations.tech",
        },
      },
    },
    hero: {
      company: "Guidance Innovation Co., Ltd.",
      headline: "Building Practical AI",
      subheadline: "for Real Businesses",
      description: "We design and build AI-powered SaaS products, intelligent automation, and custom software systems that solve real operational problems.",
      tagline: "// No hype. Just systems that work.",
      contactUs: "Talk To Us",
      viewProducts: "Case Study",
      productsLabel: "Products",
      productsValue: "GuidanceStream • CareRouters",
      basedInLabel: "Based in",
      basedInValue: "Thailand, serving global clients",
    },
    welcome: {
      label: "What We Do",
      heading1: "SaaS Products &",
      heading2: "AI Solutions",
      description1: "Our work focuses on clarity, reliability, and long-term scalability. We build AI-powered SaaS products, intelligent automation, and custom software systems that solve real operational problems for service and product-based businesses.",
      description2: "Each solution is designed for production use and tailored to the business, not built from generic templates.",
      saasTitle: "SaaS Products",
      saasDescription: "Production-ready AI products built for real business use: GuidanceStream for customer service, CareRouters for healthcare logistics.",
      automationTitle: "AI Automation",
      automationDescription: "Custom AI and automation systems for businesses that want measurable operational improvement. Workflow automation, intelligent document processing, and system integrations.",
      devTitle: "Full-Stack Development",
      devDescription: "End-to-end product development for startups and growing businesses. From MVP to production-ready systems.",
    },
    features: {
      heading: "AI Automation",
      headingHighlight: "Solutions",
      subheading: "for measurable operational improvement",
      description: "We design and implement custom AI and automation systems for businesses. Process optimization for speed, accuracy, and cost efficiency.",
      aiAgents: "AI Agents",
      aiAgentsDesc: "AI agents for customer support and internal operations with context-aware responses aligned with your brand voice.",
      workflow: "Workflow Automation",
      workflowDesc: "Automated workflows using APIs, webhooks, and orchestration tools. Connect data sources, logic layers, and outputs.",
      integration: "System Integration",
      integrationDesc: "CRM, ERP, and platform integrations. Knowledge base systems using structured data and vector search.",
      alsoIncludes: "Also includes",
      docProcessing: "Intelligent document processing",
      dataPipelines: "Data pipelines",
      vectorSearch: "Vector search",
      apiDesign: "API-driven design",
    },
    products: {
      ourProducts: "Our Products",
      healthcarePlatform: "Healthcare Platform",
      privateBeta: "MVP",
      mvpStage: "Development",
      guidancestream: {
        name: "Guidance",
        nameBold: "Stream",
        subtitle: "AI Customer Service Agent",
        problemLabel: "The Problem It Solves",
        description: "Businesses lose time, revenue, and reputation when customer communication is slow or inconsistent. GuidanceStream solves this by acting as a structured, intelligent customer service layer across your communication channels.",
        problems: [
          "High volume of repetitive inquiries",
          "Inconsistent staff responses",
          "Knowledge scattered across documents",
          "Support teams that don't scale"
        ],
        howItWorks: "How It Works",
        features: [
          "Central knowledge base",
          "Context-aware AI responses",
          "Automation workflows",
          "Integration-ready"
        ],
      },
      carerouters: {
        name: "Care",
        nameBold: "Routers",
        subtitle: "Hospital Escort Platform for Elderly Care",
        description: "Navigating hospitals can be stressful for elderly individuals and their families. CareRouters provides a structured platform for finding reliable companions to assist with hospital visits.",
        elderlyUx: "Elderly-friendly UX",
        elderlyUxDesc: "Designed for accessibility",
        realWorkflows: "Real hospital workflows",
        realWorkflowsDesc: "Practical usability",
        trustSafety: "Trust & Safety",
        trustSafetyDesc: "Accountability focused",
        regions: "Thailand & Malaysia",
        regionsDesc: "Regional coverage",
      },
      dashboard: {
        brand: "AetherGate",
        brandSub: "Operations",
        title: "Airport Services Operations",
        subtitle: "AI-assisted requests across arrival and departure channels",
        viewBadge: "Management View",
        demoNote: "Demo data — fictional brand",
        showcaseNote: "",
        channelVolume: "Channel activity",
        weeklyVolume: "Weekly requests",
        vsLastWeek: "vs last week",
        resolutionTitle: "Resolution",
        recentConversations: "Recent conversations",
        activeLabel: "active",
        allConversations: "View all",
        navGroups: {
          product: "Product",
          workspace: "Workspace",
          admin: "Administration",
        },
        nav: {
          dashboard: "Dashboard",
          conversations: "Conversations",
          bookings: "Bookings",
          leads: "Leads",
          kpi: "Analytics",
          ai: "AI",
          settings: "Settings",
          billing: "Billing",
        },
        kpis: {
          messages: "Active requests",
          messagesSub: "Last 30 days",
          solved: "Resolved",
          solvedSub: "75% resolution rate",
          active: "Open cases",
          activeSub: "9 escalated",
          response: "Avg AI response",
          responseSub: "Across all channels",
        },
        resolution: {
          ai: "Resolved by AI",
          escalated: "Escalated to human",
          human: "Resolved by human",
        },
        status: {
          done: "Done",
          active: "Active",
        },
        assignee: {
          ai: "Solved by AI",
          human: "Assigned to agent",
        },
        priority: {
          normal: "Normal",
          high: "High",
        },
        table: {
          customer: "Customer",
          channel: "Channel",
          booking: "Booking ID",
          flight: "Flight",
          status: "Status",
          assignee: "Assignee",
          duration: "Duration",
        },
      },
    },
    caseStudies: {
      label: "Case Examples",
      heading: "Real Solutions for",
      headingHighlight: "Real Problems",
      description: "Examples of how we've helped businesses implement AI and automation systems that deliver measurable results.",
      aiCustomerService: {
        industry: "E-commerce Operations",
        title: "AI Customer Service System",
        challenge: "High volume of repetitive inquiries, slow response time, inconsistent tone across support staff.",
        solution: "AI agent connected to product data, policies, and order workflows with context-aware responses.",
        outcome: "Faster response times, reduced manual workload, improved consistency across all channels.",
      },
      operationalAutomation: {
        industry: "Business Workflows",
        title: "Operational Automation",
        challenge: "Manual document handling, fragmented processes, error-prone steps causing delays.",
        solution: "Automated workflows connecting data sources, logic layers, and outputs with intelligent routing.",
        outcome: "Reduced human error, improved efficiency, scalable operations ready for growth.",
      },
      careRoutersMvp: {
        industry: "Healthcare Platform",
        title: "CareRouters MVP",
        challenge: "Designing a usable system around real hospital escort workflows for elderly users.",
        solution: "UX-driven product design, mobile app prototype, real-world validation with target users.",
        outcome: "Functional MVP aligned with actual user needs rather than assumptions.",
      },
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      outcomeLabel: "Outcome",
    },
    feedback: {
      heading: "Why Work",
      headingLine2: "With Us?",
      description: "Clients work with us because they need systems that actually function inside real operations.",
      ourTeam: "Our Team",
      builderTitle: "Builder, Not Consultant",
      builderDesc: "Led by a founder who actively builds systems, not just advises on them. The same standards applied to our own products are applied to client work.",
      experienceTitle: "Deep Real-World Experience",
      experienceDesc: "Our systems are informed by real operational experience—multi-platform e-commerce, logistics, customer support workflows, and cross-border operations.",
      practicalTitle: "Practical Approach to AI",
      practicalDesc: "We prioritize reliability over novelty, maintainability over shortcuts, and measurable outcomes over marketing language.",
      techFoundation: "Technical Foundation",
      skills: ["AI agents", "RAG systems", "API design", "Full-stack engineering", "Scalable infrastructure"],
      team: {
        te: { name: "Reed", position: "Founder & Lead Builder", skills: ["AI Workflows", "System Architecture", "E-commerce Operations"] },
        alex: { name: "Denis", position: "Backend Engineer", skills: ["API Design", "Database Architecture", "Cloud Infrastructure"] },
        maya: { name: "Best", position: "Marketing & Growth", skills: ["Content Strategy", "SEO & Analytics", "Brand Development"] },
        sam: { name: "Ye", position: "UX/UI Designer", skills: ["User Research", "Interface Design", "Design Systems"] },
      },
      gallery: {
        eyebrow: "In the Field",
        heading: "Real-World Experience",
        description: "Speaking, building, and networking across Bangkok's AI and startup ecosystem—not just advising from the sidelines.",
        items: {
          aiSummitSpeaking: {
            label: "Speaking",
            caption: "Speaking on AI Automation & Intelligent Agents",
          },
          aiSummitAudience: {
            label: "AI Summit",
            caption: "Audience at the AI Automation session",
          },
          cursorMeetupVenue: {
            label: "Cursor Meetup",
            caption: "With the Cursor developer community",
          },
          cursorMeetupBuild: {
            label: "Cursor Meetup",
            caption: "Hands-on build session with fellow developers",
          },
          cursorMeetupSession: {
            label: "Cursor Meetup",
            caption: "Coding together at a Cursor community session",
          },
          brewBuildTdp: {
            label: "Brew & Build",
            caption: "Brew & Build #1 — True Digital Park, Bangkok",
          },
          brewBuildEmsphere: {
            label: "Brew & Build",
            caption: "Brew & Build — EmSphere, Bangkok (May 2024)",
          },
          startupSession: {
            label: "Startup Ecosystem",
            caption: "Startup program session — April 2024",
          },
        },
      },
    },
    contact: {
      letsTalk: "Let's",
      letsTalkLine2: "Partner",
      whatsappButton: "Chat on WhatsApp",
      whatsappScan: "Scan QR",
      whatsappTitle: "Connect on WhatsApp",
      whatsappDescription: "Scan the QR code to chat directly with our team.",
      description: "If you're looking to build a serious product, implement AI in real operations, or explore a partnership, we welcome structured discussions.",
      companyName: "Guidance Innovation Co., Ltd.",
      location: "Thailand",
      emailLabel: "Email:",
      websiteLabel: "Website:",
      contactReasonsLabel: "You may contact us for",
      contactReasons: ["Product partnerships", "AI automation", "Technical consulting", "Long-term collaboration"],
      formLabel: "Send us a message",
      formHeading: "Start a Conversation",
      nameLabel: "Name *",
      namePlaceholder: "Your name",
      emailFieldLabel: "Email *",
      emailPlaceholder: "your@email.com",
      companyLabel: "Company",
      companyPlaceholder: "Your company (optional)",
      messageLabel: "Message *",
      messagePlaceholder: "Tell us about your project or how we can help...",
      sendButton: "Send Message",
      sendingButton: "Sending...",
      successMessage: "Message sent successfully!",
      successDescription: "We'll get back to you within 1-2 business days.",
      errorMessage: "Submission Failed",
      errorDescription: "There was an error submitting your message. Please try again or email us directly at info@guidanceinnovations.tech",
      footerNote: "This company is built with the mindset of a product builder, not an agency. We focus on long-term product thinking rather than short-term experimentation.",
      validation: {
        nameRequired: "Name is required",
        nameMax: "Name must be less than 100 characters",
        emailInvalid: "Please enter a valid email",
        emailMax: "Email must be less than 255 characters",
        companyMax: "Company name must be less than 100 characters",
        messageMin: "Message must be at least 10 characters",
        messageMax: "Message must be less than 1000 characters",
      },
    },
    footer: {
      description: "Building practical AI products and automation systems for real businesses. Based in Thailand, serving global clients.",
      productsHeading: "Projects & Services",
      companyHeading: "Company",
      about: "About",
      packages: "AI Packages",
      contact: "Contact",
      copyright: "© {year} Guidance Innovation Co., Ltd. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
    voiceAgent: {
      title: "GUIDANCE AI",
      agentName: "AI Assistant",
      ready: "Ready to connect",
      connecting: "Connecting...",
      listening: "Listening...",
      speaking: "Speaking...",
      endCall: "End Call",
      poweredBy: "Powered by ElevenLabs",
      microphoneError: "Microphone access denied",
      microphoneHelp: "Please allow microphone access in your browser settings to use voice chat.",
    },
    projects: {
      categories: {
        Product: "Product",
        Service: "Service",
        Function: "Function",
        "Internal Tool": "Internal Tool",
      },
      statuses: {
        Live: "Live",
        Beta: "Beta",
        Development: "Development",
        Concept: "Concept",
      },
      ui: {
        aboutProject: "About the Project",
        keyFeatures: "Key Features",
        viewLiveProduct: "View Live Product",
        chatWhatsApp: "Chat on WhatsApp",
        projectStatus: "Project Status",
      },
      guidancestream: {
        shortDescription: "Flagship AI Platform: Enterprise-grade AI orchestration and customer intelligence platform.",
        fullDescription: `Enterprise-grade AI orchestration and customer intelligence platform built from real business needs.

GuidanceStream is our proprietary SaaS platform designed to help small businesses and online sellers automate, structure, and elevate customer communication using AI that understands their products, policies, data, and brand voice.

### The Problem We Address
Through founder experience and direct qualitative research with online sellers, we identified recurring pain points:
- High volumes of repetitive customer questions handled manually
- No unified system across email, marketplaces, social DMs
- Many platforms lack usable APIs, forcing inefficient workflows
- No visibility into customer history or recurring issues

### What We Built (Real System, Not a Concept)
GuidanceStream is a fully implemented working prototype demonstrating production-level architecture:
- **RAG Architecture**: Responses grounded in real business data (not hallucinations)
- **Browser Overlay**: Works where users work (dashboards, email)
- **Human-in-the-loop**: AI drafts, humans review and send
- **Mini-CRM**: Tracks customer history and sentiment

### Implemented Product Features
- **Onboarding System**: Auto-ingest orders, products, and FAQs
- **Brand Control**: Define tone, personality, and constraints
- **Multi-Channel**: Browser extension, website chat, email connectors
- **Analytics**: Sentiment tracking, issue categorization, volume heatmaps

### Commercial Readiness
- Free tier, Pro ($19/mo), and Business ($49/mo) plans defined
- Target LTV:CAC ≈ 5:1
- Roadmap extends to 2027 for global expansion

GuidanceStream proves we can translate business operations into scalable AI systems.`,
        features: [
          "RAG-powered Responses",
          "Browser Overlay Integration",
          "Human-in-the-loop Workflow",
          "Customer Sentiment Analytics",
          "Multi-channel Support"
        ]
      },
      carerouters: {
        shortDescription: "Healthcare logistics platform optimizing patient transportation and care delivery.",
        fullDescription: `**CareRouters** connects healthcare providers with specialized transportation services. It simplifies the complex logistics of non-emergency medical transportation (NEMT), ensuring patients get to their appointments on time while optimizing fleet efficiency for providers.

### The Problem
Patients and healthcare providers struggle with reliable transportation coordination.
- **Patients**: Missed appointments due to unreliable transport.
- **Providers**: Inefficient routing and lack of real-time visibility.
- **Fleets**: Manual dispatching and underutilized capacity.

### Our Solution
A centralized platform that streamlines the booking, dispatching, and tracking of medical transport.
- **For Patients/Caregivers**: Easy booking and real-time tracking.
- **For Providers**: Dashboard to manage transport requests and view status.
- **For Fleets**: Optimized routing and digital dispatching.

### Key Benefits
- **Reduced Missed Appointments**: Reliable transport ensures patients arrive on time.
- **Operational Efficiency**: Automated dispatch reduces manual work.
- **Better Patient Experience**: Transparent tracking and updates.`,
        features: [
          "Real-time Booking & Tracking",
          "Automated Dispatching",
          "Provider Dashboard",
          "Patient Mobile App",
          "HIPAA Compliant Security"
        ]
      },
      packpilot: {
        shortDescription: "Internal shipping & packaging estimation module with AI agent automation and real-time ops alerts.",
        fullDescription: `PackPilot is an internal operations module built for online sellers and fulfillment teams to **standardize packaging data collection** and **automate shipping cost estimation** end-to-end.

### How It Works
The workflow starts with a simple 3-step interface:
1. **Lookup** by tracking number (or internal order reference)
2. **Confirm package dimensions & weight** (L / W / H / kg) and optional shipping cost inputs
3. **Submit** to generate a structured shipping result and recommended dispatch channel

Once submitted, an **n8n automation** triggers an AI agent to validate inputs, apply business rules (volumetric weight, country routing, channel selection), and log results to Google Sheets for auditing and cost tracking. Critical outcomes are pushed instantly to Telegram, creating an **ops-grade notification loop** that reaches both iPhone and Apple Watch.

### Why We Built It
Manual packaging estimation is a common bottleneck:
- Inconsistent L/W/H inputs across staff
- Missed volumetric weight rules leading to unexpected carrier fees
- Slow back-and-forth between packaging and shipping teams
- No reliable audit trail for cost + profit decisions

PackPilot turns this into a **repeatable, trackable, automation-first workflow**—designed for high-frequency operational use.

### Outcome
PackPilot reduces packaging-to-shipping handoff friction and gives the team:
- **Consistency** (same inputs, same rules, same outputs)
- **Speed** (submit → estimate → log → alert)
- **Accountability** (sheet-based traceability)
- **Scalability** (add channels/rules without changing the UI)`,
        features: [
          "3-Step Packaging Interface",
          "AI Agent-Assisted Estimation",
          "n8n Orchestration Pipeline",
          "Telegram Ops Alerts",
          "Google Sheets Integration"
        ]
      },
      fixmytext: {
        shortDescription: "AI message rewriter for non-native English speakers—paste any text and get a clearer, more natural version.",
        fullDescription: `FixMyText is a one-page AI message rewriter designed for non-native English speakers. It helps improve grammar, clarity, and naturalness while preserving the original meaning.

### What It Does
Users paste their original message and click Rewrite. The AI returns a polished version that:
- Fixes grammar and improves wording
- Sounds more natural (closer to native English)
- Preserves the user’s original intent and meaning

### Key Features
- **Customizable Tone**: Choose from Neutral, Casual, Professional, Formal, and more.
- **Length Control**: Make messages shorter, longer, or keep the same length.
- **Translation**: Optional translation to 6 major languages.
- **History**: Save and review past rewrites (persistent for registered users).

Built with React, Supabase, and DeepSeek V3.`,
        features: [
          "AI Rewriting",
          "Tone & Length Adjustment",
          "Multi-language Support",
          "History Tracking",
          "Guest & User Modes"
        ]
      },
      "api-gateway": {
        shortDescription: "Single entry point for all Guidance Innovation services and data streams.",
        fullDescription: "A scalable API gateway that handles authentication, rate limiting, and routing for all our microservices. It simplifies client integration and enhances security across our entire platform.",
        features: [
          "JWT Authentication",
          "Rate Limiting",
          "Service Discovery"
        ]
      }
    },
  },
  th: {
    header: {
      services: "บริการ",
      products: "ผลิตภัณฑ์",
      packages: "แพ็กเกจ",
      about: "เกี่ยวกับเรา",
      contact: "ติดต่อ",
      getInTouch: "ติดต่อเรา",
    },
    appHome: {
      projectsTitle: "โครงการและบริการ",
      projectsSubtitle: "สำรวจระบบนิเวศนวัตกรรมของเรา",
    },
    package: {
      meta: {
        title: "แพ็กเกจผู้ช่วย AI | บริษัท ไกดแดนซ์ อินโนเวชั่น จำกัด",
        description: "ผู้ช่วยแชท AI แบบดูแลให้ครบวงจรสำหรับธุรกิจไทย เดโมส่วนตัวฟรี แพ็กเกจ 3 ระดับเริ่มต้น ฿3,500/เดือน และบริการเสริมตามต้องการ ตอบคำถาม เก็บข้อมูลลูกค้า และรับนัดหมายตลอด 24 ชั่วโมง",
      },
      hero: {
        label: "แพ็กเกจผู้ช่วย AI",
        headline: "ผู้ช่วย AI ที่ช่วยหาลูกค้าและรับนัดหมายให้คุณ",
        description: "ผู้ช่วยที่เรียนรู้ข้อมูลธุรกิจของคุณ พูดคุยกับผู้เข้าชมเว็บไซต์ ตอบคำถามที่ลูกค้าถามจริง และเปลี่ยนบทสนทนาให้เป็นลูกค้าหรือการนัดหมาย",
        primaryCta: "เริ่มส่งคำขอ",
        secondaryCta: "ดูเดโมฟรี",
      },
      whatItDoes: {
        label: "ทำอะไรได้",
        heading: "ผู้ช่วยตัวจริงสำหรับเว็บไซต์ของคุณ",
        items: [
          "ตอบคำถามเกี่ยวกับบริการ เวลาทำการ ราคา และเงื่อนไขของคุณ",
          "เก็บชื่อ ช่องทางติดต่อ และความต้องการจากทุกบทสนทนาจริง",
          "รับนัดหมายและส่งรายละเอียดถึงคุณโดยตรง",
          "ระบบฐานความรู้ที่เราสร้างและอัปเดตให้ตามการเปลี่ยนแปลงของธุรกิจ",
          "ส่งข้อมูลลูกค้าเข้าอีเมล WhatsApp หรือ LINE ของคุณอัตโนมัติ",
          "ทำงานให้คุณตลอด 24 ชั่วโมง ทุกวัน",
        ],
      },
      howItWorks: {
        label: "ขั้นตอนการทำงาน",
        heading: "จากเดโมฟรีสู่ผู้ช่วยที่ใช้งานจริง",
        steps: [
          {
            title: "เดโมฟรี",
            description: "เราสร้างผู้ช่วยที่ใช้งานได้จริงจากข้อมูลธุรกิจที่เผยแพร่สาธารณะ ให้คุณทดลองก่อนจ่ายเงิน",
          },
          {
            title: "เลือกแพ็กเกจ",
            description: "เลือกระดับที่เหมาะกับคุณ แจ้งเว็บไซต์ เบอร์ติดต่อ และ LINE เพื่อรับใบเสนอราคาที่แม่นยำ",
          },
          {
            title: "เราสร้างและเชื่อมต่อ",
            description: "ตั้งค่าและทดสอบฐานความรู้ ดีไซน์วิดเจ็ต ช่องทางการติดต่อ และขั้นตอนการจองบนเว็บไซต์ของคุณ",
          },
          {
            title: "เราดูแลต่อไปพร้อมคุณ",
            description: "ติดตามระบบ อัปเดตฐานความรู้ รายงานผล และซัพพอร์ตทุกเดือน — ไม่ใช่ส่งมอบครั้งเดียวแล้วจบ",
          },
        ],
      },
      demo: {
        label: "เดโมส่วนตัวฟรี",
        heading: "ทดลองผู้ช่วย AI ที่สร้างจากข้อมูลธุรกิจคุณจริง ก่อนตัดสินใจซื้อ",
        paragraph1: "เราสร้างเดโมจากข้อมูลธุรกิจที่เผยแพร่สาธารณะ ได้แก่ บริการ สาขา เวลาทำการ ราคา ช่องทางติดต่อ และคำถามที่พบบ่อย",
        paragraph2: "คุณได้ทดลองใช้ผู้ช่วย AI ที่ทำงานได้จริงบนเว็บไซต์เวอร์ชันเดโมก่อนซื้อ โดยเดโมแยกออกจากบริการที่คิดค่าใช้จ่ายอย่างชัดเจน",
        importantLabel: "สำคัญ:",
        importantText: "เดโมยังไม่ได้เชื่อมต่อกับเว็บไซต์ธุรกิจตัวจริงหรือระบบภายในของคุณ",
        cta: "ขอเดโมฟรี",
        scrollHint: "เลื่อนต่อเพื่อดูบทสนทนา",
        widget: {
          business: "ธุรกิจของคุณ",
          tagline: "พร้อมช่วยเหลือเสมอ",
          botGreeting: "สวัสดีครับ! ผมช่วยเรื่องบริการ เวลาทำการ ราคา และการจองได้ ต้องการทราบเรื่องอะไรครับ",
          userQuestion: "เสาร์-อาทิตย์รับนัดไหม",
          botAnswer: "รับครับ เราเปิดวันเสาร์และอาทิตย์ เวลา 10:00–18:00 ให้ผมจองคิวให้เลยไหมครับ",
          inputPlaceholder: "พิมพ์คำถามของคุณ...",
        },
      },
      packages: {
        label: "แพ็กเกจบริการแบบดูแลให้",
        heading: "เลือกระดับที่เหมาะกับธุรกิจของคุณ",
        description: "ทุกแพ็กเกจเป็นบริการรายเดือนแบบดูแลให้ ราคาเริ่มต้นตามด้านล่าง — เราจะส่งใบเสนอราคาที่แม่นยำหลังตรวจสอบข้อมูลธุรกิจของคุณ",
        recommended: "แนะนำ",
        excludesPrefix: "ไม่รวม:",
        cta: "เลือกแพ็กเกจนี้",
        bestForLabel: "เหมาะสำหรับ",
        website: {
          name: "ผู้ช่วย AI สำหรับเว็บไซต์",
          price: "เริ่มต้น ฿3,500/เดือน",
          term: "ขั้นต่ำ 6 เดือน",
          bestFor:
            "ธุรกิจที่ต้องการผู้ช่วยบนเว็บไซต์ตลอด 24 ชั่วโมง เพื่อตอบคำถามลูกค้าจากข้อมูลสาธารณะบนเว็บไซต์ของคุณ",
          features: [
            "ติดตั้งบนเว็บไซต์ที่มีอยู่ 1 เว็บไซต์",
            "ฐานความรู้จากข้อมูลธุรกิจที่เผยแพร่สาธารณะ",
            "แชท AI มาตรฐาน ปรับโลโก้และข้อความต้อนรับ เลือกสีอินเทอร์เฟซ 1 สี",
            "ลิงก์ติดต่อและลิงก์จอง",
            "ดูแลโฮสติ้ง ติดตามระบบ อัปเดตย่อย และบำรุงรักษาทางเทคนิค",
            "รวมโควตาการใช้งาน AI",
            "เลย์เอาต์วิดเจ็ตแบบมาตรฐาน",
          ],
          exclusions: [
            "เอกสารภายในองค์กร",
            "การออกแบบอินเทอร์เฟซเฉพาะ",
            "การเชื่อมต่อช่องทางโซเชียล",
            "การคัดกรองคุณภาพลูกค้า",
            "ระบบจองอัตโนมัติ",
          ],
        },
        business: {
          name: "ผู้ช่วย AI สำหรับธุรกิจ",
          price: "เริ่มต้น ฿6,500/เดือน",
          term: "ขั้นต่ำ 6 เดือน",
          bestFor:
            "ธุรกิจบริการ เช่น สปา คลินิก ร้านเสริมสวย และธุรกิจขนาดเล็กที่ต้องการฐานความรู้ภายในและการเก็บลีดอย่างมั่นคง",
          features: [
            "ทุกอย่างในแพ็กเกจผู้ช่วย AI สำหรับเว็บไซต์",
            "ฐานความรู้ภายในจากเอกสารที่เจ้าของธุรกิจให้",
            "โฟลเดอร์ Google Drive เฉพาะสำหรับเอกสารที่อนุมัติแล้ว",
            "ออกแบบวิดเจ็ตตามแบรนด์ของคุณ",
            "บันทึกบทสนทนากับลูกค้าส่งเข้า Google Sheet ที่แชร์ร่วมกัน",
            "เก็บข้อมูลลูกค้าเบื้องต้น จัดหมวดหมู่บทสนทนา และคำแนะนำการส่งต่อให้พนักงาน",
            "รายงานคำถามของลูกค้ารายเดือน",
            "เชื่อมต่อ 1 ช่องทางมาตรฐาน (LINE OA หรืออีเมล)",
            "เพิ่มช่องทางอื่นได้ตามต้องการ",
          ],
        },
        sales: {
          name: "ผู้ช่วย AI ด้านการขายและการจอง",
          price: "เริ่มต้น ฿11,900/เดือน",
          term: "ขั้นต่ำ 12 เดือน",
          bestFor:
            "ทีมที่พร้อมเปลี่ยนบทสนทนาเป็นการจองจริง ด้วยระบบปฏิทิน การคัดกรองลูกค้าอย่างเป็นระบบ และการติดตามการขายที่ชัดเจนขึ้น",
          features: [
            "ทุกอย่างในแพ็กเกจผู้ช่วย AI สำหรับธุรกิจ",
            "เก็บและคัดกรองข้อมูลลูกค้าอย่างเป็นระบบ ตรวจสอบข้อมูลติดต่อ ระบุบริการที่ลูกค้าสนใจ และจัดหมวดหมู่ลูกค้า",
            "เชื่อมต่อระบบจอง/ปฏิทิน รับคำขอนัดหมาย แจ้งเตือนภายใน และเตือนนัดหมาย",
            "สรุปบทสนทนา แดชบอร์ดจัดการลูกค้า รายงานอัตราการปิดการขาย และการส่งต่อให้พนักงาน",
          ],
          note: "การเชื่อมต่อ CRM เฉพาะทาง AI รับสายโทรศัพท์ SMS ระบบเสียง การติดตามลูกค้าเชิงรุก และระบบหลายช่องทางที่ซับซ้อน ต้องเสนอราคาแยก",
        },
        enterprise: {
          label: "องค์กรขนาดใหญ่",
          title: "Custom Enterprise AI",
          description:
            "ออกแบบสำหรับองค์กรที่ต้องการโครงสร้างพื้นฐานเฉพาะ—โมเดล AI ฐานข้อมูล และเซิร์ฟเวอร์แยก—พร้อมเวิร์กโฟลว์ตามความต้องการ การควบคุมความปลอดภัยที่เข้มขึ้น และการสนับสนุนแบบลำดับความสำคัญ เราออกแบบสถาปัตยกรรมร่วมกับคุณ และเสนอราคาแบบกำหนดเองหลังตรวจสอบความต้องการอย่างละเอียด",
          cta: "พูดคุยแพ็กเกจองค์กร",
        },
      },
      noWebsite: {
        label: "ยังไม่มีเว็บไซต์?",
        heading: "เราสร้างเว็บไซต์พร้อมผู้ช่วย AI ให้ในคราวเดียว",
        optionA: {
          label: "ตัวเลือก A",
          title: "สร้างเว็บไซต์ + แพ็กเกจ AI",
          price: "เริ่มต้น ฿15,000",
          note: "ค่าสร้างเว็บไซต์ครั้งเดียว + แพ็กเกจ AI ที่เลือก",
          cta: "ขอสร้างเว็บไซต์",
        },
        optionB: {
          badge: "แพ็กเกจรวม",
          label: "ตัวเลือก B",
          title: "แพ็กเกจรวมเว็บไซต์ + ผู้ช่วย AI",
          price: "เริ่มต้น ฿5,500/เดือน",
          note: "ขั้นต่ำ 12 เดือน ไม่มีค่าสร้างเว็บไซต์ล่วงหน้า",
          features: [
            "สูงสุด 5 หน้า",
            "ดีไซน์รองรับทุกหน้าจอ",
            "SEO พื้นฐาน ข้อมูลธุรกิจ ปุ่มติดต่อ และ Google Maps",
            "โฮสติ้ง การดูแลย่อย และผู้ช่วย AI สำหรับเว็บไซต์",
          ],
          cta: "ขอแพ็กเกจรวม",
        },
      },
      addOns: {
        label: "บริการเสริมตามต้องการ",
        heading: "ขยายความสามารถของผู้ช่วยเมื่อธุรกิจโตขึ้น",
        note: "ราคาบริการเสริมขึ้นอยู่กับขอบเขตงาน ติดต่อเราเพื่อรับใบเสนอราคาที่เหมาะกับคุณ",
        items: [
          { label: "เพิ่มช่องทางการติดต่อ", detail: "LINE, WhatsApp, Instagram, Messenger, อีเมล" },
          { label: "เพิ่มภาษา", detail: "ปรับผู้ช่วยให้รองรับตลาดอื่น" },
          { label: "เพิ่มสาขา", detail: "ฐานความรู้และการส่งต่อแบบหลายสาขา" },
          { label: "ขยายฐานความรู้ภายใน", detail: "เอกสารมากขึ้น รายละเอียดลึกขึ้น" },
          { label: "ระบบจอง", detail: "เชื่อมต่อปฏิทินและจัดตารางนัดหมาย" },
          { label: "เชื่อมต่อ CRM", detail: "เชื่อมกับระบบการขายที่คุณใช้อยู่" },
          { label: "ผู้ช่วยเสียงบนเว็บ", detail: "ผู้ช่วยที่คุยด้วยเสียงบนเว็บไซต์ของคุณ" },
          { label: "AI รับสายโทรศัพท์", detail: "AI รับสายลูกค้าที่โทรเข้า" },
          { label: "SMS", detail: "รองรับ SMS ทั้งส่งออกและรับเข้า" },
          { label: "ติดตามลูกค้าเชิงรุก", detail: "ลำดับการติดตามลูกค้าอัตโนมัติ" },
          { label: "การวิเคราะห์ขั้นสูง", detail: "เจาะลึกบทสนทนาและอัตราการปิดการขาย" },
          { label: "โอนซอร์สโค้ด / ย้ายไปโฮสต์เอง", detail: "เป็นเจ้าของระบบและโครงสร้างพื้นฐานเอง" },
        ],
      },
      subscription: {
        label: "บริการ AI แบบดูแลให้รายเดือน",
        heading: "ค่าบริการรายเดือนครอบคลุมอะไร",
        description: "ทุกแพ็กเกจคือบริการ AI แบบดูแลให้รายเดือน — ไม่ใช่เพียงค่าบำรุงรักษา เราดูแลระบบ AI ให้คุณ เพื่อให้คุณมีเวลาโฟกัสที่ลูกค้า",
        items: [
          "สิทธิ์การใช้งานระบบ AI",
          "โฮสติ้งและโครงสร้างพื้นฐาน",
          "การใช้งานภายในโควตาของแพ็กเกจ",
          "การติดตามระบบและอัปเดตความปลอดภัย",
          "การสำรองข้อมูลและแก้ไขข้อผิดพลาด",
          "การอัปเดตฐานความรู้",
          "การรายงานผล",
          "การดูแลการเชื่อมต่อระบบ",
          "การซัพพอร์ตทางเทคนิค",
        ],
        disclaimerLabel: "ราคาเริ่มต้น",
        disclaimerText: "คือราคาที่แสดงต่อสาธารณะ ราคาสุดท้ายขึ้นอยู่กับปริมาณบทสนทนา ขนาดฐานความรู้ ช่องทางการติดต่อ ระบบการจอง และการเชื่อมต่อที่ต้องการ",
      },
      quote: {
        text: "เรารวมกลยุทธ์ธุรกิจ การออกแบบสมัยใหม่ และการพัฒนาด้วย AI เพื่อช่วยให้ธุรกิจขนาดเล็กเริ่มต้นได้เร็วขึ้นและดูเป็นมืออาชีพมากขึ้นบนโลกออนไลน์ เราไม่ได้มาขายเว็บไซต์แล้วหายไป — เราดูแลมันไปพร้อมกับคุณ",
        author: "— Te ผู้ก่อตั้งและผู้สร้างหลัก",
      },
      wizardIntro: {
        label: "เริ่มต้นใช้งาน",
        heading: "ขอใบเสนอราคา",
        description: "เลือกแพ็กเกจ แล้วแจ้งเว็บไซต์ เบอร์ติดต่อ และ LINE ของคุณ เราจะตรวจสอบข้อมูลธุรกิจและตอบกลับภายใน 1–2 วันทำการ",
      },
      wizard: {
        steps: ["แพ็กเกจ", "ข้อมูลของคุณ", "ตรวจสอบ", "เสร็จสิ้น"],
        optional: "(ไม่จำเป็น)",
        empty: "—",
        step1: {
          heading: "เลือกแพ็กเกจของคุณ",
          description: "เลือกระดับที่เหมาะกับคุณ เปลี่ยนได้ภายหลัง — ยังไม่มีการเรียกเก็บเงินตอนนี้",
          packageLabel: "แพ็กเกจหรือเดโมฟรี",
          websiteLabel: "คุณมีเว็บไซต์อยู่แล้วหรือไม่",
          addOnsLabel: "ต้องการบริการเสริมอะไรเพิ่ม",
          addOnsHint: "เลือกสิ่งที่คุณสนใจ เราเสนอราคาตามขอบเขตงาน — ยังไม่ผูกมัด",
          continueLocked: "กรุณาทำขั้นตอนนี้ให้ครบก่อนไปต่อ",
        },
        packages: {
          demo: {
            label: "เดโม AI ส่วนตัวฟรี",
            price: "ฟรี",
            explanation:
              "เราสร้างผู้ช่วย AI สำหรับลูกค้าแบบเดโมไว้บนหน้าแรกเว็บไซต์ปัจจุบันของคุณ ใช้ลิงก์ที่เราส่งให้ แล้วทดลองได้เลยบนเว็บไซต์เดิมของคุณ",
          },
          website: { label: "ผู้ช่วย AI สำหรับเว็บไซต์", price: "เริ่มต้น ฿3,500/เดือน" },
          business: { label: "ผู้ช่วย AI สำหรับธุรกิจ", price: "เริ่มต้น ฿6,500/เดือน" },
          sales: { label: "ผู้ช่วย AI ด้านการขายและการจอง", price: "เริ่มต้น ฿11,900/เดือน" },
        },
        websiteStatuses: {
          have: "มีเว็บไซต์อยู่แล้ว",
          need: "ต้องการให้สร้างเว็บไซต์",
          bundle: "ต้องการแพ็กเกจรวมเว็บไซต์ + AI",
        },
        addOnCategories: [
          {
            label: "ช่องทางและการเข้าถึง",
            options: [
              "เพิ่มช่องทาง LINE / WhatsApp / Instagram / Messenger / อีเมล",
              "เพิ่มภาษา",
              "เพิ่มสาขา",
            ],
          },
          {
            label: "ฐานความรู้และการเชื่อมต่อ",
            options: [
              "ขยายฐานความรู้ภายใน",
              "เชื่อมต่อระบบจอง / ปฏิทิน",
              "เชื่อมต่อ CRM",
            ],
          },
          {
            label: "ความสามารถขั้นสูง",
            options: [
              "ผู้ช่วยเสียงบนเว็บ",
              "AI รับสายโทรศัพท์",
              "SMS",
              "ติดตามลูกค้าเชิงรุก",
              "การวิเคราะห์ขั้นสูง",
              "โอนซอร์สโค้ด / ย้ายไปโฮสต์เอง",
            ],
          },
        ],
        step2: {
          heading: "ให้เราส่งใบเสนอราคาไปที่ไหน",
          description: "เราจะตรวจสอบข้อมูลธุรกิจของคุณและส่งใบเสนอราคาที่แม่นยำให้",
          descriptionWithPlan: "เราจะตรวจสอบข้อมูลธุรกิจของคุณและส่งใบเสนอราคาที่แม่นยำสำหรับ {plan}",
          nameLabel: "ชื่อของคุณ",
          namePlaceholder: "ชื่อของคุณ",
          businessLabel: "ชื่อธุรกิจ",
          businessPlaceholder: "ธุรกิจของคุณ",
          websiteLabel: "เว็บไซต์ของคุณ",
          websitePlaceholder: "www.yourbusiness.com หรือเพจ Facebook / Google Maps ของคุณ",
          websiteHint: "ข้อมูลนี้ช่วยให้เราตรวจสอบบริการและราคาของคุณ เพื่อเสนอราคาได้แม่นยำ",
          phoneLabel: "เบอร์ติดต่อ",
          phonePlaceholder: "+66 ...",
          lineLabel: "LINE ID",
          linePlaceholder: "@yourbusiness",
          emailLabel: "อีเมล",
          emailPlaceholder: "you@business.com",
          contactMethodLabel: "ให้เราติดต่อคุณทางไหน",
          contactMethods: ["LINE", "โทรศัพท์", "อีเมล", "WhatsApp"],
          messageLabel: "มีอะไรอยากบอกเราเพิ่มเติมไหม",
          messagePlaceholder: "เป้าหมายของคุณ ระบบที่ใช้อยู่ คำถามที่ลูกค้าถามบ่อยที่สุด...",
        },
        step3: {
          heading: "ตรวจสอบคำขอของคุณ",
          description: "กรุณายืนยันก่อนส่ง เราจะตอบกลับพร้อมใบเสนอราคาที่แม่นยำภายใน 1–2 วันทำการ",
          planSection: "แพ็กเกจ",
          packageLabel: "แพ็กเกจ",
          websiteStatusLabel: "สถานะเว็บไซต์",
          addOnsLabel: "บริการเสริม",
          contactSection: "ข้อมูลติดต่อ",
          nameLabel: "ชื่อ",
          businessLabel: "ธุรกิจ",
          websiteLabel: "เว็บไซต์",
          phoneLabel: "เบอร์โทร",
          lineLabel: "LINE ID",
          emailLabel: "อีเมล",
          preferredLabel: "ช่องทางที่สะดวก",
          notesLabel: "หมายเหตุ",
          consent: "ข้าพเจ้ายืนยันว่าข้อมูลติดต่อถูกต้อง และยินยอมให้ Guidance Innovation ติดต่อกลับเกี่ยวกับคำขอนี้",
        },
        step4: {
          thankYou: "ขอบคุณครับ!",
          received: "ได้รับคำขอแล้ว",
          body: "เราได้รับข้อมูลของคุณแล้ว และจะตรวจสอบข้อมูลธุรกิจของคุณ คาดว่าจะส่งใบเสนอราคาที่แม่นยำให้ภายใน 1–2 วันทำการ",
          viaContact: "เราจะติดต่อกลับทาง {method}",
          resubmit: "ส่งคำขอใหม่อีกครั้ง",
        },
        nav: {
          back: "ย้อนกลับ",
          continue: "ถัดไป",
          review: "ตรวจสอบคำขอ",
          send: "ส่งคำขอ",
          sending: "กำลังส่ง...",
        },
        errors: {
          package: "กรุณาเลือกแพ็กเกจหรือเดโม",
          websiteStatus: "กรุณาเลือกสถานะเว็บไซต์ของคุณ",
          name: "กรุณากรอกชื่อ",
          businessName: "กรุณากรอกชื่อธุรกิจ",
          phone: "กรุณากรอกเบอร์ติดต่อ",
          emailRequired: "กรุณากรอกอีเมล",
          emailInvalid: "กรุณาใส่อีเมลที่ถูกต้อง",
          websiteUrl: "กรุณาแจ้งเว็บไซต์ของคุณ เพื่อให้เราเสนอราคาได้แม่นยำ",
          consent: "กรุณายืนยันข้อมูลติดต่อของคุณ",
          submit: "ไม่สามารถบันทึกคำขอได้ กรุณาลองอีกครั้ง หรืออีเมลถึง hello@guidanceinnovations.tech",
        },
      },
    },
    hero: {
      company: "บริษัท ไกดแดนซ์ อินโนเวชั่น จำกัด",
      headline: "สร้าง AI ที่ใช้งานได้จริง",
      subheadline: "สำหรับธุรกิจจริง",
      description: "เราออกแบบและพัฒนาผลิตภัณฑ์ SaaS ที่ขับเคลื่อนด้วย AI ระบบอัตโนมัติอัจฉริยะ และซอฟต์แวร์ที่แก้ปัญหาการดำเนินงานจริง",
      tagline: "// ไม่มีโฆษณาเกินจริง แค่ระบบที่ใช้งานได้",
      contactUs: "คุยกับเรา",
      viewProducts: "กรณีศึกษา",
      productsLabel: "ผลิตภัณฑ์",
      productsValue: "GuidanceStream • CareRouters",
      basedInLabel: "ตั้งอยู่ที่",
      basedInValue: "ประเทศไทย ให้บริการลูกค้าทั่วโลก",
    },
    welcome: {
      label: "สิ่งที่เราทำ",
      heading1: "ผลิตภัณฑ์ SaaS และ",
      heading2: "โซลูชัน AI",
      description1: "งานของเรามุ่งเน้นความชัดเจน ความน่าเชื่อถือ และความสามารถในการขยายระยะยาว เราสร้างผลิตภัณฑ์ SaaS ที่ขับเคลื่อนด้วย AI ระบบอัตโนมัติอัจฉริยะ และซอฟต์แวร์ที่แก้ปัญหาการดำเนินงานจริงสำหรับธุรกิจบริการและสินค้า",
      description2: "แต่ละโซลูชันถูกออกแบบสำหรับการใช้งานจริงและปรับแต่งให้เหมาะกับธุรกิจ ไม่ใช่สร้างจากเทมเพลตทั่วไป",
      saasTitle: "ผลิตภัณฑ์ SaaS",
      saasDescription: "ผลิตภัณฑ์ AI พร้อมใช้งานจริง: GuidanceStream สำหรับบริการลูกค้า, CareRouters สำหรับโลจิสติกส์ด้านสุขภาพ",
      automationTitle: "ระบบอัตโนมัติ AI",
      automationDescription: "ระบบ AI และอัตโนมัติที่ปรับแต่งสำหรับธุรกิจที่ต้องการปรับปรุงการดำเนินงานที่วัดผลได้ การทำงานอัตโนมัติ การประมวลผลเอกสารอัจฉริยะ และการเชื่อมต่อระบบ",
      devTitle: "พัฒนา Full-Stack",
      devDescription: "การพัฒนาผลิตภัณฑ์ตั้งแต่ต้นจนจบสำหรับ Startup และธุรกิจที่กำลังเติบโต ตั้งแต่ MVP ไปจนถึงระบบที่พร้อมใช้งานจริง",
    },
    features: {
      heading: "โซลูชันอัตโนมัติ",
      headingHighlight: "AI",
      subheading: "เพื่อปรับปรุงการดำเนินงานที่วัดผลได้",
      description: "เราออกแบบและติดตั้งระบบ AI และอัตโนมัติที่ปรับแต่งสำหรับธุรกิจ การเพิ่มประสิทธิภาพกระบวนการเพื่อความเร็ว ความแม่นยำ และประสิทธิภาพด้านต้นทุน",
      aiAgents: "AI Agents",
      aiAgentsDesc: "ตัวแทน AI สำหรับการสนับสนุนลูกค้าและการดำเนินงานภายในที่ตอบสนองตามบริบทและสอดคล้องกับเสียงแบรนด์ของคุณ",
      workflow: "ระบบอัตโนมัติ Workflow",
      workflowDesc: "ระบบอัตโนมัติที่ใช้ API, webhooks และเครื่องมือจัดการ เชื่อมต่อแหล่งข้อมูล ชั้นลอจิก และเอาต์พุต",
      integration: "การเชื่อมต่อระบบ",
      integrationDesc: "การเชื่อมต่อ CRM, ERP และแพลตฟอร์ม ระบบฐานความรู้โดยใช้ข้อมูลแบบโครงสร้างและ vector search",
      alsoIncludes: "รวมถึง",
      docProcessing: "การประมวลผลเอกสารอัจฉริยะ",
      dataPipelines: "Data pipelines",
      vectorSearch: "Vector search",
      apiDesign: "การออกแบบ API",
    },
    products: {
      ourProducts: "ผลิตภัณฑ์ของเรา",
      healthcarePlatform: "แพลตฟอร์มสุขภาพ",
      privateBeta: "MVP",
      mvpStage: "Development",
      guidancestream: {
        name: "Guidance",
        nameBold: "Stream",
        subtitle: "ตัวแทนบริการลูกค้า AI",
        problemLabel: "ปัญหาที่แก้ไข",
        description: "ธุรกิจสูญเสียเวลา รายได้ และชื่อเสียงเมื่อการสื่อสารกับลูกค้าช้าหรือไม่สม่ำเสมอ GuidanceStream แก้ปัญหานี้โดยทำหน้าที่เป็นชั้นบริการลูกค้าอัจฉริยะที่มีโครงสร้างข้ามช่องทางการสื่อสารของคุณ",
        problems: [
          "ปริมาณคำถามซ้ำๆ สูง",
          "การตอบของพนักงานไม่สม่ำเสมอ",
          "ความรู้กระจัดกระจายในเอกสาร",
          "ทีมสนับสนุนที่ไม่สามารถขยายได้"
        ],
        howItWorks: "วิธีการทำงาน",
        features: [
          "ฐานความรู้กลาง",
          "การตอบ AI ตามบริบท",
          "ระบบอัตโนมัติ",
          "พร้อมเชื่อมต่อ"
        ],
      },
      carerouters: {
        name: "Care",
        nameBold: "Routers",
        subtitle: "แพลตฟอร์มพาผู้สูงอายุไปโรงพยาบาล",
        description: "การนำทางในโรงพยาบาลอาจเป็นเรื่องเครียดสำหรับผู้สูงอายุและครอบครัว CareRouters ให้แพลตฟอร์มที่มีโครงสร้างสำหรับค้นหาเพื่อนร่วมทางที่น่าเชื่อถือเพื่อช่วยในการเยี่ยมโรงพยาบาล",
        elderlyUx: "UX สำหรับผู้สูงอายุ",
        elderlyUxDesc: "ออกแบบเพื่อการเข้าถึง",
        realWorkflows: "ขั้นตอนจริงในโรงพยาบาล",
        realWorkflowsDesc: "ใช้งานได้จริง",
        trustSafety: "ความน่าเชื่อถือและความปลอดภัย",
        trustSafetyDesc: "เน้นความรับผิดชอบ",
        regions: "ไทยและมาเลเซีย",
        regionsDesc: "ครอบคลุมภูมิภาค",
      },
      dashboard: {
        brand: "AetherGate",
        brandSub: "Operations",
        title: "การดำเนินงานบริการสนามบิน",
        subtitle: "คำขอด้วย AI ข้ามช่องทางขาเข้าและขาออก",
        viewBadge: "มุมมองผู้บริหาร",
        demoNote: "ข้อมูลเดโม — แบรนด์สมมติ",
        showcaseNote: "",
        channelVolume: "กิจกรรมช่องทาง",
        weeklyVolume: "คำขอรายสัปดาห์",
        vsLastWeek: "เทียบสัปดาห์ก่อน",
        resolutionTitle: "สรุปการแก้ไข",
        recentConversations: "บทสนทนาล่าสุด",
        activeLabel: "กำลังดำเนินการ",
        allConversations: "ดูทั้งหมด",
        navGroups: {
          product: "ผลิตภัณฑ์",
          workspace: "พื้นที่ทำงาน",
          admin: "ผู้ดูแลระบบ",
        },
        nav: {
          dashboard: "แดชบอร์ด",
          conversations: "บทสนทนา",
          bookings: "การจอง",
          leads: "ลูกค้าเป้าหมาย",
          kpi: "การวิเคราะห์",
          ai: "AI",
          settings: "ตั้งค่า",
          billing: "การเรียกเก็บเงิน",
        },
        kpis: {
          messages: "คำขอที่ใช้งาน",
          messagesSub: "30 วันที่ผ่านมา",
          solved: "แก้ไขแล้ว",
          solvedSub: "อัตราแก้ไข 75%",
          active: "เคสเปิด",
          activeSub: "ส่งต่อ 9 เคส",
          response: "เวลาตอบ AI เฉลี่ย",
          responseSub: "ทุกช่องทาง",
        },
        resolution: {
          ai: "แก้โดย AI",
          escalated: "ส่งต่อให้มนุษย์",
          human: "แก้โดยมนุษย์",
        },
        status: {
          done: "เสร็จสิ้น",
          active: "กำลังดำเนินการ",
        },
        assignee: {
          ai: "แก้โดย AI",
          human: "มอบหมายให้เจ้าหน้าที่",
        },
        priority: {
          normal: "ปกติ",
          high: "สูง",
        },
        table: {
          customer: "ลูกค้า",
          channel: "ช่องทาง",
          booking: "รหัสจอง",
          flight: "เที่ยวบิน",
          status: "สถานะ",
          assignee: "ผู้รับผิดชอบ",
          duration: "ระยะเวลา",
        },
      },
    },
    caseStudies: {
      label: "ตัวอย่างผลงาน",
      heading: "โซลูชันจริงสำหรับ",
      headingHighlight: "ปัญหาจริง",
      description: "ตัวอย่างวิธีที่เราช่วยธุรกิจติดตั้งระบบ AI และอัตโนมัติที่ให้ผลลัพธ์ที่วัดได้",
      aiCustomerService: {
        industry: "การดำเนินงาน E-commerce",
        title: "ระบบบริการลูกค้า AI",
        challenge: "ปริมาณคำถามซ้ำๆ สูง เวลาตอบสนองช้า น้ำเสียงไม่สม่ำเสมอจากพนักงานสนับสนุน",
        solution: "ตัวแทน AI เชื่อมต่อกับข้อมูลสินค้า นโยบาย และขั้นตอนคำสั่งซื้อด้วยการตอบตามบริบท",
        outcome: "เวลาตอบสนองเร็วขึ้น ลดภาระงานแมนนวล ปรับปรุงความสม่ำเสมอในทุกช่องทาง",
      },
      operationalAutomation: {
        industry: "ขั้นตอนธุรกิจ",
        title: "ระบบอัตโนมัติการดำเนินงาน",
        challenge: "การจัดการเอกสารแบบแมนนวล กระบวนการแยกส่วน ขั้นตอนที่มีข้อผิดพลาดทำให้เกิดความล่าช้า",
        solution: "ระบบอัตโนมัติที่เชื่อมต่อแหล่งข้อมูล ชั้นลอจิก และเอาต์พุตด้วยการกำหนดเส้นทางอัจฉริยะ",
        outcome: "ลดข้อผิดพลาดของมนุษย์ ปรับปรุงประสิทธิภาพ การดำเนินงานที่พร้อมขยายเพื่อการเติบโต",
      },
      careRoutersMvp: {
        industry: "แพลตฟอร์มสุขภาพ",
        title: "CareRouters MVP",
        challenge: "การออกแบบระบบที่ใช้งานได้รอบขั้นตอนพาไปโรงพยาบาลจริงสำหรับผู้ใช้สูงอายุ",
        solution: "การออกแบบผลิตภัณฑ์ที่ขับเคลื่อนด้วย UX ต้นแบบแอปมือถือ การตรวจสอบความถูกต้องกับผู้ใช้เป้าหมาย",
        outcome: "MVP ที่ใช้งานได้ตรงกับความต้องการผู้ใช้จริง ไม่ใช่สมมติฐาน",
      },
      challengeLabel: "ความท้าทาย",
      solutionLabel: "โซลูชัน",
      outcomeLabel: "ผลลัพธ์",
    },
    feedback: {
      heading: "ทำไมต้องทำงาน",
      headingLine2: "กับเรา?",
      description: "ลูกค้าทำงานกับเราเพราะต้องการระบบที่ทำงานได้จริงภายในการดำเนินงานจริง",
      ourTeam: "ทีมของเรา",
      builderTitle: "ผู้สร้าง ไม่ใช่ที่ปรึกษา",
      builderDesc: "นำโดยผู้ก่อตั้งที่สร้างระบบจริง ไม่ใช่แค่ให้คำปรึกษา มาตรฐานเดียวกับที่ใช้กับผลิตภัณฑ์ของเราเองถูกนำมาใช้กับงานลูกค้า",
      experienceTitle: "ประสบการณ์จริงที่ลึกซึ้ง",
      experienceDesc: "ระบบของเราได้รับข้อมูลจากประสบการณ์ดำเนินงานจริง—e-commerce หลายแพลตฟอร์ม โลจิสติกส์ ขั้นตอนสนับสนุนลูกค้า และการดำเนินงานข้ามพรมแดน",
      practicalTitle: "แนวทาง AI ที่ปฏิบัติได้",
      practicalDesc: "เราให้ความสำคัญกับความน่าเชื่อถือมากกว่าความใหม่ การบำรุงรักษาได้มากกว่าทางลัด และผลลัพธ์ที่วัดได้มากกว่าภาษาการตลาด",
      techFoundation: "พื้นฐานเทคนิค",
      skills: ["AI agents", "ระบบ RAG", "การออกแบบ API", "วิศวกรรม Full-stack", "โครงสร้างพื้นฐานที่ขยายได้"],
      team: {
        te: { name: "Reed", position: "ผู้ก่อตั้งและผู้สร้างหลัก", skills: ["AI Workflows", "สถาปัตยกรรมระบบ", "การดำเนินงาน E-commerce"] },
        alex: { name: "Denis", position: "วิศวกร Backend", skills: ["การออกแบบ API", "สถาปัตยกรรมฐานข้อมูล", "โครงสร้างพื้นฐาน Cloud"] },
        maya: { name: "Best", position: "การตลาดและการเติบโต", skills: ["กลยุทธ์เนื้อหา", "SEO และการวิเคราะห์", "การพัฒนาแบรนด์"] },
        sam: { name: "Ye", position: "นักออกแบบ UX/UI", skills: ["การวิจัยผู้ใช้", "การออกแบบอินเทอร์เฟซ", "ระบบการออกแบบ"] },
      },
      gallery: {
        eyebrow: "ในสนามจริง",
        heading: "ประสบการณ์จริง",
        description: "บรรยาย สร้าง และเครือข่ายในระบบนิเวศ AI และสตาร์ทอัพของกรุงเทพฯ—ไม่ใช่แค่ให้คำปรึกษาจากข้างสนาม",
        items: {
          aiSummitSpeaking: {
            label: "การบรรยาย",
            caption: "บรรยายเรื่อง AI Automation & Intelligent Agents",
          },
          aiSummitAudience: {
            label: "AI Summit",
            caption: "ผู้เข้าร่วมในเซสชัน AI Automation",
          },
          cursorMeetupVenue: {
            label: "Cursor Meetup",
            caption: "ร่วมกับชุมชนนักพัฒนา Cursor",
          },
          cursorMeetupBuild: {
            label: "Cursor Meetup",
            caption: "เซสชันสร้างงานจริงกับนักพัฒนาร่วมกัน",
          },
          cursorMeetupSession: {
            label: "Cursor Meetup",
            caption: "เขียนโค้ดร่วมกันในเซสชันชุมชน Cursor",
          },
          brewBuildTdp: {
            label: "Brew & Build",
            caption: "Brew & Build #1 — True Digital Park, กรุงเทพฯ",
          },
          brewBuildEmsphere: {
            label: "Brew & Build",
            caption: "Brew & Build — EmSphere, กรุงเทพฯ (พ.ค. 2024)",
          },
          startupSession: {
            label: "ระบบนิเวศสตาร์ทอัพ",
            caption: "เซสชันโปรแกรมสตาร์ทอัพ — เม.ย. 2024",
          },
        },
      },
    },
    contact: {
      letsTalk: "มา",
      letsTalkLine2: "ร่วมมือกัน",
      whatsappButton: "แชทผ่าน WhatsApp",
      whatsappScan: "สแกน QR",
      whatsappTitle: "ติดต่อทาง WhatsApp",
      whatsappDescription: "สแกน QR code เพื่อแชทกับทีมงานของเราโดยตรง",
      description: "หากคุณกำลังมองหาที่จะสร้างผลิตภัณฑ์จริงจัง ติดตั้ง AI ในการดำเนินงานจริง หรือสำรวจความร่วมมือ เรายินดีต้อนรับการสนทนาที่มีโครงสร้าง",
      companyName: "บริษัท ไกดแดนซ์ อินโนเวชั่น จำกัด",
      location: "ประเทศไทย",
      emailLabel: "อีเมล:",
      websiteLabel: "เว็บไซต์:",
      contactReasonsLabel: "คุณสามารถติดต่อเราสำหรับ",
      contactReasons: ["ความร่วมมือผลิตภัณฑ์", "ระบบอัตโนมัติ AI", "ที่ปรึกษาเทคนิค", "ความร่วมมือระยะยาว"],
      formLabel: "ส่งข้อความถึงเรา",
      formHeading: "เริ่มการสนทนา",
      nameLabel: "ชื่อ *",
      namePlaceholder: "ชื่อของคุณ",
      emailFieldLabel: "อีเมล *",
      emailPlaceholder: "your@email.com",
      companyLabel: "บริษัท",
      companyPlaceholder: "บริษัทของคุณ (ไม่จำเป็น)",
      messageLabel: "ข้อความ *",
      messagePlaceholder: "บอกเราเกี่ยวกับโปรเจกต์ของคุณหรือเราจะช่วยได้อย่างไร...",
      sendButton: "ส่งข้อความ",
      sendingButton: "กำลังส่ง...",
      successMessage: "ส่งข้อความสำเร็จ!",
      successDescription: "เราจะตอบกลับภายใน 1-2 วันทำการ",
      errorMessage: "การส่งล้มเหลว",
      errorDescription: "เกิดข้อผิดพลาดในการส่งข้อความของคุณ โปรดลองอีกครั้งหรือส่งอีเมลถึงเราโดยตรงที่ info@guidanceinnovations.tech",
      footerNote: "บริษัทนี้สร้างด้วยความคิดของผู้สร้างผลิตภัณฑ์ ไม่ใช่เอเจนซี่ เรามุ่งเน้นการคิดผลิตภัณฑ์ระยะยาวมากกว่าการทดลองระยะสั้น",
      validation: {
        nameRequired: "จำเป็นต้องระบุชื่อ",
        nameMax: "ชื่อต้องน้อยกว่า 100 ตัวอักษร",
        emailInvalid: "กรุณาใส่อีเมลที่ถูกต้อง",
        emailMax: "อีเมลต้องน้อยกว่า 255 ตัวอักษร",
        companyMax: "ชื่อบริษัทต้องน้อยกว่า 100 ตัวอักษร",
        messageMin: "ข้อความต้องมีอย่างน้อย 10 ตัวอักษร",
        messageMax: "ข้อความต้องน้อยกว่า 1000 ตัวอักษร",
      },
    },
    footer: {
      description: "สร้างผลิตภัณฑ์ AI ที่ปฏิบัติได้และระบบอัตโนมัติสำหรับธุรกิจจริง ตั้งอยู่ในประเทศไทย ให้บริการลูกค้าทั่วโลก",
      productsHeading: "โครงการและบริการ",
      companyHeading: "บริษัท",
      about: "เกี่ยวกับเรา",
      packages: "แพ็กเกจ AI",
      contact: "ติดต่อ",
      copyright: "© {year} บริษัท ไกดแดนซ์ อินโนเวชั่น จำกัด สงวนลิขสิทธิ์",
      privacy: "ความเป็นส่วนตัว",
      terms: "ข้อกำหนด",
    },
    voiceAgent: {
      title: "GUIDANCE AI",
      agentName: "ผู้ช่วย AI",
      ready: "พร้อมเชื่อมต่อ",
      connecting: "กำลังเชื่อมต่อ...",
      listening: "กำลังฟัง...",
      speaking: "กำลังพูด...",
      endCall: "วางสาย",
      poweredBy: "ขับเคลื่อนโดย ElevenLabs",
      microphoneError: "ไม่ได้รับอนุญาตเข้าถึงไมโครโฟน",
      microphoneHelp: "กรุณาอนุญาตการเข้าถึงไมโครโฟนในการตั้งค่าเบราว์เซอร์เพื่อใช้งานแชทเสียง",
    },
    projects: {
      categories: {
        Product: "ผลิตภัณฑ์",
        Service: "บริการ",
        Function: "ฟังก์ชัน",
        "Internal Tool": "เครื่องมือภายใน",
      },
      statuses: {
        Live: "เปิดใช้งาน",
        Beta: "ทดสอบ",
        Development: "พัฒนา",
        Concept: "แนวคิด",
      },
      ui: {
        aboutProject: "เกี่ยวกับโครงการ",
        keyFeatures: "คุณสมบัติหลัก",
        viewLiveProduct: "ดูผลิตภัณฑ์จริง",
        chatWhatsApp: "แชทบน WhatsApp",
        projectStatus: "สถานะโครงการ",
      },
      guidancestream: {
        shortDescription: "แพลตฟอร์ม AI เรือธง: แพลตฟอร์ม AI orchestration ระดับองค์กรและระบบอัจฉริยะเพื่อลูกค้า",
        fullDescription: `แพลตฟอร์ม AI orchestration ระดับองค์กรและระบบอัจฉริยะเพื่อลูกค้าที่สร้างขึ้นจากความต้องการทางธุรกิจจริง

GuidanceStream เป็นแพลตฟอร์ม SaaS ที่เราพัฒนาขึ้นเพื่อช่วยธุรกิจขนาดเล็กและผู้ขายออนไลน์ในการทำให้การสื่อสารกับลูกค้าเป็นระบบอัตโนมัติ มีโครงสร้าง และยกระดับขึ้นโดยใช้ AI ที่เข้าใจสินค้า นโยบาย ข้อมูล และน้ำเสียงของแบรนด์

### ปัญหาที่เราแก้ไข
จากประสบการณ์ของผู้ก่อตั้งและการวิจัยเชิงคุณภาพโดยตรงกับผู้ขายออนไลน์ เราพบปัญหาที่เกิดขึ้นซ้ำๆ:
- ปริมาณคำถามจากลูกค้าที่ซ้ำซ้อนจำนวนมากที่ต้องจัดการด้วยมือ
- ไม่มีระบบรวมศูนย์ระหว่างอีเมล, marketplace, และข้อความโซเชียล
- แพลตฟอร์มจำนวนมากขาด API ที่ใช้งานได้จริง ทำให้ขั้นตอนการทำงานไม่มีประสิทธิภาพ
- ไม่มีการมองเห็นประวัติลูกค้าหรือปัญหาที่เกิดขึ้นซ้ำ

### สิ่งที่เราสร้าง (ระบบจริง ไม่ใช่แค่แนวคิด)
GuidanceStream เป็นต้นแบบที่ใช้งานได้จริง แสดงให้เห็นถึงสถาปัตยกรรมระดับ production:
- **สถาปัตยกรรม RAG**: การตอบกลับที่อิงตามข้อมูลธุรกิจจริง (ไม่มั่ว)
- **Browser Overlay**: ทำงานในที่ที่ผู้ใช้ทำงาน (หน้า dashboard, อีเมล)
- **Human-in-the-loop**: AI ร่างข้อความ, มนุษย์ตรวจสอบและส่ง
- **Mini-CRM**: ติดตามประวัติลูกค้าและความรู้สึก

### ฟีเจอร์ที่ใช้งานจริง
- **ระบบ Onboarding**: นำเข้าคำสั่งซื้อ สินค้า และ FAQ โดยอัตโนมัติ
- **การควบคุมแบรนด์**: กำหนดน้ำเสียง บุคลิก และข้อจำกัด
- **Multi-Channel**: ส่วนขยายเบราว์เซอร์, แชทบนเว็บไซต์, ตัวเชื่อมต่ออีเมล
- **การวิเคราะห์**: ติดตามความรู้สึก, จัดหมวดหมู่ปัญหา, แผนที่ความร้อนของปริมาณงาน

### ความพร้อมเชิงพาณิชย์
- กำหนดแผน Free, Pro ($19/เดือน), และ Business ($49/เดือน) แล้ว
- เป้าหมาย LTV:CAC ≈ 5:1
- แผนงานขยายไปสู่ระดับโลกถึงปี 2027

GuidanceStream พิสูจน์ว่าเราสามารถแปลงการดำเนินงานทางธุรกิจให้เป็นระบบ AI ที่ขยายขนาดได้`,
        features: [
          "การตอบกลับด้วยพลัง RAG",
          "การรวม Browser Overlay",
          "ขั้นตอนการทำงานแบบ Human-in-the-loop",
          "การวิเคราะห์ความรู้สึกของลูกค้า",
          "รองรับหลายช่องทาง"
        ]
      },
      carerouters: {
        shortDescription: "แพลตฟอร์มโลจิสติกส์ด้านสุขภาพที่เพิ่มประสิทธิภาพการขนส่งผู้ป่วยและการส่งมอบการดูแล",
        fullDescription: `**CareRouters** เชื่อมต่อผู้ให้บริการด้านสุขภาพกับบริการขนส่งเฉพาะทาง ช่วยลดความซับซ้อนของโลจิสติกส์การขนส่งทางการแพทย์ที่ไม่ฉุกเฉิน (NEMT) เพื่อให้มั่นใจว่าผู้ป่วยไปถึงนัดหมายตรงเวลา ในขณะที่เพิ่มประสิทธิภาพกองยานพาหนะสำหรับผู้ให้บริการ

### ปัญหา
ผู้ป่วยและผู้ให้บริการด้านสุขภาพต้องดิ้นรนกับการประสานงานการขนส่งที่เชื่อถือได้
- **ผู้ป่วย**: พลาดนัดหมายเนื่องจากการขนส่งที่ไม่น่าเชื่อถือ
- **ผู้ให้บริการ**: การจัดเส้นทางไม่มีประสิทธิภาพและขาดการมองเห็นแบบเรียลไทม์
- **กองยานพาหนะ**: การจัดส่งงานด้วยมือและการใช้กำลังการผลิตไม่เต็มที่

### โซลูชันของเรา
แพลตฟอร์มรวมศูนย์ที่ปรับปรุงการจอง การจัดส่งงาน และการติดตามการขนส่งทางการแพทย์
- **สำหรับผู้ป่วย/ผู้ดูแล**: จองง่ายและติดตามได้แบบเรียลไทม์
- **สำหรับผู้ให้บริการ**: แดชบอร์ดสำหรับจัดการคำขอยานพาหนะและดูสถานะ
- **สำหรับกองยานพาหนะ**: การจัดเส้นทางที่เหมาะสมและการจัดส่งงานดิจิทัล

### ประโยชน์หลัก
- **ลดการพลาดนัดหมาย**: การขนส่งที่เชื่อถือได้ช่วยให้ผู้ป่วยมาถึงตรงเวลา
- **ประสิทธิภาพการดำเนินงาน**: การจัดส่งงานอัตโนมัติช่วยลดงานเอกสาร
- **ประสบการณ์ผู้ป่วยที่ดีขึ้น**: การติดตามและการแจ้งเตือนที่โปร่งใส`,
        features: [
          "การจองและการติดตามแบบเรียลไทม์",
          "การจัดส่งงานอัตโนมัติ",
          "แดชบอร์ดผู้ให้บริการ",
          "แอปมือถือสำหรับผู้ป่วย",
          "ความปลอดภัยตามมาตรฐาน HIPAA"
        ]
      },
      packpilot: {
        shortDescription: "โมดูลประเมินการจัดส่งและบรรจุภัณฑ์ภายในพร้อมระบบ AI agent อัตโนมัติและการแจ้งเตือน ops แบบเรียลไทม์",
        fullDescription: `PackPilot เป็นโมดูลการดำเนินงานภายในที่สร้างขึ้นสำหรับผู้ขายออนไลน์และทีมคลังสินค้าเพื่อ **สร้างมาตรฐานการเก็บข้อมูลบรรจุภัณฑ์** และ **คำนวณต้นทุนการจัดส่งอัตโนมัติ** แบบครบวงจร

### วิธีการทำงาน
ขั้นตอนเริ่มต้นด้วยอินเทอร์เฟซง่ายๆ 3 ขั้นตอน:
1. **ค้นหา** ด้วยเลขพัสดุ (หรือรหัสคำสั่งซื้อภายใน)
2. **ยืนยันขนาดและน้ำหนักพัสดุ** (กว้าง / ยาว / สูง / กก.) และข้อมูลต้นทุนการจัดส่งเพิ่มเติม
3. **ส่งข้อมูล** เพื่อสร้างผลลัพธ์การจัดส่งที่มีโครงสร้างและช่องทางขนส่งที่แนะนำ

เมื่อส่งข้อมูลแล้ว **ระบบอัตโนมัติ n8n** จะกระตุ้น AI agent เพื่อตรวจสอบข้อมูล, ใช้กฎทางธุรกิจ (น้ำหนักตามปริมาตร, เส้นทางประเทศ, การเลือกช่องทาง), และบันทึกผลลงใน Google Sheets เพื่อการตรวจสอบและติดตามต้นทุน ผลลัพธ์สำคัญจะถูกส่งไปยัง Telegram ทันที สร้าง **วงจรการแจ้งเตือนระดับปฏิบัติการ** ที่ส่งถึงทั้ง iPhone และ Apple Watch

### ทำไมเราถึงสร้างมัน
การประเมินบรรจุภัณฑ์ด้วยมือเป็นคอขวดที่พบบ่อย:
- ข้อมูล กว้าง/ยาว/สูง ไม่สม่ำเสมอในหมู่พนักงาน
- พลาดกฎน้ำหนักตามปริมาตรทำให้เกิดค่าธรรมเนียมขนส่งที่ไม่คาดคิด
- การสื่อสารที่ล่าช้าระหว่างทีมบรรจุภัณฑ์และทีมจัดส่ง
- ไม่มีเส้นทางการตรวจสอบที่เชื่อถือได้สำหรับการตัดสินใจด้านต้นทุนและกำไร

PackPilot เปลี่ยนสิ่งนี้ให้เป็น **ขั้นตอนการทำงานที่ทำซ้ำได้ ติดตามได้ และเป็นอัตโนมัติก่อน**—ออกแบบมาเพื่อการใช้งานปฏิบัติการที่มีความถี่สูง

### ผลลัพธ์
PackPilot ลดความขัดแย้งในการส่งต่องานจากบรรจุภัณฑ์ไปยังการจัดส่งและให้ทีม:
- **ความสม่ำเสมอ** (ข้อมูลเข้าเหมือนกัน กฎเหมือนกัน ผลลัพธ์เหมือนกัน)
- **ความเร็ว** (ส่ง → ประเมิน → บันทึก → แจ้งเตือน)
- **ความรับผิดชอบ** (ตรวจสอบย้อนกลับได้ผ่าน sheet)
- **ความสามารถในการขยาย** (เพิ่มช่องทาง/กฎโดยไม่ต้องเปลี่ยน UI)`,
        features: [
          "อินเทอร์เฟซบรรจุภัณฑ์ 3 ขั้นตอน",
          "การประเมินด้วยความช่วยเหลือจาก AI Agent",
          "ท่อส่งงาน n8n Orchestration",
          "การแจ้งเตือน Ops ทาง Telegram",
          "การเชื่อมต่อ Google Sheets"
        ]
      },
      fixmytext: {
        shortDescription: "ตัวช่วยเขียนข้อความ AI สำหรับผู้ที่ไม่ใช่เจ้าของภาษา—วางข้อความใดๆ แล้วรับเวอร์ชันที่ชัดเจนและเป็นธรรมชาติยิ่งขึ้น",
        fullDescription: `FixMyText เป็นตัวช่วยเขียนข้อความ AI หน้าเดียวที่ออกแบบมาสำหรับผู้ที่ไม่ใช่เจ้าของภาษาอังกฤษ ช่วยปรับปรุงไวยากรณ์ ความชัดเจน และความเป็นธรรมชาติในขณะที่รักษาความหมายเดิมของผู้ใช้

### มันทำอะไร
ผู้ใช้วางข้อความเดิมและคลิกเขียนใหม่ AI จะส่งคืนเวอร์ชันที่ขัดเกลาแล้วซึ่ง:
- แก้ไขไวยากรณ์และปรับปรุงการใช้คำ
- ฟังดูเป็นธรรมชาติมากขึ้น (ใกล้เคียงกับเจ้าของภาษา)
- รักษาเจตนาและความหมายเดิมของผู้ใช้

### ฟีเจอร์หลัก
- **ปรับแต่งน้ำเสียง**: เลือกจาก เป็นกลาง, สบายๆ, มืออาชีพ, ทางการ และอื่นๆ
- **ควบคุมความยาว**: ทำให้ข้อความสั้นลง ยาวขึ้น หรือรักษาความยาวเดิม
- **การแปล**: ตัวเลือกการแปลเป็น 6 ภาษาหลัก
- **ประวัติ**: บันทึกและดูการเขียนใหม่ที่ผ่านมา (ถาวรสำหรับผู้ใช้ที่ลงทะเบียน)

สร้างด้วย React, Supabase, และ DeepSeek V3`,
        features: [
          "การเขียนใหม่ด้วย AI",
          "การปรับน้ำเสียงและความยาว",
          "รองรับหลายภาษา",
          "การติดตามประวัติ",
          "โหมดผู้เยี่ยมชมและผู้ใช้"
        ]
      },
      "api-gateway": {
        shortDescription: "จุดเข้าใช้งานเดียวสำหรับบริการและกระแสข้อมูลทั้งหมดของ Guidance Innovation",
        fullDescription: "API gateway ที่ขยายขนาดได้ซึ่งจัดการการยืนยันตัวตน, การจำกัดอัตรา, และการจัดเส้นทางสำหรับไมโครเซอร์วิสทั้งหมดของเรา ช่วยลดความซับซ้อนในการเชื่อมต่อของลูกค้าและเพิ่มความปลอดภัยทั่วทั้งแพลตฟอร์มของเรา",
        features: [
          "การยืนยันตัวตน JWT",
          "การจำกัดอัตรา (Rate Limiting)",
          "การค้นพบบริการ (Service Discovery)"
        ]
      }
    },
  },
  zh: {
    header: {
      services: "服务",
      products: "产品",
      packages: "套餐",
      about: "关于我们",
      contact: "联系",
      getInTouch: "联系我们",
    },
    appHome: {
      projectsTitle: "项目与服务",
      projectsSubtitle: "探索我们的创新生态系统",
    },
    package: {
      meta: {
        title: "AI 助手套餐 | Guidance Innovation Co., Ltd.",
        description: "为泰国企业提供全托管 AI 聊天助手。免费定制演示、三个服务层级（起价 ¥899/月）以及可选增值服务。全天候回答咨询、收集客户信息、预约登记。",
      },
      hero: {
        label: "AI 助手套餐",
        headline: "为您获取客户与预约的 AI 助手",
        description: "一个熟悉您业务的 AI 助手，与网站访客对话，回答他们真正关心的问题，并把对话转化为潜在客户或预约。",
        primaryCta: "开始提交需求",
        secondaryCta: "查看免费演示",
      },
      whatItDoes: {
        label: "功能介绍",
        heading: "为您的网站配备一位真正的助手",
        items: [
          "回答关于您的服务、营业时间、价格和政策的问题",
          "从每一次真实对话中收集姓名、联系方式和需求意向",
          "登记预约并将详细信息直接转交给您",
          "由我们搭建的知识库系统，随业务变化持续更新训练",
          "自动将客户线索转发到您的邮箱、WhatsApp 或 LINE",
          "全天候 24 小时为您工作",
        ],
      },
      howItWorks: {
        label: "服务流程",
        heading: "从免费演示到正式上线",
        steps: [
          {
            title: "免费演示",
            description: "我们根据您公开的业务资料搭建一个可用的助手，让您先试用再付费。",
          },
          {
            title: "选择套餐",
            description: "选择合适的层级。告知我们您的网站、联系电话和 LINE，即可获得准确报价。",
          },
          {
            title: "我们搭建并接入",
            description: "在您的网站上完成知识库、组件设计、渠道接入和预约流程的配置与测试。",
          },
          {
            title: "我们与您共同运营",
            description: "每月持续监控、知识更新、数据报告与技术支持——而不是一次性交付了事。",
          },
        ],
      },
      demo: {
        label: "免费定制演示",
        heading: "购买前，先试用为您的业务量身搭建的 AI 助手",
        paragraph1: "我们根据您公开可查的业务信息制作演示：服务项目、门店位置、营业时间、价格、联系方式和常见问题。",
        paragraph2: "您可以在网站的演示版本上体验一个真正可用的 AI 助手，然后再决定是否购买。演示与付费服务明确区分。",
        importantLabel: "请注意：",
        importantText: "演示尚未接入正式的企业网站或内部系统。",
        cta: "申请免费演示",
        scrollHint: "继续滚动以查看对话",
        widget: {
          business: "您的企业",
          tagline: "随时为您服务",
          botGreeting: "您好！我可以为您解答服务、营业时间、价格和预约等问题。您想了解什么？",
          userQuestion: "周末可以预约吗？",
          botAnswer: "可以，我们周六和周日 10:00 至 18:00 营业。需要我帮您预留一个时段吗？",
          inputPlaceholder: "输入您的问题...",
        },
      },
      packages: {
        label: "全托管服务套餐",
        heading: "选择适合您业务的层级",
        description: "所有套餐均为全托管订阅服务。价格从以下金额起——我们会在了解您的业务后提供准确报价。",
        recommended: "推荐",
        excludesPrefix: "不含：",
        cta: "选择此套餐",
        bestForLabel: "适合",
        website: {
          name: "AI 网站助手",
          price: "起价 ¥899/月",
          term: "最少 6 个月",
          bestFor:
            "希望在网站上提供全天候专业问答的企业——基于您网站上的公开信息，自动回应访客咨询。",
          features: [
            "在一个现有网站上安装部署",
            "基于公开业务资料建立知识库",
            "标准 AI 聊天、logo 与欢迎语定制、一种界面配色",
            "联系与预约链接",
            "托管主机、系统监控、小幅更新与技术维护",
            "含 AI 使用额度",
            "标准化组件布局",
          ],
          exclusions: [
            "内部机密文档",
            "定制界面设计",
            "社交渠道接入",
            "客户线索筛选",
            "预约自动化",
          ],
        },
        business: {
          name: "AI 商务助手",
          price: "起价 ¥1,389/月",
          term: "最少 6 个月",
          bestFor:
            "服务型小微企业——如水疗、诊所、美业等——需要专属知识库、品牌化对话界面与稳定的线索收集。",
          features: [
            "包含 AI 网站助手的全部内容",
            "基于企业方提供文档的专属知识库",
            "用于存放已审核资料的专用 Google Drive 文件夹",
            "定制化组件设计",
            "客户互动记录同步至共享 Google 表格",
            "基础线索收集、对话分类与人工接管指引",
            "每月客户问题洞察报告",
            "接入一个标准渠道（LINE OA 或邮件）",
            "可选增加其他渠道",
          ],
        },
        sales: {
          name: "AI 销售与预约助手",
          price: "起价 ¥2,729/月",
          term: "最少 12 个月",
          bestFor:
            "希望将对话转化为预约的团队——支持日历同步、结构化线索筛选与更清晰的销售跟进。",
          features: [
            "包含 AI 商务助手的全部内容",
            "结构化线索收集与筛选、联系方式校验、服务意向识别、线索分类",
            "预约/日历集成、预约申请、内部通知与提醒",
            "对话摘要、线索管理看板、转化洞察与人工升级处理",
          ],
          note: "定制 CRM 集成、电话 AI、短信、语音、主动跟进以及复杂的多渠道系统需单独报价。",
        },
        enterprise: {
          label: "企业定制",
          title: "企业级定制 AI",
          description:
            "面向需要专属基础设施的大型运营场景——独立 AI 模型、数据库与服务器，以及定制工作流、更强的安全管控与优先支持。我们将与您共同设计架构，并在详细需求评估后提供定制报价。",
          cta: "咨询企业方案",
        },
      },
      noWebsite: {
        label: "还没有网站？",
        heading: "我们可以一并搭建网站与 AI 助手",
        optionA: {
          label: "方案 A",
          title: "网站搭建 + AI 套餐",
          price: "起价 ฿15,000",
          note: "一次性网站搭建费用 + 所选 AI 套餐",
          cta: "申请网站搭建",
        },
        optionB: {
          badge: "组合套餐",
          label: "方案 B",
          title: "网站 + AI 助手组合套餐",
          price: "起价 ฿5,500/月",
          note: "最少 12 个月，无需预付网站费用",
          features: [
            "最多 5 个页面",
            "响应式设计",
            "基础 SEO、企业信息、联系按钮、Google 地图",
            "主机托管、日常小幅维护及 AI 网站助手",
          ],
          cta: "申请组合套餐",
        },
      },
      addOns: {
        label: "可选增值服务",
        heading: "随业务成长扩展助手能力",
        note: "增值服务价格取决于具体范围。请联系我们获取定制报价。",
        items: [
          { label: "增加渠道", detail: "LINE、WhatsApp、Instagram、Messenger、邮件" },
          { label: "增加语言", detail: "为更多市场本地化助手" },
          { label: "增加门店", detail: "多门店知识库与分流" },
          { label: "扩展专属知识库", detail: "更多文档，更多细节" },
          { label: "预约系统", detail: "日历集成与排期管理" },
          { label: "CRM 集成", detail: "对接您现有的销售流程" },
          { label: "网页语音", detail: "在您的网站上启用语音助手" },
          { label: "电话 AI", detail: "由 AI 接听来电" },
          { label: "短信", detail: "支持短信收发" },
          { label: "主动跟进", detail: "自动化的客户跟进流程" },
          { label: "高级分析", detail: "更深入的对话与转化洞察" },
          { label: "源代码 / 自主部署交付", detail: "自行掌控部署与基础设施" },
        ],
      },
      subscription: {
        label: "AI 全托管服务订阅",
        heading: "您的订阅包含什么",
        description: "每个套餐都是 AI 全托管服务订阅——而不仅仅是维护费。我们替您运营 AI 系统，让您专注于客户。",
        items: [
          "AI 系统使用权",
          "主机托管与基础设施",
          "套餐额度内的使用量",
          "系统监控与安全更新",
          "数据备份与故障修复",
          "知识库更新",
          "数据报告",
          "集成维护",
          "技术支持",
        ],
        disclaimerLabel: "起价",
        disclaimerText: "为公开展示的价格。最终价格取决于对话量、知识库规模、沟通渠道、预约系统以及所需的系统集成。",
      },
      quote: {
        text: "我们把商业策略、现代设计与 AI 辅助开发结合起来，帮助小型企业更快上线、在线形象更专业。我们不是卖完网站就消失——我们与您一起运营它。",
        author: "—— Te，创始人兼首席建造者",
      },
      wizardIntro: {
        label: "开始使用",
        heading: "获取报价",
        description: "选择套餐，然后告知我们您的网站、联系电话和 LINE。我们会了解您的业务并在 1–2 个工作日内回复。",
      },
      wizard: {
        steps: ["选择套餐", "填写信息", "确认", "完成"],
        optional: "（可选）",
        empty: "—",
        step1: {
          heading: "选择您的套餐",
          description: "选择合适的层级。之后仍可更改——现在不会产生任何费用。",
          packageLabel: "套餐或免费演示",
          websiteLabel: "您已有网站吗？",
          addOnsLabel: "需要增加什么服务吗？",
          addOnsHint: "选择您感兴趣的项目。我们按范围报价——无需承诺。",
          continueLocked: "请完成本步骤后再继续",
        },
        packages: {
          demo: {
            label: "免费定制 AI 演示",
            price: "免费",
            explanation:
              "我们会在您现有的首页上创建一个演示版 AI 客服助手。使用我们发送给您的链接，即可直接在当前网站上试用。",
          },
          website: { label: "AI 网站助手", price: "起价 ¥899/月" },
          business: { label: "AI 商务助手", price: "起价 ¥1,389/月" },
          sales: { label: "AI 销售与预约助手", price: "起价 ¥2,729/月" },
        },
        websiteStatuses: {
          have: "我已有网站",
          need: "我需要搭建网站",
          bundle: "我想要网站 + AI 组合套餐",
        },
        addOnCategories: [
          {
            label: "渠道与触达",
            options: [
              "增加 LINE / WhatsApp / Instagram / Messenger / 邮件渠道",
              "增加语言",
              "增加门店",
            ],
          },
          {
            label: "知识库与集成",
            options: [
              "扩展专属知识库",
              "预约 / 日历集成",
              "CRM 集成",
            ],
          },
          {
            label: "高级能力",
            options: [
              "网页语音",
              "电话 AI",
              "短信",
              "主动跟进",
              "高级分析",
              "源代码 / 自主部署交付",
            ],
          },
        ],
        step2: {
          heading: "报价发送到哪里？",
          description: "我们会了解您的业务并发送准确报价。",
          descriptionWithPlan: "我们会了解您的业务，并针对{plan}发送准确报价。",
          nameLabel: "您的姓名",
          namePlaceholder: "您的姓名",
          businessLabel: "企业名称",
          businessPlaceholder: "您的企业",
          websiteLabel: "您的网站",
          websitePlaceholder: "www.yourbusiness.com 或您的 Facebook / Google 地图页面",
          websiteHint: "这样我们可以查看您的服务和价格，让报价更准确。",
          phoneLabel: "联系电话",
          phonePlaceholder: "+66 ...",
          lineLabel: "LINE ID",
          linePlaceholder: "@yourbusiness",
          emailLabel: "邮箱",
          emailPlaceholder: "you@business.com",
          contactMethodLabel: "我们该通过哪种方式联系您？",
          contactMethods: ["LINE", "电话", "邮箱", "WhatsApp"],
          messageLabel: "还有什么需要我们了解的吗？",
          messagePlaceholder: "您的目标、现有系统、客户最常问的问题...",
        },
        step3: {
          heading: "确认您的申请",
          description: "发送前请确认信息。我们将在 1–2 个工作日内回复准确报价。",
          planSection: "套餐",
          packageLabel: "套餐",
          websiteStatusLabel: "网站情况",
          addOnsLabel: "增值服务",
          contactSection: "联系方式",
          nameLabel: "姓名",
          businessLabel: "企业",
          websiteLabel: "网站",
          phoneLabel: "电话",
          lineLabel: "LINE ID",
          emailLabel: "邮箱",
          preferredLabel: "首选联系方式",
          notesLabel: "备注",
          consent: "我确认联系信息准确无误，并同意 Guidance Innovation 就此申请与我联系。",
        },
        step4: {
          thankYou: "感谢您的提交！",
          received: "已收到申请",
          body: "我们已收到您的信息，并会了解您的业务。预计在 1–2 个工作日内提供准确报价。",
          viaContact: "我们将通过{method}回复您。",
          resubmit: "再提交一个申请",
        },
        nav: {
          back: "上一步",
          continue: "继续",
          review: "确认申请",
          send: "发送申请",
          sending: "发送中...",
        },
        errors: {
          package: "请选择套餐或演示",
          websiteStatus: "请选择您的网站情况",
          name: "请填写姓名",
          businessName: "请填写企业名称",
          phone: "请填写联系电话",
          emailRequired: "请填写邮箱",
          emailInvalid: "请输入有效的邮箱",
          websiteUrl: "请提供您的网站，以便我们准确报价",
          consent: "请确认您的联系信息",
          submit: "无法保存您的申请。请重试，或发送邮件至 hello@guidanceinnovations.tech",
        },
      },
    },
    hero: {
      company: "Guidance Innovation Co., Ltd.",
      headline: "为真实商业构建",
      subheadline: "AI系统",
      description: "我们设计和构建AI驱动的SaaS产品、智能自动化和定制软件系统，解决真正的运营问题。",
      tagline: "// 不炒作。只做有效的系统。",
      contactUs: "与我们交谈",
      viewProducts: "案例研究",
      productsLabel: "产品",
      productsValue: "GuidanceStream • CareRouters",
      basedInLabel: "总部",
      basedInValue: "泰国，服务全球客户",
    },
    welcome: {
      label: "我们的工作",
      heading1: "SaaS产品与",
      heading2: "AI解决方案",
      description1: "我们的工作专注于清晰、可靠和长期可扩展性。我们构建AI驱动的SaaS产品、智能自动化和定制软件系统，为服务和产品型企业解决真正的运营问题。",
      description2: "每个解决方案都是为实际使用而设计，并根据业务量身定制，而非从通用模板构建。",
      saasTitle: "SaaS产品",
      saasDescription: "可用于实际业务的AI产品：GuidanceStream用于客户服务，CareRouters用于医疗物流。",
      automationTitle: "AI自动化",
      automationDescription: "为需要可衡量运营改进的企业定制AI和自动化系统。工作流自动化、智能文档处理和系统集成。",
      devTitle: "全栈开发",
      devDescription: "为创业公司和成长型企业提供端到端产品开发。从MVP到生产就绪系统。",
    },
    features: {
      heading: "AI自动化",
      headingHighlight: "解决方案",
      subheading: "为可衡量的运营改进",
      description: "我们为企业设计和实施定制AI和自动化系统。流程优化以提高速度、准确性和成本效益。",
      aiAgents: "AI代理",
      aiAgentsDesc: "用于客户支持和内部运营的AI代理，具有上下文感知的响应，符合您的品牌声音。",
      workflow: "工作流自动化",
      workflowDesc: "使用API、webhooks和编排工具的自动化工作流。连接数据源、逻辑层和输出。",
      integration: "系统集成",
      integrationDesc: "CRM、ERP和平台集成。使用结构化数据和向量搜索的知识库系统。",
      alsoIncludes: "还包括",
      docProcessing: "智能文档处理",
      dataPipelines: "数据管道",
      vectorSearch: "向量搜索",
      apiDesign: "API驱动设计",
    },
    products: {
      ourProducts: "我们的产品",
      healthcarePlatform: "医疗平台",
      privateBeta: "MVP",
      mvpStage: "开发中",
      guidancestream: {
        name: "Guidance",
        nameBold: "Stream",
        subtitle: "AI客户服务代理",
        problemLabel: "解决的问题",
        description: "当客户沟通缓慢或不一致时，企业会损失时间、收入和声誉。GuidanceStream通过在您的沟通渠道中充当结构化、智能的客户服务层来解决这个问题。",
        problems: [
          "大量重复性咨询",
          "员工响应不一致",
          "知识分散在文档中",
          "支持团队无法扩展"
        ],
        howItWorks: "工作原理",
        features: [
          "中央知识库",
          "上下文感知AI响应",
          "自动化工作流",
          "集成就绪"
        ],
      },
      carerouters: {
        name: "Care",
        nameBold: "Routers",
        subtitle: "老年护理医院陪护平台",
        description: "对于老年人及其家人来说，在医院导航可能会很有压力。CareRouters提供一个结构化平台，用于寻找可靠的陪护人员协助医院就诊。",
        elderlyUx: "老年友好的用户体验",
        elderlyUxDesc: "为可访问性设计",
        realWorkflows: "真实医院工作流程",
        realWorkflowsDesc: "实用性",
        trustSafety: "信任与安全",
        trustSafetyDesc: "注重责任",
        regions: "泰国和马来西亚",
        regionsDesc: "区域覆盖",
      },
      dashboard: {
        brand: "AetherGate",
        brandSub: "Operations",
        title: "机场服务运营",
        subtitle: "跨到达与出发渠道的 AI 请求协助",
        viewBadge: "管理视图",
        demoNote: "演示数据 — 虚构品牌",
        showcaseNote: "",
        channelVolume: "渠道活动",
        weeklyVolume: "每周请求",
        vsLastWeek: "较上周",
        resolutionTitle: "解决情况",
        recentConversations: "最近对话",
        activeLabel: "进行中",
        allConversations: "查看全部",
        navGroups: {
          product: "产品",
          workspace: "工作区",
          admin: "管理",
        },
        nav: {
          dashboard: "仪表板",
          conversations: "对话",
          bookings: "预订",
          leads: "潜在客户",
          kpi: "分析",
          ai: "AI",
          settings: "设置",
          billing: "账单",
        },
        kpis: {
          messages: "进行中请求",
          messagesSub: "过去 30 天",
          solved: "已解决",
          solvedSub: "解决率 75%",
          active: "未结案例",
          activeSub: "9 例已升级",
          response: "AI 平均响应",
          responseSub: "所有渠道",
        },
        resolution: {
          ai: "AI 解决",
          escalated: "升级至人工",
          human: "人工解决",
        },
        status: {
          done: "完成",
          active: "进行中",
        },
        assignee: {
          ai: "AI 解决",
          human: "分配给客服",
        },
        priority: {
          normal: "普通",
          high: "高",
        },
        table: {
          customer: "客户",
          channel: "渠道",
          booking: "预订编号",
          flight: "航班",
          status: "状态",
          assignee: "负责人",
          duration: "时长",
        },
      },
    },
    caseStudies: {
      label: "案例示例",
      heading: "真实解决方案",
      headingHighlight: "真实问题",
      description: "我们如何帮助企业实施AI和自动化系统以提供可衡量结果的示例。",
      aiCustomerService: {
        industry: "电子商务运营",
        title: "AI客户服务系统",
        challenge: "大量重复咨询、响应时间慢、支持人员语气不一致。",
        solution: "连接到产品数据、政策和订单工作流程的AI代理，具有上下文感知响应。",
        outcome: "更快的响应时间、减少手动工作量、所有渠道的一致性提高。",
      },
      operationalAutomation: {
        industry: "业务工作流",
        title: "运营自动化",
        challenge: "手动文档处理、分散的流程、容易出错的步骤导致延迟。",
        solution: "连接数据源、逻辑层和输出的自动化工作流，具有智能路由。",
        outcome: "减少人为错误、提高效率、可扩展的运营为增长做好准备。",
      },
      careRoutersMvp: {
        industry: "医疗平台",
        title: "CareRouters MVP",
        challenge: "围绕老年用户的真实医院陪护工作流程设计可用系统。",
        solution: "UX驱动的产品设计、移动应用原型、与目标用户的真实世界验证。",
        outcome: "功能性MVP符合实际用户需求而非假设。",
      },
      challengeLabel: "挑战",
      solutionLabel: "解决方案",
      outcomeLabel: "结果",
    },
    feedback: {
      heading: "为什么与",
      headingLine2: "我们合作？",
      description: "客户与我们合作是因为他们需要在实际运营中真正有效的系统。",
      ourTeam: "我们的团队",
      builderTitle: "建造者，而非顾问",
      builderDesc: "由积极构建系统的创始人领导，而不仅仅是提供建议。我们对自己产品应用的相同标准也应用于客户工作。",
      experienceTitle: "深厚的实战经验",
      experienceDesc: "我们的系统基于真实运营经验——多平台电子商务、物流、客户支持工作流程和跨境运营。",
      practicalTitle: "务实的AI方法",
      practicalDesc: "我们优先考虑可靠性而非新颖性、可维护性而非捷径、可衡量结果而非营销语言。",
      techFoundation: "技术基础",
      skills: ["AI代理", "RAG系统", "API设计", "全栈工程", "可扩展基础设施"],
      team: {
        te: { name: "Reed", position: "创始人和首席建造者", skills: ["AI工作流", "系统架构", "电子商务运营"] },
        alex: { name: "Denis", position: "后端工程师", skills: ["API设计", "数据库架构", "云基础设施"] },
        maya: { name: "Best", position: "市场营销与增长", skills: ["内容策略", "SEO与分析", "品牌发展"] },
        sam: { name: "Ye", position: "UX/UI设计师", skills: ["用户研究", "界面设计", "设计系统"] },
      },
      gallery: {
        eyebrow: "实战现场",
        heading: "真实经验",
        description: "在曼谷AI与创业生态中演讲、构建与建立人脉——而非只在旁观望。",
        items: {
          aiSummitSpeaking: {
            label: "演讲",
            caption: "演讲主题：AI自动化与智能代理",
          },
          aiSummitAudience: {
            label: "AI峰会",
            caption: "AI自动化专场听众",
          },
          cursorMeetupVenue: {
            label: "Cursor聚会",
            caption: "与Cursor开发者社区交流",
          },
          cursorMeetupBuild: {
            label: "Cursor聚会",
            caption: "与开发者共同动手构建",
          },
          cursorMeetupSession: {
            label: "Cursor聚会",
            caption: "在Cursor社区活动中共同编程",
          },
          brewBuildTdp: {
            label: "Brew & Build",
            caption: "Brew & Build #1 — 曼谷True Digital Park",
          },
          brewBuildEmsphere: {
            label: "Brew & Build",
            caption: "Brew & Build — 曼谷EmSphere（2024年5月）",
          },
          startupSession: {
            label: "创业生态",
            caption: "创业项目课程 — 2024年4月",
          },
        },
      },
    },
    contact: {
      letsTalk: "让我们",
      letsTalkLine2: "合作",
      whatsappButton: "WhatsApp 聊天",
      whatsappScan: "扫描二维码",
      whatsappTitle: "WhatsApp 联系",
      whatsappDescription: "扫描二维码直接与我们的团队聊天。",
      description: "如果您正在寻求构建严肃的产品、在实际运营中实施AI或探索合作伙伴关系，我们欢迎结构化的讨论。",
      companyName: "Guidance Innovation Co., Ltd.",
      location: "泰国",
      emailLabel: "邮箱：",
      websiteLabel: "网站：",
      contactReasonsLabel: "您可以联系我们咨询",
      contactReasons: ["产品合作", "AI自动化", "技术咨询", "长期合作"],
      formLabel: "给我们发消息",
      formHeading: "开始我们的对话",
      nameLabel: "姓名 *",
      namePlaceholder: "您的姓名",
      emailFieldLabel: "邮箱 *",
      emailPlaceholder: "your@email.com",
      companyLabel: "公司",
      companyPlaceholder: "您的公司（可选）",
      messageLabel: "消息 *",
      messagePlaceholder: "告诉我们您的项目或我们如何提供帮助...",
      sendButton: "发送消息",
      sendingButton: "发送中...",
      successMessage: "消息发送成功！",
      successDescription: "我们将在1-2个工作日内回复您。",
      errorMessage: "提交失败",
      errorDescription: "提交您的消息时出错。请重试或直接发送电子邮件至 info@guidanceinnovations.tech",
      footerNote: "这家公司以产品建造者的心态而非代理机构的心态建立。我们专注于长期产品思维而非短期实验。",
      validation: {
        nameRequired: "姓名为必填项",
        nameMax: "姓名必须少于100个字符",
        emailInvalid: "请输入有效的邮箱",
        emailMax: "邮箱必须少于255个字符",
        companyMax: "公司名称必须少于100个字符",
        messageMin: "消息必须至少10个字符",
        messageMax: "消息必须少于1000个字符",
      },
    },
    footer: {
      description: "为真实企业构建实用的AI产品和自动化系统。总部位于泰国，服务全球客户。",
      productsHeading: "项目与服务",
      companyHeading: "公司",
      about: "关于我们",
      packages: "AI 套餐",
      contact: "联系",
      copyright: "© {year} Guidance Innovation Co., Ltd. 保留所有权利。",
      privacy: "隐私",
      terms: "条款",
    },
    voiceAgent: {
      title: "GUIDANCE AI",
      agentName: "AI 助手",
      ready: "准备连接",
      connecting: "连接中...",
      listening: "正在聆听...",
      speaking: "正在说话...",
      endCall: "结束通话",
      poweredBy: "由 ElevenLabs 提供支持",
      microphoneError: "麦克风访问被拒绝",
      microphoneHelp: "请在浏览器设置中允许麦克风访问以使用语音聊天。",
    },
    projects: {
      categories: {
        Product: "产品",
        Service: "服务",
        Function: "功能",
        "Internal Tool": "内部工具",
      },
      statuses: {
        Live: "上线",
        Beta: "测试版",
        Development: "开发中",
        Concept: "概念",
      },
      ui: {
        aboutProject: "关于项目",
        keyFeatures: "主要功能",
        viewLiveProduct: "查看产品",
        chatWhatsApp: "WhatsApp 聊天",
        projectStatus: "项目状态",
      },
      guidancestream: {
        shortDescription: "旗舰AI平台：企业级AI编排和客户智能平台。",
        fullDescription: `基于真实业务需求构建的企业级AI编排和客户智能平台。

GuidanceStream 是我们专有的 SaaS 平台，旨在帮助小型企业和在线卖家利用理解其产品、政策、数据和品牌声音的 AI，自动化、结构化并提升客户沟通。

### 我们解决的问题
通过创始人的经验和与在线卖家的直接定性研究，我们确定了反复出现的痛点：
- 大量重复性客户问题需手动处理
- 电子邮件、市场、社交私信之间没有统一系统
- 许多平台缺乏可用的 API，导致工作流程低效
- 无法查看客户历史或反复出现的问题

### 我们构建了什么（真实系统，而非概念）
GuidanceStream 是一个完全实施的工作原型，展示了生产级架构：
- **RAG 架构**：基于真实业务数据的响应（无幻觉）
- **浏览器覆盖**：在用户工作的地方工作（仪表板、电子邮件）
- **人机交互**：AI 起草，人类审查并发送
- **迷你 CRM**：跟踪客户历史和情感

### 已实施的产品功能
- **入职系统**：自动摄取订单、产品和常见问题解答
- **品牌控制**：定义语气、个性和约束
- **多渠道**：浏览器扩展、网站聊天、电子邮件连接器
- **分析**：情感跟踪、问题分类、数量热图

### 商业准备就绪
- 已定义免费层、专业版（$19/月）和商业版（$49/月）计划
- 目标 LTV:CAC ≈ 5:1
- 扩展至 2027 年的全球扩张路线图

GuidanceStream 证明我们可以将业务运营转化为可扩展的 AI 系统。`,
        features: [
          "RAG 驱动的响应",
          "浏览器覆盖集成",
          "人机交互工作流",
          "客户情感分析",
          "多渠道支持"
        ]
      },
      carerouters: {
        shortDescription: "优化患者运输和护理服务的医疗物流平台。",
        fullDescription: `**CareRouters** 将医疗服务提供商与专业运输服务连接起来。它简化了非紧急医疗运输 (NEMT) 的复杂物流，确保患者按时赴约，同时优化提供商的车队效率。

### 问题
患者和医疗服务提供商在可靠的运输协调方面面临困难。
- **患者**：由于运输不可靠而错过预约。
- **提供商**：路线效率低下，缺乏实时可见性。
- **车队**：手动调度和产能利用不足。

### 我们的解决方案
一个集中式平台，简化医疗运输的预订、调度和跟踪。
- **对于患者/护理人员**：轻松预订和实时跟踪。
- **对于提供商**：管理运输请求和查看状态的仪表板。
- **对于车队**：优化路线和数字调度。

### 主要优势
- **减少错过预约**：可靠的运输确保患者按时到达。
- **运营效率**：自动调度减少手动工作。
- **更好的患者体验**：透明的跟踪和更新。`,
        features: [
          "实时预订与跟踪",
          "自动调度",
          "提供商仪表板",
          "患者移动应用",
          "符合 HIPAA 的安全性"
        ]
      },
      packpilot: {
        shortDescription: "具有 AI 代理自动化和实时运营警报的内部运输与包装估算模块。",
        fullDescription: `PackPilot 是一个为在线卖家和履行团队构建的内部运营模块，旨在**标准化包装数据收集**并端到端**自动化运输成本估算**。

### 工作原理
工作流程从一个简单的 3 步界面开始：
1. **查找** 通过跟踪号（或内部订单参考）
2. **确认包裹尺寸和重量**（长 / 宽 / 高 / 公斤）和可选的运输成本输入
3. **提交** 以生成结构化的运输结果和推荐的发货渠道

提交后，一个 **n8n 自动化** 会触发 AI 代理来验证输入，应用业务规则（体积重、国家路由、渠道选择），并将结果记录到 Google Sheets 以进行审计和成本跟踪。关键结果会立即推送到 Telegram，创建一个到达 iPhone 和 Apple Watch 的**运营级通知循环**。

### 为什么我们构建它
手动包装估算是一个常见的瓶颈：
- 员工之间的长/宽/高输入不一致
- 错过了体积重规则导致意外的承运人费用
- 包装和运输团队之间缓慢的来回沟通
- 对于成本 + 利润决策没有可靠的审计跟踪

PackPilot 将其转变为一个**可重复、可跟踪、自动化优先的工作流程**——专为高频运营使用而设计。

### 结果
PackPilot 减少了包装到运输的交接摩擦，并为团队提供了：
- **一致性**（相同的输入，相同的规则，相同的输出）
- **速度**（提交 → 估算 → 记录 → 警报）
- **问责制**（基于表格的可追溯性）
- **可扩展性**（无需更改 UI 即可添加渠道/规则）`,
        features: [
          "3 步包装界面",
          "AI 代理辅助估算",
          "n8n 编排管道",
          "Telegram 运营警报",
          "Google Sheets 集成"
        ]
      },
      fixmytext: {
        shortDescription: "非母语英语使用者的 AI 消息重写器——粘贴任何文本并获得更清晰、更自然的版本。",
        fullDescription: `FixMyText 是一个专为非母语英语使用者设计的单页 AI 消息重写器。它有助于改善语法、清晰度和自然度，同时保留原始含义。

### 它做什么
用户粘贴他们的原始消息并点击重写。AI 返回一个润色后的版本，该版本：
- 修复语法并改进措辞
- 听起来更自然（更接近母语英语）
- 保留用户的原始意图和含义

### 主要功能
- **可自定义语气**：从中性、休闲、专业、正式等中选择。
- **长度控制**：使消息更短、更长或保持相同长度。
- **翻译**：可选翻译成 6 种主要语言。
- **历史记录**：保存并查看过去的重写（注册用户永久保存）。

使用 React、Supabase 和 DeepSeek V3 构建。`,
        features: [
          "AI 重写",
          "语气和长度调整",
          "多语言支持",
          "历史记录跟踪",
          "访客和用户模式"
        ]
      },
      "api-gateway": {
        shortDescription: "所有 Guidance Innovation 服务和数据流的单一入口点。",
        fullDescription: "一个可扩展的 API 网关，处理所有微服务的身份验证、速率限制和路由。它简化了客户端集成并增强了整个平台的安全性。",
        features: [
          "JWT 身份验证",
          "速率限制",
          "服务发现"
        ]
      }
    },
  },
} as const;

// Type helper for accessing nested translation keys
type NestedKeyOf<T> = T extends object
  ? { [K in keyof T]: K extends string
      ? T[K] extends object
        ? `${K}.${NestedKeyOf<T[K]>}`
        : K
      : never
    }[keyof T]
  : never;

export type TranslationKey = NestedKeyOf<typeof translations.en>;
