import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PLUGnx — 디지털 신뢰 인프라, 인증 전문 기업",
    template: "%s | PLUGnx",
  },
  description:
    "PLUGnx(구 보난자플러그)는 본인인증·전자서명·전자문서를 제공하는 디지털 신뢰 인프라 기업입니다. 카카오·네이버·카카오뱅크와의 전략적 파트너십 기반.",
  keywords: [
    "본인인증",
    "전자서명",
    "전자문서",
    "디지털 신뢰 인프라",
    "통합 인증",
    "가상자산거래소 인증",
    "PLUGnx",
    "플러그 NX",
    "보난자플러그",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
