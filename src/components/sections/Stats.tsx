"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "5,275만", label: "2025년 인증 중개 건수" },
  { value: "월 440만", label: "월 평균 인증 처리" },
  { value: "1위", label: "가상자산 인증 중개" },
  { value: "4년 연속", label: "영업이익 흑자 (22–25)" },
];

export default function Stats() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 sm:p-8"
            >
              <div className="whitespace-nowrap text-3xl font-black tracking-tighter text-[#1e3a5f] sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-[#1e3a5f] to-[#3b82f6] bg-clip-text text-transparent">
                  {s.value}
                </span>
              </div>
              <div
                className="mt-3 text-base font-medium text-slate-600 sm:text-lg"
                style={{ wordBreak: "keep-all" }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
