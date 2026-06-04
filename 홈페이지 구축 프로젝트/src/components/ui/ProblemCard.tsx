"use client";

import { useState } from "react";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  summary: string;
  expandedText: string;
}

export default function ProblemCard({ icon, title, summary, expandedText }: ProblemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`problem-card group bg-white p-8 rounded-40 border border-[#E2DCD0] cursor-pointer hover:shadow-lg transition-all${isExpanded ? " expanded" : ""}`}
      onClick={() => setIsExpanded((v) => !v)}
    >
      <div className="text-3xl mb-6 text-[#7A8B5E]">{icon}</div>
      <h3 className="text-xl font-bold text-[#3C3A36] mb-4">{title}</h3>
      {!isExpanded && (
        <p className="text-[#7D7468] leading-relaxed">{summary}</p>
      )}
      {isExpanded && (
        <div className="text-[#4A453F] mt-4 pt-4 border-t border-[#E2DCD0]/50">
          {expandedText}
        </div>
      )}
    </div>
  );
}
