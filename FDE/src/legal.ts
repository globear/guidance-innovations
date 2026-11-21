// Privacy policy and terms of use for the FDE site, written for what this site actually does:
// a consultation form (Netlify Forms + an email alert), email/WhatsApp contact, and a saved language choice.
// No analytics or advertising cookies are used. Draft for the company's legal review (Nov 2026).

export type LegalDoc = { title: string; lead: string; sections: { h: string; p: string[] }[] };
export type LegalText = { updated: string; contactLine: string; privacy: LegalDoc; terms: LegalDoc };

const en: LegalText = {
  updated: "Last updated: 21 November 2026",
  contactLine: "Questions about this page: info@guidanceinnovations.tech · WhatsApp +66 98 486 2094",
  privacy: {
    title: "Privacy policy",
    lead: "Guidance Innovation Co., Ltd. (\"we\") is a company registered in Thailand. This policy explains how we handle personal data you share through this website, in line with Thailand's Personal Data Protection Act B.E. 2562 (2019) (PDPA).",
    sections: [
      { h: "1. What we collect", p: [
        "When you book a consultation: your name, company, email, phone number or LINE ID, what you are interested in, your industry, what you tell us about your business and the area you want to improve, and the language you used on the site.",
        "When you contact us by email or WhatsApp: your message and contact details.",
        "Technical data recorded by our hosting provider for security, such as IP address and browser type.",
      ] },
      { h: "2. Why we use it", p: [
        "To reply to your request, arrange and prepare the consultation, and send any report or proposal you ask for.",
        "We rely on your consent, which you give with the checkbox on the booking form, and on steps taken at your request before any contract.",
        "We do not use your details for advertising and we do not sell them.",
      ] },
      { h: "3. Who handles it", p: [
        "Our team, and the services that run this website: Netlify (website hosting and storage of form submissions) and our email provider. They process data only to provide those services.",
      ] },
      { h: "4. How long we keep it", p: [
        "Consultation requests are kept for up to two years after our last contact, unless you become a client. Client records are kept for as long as the engagement and Thai law require.",
      ] },
      { h: "5. Data you share for a project", p: [
        "Business data you share for a first-impression report or a project is covered by a separate data processing agreement. It is processed on encrypted machines, is not used to train AI models, and is deleted at the end of the project unless agreed otherwise.",
      ] },
      { h: "6. Your rights", p: [
        "You can ask to see, correct, receive a copy of, or delete your personal data, object to or restrict how we use it, and withdraw your consent at any time. Withdrawing consent does not affect what was done before.",
        "You may also complain to the Office of the Personal Data Protection Committee (PDPC) in Thailand.",
      ] },
      { h: "7. Cookies and storage", p: [
        "This site does not use advertising or analytics cookies. It saves your language choice in your own browser so the site opens in that language next time.",
      ] },
      { h: "8. Contact", p: [
        "To use any of these rights or ask a question, email info@guidanceinnovations.tech. We reply within one business day.",
      ] },
    ],
  },
  terms: {
    title: "Terms of use",
    lead: "These terms apply to your use of this website, operated by Guidance Innovation Co., Ltd., a company registered in Thailand.",
    sections: [
      { h: "1. Information on this site", p: [
        "Content on this site is general information about our services. Case studies and sample reports are illustrative examples: client names are withheld and figures are modelled. They are not a promise of specific results.",
      ] },
      { h: "2. Consultations and proposals", p: [
        "The 45-minute consultation and the first-impression report are free and create no obligation. Any project is governed by a separate written agreement that sets out the scope, timeline, price and payment terms.",
      ] },
      { h: "3. Intellectual property", p: [
        "The text, graphics, design and code of this site belong to Guidance Innovation Co., Ltd. Please do not copy or reuse them without our written permission.",
      ] },
      { h: "4. Acceptable use", p: [
        "Please use the booking form only for genuine enquiries. Do not send spam or malicious content, or try to interfere with the site or its security.",
      ] },
      { h: "5. Third-party services", p: [
        "Some links open services run by others, such as WhatsApp. Their own terms and privacy policies apply there.",
      ] },
      { h: "6. Liability", p: [
        "We work to keep this site accurate and available, but it is provided as it is. To the extent the law allows, we are not liable for losses arising from use of the site itself.",
      ] },
      { h: "7. Governing law", p: [
        "These terms are governed by the laws of Thailand, and disputes are subject to the courts of Thailand.",
      ] },
      { h: "8. Changes", p: [
        "We may update these terms. The date at the top shows the latest version.",
      ] },
    ],
  },
};

