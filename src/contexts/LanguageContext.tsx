import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "th" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.services": "Services",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getInTouch": "Get in Touch",

    // Hero
    "hero.badge": "✦ AI Products & Systems",
    "hero.title1": "Building AI",
    "hero.title2": "for Real",
    "hero.title3": "Businesses",
    "hero.subtitle": "Guiding Innovations in Driving the Next Generation of Transformative AI and Automation Technology.",
    "hero.cta.primary": "Get in Touch",
    "hero.cta.secondary": "Learn More",
    "hero.focusArea": "Focus Area",
    "hero.saasProducts": "SaaS Products",
    "hero.saasDesc": "Production-ready AI products built for real business use.",
    "hero.expertise": "Expertise",
    "hero.aiAutomation": "AI Automation",
    "hero.aiDesc": "Custom AI systems for measurable operational improvement.",
    "hero.clientRetention": "Client Retention",
    "hero.projectsDelivered": "Projects Delivered",
    "hero.companyBadge": "Guidance Innovation Co., Ltd. — Thailand",

    // Services
    "services.label": "What We Offer",
    "services.title1": "Connecting Startups",
    "services.title2": "with Top Talent",
    "services.stat1.value": "120+",
    "services.stat1.desc": "Projects supported with\ntailored advisory",
    "services.stat2.value": "50+",
    "services.stat2.desc": "Top tier advisors from\ndiverse industries",
    "services.s1.title": "AI DATA\nDRIVEN\nRESEARCH",
    "services.s1.desc": "We use smart tools and AI to speed up business intelligence and decision making.",
    "services.s2.title": "SAAS\nPRODUCT\nDEVELOPMENT",
    "services.s2.desc": "We build production-ready AI products for real business use, not demos.",
    "services.s3.title": "AUTOMATION\n&\nINTEGRATION",
    "services.s3.desc": "We build long-term partnerships to help companies scale efficiently.",

    // Products
    "products.label": "Our Products",
    "products.title": "Built for Real-World Use",
    "products.subtitle": "Products designed around actual business needs and validated with real users.",
    "products.gs.name": "GuidanceStream",
    "products.gs.tagline": "AI Customer Service Agent",
    "products.gs.desc": "An AI-powered customer service platform for businesses that handle high volumes of inquiries. Designed for e-commerce sellers, service providers, and multi-channel operations.",
    "products.gs.status": "Private Beta",
    "products.gs.f1": "Multi-channel support",
    "products.gs.f2": "RAG knowledge base",
    "products.gs.f3": "Brand-aligned responses",
    "products.gs.f4": "Workflow automation",
    "products.cr.name": "CareRouters",
    "products.cr.tagline": "Hospital Escort Platform",
    "products.cr.desc": "A mobile platform designed to help elderly individuals and families access hospital escort services in Thailand and Malaysia.",
    "products.cr.status": "MVP Stage",
    "products.cr.f1": "iOS app booking",
    "products.cr.f2": "Real hospital workflows",
    "products.cr.f3": "Safety focused",
    "products.cr.f4": "Elderly-friendly UX",

    // Why Choose Us
    "why.title1": "The Founder's",
    "why.title2": "Advantage",
    "why.q1": "Why Founders Choose Us",
    "why.a1": "Founders choose us because we fully understand their vision and challenges. We provide tailored solutions, trusted guidance, and a partner-driven approach that helps them scale faster and smarter.",
    "why.q2": "What Makes Us Different",
    "why.a2": "We're builders, not consultants. Led by a founder who actively builds systems with deep real-world business experience. Our practical approach to AI prioritizes reliability over novelty, maintainability over shortcuts.",
    "why.q3": "Our Approach to AI",
    "why.a3": "We focus on production-ready systems that solve concrete problems. No hype, no buzzwords — just AI and automation that works reliably in real business operations.",

    // Founder
    "founder.label": "Our Team",
    "founder.title1": "Meet the Trusted Minds",
    "founder.title2": "Every Founder's Growth.",
    "founder.subtitle": "A network of experienced advisors dedicated to guiding founders through critical stages of their journey from early challenges to long-term success.",
    "founder.name": "Te",
    "founder.role": "Founder & Lead Builder",
    "founder.join": "Join Our Team",
    "founder.joinDesc": "We're hiring",
    "founder.growing": "Growing Team",
    "founder.growingDesc": "Future advisors",

    // Contact
    "contact.title1": "Realize Your",
    "contact.title2": "Full Potential",
    "contact.subscribe": "Subscribe for growth tips and founder resources!",
    "contact.placeholder": "Enter your email address",
    "contact.getInTouch": "Get in Touch",
    "contact.supportedBy": "Supported by",
    "contact.company": "Guidance Innovation Co., Ltd.",
    "contact.location": "Thailand • Serving Global Clients",
    "contact.email": "Email",
    "contact.website": "Website",
    "contact.success": "Thanks! We'll be in touch soon.",

    // Footer
    "footer.description": "Building practical AI products and automation systems for real businesses.",
    "footer.about": "About",
    "footer.resources": "Resources",
    "footer.support": "Support",
    "footer.news": "News",
    "footer.insight": "Insight",
    "footer.careers": "Careers",
    "footer.events": "Events & Meetups",
    "footer.toolkit": "Founder Toolkit",
    "footer.howItWorks": "How it Works",
    "footer.pricing": "Pricing",
    "footer.caseStudies": "Case Studies",
    "footer.faq": "FAQ",
    "footer.contactUs": "Contact Us",
    "footer.guidelines": "Community Guidelines",
    "footer.helpCenter": "Help Center",
    "footer.copyright": "© {year} Guidance Innovation Co., Ltd. All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
  },
  th: {
    // Header
    "nav.services": "บริการ",
    "nav.products": "ผลิตภัณฑ์",
    "nav.about": "เกี่ยวกับเรา",
    "nav.contact": "ติดต่อ",
    "nav.getInTouch": "ติดต่อเรา",

    // Hero
    "hero.badge": "✦ ผลิตภัณฑ์ AI และระบบ",
    "hero.title1": "สร้าง AI",
    "hero.title2": "สำหรับธุรกิจ",
    "hero.title3": "จริง",
    "hero.subtitle": "นำทางนวัตกรรมในการขับเคลื่อนเทคโนโลยี AI และระบบอัตโนมัติรุ่นใหม่ที่เปลี่ยนแปลงโลก",
    "hero.cta.primary": "ติดต่อเรา",
    "hero.cta.secondary": "เรียนรู้เพิ่มเติม",
    "hero.focusArea": "จุดเน้น",
    "hero.saasProducts": "ผลิตภัณฑ์ SaaS",
    "hero.saasDesc": "ผลิตภัณฑ์ AI พร้อมใช้งานจริงสำหรับธุรกิจ",
    "hero.expertise": "ความเชี่ยวชาญ",
    "hero.aiAutomation": "AI Automation",
    "hero.aiDesc": "ระบบ AI ที่กำหนดเองเพื่อการปรับปรุงการดำเนินงานที่วัดผลได้",
    "hero.clientRetention": "อัตราการรักษาลูกค้า",
    "hero.projectsDelivered": "โครงการที่ส่งมอบ",
    "hero.companyBadge": "บริษัท ไกด์แดนซ์ อินโนเวชั่น จำกัด — ประเทศไทย",

    // Services
    "services.label": "สิ่งที่เรานำเสนอ",
    "services.title1": "เชื่อมต่อสตาร์ทอัพ",
    "services.title2": "กับผู้เชี่ยวชาญ",
    "services.stat1.value": "120+",
    "services.stat1.desc": "โครงการที่สนับสนุนด้วย\nคำปรึกษาเฉพาะทาง",
    "services.stat2.value": "50+",
    "services.stat2.desc": "ที่ปรึกษาชั้นนำจาก\nอุตสาหกรรมหลากหลาย",
    "services.s1.title": "AI DATA\nDRIVEN\nRESEARCH",
    "services.s1.desc": "เราใช้เครื่องมืออัจฉริยะและ AI เพื่อเร่งการวิเคราะห์ธุรกิจและการตัดสินใจ",
    "services.s2.title": "SAAS\nPRODUCT\nDEVELOPMENT",
    "services.s2.desc": "เราสร้างผลิตภัณฑ์ AI พร้อมใช้งานจริง ไม่ใช่เดโม",
    "services.s3.title": "AUTOMATION\n&\nINTEGRATION",
    "services.s3.desc": "เราสร้างพันธมิตรระยะยาวเพื่อช่วยให้บริษัทขยายตัวอย่างมีประสิทธิภาพ",

    // Products
    "products.label": "ผลิตภัณฑ์ของเรา",
    "products.title": "สร้างเพื่อใช้งานจริง",
    "products.subtitle": "ผลิตภัณฑ์ที่ออกแบบตามความต้องการทางธุรกิจจริงและผ่านการทดสอบกับผู้ใช้จริง",
    "products.gs.name": "GuidanceStream",
    "products.gs.tagline": "ตัวแทนบริการลูกค้า AI",
    "products.gs.desc": "แพลตฟอร์มบริการลูกค้าที่ขับเคลื่อนด้วย AI สำหรับธุรกิจที่จัดการกับคำถามจำนวนมาก ออกแบบมาสำหรับผู้ขายอีคอมเมิร์ซ ผู้ให้บริการ และการดำเนินงานหลายช่องทาง",
    "products.gs.status": "เบต้าส่วนตัว",
    "products.gs.f1": "รองรับหลายช่องทาง",
    "products.gs.f2": "ฐานความรู้ RAG",
    "products.gs.f3": "การตอบสนองตรงแบรนด์",
    "products.gs.f4": "ระบบอัตโนมัติ",
    "products.cr.name": "CareRouters",
    "products.cr.tagline": "แพลตฟอร์มผู้ดูแลโรงพยาบาล",
    "products.cr.desc": "แพลตฟอร์มมือถือที่ออกแบบมาเพื่อช่วยผู้สูงอายุและครอบครัวในการเข้าถึงบริการดูแลโรงพยาบาลในไทยและมาเลเซีย",
    "products.cr.status": "ขั้น MVP",
    "products.cr.f1": "จอง iOS แอป",
    "products.cr.f2": "ขั้นตอนโรงพยาบาลจริง",
    "products.cr.f3": "เน้นความปลอดภัย",
    "products.cr.f4": "UX สำหรับผู้สูงอายุ",

    // Why Choose Us
    "why.title1": "ข้อได้เปรียบ",
    "why.title2": "ของผู้ก่อตั้ง",
    "why.q1": "ทำไมผู้ก่อตั้งเลือกเรา",
    "why.a1": "ผู้ก่อตั้งเลือกเราเพราะเราเข้าใจวิสัยทัศน์และความท้าทายของพวกเขาอย่างแท้จริง เราให้โซลูชันที่เหมาะสม คำแนะนำที่ไว้วางใจได้ และแนวทางที่เน้นการเป็นพันธมิตรที่ช่วยให้พวกเขาขยายตัวได้เร็วและฉลาดขึ้น",
    "why.q2": "สิ่งที่ทำให้เราแตกต่าง",
    "why.a2": "เราเป็นผู้สร้าง ไม่ใช่ที่ปรึกษา นำโดยผู้ก่อตั้งที่สร้างระบบอย่างแข็งขันพร้อมประสบการณ์ธุรกิจจริง แนวทางปฏิบัติของเราต่อ AI ให้ความสำคัญกับความน่าเชื่อถือมากกว่าความแปลกใหม่ การบำรุงรักษาได้มากกว่าทางลัด",
    "why.q3": "แนวทางของเราต่อ AI",
    "why.a3": "เราเน้นที่ระบบพร้อมใช้งานจริงที่แก้ปัญหาที่เป็นรูปธรรม ไม่มีการโฆษณาเกินจริง ไม่มีคำศัพท์เทคนิค — เพียงแค่ AI และระบบอัตโนมัติที่ทำงานได้อย่างน่าเชื่อถือในการดำเนินธุรกิจจริง",

    // Founder
    "founder.label": "ทีมของเรา",
    "founder.title1": "พบกับจิตใจที่ไว้วางใจ",
    "founder.title2": "การเติบโตของทุกผู้ก่อตั้ง",
    "founder.subtitle": "เครือข่ายที่ปรึกษาที่มีประสบการณ์ทุ่มเทในการแนะนำผู้ก่อตั้งผ่านช่วงเวลาสำคัญของการเดินทางจากความท้าทายในช่วงแรกสู่ความสำเร็จระยะยาว",
    "founder.name": "Te",
    "founder.role": "ผู้ก่อตั้งและผู้สร้างหลัก",
    "founder.join": "เข้าร่วมทีมของเรา",
    "founder.joinDesc": "เรากำลังรับสมัคร",
    "founder.growing": "ทีมที่กำลังเติบโต",
    "founder.growingDesc": "ที่ปรึกษาในอนาคต",

    // Contact
    "contact.title1": "ตระหนักถึง",
    "contact.title2": "ศักยภาพเต็มที่ของคุณ",
    "contact.subscribe": "สมัครสมาชิกเพื่อรับเคล็ดลับการเติบโตและทรัพยากรสำหรับผู้ก่อตั้ง!",
    "contact.placeholder": "กรอกอีเมลของคุณ",
    "contact.getInTouch": "ติดต่อเรา",
    "contact.supportedBy": "สนับสนุนโดย",
    "contact.company": "บริษัท ไกด์แดนซ์ อินโนเวชั่น จำกัด",
    "contact.location": "ประเทศไทย • ให้บริการลูกค้าทั่วโลก",
    "contact.email": "อีเมล",
    "contact.website": "เว็บไซต์",
    "contact.success": "ขอบคุณ! เราจะติดต่อกลับเร็วๆ นี้",

    // Footer
    "footer.description": "สร้างผลิตภัณฑ์ AI และระบบอัตโนมัติที่ใช้งานได้จริงสำหรับธุรกิจจริง",
    "footer.about": "เกี่ยวกับเรา",
    "footer.resources": "ทรัพยากร",
    "footer.support": "สนับสนุน",
    "footer.news": "ข่าวสาร",
    "footer.insight": "ข้อมูลเชิงลึก",
    "footer.careers": "อาชีพ",
    "footer.events": "กิจกรรมและมีตอัพ",
    "footer.toolkit": "ชุดเครื่องมือผู้ก่อตั้ง",
    "footer.howItWorks": "วิธีการทำงาน",
    "footer.pricing": "ราคา",
    "footer.caseStudies": "กรณีศึกษา",
    "footer.faq": "คำถามที่พบบ่อย",
    "footer.contactUs": "ติดต่อเรา",
    "footer.guidelines": "แนวทางชุมชน",
    "footer.helpCenter": "ศูนย์ช่วยเหลือ",
    "footer.copyright": "© {year} บริษัท ไกด์แดนซ์ อินโนเวชั่น จำกัด สงวนลิขสิทธิ์",
    "footer.privacy": "ความเป็นส่วนตัว",
    "footer.terms": "ข้อกำหนด",
  },
  zh: {
    // Header
    "nav.services": "服务",
    "nav.products": "产品",
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    "nav.getInTouch": "联系我们",

    // Hero
    "hero.badge": "✦ AI产品与系统",
    "hero.title1": "为真实",
    "hero.title2": "商业构建",
    "hero.title3": "AI",
    "hero.subtitle": "引导创新，驱动下一代变革性AI和自动化技术。",
    "hero.cta.primary": "联系我们",
    "hero.cta.secondary": "了解更多",
    "hero.focusArea": "专注领域",
    "hero.saasProducts": "SaaS产品",
    "hero.saasDesc": "为实际商业用途构建的生产就绪AI产品。",
    "hero.expertise": "专业领域",
    "hero.aiAutomation": "AI自动化",
    "hero.aiDesc": "用于可衡量运营改进的定制AI系统。",
    "hero.clientRetention": "客户保留率",
    "hero.projectsDelivered": "已交付项目",
    "hero.companyBadge": "Guidance Innovation Co., Ltd. — 泰国",

    // Services
    "services.label": "我们的服务",
    "services.title1": "连接初创企业",
    "services.title2": "与顶尖人才",
    "services.stat1.value": "120+",
    "services.stat1.desc": "通过定制咨询\n支持的项目",
    "services.stat2.value": "50+",
    "services.stat2.desc": "来自不同行业的\n顶级顾问",
    "services.s1.title": "AI数据\n驱动\n研究",
    "services.s1.desc": "我们使用智能工具和AI加速商业智能和决策。",
    "services.s2.title": "SAAS\n产品\n开发",
    "services.s2.desc": "我们为实际商业用途构建生产就绪的AI产品，而非演示。",
    "services.s3.title": "自动化\n&\n集成",
    "services.s3.desc": "我们建立长期合作伙伴关系，帮助公司高效扩展。",

    // Products
    "products.label": "我们的产品",
    "products.title": "为实际应用而构建",
    "products.subtitle": "围绕实际业务需求设计并经过真实用户验证的产品。",
    "products.gs.name": "GuidanceStream",
    "products.gs.tagline": "AI客户服务代理",
    "products.gs.desc": "为处理大量咨询的企业设计的AI驱动客户服务平台。专为电子商务卖家、服务提供商和多渠道运营设计。",
    "products.gs.status": "私人测试版",
    "products.gs.f1": "多渠道支持",
    "products.gs.f2": "RAG知识库",
    "products.gs.f3": "品牌一致的回复",
    "products.gs.f4": "工作流自动化",
    "products.cr.name": "CareRouters",
    "products.cr.tagline": "医院陪护平台",
    "products.cr.desc": "一个移动平台，旨在帮助老年人和家庭获得泰国和马来西亚的医院陪护服务。",
    "products.cr.status": "MVP阶段",
    "products.cr.f1": "iOS应用预订",
    "products.cr.f2": "真实医院流程",
    "products.cr.f3": "注重安全",
    "products.cr.f4": "老年友好UX",

    // Why Choose Us
    "why.title1": "创始人的",
    "why.title2": "优势",
    "why.q1": "为什么创始人选择我们",
    "why.a1": "创始人选择我们是因为我们完全理解他们的愿景和挑战。我们提供量身定制的解决方案、可信赖的指导和以合作伙伴为导向的方法，帮助他们更快、更智能地扩展。",
    "why.q2": "是什么让我们与众不同",
    "why.a2": "我们是建设者，而非顾问。由一位积极构建系统并拥有深厚实际商业经验的创始人领导。我们对AI的务实方法优先考虑可靠性而非新颖性，可维护性而非捷径。",
    "why.q3": "我们的AI方法",
    "why.a3": "我们专注于解决具体问题的生产就绪系统。没有炒作，没有流行语——只有在实际业务运营中可靠工作的AI和自动化。",

    // Founder
    "founder.label": "我们的团队",
    "founder.title1": "认识值得信赖的智囊",
    "founder.title2": "每位创始人的成长",
    "founder.subtitle": "一个由经验丰富的顾问组成的网络，致力于引导创始人度过从早期挑战到长期成功的关键阶段。",
    "founder.name": "Te",
    "founder.role": "创始人和首席建设者",
    "founder.join": "加入我们的团队",
    "founder.joinDesc": "我们正在招聘",
    "founder.growing": "成长中的团队",
    "founder.growingDesc": "未来的顾问",

    // Contact
    "contact.title1": "实现您的",
    "contact.title2": "全部潜力",
    "contact.subscribe": "订阅获取成长技巧和创始人资源！",
    "contact.placeholder": "输入您的电子邮件地址",
    "contact.getInTouch": "联系我们",
    "contact.supportedBy": "支持方",
    "contact.company": "Guidance Innovation Co., Ltd.",
    "contact.location": "泰国 • 服务全球客户",
    "contact.email": "电子邮件",
    "contact.website": "网站",
    "contact.success": "谢谢！我们会尽快联系您。",

    // Footer
    "footer.description": "为真实商业构建实用的AI产品和自动化系统。",
    "footer.about": "关于",
    "footer.resources": "资源",
    "footer.support": "支持",
    "footer.news": "新闻",
    "footer.insight": "洞察",
    "footer.careers": "职业",
    "footer.events": "活动与聚会",
    "footer.toolkit": "创始人工具包",
    "footer.howItWorks": "工作原理",
    "footer.pricing": "定价",
    "footer.caseStudies": "案例研究",
    "footer.faq": "常见问题",
    "footer.contactUs": "联系我们",
    "footer.guidelines": "社区准则",
    "footer.helpCenter": "帮助中心",
    "footer.copyright": "© {year} Guidance Innovation Co., Ltd. 保留所有权利。",
    "footer.privacy": "隐私",
    "footer.terms": "条款",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
