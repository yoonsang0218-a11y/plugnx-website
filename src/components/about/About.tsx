"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  Brain,
  Building2,
  CreditCard,
  Database,
  Eye,
  Factory,
  Globe,
  Heart,
  Landmark,
  Megaphone,
  Network,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Truck,
} from "lucide-react";
import BrandLogo, { type BrandKey } from "@/components/BrandLogo";

const PARTNER_BRANDS: { brand: BrandKey; name: string }[] = [
  { brand: "kakao", name: "카카오" },
  { brand: "naver", name: "네이버" },
  { brand: "kakaobank", name: "카카오뱅크" },
];
const CLIENT_BRANDS: { brand: BrandKey; name: string }[] = [
  { brand: "upbit", name: "업비트" },
  { brand: "coinone", name: "코인원" },
  { brand: "korbit", name: "코빗" },
];

const VISIONS = [
  {
    icon: Target,
    title: "미션",
    body: "디지털 신뢰 인프라를 구축해 모든 개인·기업이 안전하게 연결될 수 있도록 돕습니다.",
  },
  {
    icon: Eye,
    title: "비전",
    body: "디지털 금융 생태계의 필수 인증 인프라로 자리 잡고, 금융·핀테크·Web3를 넘어 직업·건강까지 확장합니다.",
  },
  {
    icon: Heart,
    title: "가치",
    body: "정직한 파트너십, 기술로 증명하는 신뢰, 이용기관과 사용자 모두의 경험을 함께 생각합니다.",
  },
];

const OVERVIEW = [
  { label: "설립", value: "2022년 1월" },
  { label: "본사", value: "서울 영등포구 양평로 12 정오빌딩 6층" },
  {
    label: "제공 서비스",
    value: "본인인증 · 전자서명 · 전자문서",
  },
  { label: "2025년 매출", value: "14.6억원" },
  { label: "2025년 영업이익", value: "7.7억원" },
  { label: "2025년 인증 중개", value: "연간 5,275만 건 (월평균 440만)" },
];

const TIMELINE = [
  {
    year: "2022",
    title: "보난자플러그 설립",
    desc: "보난자그룹의 디지털 신뢰 인프라 전담 법인으로 출범했습니다.",
  },
  {
    year: "2022",
    title: "본인인증·전자서명 서비스 출시",
    desc: "카카오·네이버 인증 API를 통합한 간편 인증 서비스를 런칭했습니다.",
  },
  {
    year: "2023",
    title: "가상자산거래소 인증 확대",
    desc: "업비트를 시작으로 주요 거래소에 인증 서비스를 공급하기 시작했습니다.",
  },
  {
    year: "2024",
    title: "인증 중개 5,000만 건 돌파",
    desc: "24년 한 해 5,038만 건의 인증을 중개하며 가상자산 업계 1위를 확립했습니다.",
  },
  {
    year: "2025",
    title: "코인원·코빗까지 이용기관 확대",
    desc: "국내 주요 가상자산거래소에 폭넓게 인증 인프라를 공급했습니다.",
  },
  {
    year: "2026",
    title: "PLUGnx 리브랜드 · 직업/건강 인증 준비",
    desc: "리브랜드와 함께 전문직 직업 인증, 의료 마이데이터 기반 건강 인증을 준비합니다.",
  },
];

const PARENT = {
  icon: Factory,
  name: "보난자팩토리",
  en: "Bonanza Factory",
  role: "보난자그룹 · 모회사 (지주)",
  body: "디지털자산과 금융의 연결고리를 만드는 디지털 자산 규제기술(Reg-Tech) 전문 회사. 2017년 설립 이래 가상자산사업자와 금융회사 간 안전한 거래를 지원하며, 그룹 전체의 전략·신사업을 설계합니다.",
  highlights: [
    {
      icon: ShieldCheck,
      label: "Compliance",
      desc: "디지털자산 AML/FDS 컴플라이언스 솔루션",
    },
    {
      icon: CreditCard,
      label: "Payment",
      desc: "지급결제 비즈니스 지원 솔루션",
    },
    {
      icon: Network,
      label: "Authentication",
      desc: "디지털 인증·서명 솔루션",
    },
    {
      icon: Database,
      label: "Data",
      desc: "디지털자산 투자정보 데이터 솔루션",
    },
    {
      icon: Truck,
      label: "IoT",
      desc: "스마트 물류 솔루션",
    },
    {
      icon: Brain,
      label: "Blockchain &amp; AI",
      desc: "블록체인 데이터 · 인공지능 솔루션",
    },
  ],
  flagship: {
    name: "TranSafer",
    desc: "실명계좌 기반 AML/FDS 원화 입출금 검증 솔루션. 업비트·케이뱅크, 코인원·카카오뱅크 등 주요 거래소가 도입.",
  },
};

