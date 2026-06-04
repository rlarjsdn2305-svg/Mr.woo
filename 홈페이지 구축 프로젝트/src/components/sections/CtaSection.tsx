"use client";

import { useEffect, useRef } from "react";

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 px-6 bg-[#7A8B5E]" id="contact" ref={sectionRef}>
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-40 text-center shadow-2xl relative overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EDF1E8] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#3C3A36] mb-8 relative z-10">지금 당장 완벽하지 않아도 됩니다.</h2>
        <p className="text-lg text-[#7D7468] mb-12 leading-relaxed relative z-10">
          어떻게 시작해야 할지 모르겠어도, 통증이 있어도, 오랫동안 운동을 못 했어도 괜찮습니다. 첫 상담은 아무 부담 없이 지금 상태와 원하는 것을 이야기 나누는 시간입니다. 평가하거나 판단하는 자리가 아닙니다. 지금 어디 있든, 거기서 시작합니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left relative z-10">
          <div className="flex items-start gap-3">
            <i className="ph-fill ph-check-circle text-[#7A8B5E] text-xl mt-1"></i>
            <span className="text-sm font-semibold text-[#4A453F]">첫 상담은 무료입니다.</span>
          </div>
          <div className="flex items-start gap-3">
            <i className="ph-fill ph-check-circle text-[#7A8B5E] text-xl mt-1"></i>
            <span className="text-sm font-semibold text-[#4A453F]">실제 수업 체험 세션 포함</span>
          </div>
          <div className="flex items-start gap-3">
            <i className="ph-fill ph-check-circle text-[#7A8B5E] text-xl mt-1"></i>
            <span className="text-sm font-semibold text-[#4A453F]">등록을 강요하지 않습니다.</span>
          </div>
        </div>
        <a
          href="https://open.kakao.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-12 py-6 bg-[#7A8B5E] text-white rounded-full font-bold text-xl hover:bg-[#5C6B47] transition-all transform hover:scale-105 shadow-xl relative z-10"
        >
          카카오 오픈채팅으로 상담 신청하기 <i className="ph ph-arrow-right"></i>
        </a>
        <p className="mt-12 text-sm text-[#9B9185] relative z-10">인천 주안 · 간석역 인근 · 1:1 맞춤 운동 · 영양 · 생활습관 관리</p>
      </div>
    </section>
  );
}
