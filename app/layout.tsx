import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "宇宙旅人 | Cosmic Travelers",
  description: "属于两位旅人的共同宇宙",
  keywords: "cosmic, travelers, universe, couples, memories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <body className="min-h-screen bg-[#09090B] text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
