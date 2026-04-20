"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#0f1e35] p-10 text-center text-white shadow-2xl sm:p-16"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 10%, #3b82f6 0, transparent 40%), radial-gradient(circle at 90% 90%, #06b6d4 0, transparent 40%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              인증 연동, 2~3일이면
              <br className="sm:hidden" /> 충분합니다
            </h2>
            <p
              className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl"
              style={{ wordBreak: "keep-all" }}
            >
              한 번의 통합 API로 카카오·네이버·카카오뱅크 인증을 모두 연결하세요.
              연동 상담과 견적을 무료로 도와드립니다.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1e3a5f] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                무료 상담 신청
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href="tel:+82-2-2632-7774"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
              >
                02-2632-7774
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
