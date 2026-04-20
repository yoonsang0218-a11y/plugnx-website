"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  FileSignature,
  HeartPulse,
  Mail,
  ShieldCheck,
  UserCheck,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    icon: UserCheck,
    title: "본인인증",
    desc: "사용자의 이름·생년월일·전화번호 또는 이용기관이 보유한 CI 정보로 사용자를 인증하는 서비스입니다. 카카오·네이버·카카오뱅크를 한 번의 연동으로 지원합니다.",
    features: [
      "이름·생년월일·휴대폰 인증",
      "CI 기반 인증",
      "휴대폰 인증 대비 저렴",
      "장애 시 대체 경로 제공",
    ],
  },
  {
    icon: FileSignature,
    title: "전자서명",
    desc: "PC·모바일로 각종 계약서를 확인하고 카카오인증서 또는 네이버 인증서로 전자서명할 수 있는 서비스입니다. 별도 개발 없이 적용 가능합니다.",
    features: [
      "카카오·네이버 인증서",
      "PC / 모바일 지원",
      "계약서·약관 서명",
      "법적 효력 보유",
    ],
  },
  {
    icon: Mail,
    title: "전자문서 (공인전자문서)",
    desc: "각종 통지서·등기 우편을 대체하거나, 전자고지·원스톱 납부 처리가 가능한 서비스입니다. 등기우편과 동일한 법적 효력을 가집니다.",
    features: [
      "등기우편 대체 효력",
      "부인방지·열람 증명",
      "전자고지·원스톱 납부",
      "미열람 재알림 자동화",
    ],
  },
  {
    icon: ShieldCheck,
    title: "통합 인증 툴킷 (API)",
    desc: "카카오·네이버의 주요 인증 API를 하나로 통합한 솔루션. 이용기관이 손쉽게 간편 인증 서비스를 구축할 수 있도록 지원합니다.",
    features: [
      "2~3일 내 연동 완료",
      "자동 암호화·변환",
      "서비스 추가 개발 불필요",
      "장애 시 자동 전환",
    ],
  },
  {
    icon: Briefcase,
    title: "직업인증 (Coming Soon)",
    desc: "변호사·회계사·세무사·의사 등 전문직 대상 직업 인증 서비스를 준비하고 있습니다. 디지털 신뢰 인프라의 새로운 축을 만들어 갑니다.",
    features: [
      "전문직 자격 확인",
      "자격증 기반 인증",
      "업무 매칭·검증",
      "플랫폼 연계 API",
    ],
  },
  {
    icon: HeartPulse,
    title: "건강인증 (Coming Soon)",
    desc: "의료 마이데이터를 활용해 건강 정보를 점수화해 인증하는 서비스. 보험사와 연계해 보험료 할인 등에 활용할 수 있습니다.",
    features: [
      "의료 마이데이터 연동",
      "건강 점수 산출",
      "보험료 할인 연계",
      "개인정보 보호 준수",
    ],
  },
];

const COMPARE = [
  { label: "개발 소요기간", plugnx: "2~3일", self: "최소 30일 이상" },
  { label: "서비스 추가 시 개발", plugnx: "불필요", self: "신규개발" },
  {
    label: "Signed Data 분석",
    plugnx: "자동 암호화",
    self: "암호화 작업 필요",
  },
  { label: "전자서명 변환", plugnx: "자동화", self: "변환 생성 필요" },
  {
    label: "연동 테스트",
    plugnx: "플러그 NX 연동 구간",
    self: "전 구간 테스트 필요",
  },
  {
    label: "유지보수",
    plugnx: "솔루션 업그레이드",
    self: "에러 원인 파악 및 수정",
  },
];

const ROADMAP = [
  {
    step: "현재",
    title: "본인인증·전자서명·전자문서",
    desc: "카카오·네이버·카카오뱅크 등 국내 대표 인증사와 전략적 파트너십을 기반으로 이용기관에 원스톱 서비스를 제공합니다.",
  },
  {
    step: "향후",
    title: "직업인증 서비스",
    desc: "변호사·회계사·세무사·의사 등 전문직 대상 직업 인증을 제공해 디지털 신뢰 인프라를 확장합니다.",
  },
  {
    step: "향후",
    title: "건강인증 서비스",
    desc: "의료 마이데이터 기반의 건강 인증 서비스를 제공하고, 보험사 등과 협업해 활용 범위를 넓혀갑니다.",
  },
];

export default function Services() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] text-white shadow-md">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[#1e3a5f]">
                  {s.title}
                </h3>
                <p
                  className="mt-3 text-base leading-relaxed text-slate-600"
                  style={{ wordBreak: "keep-all" }}
                >
                  {s.desc}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-100 pt-5">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-base text-slate-700"
                    >
                      <CheckCircle2 size={14} className="shrink-0 text-[#06b6d4]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#3b82f6]">
              PLUGnx vs. 자체 개발
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#1e3a5f] sm:text-4xl">
              자체 개발보다 훨씬 빠르고 안전합니다
            </h2>
            <p
              className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl"
              style={{ wordBreak: "keep-all" }}
            >
              플러그 NX의 통합 인증 솔루션은 자체 개발 대비 개발 기간이 대폭
              단축되고, 암호화·전자서명 변환이 자동화되어 제공되며, 유지보수도
              훨씬 용이합니다.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 gap-0 border-b border-slate-100 bg-slate-50 text-base font-bold text-[#1e3a5f]">
              <div className="p-5 text-center">항목</div>
              <div className="bg-[#1e3a5f] p-5 text-center text-white">
                플러그 NX 통합인증
              </div>
              <div className="p-5 text-center">자체 개발</div>
            </div>
            {COMPARE.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 gap-0 text-base ${
                  i !== COMPARE.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className="bg-slate-50/50 p-5 text-center font-semibold text-slate-700">
                  {row.label}
                </div>
                <div className="bg-[#3b82f6]/5 p-5 text-center font-semibold text-[#1e3a5f]">
                  {row.plugnx}
                </div>
                <div className="p-5 text-center text-slate-600">{row.self}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#3b82f6]">
              Roadmap
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#1e3a5f] sm:text-4xl">
              디지털 신뢰 인프라의 확장
            </h2>
            <p
              className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl"
              style={{ wordBreak: "keep-all" }}
            >
              현재 제공하는 인증 서비스를 기반으로, 직업·건강 인증까지
              영역을 확장해 나갑니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ROADMAP.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100"
              >
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                    r.step === "현재"
                      ? "bg-[#06b6d4]/10 text-[#06b6d4]"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {r.step}
                </span>
                <h3 className="mt-3 text-xl font-bold text-[#1e3a5f]">
                  {r.title}
                </h3>
                <p
                  className="mt-3 text-base leading-relaxed text-slate-600"
                  style={{ wordBreak: "keep-all" }}
                >
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-br from-[#1e3a5f] to-[#3b82f6] p-10 text-center text-white sm:p-14">
          <Zap size={32} className="text-[#06b6d4]" />
          <h2 className="text-3xl font-bold sm:text-4xl">
            한 번의 연동으로 모든 인증을
          </h2>
          <p
            className="max-w-xl text-lg leading-relaxed text-slate-200 sm:text-xl"
            style={{ wordBreak: "keep-all" }}
          >
            카카오·네이버·카카오뱅크를 하나의 API로 연결하고, 2~3일 내 서비스에
            통합해 보세요.
          </p>
        </div>
      </section>
    </>
  );
}
