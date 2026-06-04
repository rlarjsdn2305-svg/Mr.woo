"use client";

import { useEffect } from "react";

export default function HeroSection() {
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
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden hero-gradient"
      id="home"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="flow-line top-1/4 left-0 w-full h-1/2"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", top: "25%", left: 0 }}
        >
          <path
            d="M-50 300C200 100 500 450 800 200C1100 -50 1300 250 1500 150"
            stroke="var(--green-olive)"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </svg>
        <div className="absolute top-[20%] right-[15%] w-64 h-64 bg-[#E8EDE3] rounded-full blur-3xl opacity-60 floating"></div>
        <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-[#F0E9DF] rounded-full blur-3xl opacity-50 floating-delayed"></div>

        {/* Floating pill badges */}
        <div className="absolute top-[25%] left-[12%] floating px-5 py-2.5 bg-white border border-gray-100 rounded-full shadow-lg flex items-center gap-2 z-10">
          <div className="w-2 h-2 rounded-full bg-[#8E9775]"></div>
          <span className="text-xs font-bold text-[#4A453F]">1:1 PT</span>
        </div>
        <div className="absolute top-[60%] right-[8%] floating-delayed px-5 py-2.5 bg-white border border-gray-100 rounded-full shadow-lg flex items-center gap-2 z-10">
          <div className="w-2 h-2 rounded-full bg-[#D4A574]"></div>
          <span className="text-xs font-bold text-[#4A453F]">맞춤 식단</span>
        </div>
        <div className="absolute bottom-[30%] left-[18%] floating px-5 py-2.5 bg-white border border-gray-100 rounded-full shadow-lg flex items-center gap-2 z-10">
          <div className="w-2 h-2 rounded-full bg-[#C17A5F]"></div>
          <span className="text-xs font-bold text-[#4A453F]">습관 설계</span>
        </div>

        {/* Weekly Progress widget */}
        <div className="absolute top-[40%] right-[18%] w-64 p-5 bg-white/90 backdrop-blur rounded-3xl shadow-xl border border-white/50 floating hidden lg:block z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#7D7468]">Weekly Progress</span>
            <i className="ph ph-dots-three-outline text-[#9B9185]"></i>
          </div>
          <div className="flex items-end gap-2 h-24 mb-4">
            <div className="flex-1 bg-[#F5F1EA] rounded-t-lg" style={{ height: "40%" }}></div>
            <div className="flex-1 bg-[#F5F1EA] rounded-t-lg" style={{ height: "65%" }}></div>
            <div className="flex-1 bg-[#8E9775] rounded-t-lg" style={{ height: "85%" }}></div>
            <div className="flex-1 bg-[#F5F1EA] rounded-t-lg" style={{ height: "30%" }}></div>
            <div className="flex-1 bg-[#F5F1EA] rounded-t-lg" style={{ height: "55%" }}></div>
            <div className="flex-1 bg-[#7A8B5E] rounded-t-lg" style={{ height: "95%" }}></div>
            <div className="flex-1 bg-[#F5F1EA] rounded-t-lg" style={{ height: "20%" }}></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EDF1E8] flex items-center justify-center">
              <i className="ph-fill ph-check-circle text-[#7A8B5E]"></i>
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#3C3A36]">Goal Reached!</p>
              <p className="text-[9px] text-[#7D7468]">Activity level up by 12%</p>
            </div>
          </div>
        </div>

        {/* Doughnut arc */}
        <svg
          className="absolute bottom-[15%] right-[25%] w-32 h-32 opacity-20 floating-delayed"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="var(--wood-brown)"
            strokeWidth="8"
            strokeDasharray="210 280"
            strokeLinecap="round"
          ></circle>
        </svg>

        {/* Heartbeat line */}
        <svg
          className="absolute bottom-1/4 left-1/3 w-48 h-12 opacity-10"
          viewBox="0 0 200 50"
        >
          <path
            d="M0 25 L40 25 L50 5 L65 45 L75 25 L200 25"
            stroke="var(--text-main)"
            strokeWidth="2"
            fill="none"
          ></path>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-4xl w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-[#E2DCD0] rounded-full mb-8 reveal active">
          <i className="ph ph-sparkle text-[#8E9775]"></i>
          <span className="text-sm font-semibold text-[#4A453F]">Personal Training &amp; Lifestyle Design</span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold text-[#3C3A36] leading-[1.15] mb-8 reveal active"
          style={{ transitionDelay: "0.1s" }}
        >
          몸과 마음을 함께 돌보는<br />
          <span className="text-[#7A8B5E]">1:1 개인 건강관리 코칭</span>
        </h1>

        <p
          className="text-lg md:text-xl text-[#7D7468] mb-12 max-w-2xl mx-auto leading-relaxed reveal active"
          style={{ transitionDelay: "0.2s" }}
        >
          단순한 운동 지도를 넘어 영양, 수면, 마음 챙김까지.<br />
          당신의 일상이 지속 가능한 건강함으로 채워지도록 설계합니다.
        </p>

        <div
          className="flex flex-col items-center gap-6 reveal active"
          style={{ transitionDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="px-10 py-5 bg-[#7A8B5E] text-white rounded-full font-bold text-lg hover:bg-[#5C6B47] transition-all transform hover:scale-105 shadow-xl shadow-[#7A8B5E]/20"
          >
            무료 상담 신청하기
          </a>
          <div className="flex items-center gap-2 text-[#9B9185]">
            <i className="ph ph-info"></i>
            <span className="text-sm">첫 상담과 체험 세션은 무료입니다</span>
          </div>
        </div>

        <div
          className="mt-20 flex flex-wrap justify-center gap-4 md:gap-8 reveal active"
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-white/40 rounded-full border border-white/60">
            <i className="ph-fill ph-barbell text-[#7A8B5E] text-xl"></i>
            <span className="text-sm font-bold text-[#4A453F]">Exercise Coaching</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white/40 rounded-full border border-white/60">
            <i className="ph-fill ph-bowl-food text-[#D4A574] text-xl"></i>
            <span className="text-sm font-bold text-[#4A453F]">Nutrition Guide</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white/40 rounded-full border border-white/60">
            <i className="ph-fill ph-plant text-[#C17A5F] text-xl"></i>
            <span className="text-sm font-bold text-[#4A453F]">Lifestyle Habit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
