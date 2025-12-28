import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "凯学邦 Kaixuebang | 教育科技 · 知识工程",
  description: "凯学邦致力于构建教育大模型所需的底层知识库，帮助 K12 与大学生更高效地理解教材内容。连接教材与大模型的知识桥梁。",
  keywords: ["教育科技", "K12知识库", "大模型微调数据", "智慧校园", "AI教育", "教材帮", "作业批改"],
  authors: [{ name: "上海凯学邦信息咨询有限公司" }],
  openGraph: {
    title: "凯学邦 Kaixuebang | 以智能基础设施，重塑知识的传递",
    description: "构建教育大模型所需的底层知识库，帮助 K12 与大学生更高效地理解教材内容。",
    url: "https://kaixuebang.com",
    siteName: "凯学邦 Kaixuebang",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "凯学邦 Kaixuebang | 教育科技 · 知识工程",
    description: "以智能基础设施，重塑知识的传递。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