const th: LegalText = {
  updated: "ปรับปรุงล่าสุด: 21 พฤศจิกายน 2569",
  contactLine: "สอบถามเกี่ยวกับหน้านี้: info@guidanceinnovations.tech · WhatsApp +66 98 486 2094",
  privacy: {
    title: "นโยบายความเป็นส่วนตัว",
    lead: "บริษัท Guidance Innovation Co., Ltd. (\"เรา\") เป็นบริษัทจดทะเบียนในประเทศไทย นโยบายนี้อธิบายวิธีที่เราดูแลข้อมูลส่วนบุคคลที่คุณให้ผ่านเว็บไซต์นี้ ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)",
    sections: [
      { h: "1. ข้อมูลที่เราเก็บ", p: [
        "เมื่อคุณนัดปรึกษา: ชื่อ บริษัท อีเมล เบอร์โทรหรือ LINE ID บริการที่สนใจ อุตสาหกรรม ข้อมูลเกี่ยวกับธุรกิจและด้านที่อยากปรับปรุง และภาษาที่ใช้บนเว็บไซต์",
        "เมื่อคุณติดต่อทางอีเมลหรือ WhatsApp: ข้อความและข้อมูลติดต่อของคุณ",
        "ข้อมูลทางเทคนิคที่ผู้ให้บริการโฮสติ้งบันทึกเพื่อความปลอดภัย เช่น หมายเลข IP และประเภทเบราว์เซอร์",
      ] },
      { h: "2. เราใช้ข้อมูลเพื่ออะไร", p: [
        "เพื่อตอบกลับคำขอของคุณ นัดหมายและเตรียมการปรึกษา และส่งรายงานหรือข้อเสนอที่คุณขอ",
        "เราอาศัยความยินยอมที่คุณให้ผ่านช่องทำเครื่องหมายในแบบฟอร์ม และการดำเนินการตามคำขอของคุณก่อนเข้าทำสัญญา",
        "เราไม่ใช้ข้อมูลของคุณเพื่อการโฆษณา และไม่ขายข้อมูล",
      ] },
      { h: "3. ใครเป็นผู้ดูแลข้อมูล", p: [
        "ทีมงานของเรา และบริการที่ใช้ทำงานเว็บไซต์นี้ ได้แก่ Netlify (โฮสต์เว็บไซต์และจัดเก็บข้อมูลแบบฟอร์ม) และผู้ให้บริการอีเมลของเรา ซึ่งประมวลผลข้อมูลเพื่อให้บริการดังกล่าวเท่านั้น",
      ] },
      { h: "4. ระยะเวลาการเก็บรักษา", p: [
        "คำขอปรึกษาจะเก็บไว้ไม่เกินสองปีนับจากการติดต่อครั้งล่าสุด เว้นแต่คุณจะเป็นลูกค้า ข้อมูลลูกค้าจะเก็บไว้ตามระยะเวลาของงานและตามที่กฎหมายไทยกำหนด",
      ] },
      { h: "5. ข้อมูลที่คุณแชร์เพื่อทำโครงการ", p: [
        "ข้อมูลธุรกิจที่คุณแชร์เพื่อทำรายงานเบื้องต้นหรือโครงการ อยู่ภายใต้ข้อตกลงการประมวลผลข้อมูลแยกต่างหาก ประมวลผลบนเครื่องที่เข้ารหัส ไม่ถูกใช้ฝึกโมเดล AI และจะถูกลบเมื่อจบโครงการ เว้นแต่ตกลงไว้เป็นอย่างอื่น",
      ] },
      { h: "6. สิทธิของคุณ", p: [
        "คุณขอเข้าถึง แก้ไข ขอรับสำเนา หรือลบข้อมูลส่วนบุคคล คัดค้านหรือขอจำกัดการใช้ และถอนความยินยอมได้ทุกเมื่อ การถอนความยินยอมไม่กระทบสิ่งที่ดำเนินการไปก่อนหน้า",
        "คุณยังสามารถร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.) ได้",
      ] },
      { h: "7. คุกกี้และการจัดเก็บในเบราว์เซอร์", p: [
        "เว็บไซต์นี้ไม่ใช้คุกกี้เพื่อการโฆษณาหรือการวิเคราะห์ เราบันทึกเพียงภาษาที่คุณเลือกไว้ในเบราว์เซอร์ของคุณ เพื่อให้เปิดเป็นภาษานั้นในครั้งถัดไป",
      ] },
      { h: "8. ติดต่อเรา", p: [
        "หากต้องการใช้สิทธิหรือสอบถาม อีเมล info@guidanceinnovations.tech เราตอบกลับภายใน 1 วันทำการ",
      ] },
    ],
  },
  terms: {
    title: "ข้อกำหนดการใช้งาน",
    lead: "ข้อกำหนดนี้ใช้กับการใช้งานเว็บไซต์นี้ ซึ่งดำเนินการโดย Guidance Innovation Co., Ltd. บริษัทจดทะเบียนในประเทศไทย",
    sections: [
      { h: "1. ข้อมูลบนเว็บไซต์", p: [
        "เนื้อหาบนเว็บไซต์เป็นข้อมูลทั่วไปเกี่ยวกับบริการของเรา กรณีศึกษาและรายงานตัวอย่างเป็นตัวอย่างประกอบ ไม่เปิดเผยชื่อลูกค้า และตัวเลขเป็นการจำลอง ไม่ใช่การรับประกันผลลัพธ์",
      ] },
      { h: "2. การปรึกษาและข้อเสนอ", p: [
        "การปรึกษา 45 นาทีและรายงานเบื้องต้นไม่มีค่าใช้จ่ายและไม่มีข้อผูกมัด โครงการใดๆ จะอยู่ภายใต้สัญญาเป็นลายลักษณ์อักษรที่ระบุขอบเขต ไทม์ไลน์ ราคา และเงื่อนไขการชำระเงิน",
      ] },
      { h: "3. ทรัพย์สินทางปัญญา", p: [
        "ข้อความ กราฟิก การออกแบบ และโค้ดของเว็บไซต์นี้เป็นของ Guidance Innovation Co., Ltd. กรุณาอย่าคัดลอกหรือนำไปใช้โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร",
      ] },
      { h: "4. การใช้งานที่เหมาะสม", p: [
        "กรุณาใช้แบบฟอร์มนัดปรึกษาเพื่อการติดต่อจริงเท่านั้น อย่าส่งสแปมหรือเนื้อหาที่เป็นอันตราย และอย่าพยายามรบกวนเว็บไซต์หรือระบบความปลอดภัย",
      ] },
      { h: "5. บริการของบุคคลภายนอก", p: [
        "ลิงก์บางรายการเปิดบริการของผู้อื่น เช่น WhatsApp ซึ่งใช้ข้อกำหนดและนโยบายความเป็นส่วนตัวของบริการนั้น",
      ] },
      { h: "6. ความรับผิด", p: [
        "เราพยายามให้เว็บไซต์ถูกต้องและพร้อมใช้งาน แต่ให้บริการตามสภาพที่เป็นอยู่ เท่าที่กฎหมายอนุญาต เราไม่รับผิดต่อความเสียหายที่เกิดจากการใช้เว็บไซต์",
      ] },
      { h: "7. กฎหมายที่ใช้บังคับ", p: [
        "ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย และข้อพิพาทอยู่ในเขตอำนาจของศาลไทย",
      ] },
      { h: "8. การเปลี่ยนแปลง", p: [
        "เราอาจปรับปรุงข้อกำหนดนี้ วันที่ด้านบนแสดงฉบับล่าสุด",
      ] },
    ],
  },
};

