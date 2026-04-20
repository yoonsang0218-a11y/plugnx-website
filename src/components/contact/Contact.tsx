"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const BUDGET_OPTIONS = [
  "1천만원 이하",
  "1~3천만원",
  "3~1억원",
  "1억원 이상",
  "미정",
];

const CATEGORY_OPTIONS = [
  "본인인증 연동",
  "전자서명 연동",
  "전자문서 연동",
  "통합 인증 API (툴킷)",
  "직업/건강 인증 (사전 문의)",
  "제휴 / 파트너십",
  "기타",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] sm:text-4xl">
              연락처 정보
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              궁금한 점이 있으시면 아래 연락처로도 편하게 문의해 주세요.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e3a5f]/5 text-[#1e3a5f]">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-base font-semibold text-[#1e3a5f]">주소</div>
                  <div className="mt-1 text-base text-slate-600">
                    서울특별시 영등포구 양평로 12, 정오빌딩 6층
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e3a5f]/5 text-[#1e3a5f]">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-base font-semibold text-[#1e3a5f]">전화</div>
                  <a
                    href="tel:+82-2-2632-7774"
                    className="mt-1 block text-base text-slate-600 hover:text-[#3b82f6]"
                  >
                    02-2632-7774
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e3a5f]/5 text-[#1e3a5f]">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-base font-semibold text-[#1e3a5f]">이메일</div>
                  <a
                    href="mailto:syndrome102@bonanza-plug.co.kr"
                    className="mt-1 block text-base text-slate-600 hover:text-[#3b82f6]"
                  >
                    syndrome102@bonanza-plug.co.kr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e3a5f]/5 text-[#1e3a5f]">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-base font-semibold text-[#1e3a5f]">
                    운영시간
                  </div>
                  <div className="mt-1 text-base text-slate-600">
                    월 – 금, 09:30 – 18:30 (공휴일 휴무)
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              <iframe
                title="PLUGnx 오피스 지도"
                src="https://maps.google.com/maps?q=%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EC%96%91%ED%8F%89%EB%A1%9C%2012&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10"
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] sm:text-4xl">
                프로젝트 문의
              </h2>
              <p className="mt-3 text-base text-slate-600 sm:text-lg">
                모든 필드는 최대한 상세히 작성해 주시면 더 정확한 답변을 드릴 수
                있습니다.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="이름" required>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="홍길동"
                    className="input"
                  />
                </Field>
                <Field label="회사" required>
                  <input
                    required
                    type="text"
                    name="company"
                    placeholder="회사명"
                    className="input"
                  />
                </Field>
                <Field label="이메일" required>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="input"
                  />
                </Field>
                <Field label="연락처">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="010-0000-0000"
                    className="input"
                  />
                </Field>
                <Field label="문의 유형" required>
                  <select required name="category" className="input" defaultValue="">
                    <option value="" disabled>
                      선택해 주세요
                    </option>
                    {CATEGORY_OPTIONS.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="예상 예산">
                  <select name="budget" className="input" defaultValue="">
                    <option value="" disabled>
                      선택해 주세요
                    </option>
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="문의 내용" required>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    placeholder="프로젝트의 목적, 일정, 참고 사이트 등을 자유롭게 적어 주세요."
                    className="input resize-y"
                  />
                </Field>
              </div>

              <label className="mt-5 flex items-start gap-2 text-sm text-slate-600">
                <input
                  required
                  type="checkbox"
                  name="agree"
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#3b82f6] focus:ring-[#3b82f6]"
                />
                <span>
                  개인정보 수집·이용에 동의합니다. (문의 답변 목적 외 사용되지
                  않습니다)
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1e3a5f] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#3b82f6] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    전송 중…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 size={16} />
                    전송 완료
                  </>
                ) : (
                  <>
                    <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                    문의 제출하기
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  문의가 성공적으로 접수되었습니다. 1 영업일 이내 답변드리겠습니다.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          background: #fff;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: #0f172a;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-[#1e3a5f]">
        {label}
        {required && <span className="ml-1 text-rose-500">*</span>}
      </span>
      {children}
    </label>
  );
}
