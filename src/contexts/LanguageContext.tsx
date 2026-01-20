import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
    "hero.growthStage": "Growth Stage",
    "products.ind.tech": "Technology",
    "products.ind.techDesc": "AI systems and SaaS products for modern businesses.",
    "products.ind.health": "Healthcare",
    "products.ind.healthDesc": "Platforms connecting families with care services.",
    "products.ind.auto": "Automation",
    "products.ind.autoDesc": "Workflow automation and process optimization.",
    "products.ind.ops": "Operations",
    "products.ind.opsDesc": "E-commerce and logistics system integration.",
    "hero.title1": "Building AI",
    "hero.title2": "for Real",
    "hero.title3": "Businesses",
    "hero.subtitle": "Practical AI products and automation systems that solve real problems. No hype, just systems that work.",
    "hero.cta.primary": "Start a Conversation",
    "hero.cta.secondary": "View Products",
    "hero.focusArea": "Focus Area",
    "hero.saasProducts": "SaaS Products",
    "hero.saasDesc": "Production-ready AI products built for real business use.",
    "hero.expertise": "Expertise",
    "hero.aiAutomation": "AI Automation",
    "hero.aiDesc": "Custom AI systems for measurable operational improvement.",
    "hero.productsInDev": "Products in Development",
    "hero.marketsServed": "Markets Served",
    "hero.companyBadge": "Guidance Innovation Co., Ltd. — Thailand",

    // Services
    "services.label": "What We Build",
    "services.title1": "AI Products &",
    "services.title2": "Automation Systems",
    "services.stat1.value": "2",
    "services.stat1.desc": "Products actively\nin development",
    "services.stat2.value": "TH/MY",
    "services.stat2.desc": "Serving Thailand\n& Malaysia",
    "services.s1.title": "AI-POWERED\nBUSINESS\nINTELLIGENCE",
    "services.s1.desc": "We use smart tools and AI to speed up business intelligence and decision making.",
    "services.s2.title": "SAAS\nPRODUCT\nDEVELOPMENT",
    "services.s2.desc": "We build production-ready AI products for real business use, not demos.",
    "services.s3.title": "AUTOMATION\n&\nINTEGRATION",
    "services.s3.desc": "Custom automation systems that integrate with your existing operations.",

    // Products
    "products.label": "Our Products",
    "products.title": "Built for Real-World Use",
    "products.subtitle": "Products designed around actual business needs and validated with real users.",
    "products.gs.name": "GuidanceStream",
    "products.gs.tagline": "AI Customer Service Agent",
    "products.gs.desc": "An AI-powered customer service platform for businesses that handle high volumes of inquiries. Designed for e-commerce sellers, service providers, and multi-channel operations.",
    "products.gs.status": "Early Access",
    "products.gs.f1": "Multi-channel support",
    "products.gs.f2": "RAG knowledge base",
    "products.gs.f3": "Brand-aligned responses",
    "products.gs.f4": "Workflow automation",
    "products.cr.name": "CareRouters",
    "products.cr.tagline": "Hospital Escort Platform",
    "products.cr.desc": "A mobile platform designed to help elderly individuals and families access hospital escort services in Thailand and Malaysia.",
    "products.cr.status": "Coming Soon",
    "products.cr.f1": "iOS app booking",
    "products.cr.f2": "Real hospital workflows",
    "products.cr.f3": "Safety focused",
    "products.cr.f4": "Elderly-friendly UX",

    // Why Choose Us
    "why.title1": "The Builder's",
    "why.title2": "Advantage",
    "why.q1": "Why Work With Us",
    "why.a1": "We understand your vision because we're builders ourselves. With real-world experience in e-commerce, logistics, and AI systems, we bring practical solutions — not theoretical frameworks.",
    "why.q2": "What Makes Us Different",
    "why.a2": "We're builders, not consultants. Led by a founder who actively builds systems with deep real-world business experience. Our practical approach to AI prioritizes reliability over novelty, maintainability over shortcuts.",
    "why.q3": "Our Approach to AI",
    "why.a3": "We focus on production-ready systems that solve concrete problems. No hype, no buzzwords — just AI and automation that works reliably in real business operations.",

    // Founder
    "founder.label": "The Builder",
    "founder.title1": "Built by a Founder",
    "founder.title2": "Who Ships Real Products",
    "founder.subtitle": "Background in Amazon e-commerce and logistics operations. Now building AI products that solve problems we've experienced firsthand.",
    "founder.name": "Te",
    "founder.role": "Founder & Lead Builder",
    "founder.join": "Join Our Team",
    "founder.joinDesc": "We're hiring",
    "founder.growing": "Growing Team",
    "founder.growingDesc": "Future collaborators",

    // Contact
    "contact.title1": "Let's Build",
    "contact.title2": "Something Together",
    "contact.subscribe": "Get updates on our products and insights on AI automation.",
    "contact.placeholder": "Enter your email address",
    "contact.cta": "Schedule a Conversation",
    "contact.supportedBy": "A company by",
    "contact.company": "Guidance Innovation Co., Ltd.",
    "contact.location": "Thailand • Serving TH & MY",
    "contact.email": "Email",
    "contact.website": "Website",
    "contact.success": "Thanks! We'll be in touch soon.",
    "contact.invalidEmail": "Please enter a valid email address",

    // Footer
    "footer.description": "Building practical AI products and automation systems for real businesses.",
    "footer.company": "Company",
    "footer.products": "Products",
    "footer.support": "Support",
    "footer.aboutUs": "About Us",
    "footer.careers": "Careers",
    "footer.guidanceStream": "GuidanceStream",
    "footer.careRouters": "CareRouters",
    "footer.contactUs": "Contact Us",
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
    "hero.badge": "✦ ผลิตภัณฑ์ AI และระบบอัตโนมัติ",
    "hero.growthStage": "ระยะการเติบโต",
    "products.ind.tech": "เทคโนโลยี",
    "products.ind.techDesc": "ระบบ AI และผลิตภัณฑ์ SaaS สำหรับธุรกิจสมัยใหม่",
    "products.ind.health": "สุขภาพ",
    "products.ind.healthDesc": "แพลตฟอร์มเชื่อมต่อครอบครัวกับบริการดูแล",
    "products.ind.auto": "ระบบอัตโนมัติ",
    "products.ind.autoDesc": "ระบบอัตโนมัติและการปรับปรุงกระบวนการ",
    "products.ind.ops": "การดำเนินงาน",
    "products.ind.opsDesc": "การบูรณาการระบบอีคอมเมิร์ซและโลจิสติกส์",
    "hero.title1": "สร้างระบบ AI",
    "hero.title2": "สำหรับ",
    "hero.title3": "ธุรกิจจริง",
    "hero.subtitle": "ผลิตภัณฑ์ AI และระบบอัตโนมัติที่แก้ปัญหาจริง ไม่มีการโฆษณาเกินจริง มีแค่ระบบที่ใช้งานได้",
    "hero.cta.primary": "เริ่มพูดคุย",
    "hero.cta.secondary": "ดูผลิตภัณฑ์",
    "hero.focusArea": "จุดเน้น",
    "hero.saasProducts": "ผลิตภัณฑ์ SaaS",
    "hero.saasDesc": "ผลิตภัณฑ์ AI พร้อมใช้งานจริงสำหรับธุรกิจ",
    "hero.expertise": "ความเชี่ยวชาญ",
    "hero.aiAutomation": "AI Automation",
    "hero.aiDesc": "ระบบ AI ที่กำหนดเองเพื่อการปรับปรุงการดำเนินงานที่วัดผลได้",
    "hero.productsInDev": "ผลิตภัณฑ์ที่กำลังพัฒนา",
    "hero.marketsServed": "ตลาดที่ให้บริการ",
    "hero.companyBadge": "บริษัท ไกด์แดนซ์ อินโนเวชั่น จำกัด — ประเทศไทย",

    // Services
    "services.label": "สิ่งที่เราสร้าง",
    "services.title1": "ผลิตภัณฑ์ AI และ",
    "services.title2": "ระบบอัตโนมัติ",
    "services.stat1.value": "2",
    "services.stat1.desc": "ผลิตภัณฑ์ที่กำลัง\nพัฒนา",
    "services.stat2.value": "TH/MY",
    "services.stat2.desc": "ให้บริการไทย\nและมาเลเซีย",
    "services.s1.title": "AI-POWERED\nBUSINESS\nINTELLIGENCE",
    "services.s1.desc": "เราใช้เครื่องมืออัจฉริยะและ AI เพื่อเร่งการวิเคราะห์ธุรกิจและการตัดสินใจ",
    "services.s2.title": "SAAS\nPRODUCT\nDEVELOPMENT",
    "services.s2.desc": "เราสร้างผลิตภัณฑ์ AI พร้อมใช้งานจริง ไม่ใช่เดโม",
    "services.s3.title": "AUTOMATION\n&\nINTEGRATION",
    "services.s3.desc": "ระบบอัตโนมัติที่ปรับแต่งเพื่อเชื่อมต่อกับการดำเนินงานที่มีอยู่",

    // Products
    "products.label": "ผลิตภัณฑ์ของเรา",
    "products.title": "สร้างเพื่อใช้งานจริง",
    "products.subtitle": "ผลิตภัณฑ์ที่ออกแบบตามความต้องการทางธุรกิจจริงและผ่านการทดสอบกับผู้ใช้จริง",
    "products.gs.name": "GuidanceStream",
    "products.gs.tagline": "ตัวแทนบริการลูกค้า AI",
    "products.gs.desc": "แพลตฟอร์มบริการลูกค้าที่ขับเคลื่อนด้วย AI สำหรับธุรกิจที่จัดการกับคำถามจำนวนมาก ออกแบบมาสำหรับผู้ขายอีคอมเมิร์ซ ผู้ให้บริการ และการดำเนินงานหลายช่องทาง",
    "products.gs.status": "เข้าถึงก่อน",
    "products.gs.f1": "รองรับหลายช่องทาง",
    "products.gs.f2": "ฐานความรู้ RAG",
    "products.gs.f3": "การตอบสนองตรงแบรนด์",
    "products.gs.f4": "ระบบอัตโนมัติ",
    "products.cr.name": "CareRouters",
    "products.cr.tagline": "แพลตฟอร์มผู้ดูแลโรงพยาบาล",
    "products.cr.desc": "แพลตฟอร์มมือถือที่ออกแบบมาเพื่อช่วยผู้สูงอายุและครอบครัวในการเข้าถึงบริการดูแลโรงพยาบาลในไทยและมาเลเซีย",
    "products.cr.status": "เร็วๆ นี้",
    "products.cr.f1": "จอง iOS แอป",
    "products.cr.f2": "ขั้นตอนโรงพยาบาลจริง",
    "products.cr.f3": "เน้นความปลอดภัย",
    "products.cr.f4": "UX สำหรับผู้สูงอายุ",

    // Why Choose Us
    "why.title1": "ข้อได้เปรียบ",
    "why.title2": "ของผู้สร้าง",
    "why.q1": "ทำไมต้องทำงานกับเรา",
    "why.a1": "เราเข้าใจวิสัยทัศน์ของคุณเพราะเราเป็นผู้สร้างเช่นกัน ด้วยประสบการณ์จริงในอีคอมเมิร์ซ โลจิสติกส์ และระบบ AI เรานำเสนอโซลูชันที่ปฏิบัติได้จริง ไม่ใช่กรอบทฤษฎี",
    "why.q2": "สิ่งที่ทำให้เราแตกต่าง",
    "why.a2": "เราเป็นผู้สร้าง ไม่ใช่ที่ปรึกษา นำโดยผู้ก่อตั้งที่สร้างระบบอย่างแข็งขันพร้อมประสบการณ์ธุรกิจจริง แนวทางปฏิบัติของเราต่อ AI ให้ความสำคัญกับความน่าเชื่อถือมากกว่าความแปลกใหม่",
    "why.q3": "แนวทางของเราต่อ AI",
    "why.a3": "เราเน้นที่ระบบพร้อมใช้งานจริงที่แก้ปัญหาที่เป็นรูปธรรม ไม่มีการโฆษณาเกินจริง — เพียงแค่ AI และระบบอัตโนมัติที่ทำงานได้อย่างน่าเชื่อถือ",

    // Founder
    "founder.label": "ผู้สร้าง",
    "founder.title1": "สร้างโดยผู้ก่อตั้ง",
    "founder.title2": "ที่ส่งมอบผลิตภัณฑ์จริง",
    "founder.subtitle": "พื้นฐานในอีคอมเมิร์ซ Amazon และการดำเนินงานโลจิสติกส์ ตอนนี้สร้างผลิตภัณฑ์ AI ที่แก้ปัญหาที่เราประสบด้วยตัวเอง",
    "founder.name": "Te",
    "founder.role": "ผู้ก่อตั้งและผู้สร้างหลัก",
    "founder.join": "เข้าร่วมทีมของเรา",
    "founder.joinDesc": "เรากำลังรับสมัคร",
    "founder.growing": "ทีมที่กำลังเติบโต",
    "founder.growingDesc": "ผู้ร่วมงานในอนาคต",

    // Contact
    "contact.title1": "มาสร้าง",
    "contact.title2": "อะไรบางอย่างด้วยกัน",
    "contact.subscribe": "รับอัปเดตเกี่ยวกับผลิตภัณฑ์และข้อมูลเชิงลึกเกี่ยวกับ AI automation",
    "contact.placeholder": "กรอกอีเมลของคุณ",
    "contact.cta": "นัดหมายพูดคุย",
    "contact.supportedBy": "บริษัทโดย",
    "contact.company": "บริษัท ไกด์แดนซ์ อินโนเวชั่น จำกัด",
    "contact.location": "ประเทศไทย • ให้บริการ TH & MY",
    "contact.email": "อีเมล",
    "contact.website": "เว็บไซต์",
    "contact.success": "ขอบคุณ! เราจะติดต่อกลับเร็วๆ นี้",
    "contact.invalidEmail": "กรุณากรอกอีเมลที่ถูกต้อง",

    // Footer
    "footer.description": "สร้างผลิตภัณฑ์ AI และระบบอัตโนมัติที่ใช้งานได้จริงสำหรับธุรกิจจริง",
    "footer.company": "บริษัท",
    "footer.products": "ผลิตภัณฑ์",
    "footer.support": "สนับสนุน",
    "footer.aboutUs": "เกี่ยวกับเรา",
    "footer.careers": "อาชีพ",
    "footer.guidanceStream": "GuidanceStream",
    "footer.careRouters": "CareRouters",
    "footer.contactUs": "ติดต่อเรา",
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
    "hero.badge": "✦ AI产品与自动化系统",
    "hero.growthStage": "成长阶段",
    "products.ind.tech": "技术",
    "products.ind.techDesc": "为现代企业提供AI系统和SaaS产品。",
    "products.ind.health": "医疗",
    "products.ind.healthDesc": "连接家庭与护理服务的平台。",
    "products.ind.auto": "自动化",
    "products.ind.autoDesc": "工作流自动化和流程优化。",
    "products.ind.ops": "运营",
    "products.ind.opsDesc": "电子商务和物流系统集成。",
    "hero.title1": "构建AI系统",
    "hero.title2": "服务于",
    "hero.title3": "真实商业",
    "hero.subtitle": "解决真实问题的AI产品和自动化系统。没有炒作，只有可靠的系统。",
    "hero.cta.primary": "开始对话",
    "hero.cta.secondary": "查看产品",
    "hero.focusArea": "专注领域",
    "hero.saasProducts": "SaaS产品",
    "hero.saasDesc": "为实际商业用途构建的生产就绪AI产品。",
    "hero.expertise": "专业领域",
    "hero.aiAutomation": "AI自动化",
    "hero.aiDesc": "用于可衡量运营改进的定制AI系统。",
    "hero.productsInDev": "正在开发的产品",
    "hero.marketsServed": "服务市场",
    "hero.companyBadge": "Guidance Innovation Co., Ltd. — 泰国",

    // Services
    "services.label": "我们构建的",
    "services.title1": "AI产品与",
    "services.title2": "自动化系统",
    "services.stat1.value": "2",
    "services.stat1.desc": "正在开发的\n产品",
    "services.stat2.value": "TH/MY",
    "services.stat2.desc": "服务泰国\n和马来西亚",
    "services.s1.title": "AI驱动的\n商业\n智能",
    "services.s1.desc": "我们使用智能工具和AI加速商业智能和决策。",
    "services.s2.title": "SAAS\n产品\n开发",
    "services.s2.desc": "我们为实际商业用途构建生产就绪的AI产品，而非演示。",
    "services.s3.title": "自动化\n与\n集成",
    "services.s3.desc": "与现有运营集成的定制自动化系统。",

    // Products
    "products.label": "我们的产品",
    "products.title": "为实际应用而构建",
    "products.subtitle": "围绕实际业务需求设计并经过真实用户验证的产品。",
    "products.gs.name": "GuidanceStream",
    "products.gs.tagline": "AI客户服务代理",
    "products.gs.desc": "为处理大量咨询的企业设计的AI驱动客户服务平台。专为电子商务卖家、服务提供商和多渠道运营设计。",
    "products.gs.status": "抢先体验",
    "products.gs.f1": "多渠道支持",
    "products.gs.f2": "RAG知识库",
    "products.gs.f3": "品牌一致的回复",
    "products.gs.f4": "工作流自动化",
    "products.cr.name": "CareRouters",
    "products.cr.tagline": "医院陪护平台",
    "products.cr.desc": "一个移动平台，旨在帮助老年人和家庭获得泰国和马来西亚的医院陪护服务。",
    "products.cr.status": "即将推出",
    "products.cr.f1": "iOS应用预订",
    "products.cr.f2": "真实医院流程",
    "products.cr.f3": "注重安全",
    "products.cr.f4": "老年友好UX",

    // Why Choose Us
    "why.title1": "建设者的",
    "why.title2": "优势",
    "why.q1": "为什么与我们合作",
    "why.a1": "我们理解您的愿景，因为我们也是建设者。凭借在电子商务、物流和AI系统方面的实际经验，我们提供实用的解决方案——而非理论框架。",
    "why.q2": "是什么让我们与众不同",
    "why.a2": "我们是建设者，而非顾问。由一位积极构建系统并拥有深厚实际商业经验的创始人领导。我们对AI的务实方法优先考虑可靠性而非新颖性。",
    "why.q3": "我们的AI方法",
    "why.a3": "我们专注于解决具体问题的生产就绪系统。没有炒作，没有流行语——只有在实际业务运营中可靠工作的AI和自动化。",

    // Founder
    "founder.label": "建设者",
    "founder.title1": "由创始人构建",
    "founder.title2": "交付真实产品",
    "founder.subtitle": "拥有Amazon电子商务和物流运营背景。现在构建解决我们亲身经历的问题的AI产品。",
    "founder.name": "Te",
    "founder.role": "创始人和首席建设者",
    "founder.join": "加入我们的团队",
    "founder.joinDesc": "我们正在招聘",
    "founder.growing": "成长中的团队",
    "founder.growingDesc": "未来的合作者",

    // Contact
    "contact.title1": "让我们一起",
    "contact.title2": "构建些什么",
    "contact.subscribe": "获取产品更新和AI自动化见解。",
    "contact.placeholder": "输入您的电子邮件地址",
    "contact.cta": "预约交流",
    "contact.supportedBy": "公司",
    "contact.company": "Guidance Innovation Co., Ltd.",
    "contact.location": "泰国 • 服务TH & MY",
    "contact.email": "电子邮件",
    "contact.website": "网站",
    "contact.success": "谢谢！我们会尽快联系您。",
    "contact.invalidEmail": "请输入有效的电子邮件地址",

    // Footer
    "footer.description": "为真实商业构建实用的AI产品和自动化系统。",
    "footer.company": "公司",
    "footer.products": "产品",
    "footer.support": "支持",
    "footer.aboutUs": "关于我们",
    "footer.careers": "职业",
    "footer.guidanceStream": "GuidanceStream",
    "footer.careRouters": "CareRouters",
    "footer.contactUs": "联系我们",
    "footer.copyright": "© {year} Guidance Innovation Co., Ltd. 保留所有权利。",
    "footer.privacy": "隐私",
    "footer.terms": "条款",
  },
};

const LANGUAGE_STORAGE_KEY = "guidance-language";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored && (stored === "en" || stored === "th" || stored === "zh")) {
        return stored as Language;
      }
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  };

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