const zhHans: LegalText = {
  updated: "最后更新：2026 年 11 月 21 日",
  contactLine: "关于本页的问题：info@guidanceinnovations.tech · WhatsApp +66 98 486 2094",
  privacy: {
    title: "隐私政策",
    lead: "Guidance Innovation Co., Ltd.（“我们”）是在泰国注册的公司。本政策说明我们如何依照泰国《个人数据保护法》B.E. 2562（2019）（PDPA）处理您通过本网站提供的个人数据。",
    sections: [
      { h: "1. 我们收集的信息", p: [
        "预约咨询时：您的姓名、公司、邮箱、电话或 LINE ID、感兴趣的服务、所在行业、您介绍的业务情况和想改进的环节，以及您在网站上使用的语言。",
        "通过邮件或 WhatsApp 联系我们时：您的消息和联系方式。",
        "托管服务商出于安全目的记录的技术数据，例如 IP 地址和浏览器类型。",
      ] },
      { h: "2. 使用目的", p: [
        "回复您的请求、安排并准备咨询，以及发送您要求的报告或方案。",
        "我们依据您在预约表单上勾选给予的同意，以及在签约前应您要求采取的步骤。",
        "我们不会把您的信息用于广告，也不会出售。",
      ] },
      { h: "3. 由谁处理", p: [
        "我们的团队，以及运行本网站的服务：Netlify（网站托管和表单数据存储）和我们的邮件服务商。它们仅为提供上述服务而处理数据。",
      ] },
      { h: "4. 保存期限", p: [
        "咨询请求自最后一次联系起最多保存两年，除非您成为客户。客户资料按合作期限和泰国法律要求保存。",
      ] },
      { h: "5. 为项目提供的数据", p: [
        "您为初步报告或项目提供的业务数据受单独的数据处理协议约束：在加密设备上处理，不用于训练 AI 模型，项目结束后删除（另有约定除外）。",
      ] },
      { h: "6. 您的权利", p: [
        "您可以要求查阅、更正、获取副本或删除您的个人数据，反对或限制我们的使用，并可随时撤回同意。撤回同意不影响此前已进行的处理。",
        "您也可以向泰国个人数据保护委员会办公室（PDPC）投诉。",
      ] },
      { h: "7. Cookie 与浏览器存储", p: [
        "本网站不使用广告或分析类 Cookie，只会在您的浏览器中保存您选择的语言，下次打开时沿用。",
      ] },
      { h: "8. 联系我们", p: [
        "如需行使上述权利或有任何疑问，请发邮件至 info@guidanceinnovations.tech，我们会在一个工作日内回复。",
      ] },
    ],
  },
  terms: {
    title: "使用条款",
    lead: "本条款适用于您对本网站的使用。本网站由在泰国注册的 Guidance Innovation Co., Ltd. 运营。",
    sections: [
      { h: "1. 网站信息", p: [
        "本网站内容为我们服务的一般介绍。案例和示例报告仅为说明用途：客户名称保密，数据为模拟，并不代表对具体结果的承诺。",
      ] },
      { h: "2. 咨询与方案", p: [
        "45 分钟咨询和初步报告免费，且不构成任何义务。任何项目均以单独的书面协议为准，协议列明范围、时间表、价格和付款条款。",
      ] },
      { h: "3. 知识产权", p: [
        "本网站的文字、图形、设计和代码归 Guidance Innovation Co., Ltd. 所有。未经书面许可，请勿复制或再使用。",
      ] },
      { h: "4. 合理使用", p: [
        "请仅为真实咨询使用预约表单。请勿发送垃圾或恶意内容，或试图干扰网站及其安全。",
      ] },
      { h: "5. 第三方服务", p: [
        "部分链接会打开他人运营的服务（例如 WhatsApp），届时适用其自身的条款和隐私政策。",
      ] },
      { h: "6. 责任", p: [
        "我们努力保持网站准确可用，但网站按现状提供。在法律允许的范围内，我们不对因使用本网站本身而产生的损失承担责任。",
      ] },
      { h: "7. 适用法律", p: [
        "本条款受泰国法律管辖，争议由泰国法院处理。",
      ] },
      { h: "8. 变更", p: [
        "我们可能更新本条款，页面顶部的日期即为最新版本。",
      ] },
    ],
  },
};

