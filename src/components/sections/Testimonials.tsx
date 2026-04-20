"use client";

import { motion } from "framer-motion";
import { Handshake, Users } from "lucide-react";
import BrandLogo, { type BrandKey } from "@/components/BrandLogo";

type Entry = { brand: BrandKey; name: string };

const PARTNERS: Entry[] = [
  { brand: "kakao", name: "카카오" },
  { brand: "naver", name: "네이버" },
  { brand: "kakaobank", name: "카카오뱅크" },
];

const CLIENTS: Entry[] = [
  { brand: "upbit", name: "업비트" },
  { brand: "coinone", name: "코인원" },
  { brand: "korbit", name: "코빗" },
];

function LogoRow({
  eyebrow,
  icon: Icon,
  entries,
  delay,
}: {
  eyebrow: string;
  icon: typeof Handshake;
  entries: Entry[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-[#06b6d4]" />
        <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[#1e3a5f]">
          {eyebrow}
        </h3>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-5">
        {entries.map((e) => (
          <div key={e.brand} className="flex w-full flex-col gap-3">
            <BrandLogo brand={e.brand} size="lg" />
            <span className="text-center text-sm font-semibold text-slate-600 sm:text-base">
              {e.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#3b82f6]">
            Partners &amp; Clients
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl md:text-5xl">
            국내 대표 기업들이 신뢰합니다
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl"
            style={{ wordBreak: "keep-all" }}
          >
            카카오·네이버·카카오뱅크와의 전략적 파트너십을 기반으로, 국내 주요
            가상자산거래소에 인증 인프라를 제공하고 있습니다.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-12">
          <LogoRow
            eyebrow="인증 사업자 파트너"
            icon={Handshake}
            entries={PARTNERS}
            delay={0}
          />
          <LogoRow
            eyebrow="주요 이용기관"
            icon={Users}
            entries={CLIENTS}
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}
