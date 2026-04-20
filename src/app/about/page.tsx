import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/about/About";
import BrandMeaning from "@/components/sections/BrandMeaning";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "PLUGnx(구 보난자플러그)의 회사 개요, 경영진, 연혁, 재무현황, 그리고 보난자그룹 구조를 소개합니다.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            디지털 신뢰 인프라,{" "}
            <span className="whitespace-nowrap">
              <span className="font-black">플러그</span>
              <span className="ml-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text font-black text-transparent">
                NX
              </span>
            </span>
          </>
        }
        description="2022년 설립 이후 4년 연속 영업이익 흑자, 가상자산 인증 중개 업계 1위. 보난자그룹의 인증 전문 법인입니다."
      />
      <BrandMeaning />
      <About />
    </>
  );
}
