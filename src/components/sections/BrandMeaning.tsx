"use client";

import { motion } from "framer-motion";
import {
  ChevronsRight,
  Infinity as InfinityIcon,
  Network,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Meaning = {
  letter: string;
  word: string;
  korean: string;
  subtitle: string;
  desc: string;
  icon: LucideIcon;
};

const MEANINGS: Meaning[] = [
  {
    letter: "N",
    word: "Next",
    korean: "진보",
    subtitle: "Progression",
    desc: "다음 세대로 나아가는 진보. 고여 있지 않고 끊임없이 한 걸음 더 먼저 움직입니다.",
    icon: ChevronsRight,
  },
  {
    letter: "N",
    word: "Nexus",
    korean: "허브",
    subtitle: "Connection",
    desc: "모든 것이 연결되는 중심. 사람·기술·서비스가 만나는 허브가 되고자 합니다.",
    icon: Network,
  },
  {
    letter: "N",
    word: "Nova",
    korean: "혁신",
    subtitle: "Innovation",
    desc: "새롭게 빛나는 혁신. 익숙함을 뒤집고 완전히 새로운 가능성을 제시합니다.",
    icon: Sparkles,
  },
  {
    letter: "X",
    word: "X",
    korean: "교차 · 무한",
    subtitle: "Unknown · Infinity",
    desc: "미지의 가능성, 무한한 확장, 모든 것이 만나는 교차점. 정해지지 않아 더 커지는 값.",
    icon: InfinityIcon,
  },
];

export default function BrandMeaning() {
  return (
    <section className="relative overflow-hidden bg-[#07101f] text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 45% at 15% 20%, rgba(59,130,246,0.35) 0, transparent 60%), radial-gradient(55% 40% at 85% 80%, rgba(6,182,212,0.28) 0, transparent 60%), radial-gradient(40% 30% at 50% 50%, rgba(30,58,95,0.5) 0, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/60 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/60 to-transparent"
      />

      <div className="container-page relative py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 backdrop-blur">
            <Sparkles size={14} /> Brand Meaning · 사명의 뜻
          </span>

          <div
            className="mt-10 flex items-baseline justify-center whitespace-nowrap"
            style={{ wordBreak: "keep-all" }}
          >
            <span className="text-[4rem] font-black leading-none tracking-tighter sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem]">
              PLUG
            </span>
            <span className="ml-3 bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#06b6d4] bg-clip-text text-[4rem] font-black leading-none tracking-tighter text-transparent sm:ml-4 sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem]">
              NX
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 sm:text-sm">
            <span>Connection</span>
            <span className="text-[#06b6d4]">×</span>
            <span>Next Generation</span>
            <span className="text-[#06b6d4]">×</span>
            <span>Infinity</span>
          </div>

          <p
            className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl md:text-2xl"
            style={{ wordBreak: "keep-all" }}
          >
            <span className="font-bold text-white">PLUG</span>
            <span className="text-slate-400"> — </span>
            <span>연결. 사람과 기술, 그리고 가능성을 잇는 매개.</span>
            <br />
            <span className="font-bold text-white">NX</span>
            <span className="text-slate-400"> — </span>
            <span>다음 세대, 교차점, 무한한 확장의 약속.</span>
          </p>
        </motion.div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MEANINGS.map((m, i) => (
            <motion.article
              key={m.word}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#06b6d4]/40 hover:bg-white/[0.06]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-14 select-none text-[14rem] font-black leading-none tracking-tighter text-white/[0.06] transition-all duration-500 group-hover:text-white/[0.1]"
              >
                {m.letter}
              </span>

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#06b6d4]">
                  <m.icon size={20} />
                </div>

                <h3 className="mt-7 whitespace-nowrap text-4xl font-black tracking-tighter text-white sm:text-5xl">
                  {m.word}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#06b6d4]">
                  <span>{m.korean}</span>
                  <span className="text-white/30">·</span>
                  <span>{m.subtitle}</span>
                </div>

                <p
                  className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg"
                  style={{ wordBreak: "keep-all" }}
                >
                  {m.desc}
                </p>
              </div>

              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-10 text-center backdrop-blur-sm sm:p-14">
            <div
              aria-hidden
              className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent"
            />
            <p
              className="text-xl font-semibold leading-relaxed sm:text-2xl md:text-3xl"
              style={{ wordBreak: "keep-all" }}
            >
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#06b6d4] bg-clip-text text-transparent">
                PLUGnx
              </span>
              <span className="text-white">는 </span>
              <span className="font-black text-white">연결(Plug)</span>
              <span className="text-slate-300">을 통해 </span>
              <span className="font-black text-white">다음 세대의 무한한 가능성</span>
              <span className="text-slate-300">을 여는 기업입니다.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
