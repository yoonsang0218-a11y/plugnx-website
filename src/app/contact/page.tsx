import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "문의하기",
  description: "프로젝트 문의와 상담을 편하게 요청해 주세요. 1 영업일 이내 답변드립니다.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="지금 바로 문의하세요"
        description="프로젝트 규모와 관계없이 편하게 연락 주세요. 1 영업일 이내 답변드립니다."
      />
      <Contact />
    </>
  );
}
