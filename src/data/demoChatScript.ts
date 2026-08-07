export type DemoChatRole = "bot" | "user";

export interface DemoChatMessage {
  role: DemoChatRole;
  text: string;
  /** Language badge for user questions */
  lang?: string;
}

/** Fixed multilingual demo script — independent of UI locale so visitors see polyglot capability. */
export const demoChatScript: DemoChatMessage[] = [
  {
    role: "bot",
    text: "Hi! I can help with services, hours, pricing, and booking. What would you like to know?",
  },
  {
    role: "user",
    lang: "EN",
    text: "Do you offer appointments on weekends?",
  },
  {
    role: "bot",
    text: "Yes — we're open Saturday and Sunday from 10am to 6pm. Want me to reserve a slot?",
  },
  {
    role: "user",
    lang: "TH",
    text: "ราคาเริ่มต้นเท่าไหร่ครับ",
  },
  {
    role: "bot",
    text: "แพ็กเกจเริ่มต้นประมาณ ฿3,500/เดือน ขึ้นกับขอบเขตบริการ ต้องการใบเสนอราคาไหมครับ",
  },
  {
    role: "user",
    lang: "ZH",
    text: "你们提供哪些服务？",
  },
  {
    role: "bot",
    text: "我们可以解答服务内容、营业时间、价格，并协助预约。您想了解哪一项？",
  },
  {
    role: "user",
    lang: "EN",
    text: "Can I book for 3 people this Friday afternoon?",
  },
  {
    role: "bot",
    text: "Friday 2:00–5:00pm still has openings for a party of 3. Shall I hold 2:30pm?",
  },
  {
    role: "user",
    lang: "TH",
    text: "เปิดถึงกี่โมงวันธรรมดา",
  },
  {
    role: "bot",
    text: "วันจันทร์–ศุกร์เปิด 09:00–20:00 น. รับ walk-in และนัดหมายล่วงหน้าครับ",
  },
  {
    role: "user",
    lang: "ZH",
    text: "可以取消或改期吗？",
  },
  {
    role: "bot",
    text: "可以。请提前至少 4 小时告知，我们会帮您改期或取消，不收取额外费用。",
  },
  {
    role: "user",
    lang: "EN",
    text: "Do you accept walk-ins or only bookings?",
  },
  {
    role: "bot",
    text: "Both — walk-ins are welcome when slots are free. Booking ahead is recommended on weekends.",
  },
  {
    role: "user",
    lang: "TH",
    text: "มีโปรโมชั่นเดือนนี้ไหม",
  },
  {
    role: "bot",
    text: "มีครับ ลูกค้าใหม่จองครั้งแรกลด 10% ถึงสิ้นเดือน ต้องการใช้โปรนี้ไหมครับ",
  },
  {
    role: "user",
    lang: "ZH",
    text: "地址在哪里？怎么停车？",
  },
  {
    role: "bot",
    text: "我们在市中心主街 128 号，楼下有付费停车场，也可地铁步行约 5 分钟到达。",
  },
  {
    role: "user",
    lang: "EN",
    text: "What's included in the standard package?",
  },
  {
    role: "bot",
    text: "Standard covers consultation, service session, and follow-up message. Add-ons are priced separately.",
  },
  {
    role: "user",
    lang: "TH",
    text: "ขอเบอร์โทรติดต่อหน่อย",
  },
  {
    role: "bot",
    text: "โทรได้ที่ 02-xxx-xxxx หรือแอด LINE @yourbiz ได้เลยครับ ต้องการให้ส่งลิงก์จองไหม",
  },
  {
    role: "user",
    lang: "ZH",
    text: "好的，请帮我预约明天上午。",
  },
  {
    role: "bot",
    text: "已为您预留明天 10:30。请留下姓名和联系方式，我马上确认预约。",
  },
];
