import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "关于我们 | 凯学邦 Kaixuebang - 连接教材与大模型的知识桥梁",
  description: "了解凯学邦的使命、愿景与发展历程。我们致力于通过结构化的知识工程，重塑数字时代的知识流动路径，让 AI 真正成为良师益友。",
  keywords: ["关于凯学邦", "教育使命", "知识工程", "智慧校园", "教材数字化"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "关于我们 | 凯学邦 Kaixuebang",
    description: "连接教材与大模型的知识桥梁，了解我们的技术基因与教育理想。",
    url: "https://kaixuebang.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