const zhHant: LegalText = {
  updated: "最後更新：2026 年 11 月 21 日",
  contactLine: "關於本頁的問題：info@guidanceinnovations.tech · WhatsApp +66 98 486 2094",
  privacy: {
    title: "隱私權政策",
    lead: "Guidance Innovation Co., Ltd.（「我們」）是在泰國註冊的公司。本政策說明我們如何依照泰國《個人資料保護法》B.E. 2562（2019）（PDPA）處理您透過本網站提供的個人資料。",
    sections: [
      { h: "1. 我們收集的資料", p: [
        "預約諮詢時：您的姓名、公司、電子郵件、電話或 LINE ID、感興趣的服務、所屬產業、您介紹的業務情況與想改善的環節，以及您在網站上使用的語言。",
        "透過電子郵件或 WhatsApp 聯絡我們時：您的訊息與聯絡方式。",
        "主機服務商基於安全目的記錄的技術資料，例如 IP 位址與瀏覽器類型。",
      ] },
      { h: "2. 使用目的", p: [
        "回覆您的請求、安排並準備諮詢，以及寄送您要求的報告或提案。",
        "我們依據您在預約表單勾選所給予的同意，以及在簽約前應您要求採取的步驟。",
        "我們不會將您的資料用於廣告，也不會出售。",
      ] },
      { h: "3. 由誰處理", p: [
        "我們的團隊，以及運行本網站的服務：Netlify（網站主機與表單資料儲存）和我們的電子郵件服務商。它們僅為提供上述服務而處理資料。",
      ] },
      { h: "4. 保存期間", p: [
        "諮詢請求自最後一次聯絡起最多保存兩年，除非您成為客戶。客戶資料依合作期間與泰國法律要求保存。",
      ] },
      { h: "5. 為專案提供的資料", p: [
        "您為初步報告或專案提供的業務資料受另行簽訂的資料處理協議約束：在加密設備上處理，不用於訓練 AI 模型，專案結束後刪除（另有約定者除外）。",
      ] },
      { h: "6. 您的權利", p: [
        "您可以要求查閱、更正、取得副本或刪除您的個人資料，反對或限制我們的使用，並可隨時撤回同意。撤回同意不影響先前已進行的處理。",
        "您也可以向泰國個人資料保護委員會辦公室（PDPC）申訴。",
      ] },
      { h: "7. Cookie 與瀏覽器儲存", p: [
        "本網站不使用廣告或分析類 Cookie，只會在您的瀏覽器中保存您選擇的語言，下次開啟時沿用。",
      ] },
      { h: "8. 聯絡我們", p: [
        "如需行使上述權利或有任何疑問，請寄信至 info@guidanceinnovations.tech，我們會在一個工作天內回覆。",
      ] },
    ],
  },
  terms: {
    title: "使用條款",
    lead: "本條款適用於您對本網站的使用。本網站由在泰國註冊的 Guidance Innovation Co., Ltd. 經營。",
    sections: [
      { h: "1. 網站資訊", p: [
        "本網站內容為我們服務的一般介紹。案例與示例報告僅供說明：客戶名稱保密，數據為模擬，並不代表對特定結果的承諾。",
      ] },
      { h: "2. 諮詢與提案", p: [
        "45 分鐘諮詢與初步報告免費，且不構成任何義務。任何專案均以另行簽訂的書面協議為準，協議載明範圍、時程、價格與付款條件。",
      ] },
      { h: "3. 智慧財產權", p: [
        "本網站的文字、圖像、設計與程式碼屬於 Guidance Innovation Co., Ltd.。未經書面許可，請勿複製或再使用。",
      ] },
      { h: "4. 合理使用", p: [
        "請僅為真實諮詢使用預約表單。請勿傳送垃圾或惡意內容，或試圖干擾網站及其安全。",
      ] },
      { h: "5. 第三方服務", p: [
        "部分連結會開啟他人經營的服務（例如 WhatsApp），屆時適用其自身的條款與隱私權政策。",
      ] },
      { h: "6. 責任", p: [
        "我們盡力維持網站正確可用，但網站依現狀提供。在法律允許的範圍內，我們不對因使用本網站本身而產生的損失負責。",
      ] },
      { h: "7. 準據法", p: [
        "本條款受泰國法律管轄，爭議由泰國法院處理。",
      ] },
      { h: "8. 變更", p: [
        "我們可能更新本條款，頁面上方的日期即為最新版本。",
      ] },
    ],
  },
};

