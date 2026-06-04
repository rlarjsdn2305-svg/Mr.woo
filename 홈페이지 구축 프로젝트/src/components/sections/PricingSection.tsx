"use client";

import { useEffect, useRef } from "react";

export default function PricingSection() {
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
    <section id="pricing" className="py-32 px-6 bg-[#F5F1EA]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EDF1E8] rounded-full mb-6">
            <i className="ph ph-tag text-[#7A8B5E]"></i>
            <span className="text-xs font-bold text-[#7A8B5E] uppercase tracking-widest">Investment for Yourself</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3C3A36] mb-6">당신의 일상을 바꾸는 가치</h1>
          <p className="text-[#7D7468] text-lg max-w-2xl mx-auto">목표에 맞는 최적의 프로그램을 선택해 보세요.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* 스타터 */}
          <div className="pricing-card bg-white p-10 rounded-40 border border-[#E2DCD0] flex flex-col reveal">
            <h3 className="text-xl font-bold text-[#3C3A36] mb-2">스타터 (10회)</h3>
            <p className="text-sm text-[#7D7468] mb-8">기본기를 다지는 시작</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-[#3C3A36]">₩880,000</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-[#4A453F]">
                <i className="ph ph-check-circle text-[#7A8B5E] text-xl"></i>상세 체형 분석 (FMS)
              </li>
              <li className="flex items-center gap-3 text-[#4A453F]">
                <i className="ph ph-check-circle text-[#7A8B5E] text-xl"></i>기본 대근육 운동 숙지
              </li>
              <li className="flex items-center gap-3 text-[#4A453F]">
                <i className="ph ph-check-circle text-[#7A8B5E] text-xl"></i>기본 식단 가이드 제공
              </li>
            </ul>
            <a
              href="https://open.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 text-center border border-[#7A8B5E] text-[#7A8B5E] rounded-full font-bold hover:bg-[#7A8B5E] hover:text-white transition-colors"
            >
              신청하기
            </a>
          </div>

          {/* 베이직 (추천) */}
          <div className="pricing-card bg-white p-10 rounded-40 border-2 border-[#7A8B5E] flex flex-col relative reveal shadow-xl">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#7A8B5E] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              추천 ⭐
            </div>
            <h3 className="text-xl font-bold text-[#3C3A36] mb-2">베이직 (20회)</h3>
            <p className="text-sm text-[#7D7468] mb-8">안정적인 습관 형성</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-[#3C3A36]">₩1,580,000</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-[#4A453F]">
                <i className="ph ph-check-circle text-[#7A8B5E] text-xl"></i>데일리 식단 1:1 피드백
              </li>
              <li className="flex items-center gap-3 text-[#4A453F]">
                <i className="ph ph-check-circle text-[#7A8B5E] text-xl"></i>개인 맞춤형 운동 루틴 설계
              </li>
              <li className="flex items-center gap-3 text-[#4A453F]">
                <i className="ph ph-check-circle text-[#7A8B5E] text-xl"></i>체성분 변화 분석 리포트
              </li>
              <li className="flex items-center gap-3 text-[#4A453F]">
                <i className="ph ph-check-circle text-[#7A8B5E] text-xl"></i>컨디셔닝 케어 포함
              </li>
            </ul>
            <a
              href="https://open.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 text-center bg-[#7A8B5E] text-white rounded-full font-bold hover:bg-[#5C6B47] transition-all transform hover:scale-[1.02]"
            >
              신청하기
            </a>
          </div>

          {/* 프리미엄 */}
          <div className="pricing-card bg-white p-10 rounded-40 border border-[#E2DCD0] flex flex-col reveal">
            <h3 className="text-xl font-bold text-[#3C3A36] mb-2">프리미엄 (40회)</h3>
            <p className="text-sm text-[#7D7468] mb-8">완벽한 변화와 유지</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-[#3C3A36]">₩2,800,000</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-[#4A453F]">
                <i className="ph ph-check-circle text-[#7A8B5E] text-xl"></i>바디프로필 촬영 전담 서포트
              </li>
              <li className="flex items-center gap-3 text-[#4A453F]">
                <i className="ph ph-check-circle text-[#7A8B5E] text-xl"></i>라이프스타일 토탈 코칭
              </li>
              <li className="flex items-center gap-3 text-[#4A453F]">
                <i className="ph ph-check-circle text-[#7A8B5E] text-xl"></i>종료 후 6개월 사후 관리
              </li>
            </ul>
            <a
              href="https://open.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 text-center border border-[#7A8B5E] text-[#7A8B5E] rounded-full font-bold hover:bg-[#7A8B5E] hover:text-white transition-colors"
            >
              신청하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
