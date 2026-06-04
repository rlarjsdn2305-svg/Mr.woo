"use client";

import { useEffect, useRef } from "react";

export default function ServicesSection() {
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
    <section className="py-32 px-6" id="services" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl font-bold text-[#3C3A36] mb-6">관리는 운동 시간 안에서만 이루어지지 않습니다.</h2>
          <p className="text-[#7D7468] text-lg">수업 이후의 시간, 식사, 수면, 일상까지 연결되어야 비로소 변화가 이어집니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          <div className="service-card p-10 bg-white rounded-40 border border-[#E2DCD0] transition-all">
            <div className="w-16 h-16 bg-[#EDF1E8] rounded-2xl flex items-center justify-center mb-8">
              <i className="ph ph-clock-countdown text-3xl text-[#7A8B5E]"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#3C3A36] mb-6">50분 1:1 수업</h3>
            <p className="text-[#4A453F] leading-relaxed">단순히 함께 운동하는 시간이 아닙니다. 당신의 움직임 패턴, 체력 수준, 컨디션을 매 수업마다 확인하고 그날 가장 필요한 자극을 정확하게 전달합니다.</p>
          </div>
          <div className="service-card p-10 bg-white rounded-40 border border-[#E2DCD0] transition-all">
            <div className="w-16 h-16 bg-[#F5F1EA] rounded-2xl flex items-center justify-center mb-8">
              <i className="ph ph-chat-circle-dots text-3xl text-[#D4A574]"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#3C3A36] mb-6">소통을 위한 커뮤니티 톡방</h3>
            <p className="text-[#4A453F] leading-relaxed">수업이 없는 날에도 연결되어 있습니다. 식사 사진, 컨디션 공유, 궁금한 점을 언제든 물어볼 수 있고 빠른 피드백으로 혼자 방향을 잃지 않도록 합니다.</p>
          </div>
          <div className="service-card p-10 bg-white rounded-40 border border-[#E2DCD0] transition-all">
            <div className="w-16 h-16 bg-[#F0E9DF] rounded-2xl flex items-center justify-center mb-8">
              <i className="ph ph-device-mobile text-3xl text-[#C17A5F]"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#3C3A36] mb-6">모바일 관리 일지</h3>
            <p className="text-[#4A453F] leading-relaxed">내가 지금 어떻게 달라지고 있는지, 수치와 기록으로 직접 확인할 수 있습니다. 기억이 아닌 데이터로 철저하게 관리하고 분석합니다.</p>
          </div>
          <div className="service-card p-10 bg-white rounded-40 border border-[#E2DCD0] transition-all">
            <div className="w-16 h-16 bg-[#EDF1E8] rounded-2xl flex items-center justify-center mb-8">
              <i className="ph ph-file-pdf text-3xl text-[#7A8B5E]"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#3C3A36] mb-6">PTD 파일 및 수료증 제공</h3>
            <p className="text-[#4A453F] leading-relaxed">수업 중 배운 운동 방법과 나만의 맞춤 프로그램을 언제든 다시 꺼내볼 수 있는 디지털 파일로 드립니다. 수업 후 홀로서기가 가능하도록 돕습니다.</p>
          </div>
          <div className="service-card p-10 bg-white rounded-40 border border-[#E2DCD0] transition-all">
            <div className="w-16 h-16 bg-[#F5F1EA] rounded-2xl flex items-center justify-center mb-8">
              <i className="ph ph-users text-3xl text-[#8B6F47]"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#3C3A36] mb-6">1:1 맞춤 심층 상담</h3>
            <p className="text-[#4A453F] leading-relaxed">처음 만남부터 지금까지의 변화를 정기적으로 짚어봅니다. 잘 되고 있는 것, 막히는 것, 다음 방향을 함께 정리하며 일방적 지시가 아닌 대화로 만들어갑니다.</p>
          </div>
          <div className="service-card p-10 bg-white rounded-40 border border-[#E2DCD0] transition-all">
            <div className="w-16 h-16 bg-[#F0E9DF] rounded-2xl flex items-center justify-center mb-8">
              <i className="ph ph-book-open text-3xl text-[#A3B08C]"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#3C3A36] mb-6">수업 교보재 제공</h3>
            <p className="text-[#4A453F] leading-relaxed">동작 설명, 식습관 가이드, 생활습관 체크리스트 등 수업에서 다루는 핵심 내용을 정리한 자료를 드립니다. 수업 후 홀로서기가 가능하도록 돕습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