type GroupMember = {
  icon: typeof ShieldCheck;
  name: string;
  en: string;
  role: string;
  body: string;
  points: string[];
  gradient: string;
  highlight?: boolean;
};

const GROUP: GroupMember[] = [
  {
    icon: ShieldCheck,
    name: "PLUGnx",
    en: "PLUGnx · 구 보난자플러그",
    role: "디지털 인증 · 신뢰 인프라",
    body: "본인인증·전자서명·전자문서를 제공하는 인증 전문 법인. 카카오·네이버·카카오뱅크와의 전략적 파트너십을 기반으로, 국내 주요 가상자산거래소에 인증 인프라를 공급합니다.",
    points: [
      "통합 인증 API",
      "가상자산 인증 업계 1위",
      "연 5,275만 건 인증 중개",
      "직업·건강 인증 확장",
    ],
    gradient: "from-[#1e3a5f] to-[#3b82f6]",
    highlight: true,
  },
  {
    icon: Database,
    name: "보난자랩",
    en: "Bonanza Lab · dayfin.co",
    role: "디지털자산 데이터 솔루션",
    body: "디지털자산 특화 데이터 솔루션 DayFin을 제공하는 법인. 온체인·오프체인 데이터를 결합한 투자 인텔리전스로, 기관·개인 투자자의 의사결정을 돕습니다.",
    points: [
      "DayFin 데이터 플랫폼",
      "온·오프체인 데이터 통합",
      "투자정보·리서치",
      "B2B · B2C 서비스",
    ],
    gradient: "from-[#3b82f6] to-[#06b6d4]",
  },
  {
    icon: Brain,
    name: "트라버스",
    en: "Traverse · traverse.kr",
    role: "블록체인 · AI 솔루션",
    body: "블록체인 데이터 분석과 AI를 결합한 기술 솔루션을 연구·개발합니다. 그룹 전반의 AI/ML 역량과 온체인 분석 파이프라인을 책임지는 기술 법인.",
    points: [
      "블록체인 데이터 분석",
      "AI/ML 모델링",
      "스마트컨트랙트 모니터링",
      "기술 R&D",
    ],
    gradient: "from-[#06b6d4] to-[#3b82f6]",
  },
  {
    icon: Megaphone,
    name: "바이스",
    en: "Vice",
    role: "마케팅 · 지급결제",
    body: "마케팅 솔루션 기획·개발과 지급·결제대행 서비스를 운영합니다. 그룹 계열사의 고객 채널·커머스·결제 워크플로우를 통합 지원합니다.",
    points: [
      "마케팅 솔루션",
      "지급·결제 대행",
      "커머스 운영 지원",
      "그룹 통합 프로모션",
    ],
    gradient: "from-[#1e3a5f] to-[#06b6d4]",
  },
  {
    icon: Truck,
    name: "이터니티솔루션",
    en: "Eternity Solution · eternitys.co.kr",
    role: "IoT · 스마트 물류",
    body: "IoT를 접목한 스마트 물류 솔루션을 제공하는 법인. 센서·네트워크·데이터를 결합해 물류 현장의 가시성과 효율을 끌어올립니다.",
    points: [
      "IoT 디바이스 · 센서",
      "스마트 물류 플랫폼",
      "실시간 자산 추적",
      "물류 데이터 분석",
    ],
    gradient: "from-[#3b82f6] to-[#1e3a5f]",
  },
];

