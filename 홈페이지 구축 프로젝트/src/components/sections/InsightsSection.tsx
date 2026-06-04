"use client";

import { useEffect, useRef } from "react";

export default function InsightsSection() {
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
    <section id="insights" className="py-32 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F3] border border-[#E2DCD0] rounded-full mb-8">
            <i className="ph ph-book-open text-[#8E9775]"></i>
            <span className="text-sm font-semibold text-[#4A453F]">건강한 삶을 위한 통찰</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C3A36] mb-6">Insights Hub</h2>
          <p className="text-lg text-[#7D7468]">당신의 일상에 즉시 적용할 수 있는 가이드를 전합니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {/* Card 1 */}
          <div className="blog-card bg-white rounded-40 border border-[#E2DCD0] overflow-hidden flex flex-col">
            <div className="h-64 bg-[#F0E9DF] flex items-center justify-center">
              <i className="ph ph-bowl-food text-7xl text-[#D4A574] opacity-50"></i>
            </div>
            <div className="p-8 flex-grow">
              <div className="text-xs font-bold text-[#7A8B5E] uppercase tracking-wider mb-3">Nutrition</div>
              <h3 className="text-xl font-bold mb-4 text-[#3C3A36]">탄수화물, 무조건 끊어야 할까요?</h3>
              <p className="text-sm text-[#7D7468] leading-relaxed mb-6">식단 조절을 시작할 때 가장 먼저 고민하는 탄수화물. 무조건적인 제한보다 효율적인 섭취 타이밍과 &lsquo;착한&rsquo; 탄수화물 선택법이 중요합니다.</p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#7A8B5E] group/link">
                상세 보기 <i className="ph ph-caret-right text-xs"></i>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="blog-card bg-white rounded-40 border border-[#E2DCD0] overflow-hidden flex flex-col">
            <div className="h-64 bg-[#E8EDE3] flex items-center justify-center">
              <i className="ph ph-plant text-7xl text-[#8E9775] opacity-50"></i>
            </div>
            <div className="p-8 flex-grow">
              <div className="text-xs font-bold text-[#7A8B5E] uppercase tracking-wider mb-3">Mindset</div>
              <h3 className="text-xl font-bold mb-4 text-[#3C3A36]">실패하지 않는 시작의 힘</h3>
              <p className="text-sm text-[#7D7468] leading-relaxed mb-6">작심삼일로 끝나는 이유는 의지력이 부족해서가 아닙니다. 뇌의 거부감을 최소화하는 &lsquo;Tiny Habit&rsquo; 전략을 통해 자연스럽게 습관을 만드는 법을 소개합니다.</p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#7A8B5E] group/link">
                상세 보기 <i className="ph ph-caret-right text-xs"></i>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="blog-card bg-white rounded-40 border border-[#E2DCD0] overflow-hidden flex flex-col">
            <div className="h-64 bg-[#F5F1EA] flex items-center justify-center">
              <i className="ph ph-barbell text-7xl text-[#7D7468] opacity-50"></i>
            </div>
            <div className="p-8 flex-grow">
              <div className="text-xs font-bold text-[#7A8B5E] uppercase tracking-wider mb-3">Training</div>
              <h3 className="text-xl font-bold mb-4 text-[#3C3A36]">데드리프트 교정 가이드</h3>
              <p className="text-sm text-[#7D7468] leading-relaxed mb-6">허리 통증의 주범이 되는 잘못된 데드리프트 자세. &lsquo;힙 힌지&rsquo;의 개념부터 발바닥 지지까지, 부상 없이 효과적으로 운동하는 핵심 포인트를 정리했습니다.</p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#7A8B5E] group/link">
                상세 보기 <i className="ph ph-caret-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
