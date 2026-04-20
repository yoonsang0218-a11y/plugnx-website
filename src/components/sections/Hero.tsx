"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import BrandLogo, { type BrandKey } from "@/components/BrandLogo";

const TRUSTED: { brand: BrandKey; name: string }[] = [
  { brand: "kakao", name: "카카오" },
  { brand: "naver", name: "네이버" },
  { brand: "kakaobank", name: "카카오뱅크" },
  { brand: "upbit", name: "업비트" },
  { brand: "coinone", name: "코인원" },
  { brand: "korbit", name: "코빗" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#0f1e35] text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #3b82f6 0, transparent 40%), radial-gradient(circle at 80% 0%, #06b6d4 0, transparent 40%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="container-page relative py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-cyan-200 ring-1 ring-white/20 backdrop-blur">
            <Sparkles size={14} /> 가상자산 인증 중개 업계 1위
          </span>

          <h1
            className="mt-6 text-4xl font-black leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ wordBreak: "keep-all" }}
          >
            <span className="whitespace-nowrap">디지털 신뢰 인프라,</span>
            <br />
            <span className="whitespace-nowrap bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#06b6d4] bg-clip-text text-transparent">
              플러그 NX
            </span>
            <span className="whitespace-nowrap">가 만듭니다</span>
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
            style={{ wordBreak: "keep-all" }}
          >
            플러그 NX는 카카오·네이버·카카오뱅크와의 전략적 파트너십을 기반으로,
            본인인증·전자서명·전자문서를 제공하는 인증 전문 기업입니다.
            금융·핀테크·Web3 영역의 필수 인프라로 성장하고 있습니다.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1e3a5f] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              프로젝트 문의하기
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
            >
              서비스 살펴보기
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
            Trusted by
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-6">
            {TRUSTED.map((t) => (
              <BrandLogo
                key={t.brand}
                brand={t.brand}
                aspectRatio="5/2"
                className="transition hover:scale-[1.03]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