const EXECUTIVES = [
  {
    name: "김영석",
    role: "보난자그룹 대표",
    color: "from-[#1e3a5f] to-[#3b82f6]",
    bio: [
      "現) 보난자팩토리 대표이사",
      "前) 다음커뮤니케이션 증권 총괄",
      "前) 중국 CCTV 금융사업 총괄 본부장",
      "前) 이베스트투자증권 컴플라이언스 총괄",
      "다수의 정부기관 자문위원 역임 (금융위·경찰청 등)",
    ],
  },
  {
    name: "이원형",
    role: "PLUGnx 대표 (보난자플러그 대표이사)",
    color: "from-[#3b82f6] to-[#06b6d4]",
    bio: [
      "現) 보난자플러그 대표이사",
      "前) IBK투자증권 리테일 영업 총괄",
      "前) 이베스트투자증권 리테일 영업 총괄",
    ],
  },
];

const FINANCIALS = [
  { year: "22년", revenue: 7.2, profit: 3.1, count: 2375 },
  { year: "23년", revenue: 10.6, profit: 4.9, count: 3706 },
  { year: "24년", revenue: 13.9, profit: 6.7, count: 5038 },
  { year: "25년", revenue: 14.6, profit: 7.7, count: 5275 },
];

const MAX_REVENUE = Math.max(...FINANCIALS.map((f) => f.revenue));
const MAX_PROFIT = Math.max(...FINANCIALS.map((f) => f.profit));
const MAX_COUNT = Math.max(...FINANCIALS.map((f) => f.count));

