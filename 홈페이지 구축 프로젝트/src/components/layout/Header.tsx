"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#E2DCD0]/50 h-20 flex items-center transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-1 h-7 bg-gradient-to-b from-[#8E9775] to-[#7A8B5E] rounded-full"></div>
          <span className="text-xl font-bold tracking-tight text-[#3C3A36]">Personal Trainer Woo</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#about" className="nav-link font-medium text-[#4A453F]">About</a>
          <a href="#services" className="nav-link font-medium text-[#4A453F]">Services</a>
          <a href="#reviews" className="nav-link font-medium text-[#4A453F]">Reviews</a>
          <a href="#pricing" className="nav-link font-medium text-[#4A453F]">Pricing</a>
          <a href="#insights" className="nav-link font-medium text-[#4A453F]">Insights</a>
          <a href="#contact" className="nav-link font-medium text-[#4A453F]">Contact</a>
        </nav>
        <a
          href="https://open.kakao.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 text-sm font-semibold text-[#7A8B5E] hover:text-[#5C6B47] transition-colors"
        >
          상담 신청하기 <i className="ph ph-arrow-right"></i>
        </a>
        <button className="md:hidden text-2xl">
          <i className="ph ph-list"></i>
        </button>
      </div>
    </header>
  );
}
