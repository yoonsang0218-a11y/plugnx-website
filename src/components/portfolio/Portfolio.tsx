"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Coins, Handshake, Landmark, Users } from "lucide-react";
import BrandLogo, { type BrandKey } from "@/components/BrandLogo";

const CATEGORIES = ["전체", "인증 파트너", "이용기관", "도입 사례"] as const;
type Category = (typeof CATEGORIES)[number];

type Project = {
  title: string;
  client: string;
  brand?: BrandKey;
  category: Exclude<Category, "전체">;
  tag: string;
  desc: string;
  gradient: string;
};

const PROJECTS: Project[] = [
  {
    title: "카카오 인증 전 서비스 연동",
    client: "카카오",
    brand: "kakao",
    category: "인증 파트너",
    tag: "Strategic Partner",
    desc: "카카오 인증서 기반 본인인증·전자서명을 통합 툴킷으로 제공. 이용기관 연동 구간을 단축했습니다.",
    gradient: "from-[#1e3a5f] to-[#3b82f6]",
  },
  {
    title: "네이버 인증 통합 API",
    client: "네이버",
    brand: "naver",
    category: "인증 파트너",
    tag: "Strategic Partner",
    desc: "네이버 인증서를 플러그 NX 통합 API에 연결해, 이용기관이 한 번의 연동으로 사용할 수 있도록 지원합니다.",
    gradient: "from-[#3b82f6] to-[#06b6d4]",
  },
  {
    title: "카카오뱅크 인증 파트너십",
    client: "카카오뱅크",
    brand: "kakaobank",
    category: "인증 파트너",
    tag: "Strategic Partner",
    desc: "카카오뱅크 인증을 전자서명·전자문서 워크플로우에 통합해 금융 서비스의 신뢰 인프라를 강화합니다.",
    gradient: "from-[#06b6d4] to-[#3b82f6]",
  },
  {
    title: "업비트 인증 인프라 공급",
    client: "업비트",
    brand: "upbit",
    category: "이용기관",
    tag: "Crypto Exchange",
    desc: "국내 1위 가상자산거래소 업비트에 본인인증·전자서명을 공급. 대량 트래픽에서 안정적으로 운영합니다.",
    gradient: "from-[#1e3a5f] to-[#06b6d4]",
  },
  {
    title: "코인원 인증 인프라 공급",
    client: "코인원",
    brand: "coinone",
    category: "이용기관",
    tag: "Crypto Exchange",
    desc: "코인원 이용자 인증 체계를 통합 API로 제공해 운영 리소스를 크게 절감했습니다.",
    gradient: "from-[#3b82f6] to-[#1e3a5f]",
  },
  {
    title: "코빗 인증 인프라 공급",
    client: "코빗",
    brand: "korbit",
    category: "이용기관",
    tag: "Crypto Exchange",
    desc: "코빗에 본인인증·전자서명을 공급하고, 이용기관 확장과 함께 월 인증 건수를 가파르게 늘렸습니다.",
    gradient: "from-[#06b6d4] to-[#1e3a5f]",
  },
  {
    title: "가상자산 업계 인증 중개 1위",
    client: "Industry Leader",
    category: "도입 사례",
    tag: "Market Leader",
    desc: "2025년 기준 연간 5,275만 건 (월평균 440만 건) 인증을 중개하며 업계 점유율 1위를 유지하고 있습니다.",
    gradient: "from-[#1e3a5f] to-[#3b82f6]",
  },
  {
    title: "자체 개발 대비 개발 기간 10배 단축",
    client: "Enterprise Case",
    category: "도입 사례",
    tag: "Integration Case",
    desc: "자체 개발 30일 → 플러그 NX 연동 2~3일. 암호화·변환까지 자동화된 통합 솔루션으로 전환을 가속합니다.",
    gradient: "from-[#3b82f6] to-[#06b6d4]",
  },
  {
    title: "전자문서 도달률·열람률 개선",
    client: "Financial Case",
    category: "도입 사례",
    tag: "Document Delivery",
    desc: "미열람 고객 대상 재알림 자동화 체계를 구축해 높은 도달률과 법적 효력을 동시에 확보했습니다.",
    gradient: "from-[#06b6d4] to-[#3b82f6]",
  },
];

const CATEGORY_ICON: Record<Exclude<Category, "전체">, typeof Handshake> = {
  "인증 파트너": Handshake,
  이용기관: Coins,
  "도입 사례": Landmark,
};

export default function Portfolio() {
  const [filter, setFilter] = useState<Category>("전체");

  const filtered = useMemo(
    () =>
      filter === "전체"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#3b82f6]/5 px-4 py-1.5 text-xs font-semibold text-[#3b82f6]">
            <Users size={14} />
            파트너 3사 · 이용기관 3사 · 월 440만 건 인증
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === c
                  ? "bg-[#1e3a5f] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => {
            const Icon = CATEGORY_ICON[p.category];
            return (
              <motion.a
                key={`${p.client}-${p.title}`}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient}`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px]"
                  />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1e3a5f]">
                    <Icon size={12} /> {p.category}
                  </div>
                  <div className="absolute right-5 top-5 rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {p.tag}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        {p.brand && (
                          <span className="inline-flex w-20 shrink-0 sm:w-24">
                            <BrandLogo brand={p.brand} size="sm" />
                          </span>
                        )}
                        <span className="truncate">{p.client}</span>
                      </div>
                      <div
                        className="mt-1 text-2xl font-bold tracking-tight"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {p.title}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p
                    className="text-base leading-relaxed text-slate-600"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-slate-500">
            해당 카테고리의 사례가 준비 중입니다.
          </p>
        )}
      </div>
    </section>
  );
}