function BarChart({
  title,
  unit,
  data,
  max,
  accentClass,
}: {
  title: string;
  unit: string;
  data: { year: string; value: number }[];
  max: number;
  accentClass: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-baseline justify-between">
        <h4 className="text-sm font-bold text-[#1e3a5f]">{title}</h4>
        <span className="text-xs text-slate-500">{unit}</span>
      </div>
      <div className="mt-6 flex h-40 items-end gap-3">
        {data.map((d) => (
          <div key={d.year} className="flex flex-1 flex-col items-center gap-2">
            <span className="text-xs font-bold text-[#1e3a5f]">
              {d.value.toLocaleString()}
            </span>
            <div
              className={`w-full rounded-t-md ${accentClass}`}
              style={{
                height: `${Math.max(8, (d.value / max) * 100)}%`,
              }}
            />
            <span className="text-xs font-medium text-slate-500">{d.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#3b82f6]">
              About PLUGnx
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl md:text-5xl">
              디지털 신뢰 인프라를 구축하는 인증 전문 기업
            </h2>
            <p
              className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl"
              style={{ wordBreak: "keep-all" }}
            >
              PLUGnx(구 보난자플러그)는 국내 대표 인증 사업자인
              <strong className="text-[#1e3a5f]"> 카카오·네이버·카카오뱅크</strong>와의
              전략적 파트너십을 기반으로, 안전하고 확장 가능한 고객 인증 및 증명
              체계를 제공합니다.
              <br />
              <br />
              업비트·코인원·코빗 등 국내 주요 가상자산거래소에 인증 서비스를
              공급하며, 빠르게 성장하는 디지털 자산 시장에서 핵심 인프라 역할을
              수행하고 있습니다. 축적된 운영 경험과 기술력을 바탕으로
              금융·핀테크·Web3 영역까지 확장 가능한 신뢰 플랫폼으로 성장하고
              있습니다.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden rounded-2xl bg-slate-100 sm:grid-cols-2">
            {OVERVIEW.map((o) => (
              <div key={o.label} className="bg-white p-7">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">
                  {o.label}
                </div>
                <div
                  className="mt-2 text-lg font-bold text-[#1e3a5f] sm:text-xl"
                  style={{ wordBreak: "keep-all" }}
                >
                  {o.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm sm:p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#3b82f6]">
                    전략적 파트너
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {PARTNER_BRANDS.map((b) => (
                      <div key={b.brand} className="flex w-full flex-col gap-2">
                        <BrandLogo brand={b.brand} aspectRatio="3/1" />
                        <span className="text-center text-xs font-semibold text-slate-600 sm:text-sm">
                          {b.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:border-l md:border-slate-200 md:pl-8">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#3b82f6]">
                    주요 이용기관
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {CLIENT_BRANDS.map((b) => (
                      <div key={b.brand} className="flex w-full flex-col gap-2">
                        <BrandLogo brand={b.brand} aspectRatio="3/1" />
                        <span className="text-center text-xs font-semibold text-slate-600 sm:text-sm">
                          {b.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {VISIONS.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1e3a5f]/5 text-[#1e3a5f]">
                  <v.icon size={24} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[#1e3a5f]">
                  {v.title}
                </h3>
                <p
                  className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
                  style={{ wordBreak: "keep-all" }}
                >
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#3b82f6]">
              Bonanza Group
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#1e3a5f] sm:text-4xl">
              보난자그룹의 일원입니다
            </h2>
            <p
              className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl"
              style={{ wordBreak: "keep-all" }}
            >
              PLUGnx(구 보난자플러그)는 모회사인{" "}
              <strong className="text-[#1e3a5f]">보난자팩토리</strong>를 중심으로
              <strong className="text-[#1e3a5f]"> 보난자랩·트라버스·바이스·이터니티솔루션</strong>과
              함께 <strong className="text-[#1e3a5f]">디지털자산 Reg-Tech 그룹</strong>을
              이루고 있습니다.
            </p>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="mt-14 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md"
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#0f1e35] p-8 text-white sm:p-12">
              <div
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 15% 20%, #3b82f6 0, transparent 40%), radial-gradient(circle at 85% 80%, #06b6d4 0, transparent 40%)",
                }}
              />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur">
                    <PARENT.icon size={26} />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full bg-[#06b6d4]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#7dd3fc]">
                      모회사 · Holding
                    </span>
                    <div className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                      {PARENT.name}
                    </div>
                    <div className="text-sm font-medium text-slate-300">
                      {PARENT.en} · {PARENT.role}
                    </div>
                  </div>
                </div>
                <a
                  href="https://bonanza-factory.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
                >
                  <Globe size={14} />
                  bonanza-factory.co.kr
                </a>
              </div>

              <p
                className="relative mt-6 max-w-3xl text-lg leading-relaxed text-slate-200"
                style={{ wordBreak: "keep-all" }}
              >
                {PARENT.body}
              </p>
            </div>

            <div className="p-8 sm:p-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#3b82f6]">
                6대 핵심 사업 영역
              </h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {PARENT.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#1e3a5f] shadow-sm">
                      <h.icon size={20} />
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#1e3a5f]">
                        {h.label}
                      </div>
                      <div
                        className="mt-1 text-sm leading-relaxed text-slate-600"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {h.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#06b6d4]/20 bg-gradient-to-br from-[#06b6d4]/5 to-[#3b82f6]/5 p-6 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#06b6d4] text-white shadow-md">
                  <Boxes size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#06b6d4]">
                    대표 솔루션
                  </div>
                  <div className="mt-1 text-xl font-extrabold text-[#1e3a5f]">
                    {PARENT.flagship.name}
                  </div>
                  <p
                    className="mt-2 text-base leading-relaxed text-slate-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {PARENT.flagship.desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="mt-16">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
                  계열사
                </h3>
                <p className="mt-2 text-base text-slate-600 sm:text-lg">
                  각 영역 전문 법인이 보난자팩토리를 중심으로 시너지를 만듭니다.
                </p>
              </div>
              <span className="hidden shrink-0 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-600 md:inline-block">
                5 Subsidiaries
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {GROUP.map((g, i) => (
                <motion.article
                  key={g.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                    g.highlight
                      ? "border-[#3b82f6]/30 ring-2 ring-[#3b82f6]/10"
                      : "border-slate-100"
                  }`}
                >
                  {g.highlight && (
                    <div className="absolute right-4 top-4 z-10 rounded-full bg-[#1e3a5f] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      Us
                    </div>
                  )}
                  <div
                    className={`flex items-center gap-4 bg-gradient-to-br ${g.gradient} p-6 text-white`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20 backdrop-blur">
                      <g.icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-medium uppercase tracking-widest text-white/80">
                        {g.en}
                      </div>
                      <div className="truncate text-2xl font-extrabold tracking-tight">
                        {g.name}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">
                      {g.role}
                    </div>
                    <p
                      className="mt-3 text-base leading-relaxed text-slate-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {g.body}
                    </p>
                    <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-slate-100 pt-5">
                      {g.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#06b6d4]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#3b82f6]">
              Executive Team
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
              경영진
            </h2>
            <p className="mt-4 text-lg text-slate-600 sm:text-xl">
              금융·IT 업계에서 검증된 리더들이 PLUGnx와 보난자그룹을 이끕니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {EXECUTIVES.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              >
                <div
                  className={`relative flex items-center gap-5 bg-gradient-to-br ${m.color} p-7 text-white`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px]"
                  />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-2xl font-black ring-2 ring-white/30">
                    {m.name.charAt(0)}
                  </div>
                  <div className="relative">
                    <div className="text-xs font-medium uppercase tracking-widest text-white/80">
                      {m.role}
                    </div>
                    <div className="mt-1 text-2xl font-extrabold">{m.name}</div>
                  </div>
                </div>
                <ul className="divide-y divide-slate-100">
                  {m.bio.map((line, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 px-7 py-4 text-base text-slate-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#06b6d4]" />
                      <span style={{ wordBreak: "keep-all" }}>{line}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#3b82f6]">
              Our Journey
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#1e3a5f] sm:text-4xl">
              함께 걸어온 시간
            </h2>
          </div>

          <div className="relative mx-auto mt-14 max-w-3xl">
            <div
              aria-hidden
              className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#3b82f6] to-[#06b6d4] md:left-1/2"
            />
            <ul className="space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.li
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`relative flex items-start gap-5 md:w-1/2 ${
                    i % 2 === 0
                      ? "md:ml-auto md:flex-row md:pl-10"
                      : "md:mr-auto md:flex-row-reverse md:pr-10"
                  }`}
                >
                  <div
                    className={`absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#3b82f6] ring-4 ring-white md:left-auto ${
                      i % 2 === 0 ? "md:-left-1.5" : "md:-right-1.5 md:left-auto"
                    }`}
                  />
                  <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="text-sm font-bold text-[#06b6d4]">
                      {item.year}
                    </div>
                    <h3 className="mt-1 text-xl font-bold text-[#1e3a5f]">
                      {item.title}
                    </h3>
                    <p
                      className="mt-2 text-base leading-relaxed text-slate-600"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#3b82f6]">
              Financials
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#1e3a5f] sm:text-4xl">
              4년 연속 영업이익 흑자
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed text-slate-600 sm:text-xl"
              style={{ wordBreak: "keep-all" }}
            >
              2022년부터 2025년까지 매년 성장세를 기록하며 안정적으로 운영하고
              있습니다. 인증 중개 건수도 이용기관 확대와 함께 지속 증가 중입니다.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <BarChart
              title="매출"
              unit="단위: 억원"
              data={FINANCIALS.map((f) => ({ year: f.year, value: f.revenue }))}
              max={MAX_REVENUE}
              accentClass="bg-[#1e3a5f]"
            />
            <BarChart
              title="영업이익"
              unit="단위: 억원"
              data={FINANCIALS.map((f) => ({ year: f.year, value: f.profit }))}
              max={MAX_PROFIT}
              accentClass="bg-[#3b82f6]"
            />
            <BarChart
              title="인증 중개 건수"
              unit="단위: 만건"
              data={FINANCIALS.map((f) => ({ year: f.year, value: f.count }))}
              max={MAX_COUNT}
              accentClass="bg-[#06b6d4]"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500">
            <span className="inline-flex items-center gap-2">
              <TrendingUp size={14} className="text-[#06b6d4]" />
              매출 22→25: 2배 성장
            </span>
            <span className="inline-flex items-center gap-2">
              <Landmark size={14} className="text-[#06b6d4]" />
              25년 영업이익률 52.7%
            </span>
            <span className="inline-flex items-center gap-2">
              <Building2 size={14} className="text-[#06b6d4]" />
              4년 연속 흑자 유지
            </span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f1e35] py-20 text-white">
        <div className="container-page flex flex-col items-center gap-5 text-center">
          <Rocket size={32} className="text-[#06b6d4]" />
          <h2 className="text-3xl font-bold sm:text-4xl">
            다음 단계, 직업·건강 인증으로 확장합니다
          </h2>
          <p
            className="max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
            style={{ wordBreak: "keep-all" }}
          >
            전문직 직업 인증과 의료 마이데이터 기반 건강 인증을 준비 중입니다.
            PLUGnx는 디지털 신뢰 인프라의 다음 표준을 만듭니다.
          </p>
        </div>
      </section>
    </>
  );
}
