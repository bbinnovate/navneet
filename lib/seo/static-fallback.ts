export interface PageSeoData {
  title: string;
  description: string;
  keywords: string;
  path: string;
}

export const staticFallbacks: Record<string, PageSeoData> = {
  home: {
    title: "NAVNEET TOPTECH | India's School Transformation Partner",
    description: "NAVNEET TOPTECH is India's School Transformation Partner — the EdTech arm of Navneet Education Limited. Partnering with 4,00,0+ CBSE and Maharashtra State Board schools through TopSchool LMS, TopClass, TopAssess, and Navneet AI.",
    keywords: "school transformation partner India, EdTech India, CBSE LMS, digital classroom India, school ERP India, Navneet TopSchool, TopClass, TopAssess, Navneet AI, phygital learning",
    path: "/",
  },
  about: {
    title: "About NAVNEET TOPTECH | EdTech Arm of Navneet Education Limited",
    description: "Learn how NAVNEET TOPTECH is transforming 4,000+ schools across India with AI-powered learning, smart LMS, and phygital education. EdTech arm of Navneet Education Limited.",
    keywords: "about NAVNEET TOPTECH, Navneet Education EdTech, school transformation India, phygital education India",
    path: "/about",
  },
  blogs: {
    title: "NAVNEET TOPTECH Blogs | EdTech Insights for Schools",
    description: "Read insights on school transformation, digital classrooms, LMS adoption, NEP 2020, and phygital learning from NAVNEET TOPTECH experts.",
    keywords: "NAVNEET TOPTECH blogs, EdTech blog India, school LMS insights, NEP 2020 education blog",
    path: "/blogs",
  },
  careers: {
    title: "Careers at NAVNEET TOPTECH | Join Leading EdTech Company",
    description: "Explore careers at NAVNEET TOPTECH. Join a growing EdTech company shaping digital learning in India. Innovate, grow, and make a difference.",
    keywords: "NAVNEET TOPTECH careers, EdTech jobs India, education technology careers, Navneet jobs",
    path: "/careers",
  },
  conclaves: {
    title: "NAVNEET TOPTECH Conclave | India's Educators' Event Across 50+ Cities",
    description: "Join 1,00,000+ teachers across 50+ cities at NAVNEET TOPTECH Conclave. Panel discussions, workshops, product demos, and NEP 2020 sessions. Register now!",
    keywords: "NAVNEET TOPTECH conclave, education conclave India, teacher events India, school leaders summit",
    path: "/conclaves",
  },
  contact: {
    title: "Contact NAVNEET TOPTECH | Book a Free School Demo",
    description: "Book a free 30-minute school demo or contact our sales team. Toll free: 1800 266 6676. Offices in Mumbai, Bengaluru, Delhi, Chennai, Hyderabad, Nashik.",
    keywords: "contact NAVNEET TOPTECH, book school demo, EdTech demo India, Navneet TopSchool demo",
    path: "/contact",
  },
  locations: {
    title: "NAVNEET TOPTECH Locations | Offices Across India",
    description: "NAVNEET TOPTECH has offices in six cities with on-ground teams serving schools across 30+ cities nationally.",
    keywords: "NAVNEET TOPTECH locations, EdTech offices India, Navneet TopTech Mumbai Bengaluru Delhi",
    path: "/locations",
  },
  news: {
    title: "NAVNEET TOPTECH in the News | Awards & Press Coverage",
    description: "Coverage from leading education media, recognition from industry bodies, and stories of school transformation from across India.",
    keywords: "NAVNEET TOPTECH news, EdTech awards India, school transformation press, Navneet TopTech media",
    path: "/news",
  },
  support: {
    title: "Support & Services | Best LMS for Schools | NAVNEET TOPTECH",
    description: "NAVNEET TOPTECH offers trusted LMS and digital classroom support — easy onboarding, updated curriculum, remote support, and teacher training.",
    keywords: "NAVNEET TOPTECH support, LMS support India, school onboarding, teacher training EdTech",
    path: "/support-services",
  },
  topassess: {
    title: "TopAssess | AI-Enabled School Assessment Platform | NAVNEET TOPTECH",
    description: "AI-enabled test creation, 2,00,000+ question bank, real-time analytics, and learning gap detection for Grades 1-10. Online and offline modes.",
    keywords: "TopAssess, school assessment platform, AI assessment India, CBSE assessment tool",
    path: "/topassess",
  },
  topclass: {
    title: "TopClass | Offline Digital Classroom for CBSE & MSB Schools | NAVNEET TOPTECH",
    description: "TopClass brings 2D/3D animated content, 41,000+ question bank, and offline classroom teaching to CBSE and Maharashtra State Board schools. No internet needed.",
    keywords: "TopClass digital classroom, offline classroom India, CBSE digital classroom, MSB digital classroom",
    path: "/topclass-digital-classroom",
  },
  topschool: {
    title: "TopSchool LMS | Smart Learning Management System for Schools | NAVNEET TOPTECH",
    description: "TopSchool LMS — integrated school platform for Grades Nursery to 10. Unify teaching, assessments, and school management. Bundled with TopSeries phygital coursebooks.",
    keywords: "TopSchool LMS, school LMS India, CBSE LMS, learning management system schools, Navneet TopSchool",
    path: "/topschool-learning-management-system",
  },
  topseries: {
    title: "TopSeries | Phygital Coursebooks Grades Nursery-8 | NEP & NCF Aligned | NAVNEET TOPTECH",
    description: "TopSeries phygital coursebooks connect printed learning to TopSchool LMS — NEP 2020 and NCF aligned. Preschool Kit, Yearly Kit, and Semester Kit available.",
    keywords: "TopSeries coursebooks, phygital coursebooks India, NEP aligned coursebooks, Navneet TopSeries",
    path: "/topseries-grade-1-to-8",
  },
  ifp: {
    title: "Interactive Flat Panels for Schools | Brio Cybernetix Hikvision | NAVNEET TOPTECH",
    description: "AI-enabled Interactive Flat Panels pre-loaded with TopClass and Navneet AI. Brio, Cybernetix, and Hikvision. No setup — Day-one ready for schools.",
    keywords: "interactive flat panel schools, smart board India, Brio IFP, Cybernetix IFP, Hikvision IFP",
    path: "/interactive-flat-panels",
  },
};
