"use client";

import { useEffect, useRef } from "react";

export default function TestimonialsSection() {
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
    <section className="py-32 px-6 bg-[#FAF8F3]" id="reviews" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-l-4 border-[#7A8B5E] pl-8 reveal">
          <span className="text-sm font-bold text-[#7A8B5E] uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl font-bold text-[#3C3A36] mt-4 mb-4">실제 회원들의 이야기</h2>
          <p className="text-[#7D7468] text-lg">결과보다 과정을 솔직하게 담았습니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          <div className="bg-white p-10 rounded-40 shadow-sm border border-[#E2DCD0]">
            <div className="flex gap-1 text-[#D4A574] mb-6">
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
            </div>
            <p className="text-[#4A453F] leading-relaxed italic mb-8">&ldquo;운동을 왜 해야 하는지 원리부터 차근차근 알려주셔서 좋았어요. 단순히 동작만 따라 하는 게 아니라 제 몸의 정렬이 어떻게 바뀌고 있는지 스스로 느끼게 됩니다.&rdquo;</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#8E9775] rounded-full flex items-center justify-center text-white font-bold">K</div>
              <div>
                <p className="font-bold text-[#3C3A36]">김OO 회원님</p>
                <p className="text-xs text-[#9B9185]">수강 6개월 / 거북목 교정 및 체력 향상</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-40 shadow-sm border border-[#E2DCD0]">
            <div className="flex gap-1 text-[#D4A574] mb-6">
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
            </div>
            <p className="text-[#4A453F] leading-relaxed italic mb-8">&ldquo;식단 강박이 심했는데 우 트레이너님과 상담하면서 &lsquo;잘 먹는 법&rsquo;을 배웠어요. 스트레스 없이 체중 감량에 성공한 건 이번이 처음입니다.&rdquo;</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D4A574] rounded-full flex items-center justify-center text-white font-bold">L</div>
              <div>
                <p className="font-bold text-[#3C3A36]">이OO 회원님</p>
                <p className="text-xs text-[#9B9185]">수강 3개월 / 건강한 다이어트 및 식습관 개선</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-40 shadow-sm border border-[#E2DCD0]">
            <div className="flex gap-1 text-[#D4A574] mb-6">
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
            </div>
            <p className="text-[#4A453F] leading-relaxed italic mb-8">&ldquo;매일 일지를 통해 피드백을 주시는 정성에 감동했어요. 운동하러 가는 게 숙제가 아니라 나를 위한 선물 같은 시간이 되었습니다.&rdquo;</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-bold">P</div>
              <div>
                <p className="font-bold text-[#3C3A36]">박OO 회원님</p>
                <p className="text-xs text-[#9B9185]">수강 1년 / 바디프로필 성공 및 습관 형성</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