const ms: LegalText = {
  updated: "Kemas kini terakhir: 21 November 2026",
  contactLine: "Soalan tentang halaman ini: info@guidanceinnovations.tech · WhatsApp +66 98 486 2094",
  privacy: {
    title: "Dasar privasi",
    lead: "Guidance Innovation Co., Ltd. (\"kami\") ialah syarikat berdaftar di Thailand. Dasar ini menerangkan cara kami mengendalikan data peribadi yang anda kongsi melalui laman web ini, selaras dengan Akta Perlindungan Data Peribadi Thailand B.E. 2562 (2019) (PDPA).",
    sections: [
      { h: "1. Apa yang kami kumpul", p: [
        "Semasa anda menempah konsultasi: nama, syarikat, e-mel, nombor telefon atau LINE ID, minat anda, industri, maklumat tentang perniagaan anda dan bahagian yang ingin diperbaiki, serta bahasa yang anda gunakan di laman ini.",
        "Semasa anda menghubungi kami melalui e-mel atau WhatsApp: mesej dan butiran hubungan anda.",
        "Data teknikal yang direkod oleh penyedia hos kami untuk keselamatan, seperti alamat IP dan jenis pelayar.",
      ] },
      { h: "2. Mengapa kami menggunakannya", p: [
        "Untuk membalas permintaan anda, mengatur dan menyediakan konsultasi, serta menghantar laporan atau cadangan yang anda minta.",
        "Kami bergantung pada persetujuan yang anda berikan melalui kotak semak pada borang, dan langkah yang diambil atas permintaan anda sebelum sebarang kontrak.",
        "Kami tidak menggunakan butiran anda untuk pengiklanan dan tidak menjualnya.",
      ] },
      { h: "3. Siapa yang mengendalikannya", p: [
        "Pasukan kami, dan perkhidmatan yang menjalankan laman ini: Netlify (hos laman web dan simpanan borang) serta penyedia e-mel kami. Mereka memproses data hanya untuk menyediakan perkhidmatan tersebut.",
      ] },
      { h: "4. Berapa lama kami menyimpannya", p: [
        "Permintaan konsultasi disimpan sehingga dua tahun selepas hubungan terakhir, melainkan anda menjadi pelanggan. Rekod pelanggan disimpan selagi diperlukan oleh penglibatan dan undang-undang Thailand.",
      ] },
      { h: "5. Data yang anda kongsi untuk projek", p: [
        "Data perniagaan yang anda kongsi untuk laporan tinjauan awal atau projek dilindungi oleh perjanjian pemprosesan data yang berasingan. Ia diproses pada mesin tersulit, tidak digunakan untuk melatih model AI, dan dipadam pada akhir projek melainkan dipersetujui sebaliknya.",
      ] },
      { h: "6. Hak anda", p: [
        "Anda boleh meminta untuk melihat, membetulkan, menerima salinan atau memadam data peribadi anda, membantah atau mengehadkan penggunaannya, dan menarik balik persetujuan pada bila-bila masa. Penarikan balik tidak menjejaskan apa yang telah dilakukan sebelumnya.",
        "Anda juga boleh membuat aduan kepada Pejabat Jawatankuasa Perlindungan Data Peribadi (PDPC) Thailand.",
      ] },
      { h: "7. Kuki dan storan", p: [
        "Laman ini tidak menggunakan kuki pengiklanan atau analitik. Ia hanya menyimpan pilihan bahasa anda dalam pelayar anda sendiri supaya laman dibuka dalam bahasa itu pada kali seterusnya.",
      ] },
      { h: "8. Hubungi kami", p: [
        "Untuk menggunakan hak ini atau bertanya, e-mel info@guidanceinnovations.tech. Kami membalas dalam satu hari bekerja.",
      ] },
    ],
  },
  terms: {
    title: "Terma penggunaan",
    lead: "Terma ini terpakai untuk penggunaan laman web ini, yang dikendalikan oleh Guidance Innovation Co., Ltd., syarikat berdaftar di Thailand.",
    sections: [
      { h: "1. Maklumat di laman ini", p: [
        "Kandungan laman ini ialah maklumat umum tentang perkhidmatan kami. Kajian kes dan laporan contoh adalah ilustrasi: nama pelanggan dirahsiakan dan angka dimodelkan. Ia bukan janji hasil tertentu.",
      ] },
      { h: "2. Konsultasi dan cadangan", p: [
        "Konsultasi 45 minit dan laporan tinjauan awal adalah percuma dan tidak mewujudkan sebarang kewajipan. Sebarang projek tertakluk kepada perjanjian bertulis berasingan yang menetapkan skop, garis masa, harga dan terma pembayaran.",
      ] },
      { h: "3. Harta intelek", p: [
        "Teks, grafik, reka bentuk dan kod laman ini milik Guidance Innovation Co., Ltd. Sila jangan salin atau guna semula tanpa kebenaran bertulis kami.",
      ] },
      { h: "4. Penggunaan yang wajar", p: [
        "Sila gunakan borang tempahan hanya untuk pertanyaan sebenar. Jangan hantar spam atau kandungan berniat jahat, atau cuba mengganggu laman atau keselamatannya.",
      ] },
      { h: "5. Perkhidmatan pihak ketiga", p: [
        "Sesetengah pautan membuka perkhidmatan pihak lain, seperti WhatsApp. Terma dan dasar privasi mereka sendiri terpakai di sana.",
      ] },
      { h: "6. Liabiliti", p: [
        "Kami berusaha memastikan laman ini tepat dan tersedia, tetapi ia disediakan seadanya. Setakat yang dibenarkan undang-undang, kami tidak bertanggungjawab atas kerugian akibat penggunaan laman ini.",
      ] },
      { h: "7. Undang-undang yang mentadbir", p: [
        "Terma ini ditadbir oleh undang-undang Thailand, dan pertikaian tertakluk kepada mahkamah Thailand.",
      ] },
      { h: "8. Perubahan", p: [
        "Kami mungkin mengemas kini terma ini. Tarikh di bahagian atas menunjukkan versi terkini.",
      ] },
    ],
  },
};

