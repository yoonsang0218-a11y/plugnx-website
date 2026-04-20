import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Portfolio from "@/components/portfolio/Portfolio";

export const metadata: Metadata = {
  title: "파트너 & 이용기관",
  description:
    "카카오·네이버·카카오뱅크 파트너십과 업비트·코인원·코빗 등 주요 가상자산거래소에 공급한 인증 인프라 사례를 소개합니다.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners & Clients"
        title="국내 대표 기업들과 함께합니다"
        description="인증 사업자 파트너와 주요 이용기관, 그리고 실제 도입 사례로 검증된 성과를 확인해 보세요."
      />
      <Portfolio />
    </>
  );
}
