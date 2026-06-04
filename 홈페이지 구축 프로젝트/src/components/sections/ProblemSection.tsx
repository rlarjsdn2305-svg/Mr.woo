"use client";

import { useEffect, useRef } from "react";
import ProblemCard from "@/components/ui/ProblemCard";

const problems = [
  {
    icon: <i className="ph ph-arrows-clockwise"></i>,
    title: "지속성",
    summary: '"시작은 하는데, 결국 또 그만뒀어요"',
    expandedText:
      "혼자서 지속하기 힘든 이유는 동기부여가 아닌 '시스템'의 부재입니다. 당신의 생활 패턴에 맞는 루틴을 함께 설계하여 의지가 아닌 습관으로 운동하게 도와드립니다.",
  },
  {
    icon: <i className="ph ph-scales"></i>,
    title: "요요",
    summary: '"뺐다가 다시 찌는 게 반복돼요"',
    expandedText:
      "단기적인 감량은 몸을 해칩니다. 체성분 분석을 통해 건강한 감량 목표를 설정하고, 평생 유지 가능한 대사 능력을 키우는 데 집중합니다.",
  },
  {
    icon: <i className="ph ph-bowl-food"></i>,
    title: "식단",
    summary: '"먹는 게 너무 스트레스예요"',
    expandedText:
      "닭가슴살과 고구마만 먹는 식단은 끝이 있습니다. 평소 드시는 음식을 바탕으로 영양 성분을 조절하며 즐겁게 먹는 법을 가이드합니다.",
  },
  {
    icon: <i className="ph ph-barbell"></i>,
    title: "운동 방향",
    summary: '"뭘 어떻게 해야 할지 모르겠어요"',
    expandedText:
      "유튜브 영상만 따라하다가 다치지는 않으셨나요? 기초 근력부터 정확한 자세까지, 당신의 몸에 맞는 커리큘럼을 단계별로 안내합니다.",
  },
  {
    icon: <i className="ph ph-bandaids"></i>,
    title: "통증·체형",
    summary: '"아프거나 불편한 곳이 있어요"',
    expandedText:
      "현대인의 고질병인 거북목, 허리 통증을 완화하는 재활 기반의 운동을 제공합니다. 틀어진 균형을 바로잡아 통증 없는 일상을 선물합니다.",
  },
  {
    icon: <i className="ph ph-battery-high"></i>,
    title: "체력·피로",
    summary: '"만성 피로, 체력이 너무 없어요"',
    expandedText:
      "퇴근 후 누워만 계신가요? 심폐 지구력과 근지구력을 서서히 높여 일상의 에너지를 회복하고 삶의 질을 바꾸는 훈련을 진행합니다.",
  },
  {
    icon: <i className="ph ph-plant"></i>,
    title: "습관 형성",
    summary: '"작심삼일을 반복하고 있어요"',
    expandedText:
      "큰 목표는 좌절을 낳습니다. 아주 작은 습관(Tiny Habit)부터 시작해 성취감을 맛보며 서서히 건강한 라이프스타일을 몸에 익힙니다.",
  },
  {
    icon: <i className="ph ph-target"></i>,
    title: "퍼포먼스",
    summary: '"더 잘하고 싶은 운동 목표가 있어요"',
    expandedText:
      "러닝, 등산, 혹은 바디프로필까지. 당신이 꿈꾸는 특정 목표를 위해 최적화된 스트렝스 훈련과 컨디셔닝 프로그램을 제공합니다.",
  },
];

export default function ProblemSection() {
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
    <section className="py-32 px-6 bg-[#F5F1EA]" id="about" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl font-bold text-[#3C3A36] mb-6">지금 어떤 부분이 가장 막막하신가요?</h2>
          <p className="text-[#7D7468] text-lg">운동과 건강에 대한 고민은 저마다 다릅니다. 가장 가까운 이야기를 찾아보세요.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {problems.map((p) => (
            <ProblemCard
              key={p.title}
              icon={p.icon}
              title={p.title}
              summary={p.summary}
              expandedText={p.expandedText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
