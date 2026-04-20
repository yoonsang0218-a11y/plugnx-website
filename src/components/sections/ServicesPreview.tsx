"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileSignature,
  HeartPulse,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const SERVICES = [
  {
    icon: UserCheck,
    title: "본인인증",
    desc: "이름·생년월일·전화번호 또는 CI 정보로 사용자를 안전하게 인증합니다.",
  },
  {
    icon: FileSignature,
    title: "전자서명",
    desc: "카카오·네이버 인증서를 통해 PC·모바일에서 계약서에 서명합니다.",
  },
  {
    icon: Mail,
    title: "전자문서",
    desc: "각종 통지서·등기 우편을 대체하고, 전자고지·원스톱 납부를 지원합니다.",
  },
  {
    icon: ShieldCheck,
    title: "통합 인증 API",
    desc: "카카오·네이버 인증 API를 하나로 통합해 2~3일 내 연동 가능한 툴킷.",
  },
  {
    icon: HeartPulse,
    title: "직업·건강 인증",
    desc: "전문직 직업 인증과 의료 마이데이터 기반 건강 인증을 준비하고 있습니다.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#3b82f6]">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl md:text-5xl">
            제공하는 인증 서비스
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl"
            style={{ wordBreak: "keep-all" }}
          >
            본인인증부터 전자서명, 전자문서까지. 국내 대표 인증사와의 파트너십으로
            한 번의 연동으로 모든 인증을 지원합니다.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-transparent hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] text-white shadow-md">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#1e3a5f]">
                {s.title}
              </h3>
              <p
                className="mt-3 text-base leading-relaxed text-slate-600"
                style={{ wordBreak: "keep-all" }}
              >
                {s.desc}
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#3b82f6] opacity-0 transition group-hover:opacity-100"
              >
                자세히 보기 <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
