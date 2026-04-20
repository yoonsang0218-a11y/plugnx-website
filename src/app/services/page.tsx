import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/services/Services";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "본인인증·전자서명·전자문서부터 통합 인증 API, 향후 직업·건강 인증까지 플러그 NX의 인증 서비스를 소개합니다.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="모든 인증을 하나의 API로"
        description="본인인증·전자서명·전자문서를 국내 대표 인증사와의 파트너십으로 통합 제공합니다."
      />
      <Services />
    </>
  );
}
