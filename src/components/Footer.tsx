import Link from "next/link";
import { AtSign, Globe, Link2, Mail, MapPin, Phone } from "lucide-react";

const SERVICES = [
  { href: "/services", label: "본인인증" },
  { href: "/services", label: "전자서명" },
  { href: "/services", label: "전자문서" },
  { href: "/services", label: "통합 인증 API" },
];

const COMPANY = [
  { href: "/about", label: "회사소개" },
  { href: "/portfolio", label: "파트너 & 이용기관" },
  { href: "/contact", label: "문의하기" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-slate-200">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="PLUGnx 홈"
          >
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-white via-[#3b82f6] to-[#06b6d4]" />
            <span className="flex items-baseline text-2xl font-black tracking-tight leading-none">
              <span className="text-white">PLUG</span>
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
                nx
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            디지털 신뢰 인프라를 구축하는
            <br />
            인증 전문 기업입니다. (구 보난자플러그)
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="웹사이트"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#3b82f6]"
            >
              <Globe size={16} />
            </a>
            <a
              href="#"
              aria-label="블로그"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#3b82f6]"
            >
              <AtSign size={16} />
            </a>
            <a
              href="#"
              aria-label="소셜 링크"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#3b82f6]"
            >
              <Link2 size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            서비스
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            회사
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {COMPANY.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            연락처
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#06b6d4]" />
              <span>서울특별시 영등포구 양평로 12, 정오빌딩 6층</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-[#06b6d4]" />
              <a href="tel:+82-2-2632-7774" className="hover:text-white">
                02-2632-7774
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-[#06b6d4]" />
              <a href="mailto:syndrome102@bonanza-plug.co.kr" className="hover:text-white">
                syndrome102@bonanza-plug.co.kr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} PLUGnx Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-white">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