const vi: LegalText = {
  updated: "Cập nhật lần cuối: 21 tháng 11 năm 2026",
  contactLine: "Câu hỏi về trang này: info@guidanceinnovations.tech · WhatsApp +66 98 486 2094",
  privacy: {
    title: "Chính sách quyền riêng tư",
    lead: "Guidance Innovation Co., Ltd. (\"chúng tôi\") là công ty đăng ký tại Thái Lan. Chính sách này giải thích cách chúng tôi xử lý dữ liệu cá nhân bạn chia sẻ qua trang web này, theo Đạo luật Bảo vệ Dữ liệu Cá nhân của Thái Lan B.E. 2562 (2019) (PDPA).",
    sections: [
      { h: "1. Dữ liệu chúng tôi thu thập", p: [
        "Khi bạn đặt lịch tư vấn: tên, công ty, email, số điện thoại hoặc LINE ID, dịch vụ quan tâm, ngành, thông tin bạn chia sẻ về doanh nghiệp và mảng muốn cải thiện, cùng ngôn ngữ bạn dùng trên trang.",
        "Khi bạn liên hệ qua email hoặc WhatsApp: tin nhắn và thông tin liên hệ của bạn.",
        "Dữ liệu kỹ thuật do nhà cung cấp lưu trữ ghi lại vì mục đích bảo mật, như địa chỉ IP và loại trình duyệt.",
      ] },
      { h: "2. Mục đích sử dụng", p: [
        "Để phản hồi yêu cầu, sắp xếp và chuẩn bị buổi tư vấn, và gửi báo cáo hoặc đề xuất bạn yêu cầu.",
        "Chúng tôi dựa trên sự đồng ý bạn đưa ra qua ô đánh dấu trên biểu mẫu, và các bước thực hiện theo yêu cầu của bạn trước khi ký hợp đồng.",
        "Chúng tôi không dùng thông tin của bạn cho quảng cáo và không bán thông tin.",
      ] },
      { h: "3. Ai xử lý dữ liệu", p: [
        "Đội ngũ của chúng tôi, và các dịch vụ vận hành trang web: Netlify (lưu trữ trang web và dữ liệu biểu mẫu) và nhà cung cấp email của chúng tôi. Họ chỉ xử lý dữ liệu để cung cấp các dịch vụ đó.",
      ] },
      { h: "4. Thời gian lưu giữ", p: [
        "Yêu cầu tư vấn được lưu tối đa hai năm kể từ lần liên hệ cuối, trừ khi bạn trở thành khách hàng. Hồ sơ khách hàng được lưu theo thời hạn hợp tác và theo quy định pháp luật Thái Lan.",
      ] },
      { h: "5. Dữ liệu bạn chia sẻ cho dự án", p: [
        "Dữ liệu kinh doanh bạn chia sẻ cho báo cáo đánh giá ban đầu hoặc dự án được điều chỉnh bởi một thỏa thuận xử lý dữ liệu riêng: xử lý trên máy được mã hóa, không dùng để huấn luyện mô hình AI, và được xóa khi kết thúc dự án trừ khi có thỏa thuận khác.",
      ] },
      { h: "6. Quyền của bạn", p: [
        "Bạn có thể yêu cầu xem, sửa, nhận bản sao hoặc xóa dữ liệu cá nhân, phản đối hoặc hạn chế việc sử dụng, và rút lại sự đồng ý bất cứ lúc nào. Việc rút lại không ảnh hưởng đến những gì đã thực hiện trước đó.",
        "Bạn cũng có thể khiếu nại tới Văn phòng Ủy ban Bảo vệ Dữ liệu Cá nhân (PDPC) Thái Lan.",
      ] },
      { h: "7. Cookie và lưu trữ", p: [
        "Trang web không dùng cookie quảng cáo hay phân tích. Trang chỉ lưu ngôn ngữ bạn chọn trong trình duyệt của bạn để lần sau mở đúng ngôn ngữ đó.",
      ] },
      { h: "8. Liên hệ", p: [
        "Để thực hiện các quyền này hoặc đặt câu hỏi, email info@guidanceinnovations.tech. Chúng tôi phản hồi trong một ngày làm việc.",
      ] },
    ],
  },
  terms: {
    title: "Điều khoản sử dụng",
    lead: "Các điều khoản này áp dụng cho việc bạn sử dụng trang web do Guidance Innovation Co., Ltd., công ty đăng ký tại Thái Lan, vận hành.",
    sections: [
      { h: "1. Thông tin trên trang", p: [
        "Nội dung trên trang là thông tin chung về dịch vụ của chúng tôi. Các nghiên cứu điển hình và báo cáo mẫu chỉ mang tính minh họa: tên khách hàng được giữ kín và số liệu là mô phỏng, không phải cam kết về kết quả cụ thể.",
      ] },
      { h: "2. Tư vấn và đề xuất", p: [
        "Buổi tư vấn 45 phút và báo cáo đánh giá ban đầu là miễn phí và không ràng buộc. Mọi dự án được điều chỉnh bởi một thỏa thuận bằng văn bản riêng, nêu rõ phạm vi, tiến độ, giá và điều khoản thanh toán.",
      ] },
      { h: "3. Sở hữu trí tuệ", p: [
        "Văn bản, hình ảnh, thiết kế và mã nguồn của trang thuộc về Guidance Innovation Co., Ltd. Vui lòng không sao chép hoặc sử dụng lại khi chưa có sự đồng ý bằng văn bản.",
      ] },
      { h: "4. Sử dụng hợp lý", p: [
        "Vui lòng chỉ dùng biểu mẫu đặt lịch cho các yêu cầu thật. Không gửi thư rác hay nội dung độc hại, và không cố can thiệp vào trang hoặc hệ thống bảo mật.",
      ] },
      { h: "5. Dịch vụ bên thứ ba", p: [
        "Một số liên kết mở dịch vụ do bên khác vận hành, như WhatsApp. Điều khoản và chính sách quyền riêng tư của họ sẽ áp dụng.",
      ] },
      { h: "6. Trách nhiệm", p: [
        "Chúng tôi cố gắng giữ trang chính xác và luôn hoạt động, nhưng trang được cung cấp theo hiện trạng. Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm về tổn thất phát sinh từ việc sử dụng trang.",
      ] },
      { h: "7. Luật áp dụng", p: [
        "Các điều khoản này chịu sự điều chỉnh của pháp luật Thái Lan, và tranh chấp thuộc thẩm quyền của tòa án Thái Lan.",
      ] },
      { h: "8. Thay đổi", p: [
        "Chúng tôi có thể cập nhật các điều khoản này. Ngày ở đầu trang cho biết phiên bản mới nhất.",
      ] },
    ],
  },
};

const dict: Record<string, LegalText> = { en, th, "zh-Hans": zhHans, "zh-Hant": zhHant, ms, vi };

export const legalContent = (lang: string): LegalText => dict[lang] ?? en;
