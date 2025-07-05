"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { CheckCircle, Zap, Shield, Brain, Sparkles, Coins, BarChart3, Cpu, Network, Layers } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import ScrollObserver from "./scroll-observer"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const heroRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [faqOpenStates, setFaqOpenStates] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 500)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }
  // ...existing code...

  // ...existing code...
  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      <ScrollObserver />

      {/* Advanced Cursor Follower */}
      <div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 transition-all duration-700 ease-out"
        style={{
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
          background:
            "radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.05) 50%, transparent 100%)",
          filter: "blur(40px)",
        }}
      ></div>

      {/* Neural Network Background */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]"></div>
        <div
          className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full opacity-30 animate-float-1"
          style={{ background: "radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)" }}
        ></div>
        <div
          className="absolute top-[60%] -right-[20%] w-[70%] h-[70%] rounded-full opacity-25 animate-float-2"
          style={{ background: "radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)" }}
        ></div>
        <div
          className="absolute top-[20%] right-[10%] w-[60%] h-[60%] rounded-full opacity-20 animate-float-3"
          style={{ background: "radial-gradient(circle, rgba(240, 147, 251, 0.1) 0%, transparent 70%)" }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute top-[10%] left-[15%] w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float-1"></div>
        <div className="absolute top-[30%] right-[20%] w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-float-2"></div>
        <div className="absolute bottom-[20%] left-[25%] w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50 animate-float-3"></div>
        <div className="absolute top-[60%] left-[70%] w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-float-1"></div>
        <div className="absolute bottom-[40%] right-[15%] w-2 h-2 bg-indigo-400 rounded-full opacity-45 animate-float-2"></div>
      </div>

      {/* Responsive Header (fixed JSX, state at component level) */}
      <header
        className={`px-4 lg:px-6 h-24 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrollY > 50
            ? "glass-neural border-b border-white/10 h-20 shadow-2xl backdrop-blur-3xl"
            : "glass-ultra backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <Link
          className="flex items-center justify-center transition-all duration-500 hover:scale-105 px-2 group"
          href="#"
          onClick={() => scrollToSection("top")}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rezonate%20%281%29-uSCI5lT1PxvKAkn9B4GMGYxHp6eZxE.png"
            alt="Rezonate Logo"
            width={180}
            height={80}
            className={`transition-all duration-700 ${scrollY > 50 ? "scale-90" : "scale-100"} dark:invert-0 pt-2 group-hover:brightness-110`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-8">
          {[
            { id: "features", label: "Features" },
            { id: "ai-features", label: "AI Features" },
            { id: "earn", label: "Earn" },
            { id: "why-rezonate", label: "Why Rezonate" },
            { id: "how-it-works", label: "How It Works" },
            { id: "roadmap", label: "Roadmap" },
          ].map((item) => (
            <Link
              key={item.id}
              className="text-base font-medium text-white/80 hover:text-white transition-all duration-300 relative group"
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 rounded-lg bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Socials & CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            {/* X (formerly Twitter) Icon */}
            <Link href="#" className="text-white/80 font-semibold hover:text-white transition-colors duration-300" aria-label="X (formerly Twitter)">
              <svg width="22" height="22" viewBox="0 0 23 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M17.4257 0H20.8183L13.4062 8.47193L22.1262 20H15.2983L9.9508 13.0081L3.83186 20H0.436864L8.36493 10.9385L0 0H7.00084L11.8347 6.39068L17.4257 0ZM16.2348 17.9691H18.1149L5.9794 1.92425H3.96211L16.2348 17.9691Z" fill="currentColor"></path></svg>
            </Link>
            {/* Telegram Icon */}
            <Link href="#" className="text-white/80 font-semibold hover:text-white transition-colors duration-300" aria-label="Telegram">
              <svg width="22" height="20" viewBox="0 0 23 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path fillRule="evenodd" clipRule="evenodd" d="M1.65859 8.61014C8.13673 5.78729 12.4561 3.92709 14.6175 3.02781C20.7892 0.461031 22.0713 0.0148607 22.9072 0.000104155C23.0912 -0.00249995 23.5018 0.0426375 23.7683 0.258778C23.9931 0.441065 24.0547 0.687588 24.0843 0.860327C24.1138 1.03393 24.1511 1.42715 24.1216 1.73531C23.7874 5.24911 22.3404 13.7758 21.6043 17.7115C21.2927 19.3772 20.679 19.9354 20.0852 19.9901C18.7953 20.109 17.8153 19.1368 16.5653 18.3174C14.6097 17.0361 13.5047 16.2376 11.6063 14.9867C9.41187 13.5406 10.8346 12.7463 12.0846 11.4477C12.4118 11.1075 18.0974 5.93572 18.2077 5.46698C18.2216 5.40796 18.2346 5.18921 18.1044 5.07377C17.9742 4.95832 17.7823 4.99825 17.6443 5.0295C17.4481 5.07377 14.3241 7.13882 8.27128 11.2247C7.38414 11.834 6.58034 12.13 5.86074 12.1153C5.06736 12.0979 3.54136 11.6665 2.40684 11.2976C1.01538 10.8453 -0.0904999 10.6057 0.00585192 9.83754C0.0553299 9.43737 0.606532 9.02853 1.65859 8.61014Z" fill="currentColor"></path></svg>
            </Link>
            {/* Blockchain/Web3 Icon */}
            <Link href="#" className="text-white/80 font-semibold hover:text-white transition-colors duration-300" aria-label="Blockchain">
              <svg width="22" height="20" viewBox="0 0 18 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path fillRule="evenodd" clipRule="evenodd" d="M6.46817 1.13091C5.27673 1.75155 4.30196 2.27674 4.30217 2.29811C4.3027 2.35324 7.16166 3.80113 7.26314 3.7976C7.3093 3.79605 7.64415 3.64191 8.00722 3.45511L8.66745 3.11552L9.38851 3.48616L10.1095 3.85686L11.2903 3.32627C13.0696 2.52676 13.2544 2.43914 13.2254 2.40971C13.187 2.37065 12.5488 2.02782 10.8174 1.11628C9.9806 0.675729 9.16845 0.24378 9.01253 0.156375C8.85663 0.0689698 8.7078 -0.00134158 8.6818 1.94306e-05C8.6558 0.00138045 7.65963 0.510285 6.46817 1.13091ZM1.24251 3.83693L0.0022376 4.47758V7.28925C0.0022376 8.83568 0.0185237 10.1009 0.0385006 10.1009C0.0584083 10.1009 0.668628 9.83638 1.39451 9.51308L2.7143 8.92526V5.96157L3.35924 6.31294C3.85622 6.58345 4.3535 6.85342 4.85107 7.12284L5.69795 7.58136L6.07479 7.41096C6.31113 7.30392 6.54699 7.19583 6.78238 7.08671C6.96427 7.00201 7.41078 6.8009 7.77458 6.63972C8.13839 6.47848 8.47516 6.31633 8.52291 6.27938C8.58635 6.23029 7.81283 5.80283 5.66189 4.69829C4.04055 3.8657 2.66198 3.18712 2.59841 3.19038C2.53483 3.19363 1.92468 3.48454 1.24251 3.83693ZM13.4489 4.01684C12.6042 4.39818 11.9125 4.72542 11.9117 4.74408C11.911 4.76272 12.3714 5.03647 12.9349 5.35232C13.4983 5.66823 13.9594 5.9436 13.9594 5.96433C13.9594 5.98503 13.4608 6.22662 12.8514 6.50131C12.242 6.77594 10.7016 7.47158 9.42828 8.0472L5.16175 9.97573C4.08851 10.4609 3.12111 10.8982 3.01197 10.9476C0.819816 11.94 0.217278 12.2154 0.134533 12.2626C0.0513264 12.3102 0.0324798 12.5867 0.0176701 13.9743L0 15.6293L1.10911 16.1944L2.2182 16.7595L3.75613 16.0654C4.60201 15.6837 5.29405 15.3514 5.29405 15.3269C5.29405 15.3025 5.13774 15.2007 4.94678 15.1005C4.75573 15.0004 4.36136 14.7786 4.07031 14.6077C3.77929 14.4367 3.48909 14.2799 3.42538 14.2591C3.36169 14.2384 3.3105 14.2021 3.31153 14.1784C3.3126 14.1548 3.98983 13.8331 4.8164 13.4635C6.42187 12.7457 7.6505 12.1925 10.2882 10.9996C11.4677 10.4664 12.6473 9.93341 13.8271 9.40078C14.8639 8.93278 16.0695 8.38618 16.5061 8.18613L17.2998 7.82242L17.3175 6.14858L17.3352 4.47481L16.2103 3.89741C15.5916 3.57988 15.0627 3.32085 15.035 3.3218C15.0073 3.32267 14.2936 3.63541 13.4489 4.01684ZM16.9985 10.0554C16.8327 10.1364 16.5053 10.288 16.2708 10.3923C16.0364 10.4966 15.5916 10.6973 15.2823 10.8384L14.7201 11.0948L14.7072 12.5643C14.7002 13.3725 14.6704 14.0302 14.6411 14.0259C14.5746 14.016 13.5208 13.4756 12.4615 12.908C11.6969 12.4983 11.6489 12.4821 11.4693 12.571C11.3654 12.6225 10.7446 12.9009 10.0898 13.1898C9.43488 13.4787 8.87774 13.7339 8.85154 13.757C8.8254 13.7801 10.1434 14.4945 11.7805 15.3446L14.7569 16.8902L16.0284 16.2325C16.7277 15.8707 17.3223 15.5408 17.3496 15.4993C17.4113 15.406 17.406 9.89538 17.3443 9.90284C17.3199 9.90577 17.1642 9.97444 16.9985 10.0554ZM9.95747 16.5235C9.73691 16.6183 9.51642 16.7133 9.29599 16.8083C8.63034 17.0963 8.76079 17.1059 7.96886 16.7116C7.44141 16.4491 7.21405 16.3681 7.11537 16.4074C7.04134 16.4369 6.40427 16.7235 5.69954 17.0443C4.99486 17.3651 4.39384 17.6276 4.36395 17.6276C4.06828 17.6276 4.55982 17.9213 6.45654 18.878L8.68095 20L9.61687 19.5379C10.1316 19.2838 11.1699 18.7749 11.9242 18.4071C12.6784 18.0391 13.2861 17.7286 13.2748 17.7168C13.2633 17.7052 12.6313 17.3806 11.8703 16.9957L10.4866 16.2958L9.95747 16.5235Z" fill="currentColor"></path></svg>
            </Link>
          </div>
          <Button size="sm" className="btn-neural text-white font-semibold px-6">
            Launch App
          </Button>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center justify-center ml-2 p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex md:hidden" onClick={() => setIsMenuOpen(false)}>
            <div
              className="ml-auto w-4/5 max-w-xs h-full bg-[#18192a] shadow-2xl flex flex-col gap-6 p-6 animate-slide-in-right"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Section Headings */}
              <nav className="flex flex-col gap-4 mt-4">
                {[
                  { id: "features", label: "Features" },
                  { id: "ai-features", label: "AI Features" },
                  { id: "earn", label: "Earn" },
                  { id: "why-rezonate", label: "Why Rezonate" },
                  { id: "how-it-works", label: "How It Works" },
                  { id: "roadmap", label: "Roadmap" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    className="text-lg font-semibold text-white/90 hover:text-blue-400 transition-colors duration-200 py-2"
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              {/* Social Media Links (optional) */}
              <div className="flex gap-6 mt-2">
                <Link href="#" className="text-white/80 hover:text-white" aria-label="X (formerly Twitter)">
                  <svg width="22" height="22" viewBox="0 0 23 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M17.4257 0H20.8183L13.4062 8.47193L22.1262 20H15.2983L9.9508 13.0081L3.83186 20H0.436864L8.36493 10.9385L0 0H7.00084L11.8347 6.39068L17.4257 0ZM16.2348 17.9691H18.1149L5.9794 1.92425H3.96211L16.2348 17.9691Z" fill="currentColor"></path></svg>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white" aria-label="Telegram">
                  <svg width="22" height="20" viewBox="0 0 23 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path fillRule="evenodd" clipRule="evenodd" d="M1.65859 8.61014C8.13673 5.78729 12.4561 3.92709 14.6175 3.02781C20.7892 0.461031 22.0713 0.0148607 22.9072 0.000104155C23.0912 -0.00249995 23.5018 0.0426375 23.7683 0.258778C23.9931 0.441065 24.0547 0.687588 24.0843 0.860327C24.1138 1.03393 24.1511 1.42715 24.1216 1.73531C23.7874 5.24911 22.3404 13.7758 21.6043 17.7115C21.2927 19.3772 20.679 19.9354 20.0852 19.9901C18.7953 20.109 17.8153 19.1368 16.5653 18.3174C14.6097 17.0361 13.5047 16.2376 11.6063 14.9867C9.41187 13.5406 10.8346 12.7463 12.0846 11.4477C12.4118 11.1075 18.0974 5.93572 18.2077 5.46698C18.2216 5.40796 18.2346 5.18921 18.1044 5.07377C17.9742 4.95832 17.7823 4.99825 17.6443 5.0295C17.4481 5.07377 14.3241 7.13882 8.27128 11.2247C7.38414 11.834 6.58034 12.13 5.86074 12.1153C5.06736 12.0979 3.54136 11.6665 2.40684 11.2976C1.01538 10.8453 -0.0904999 10.6057 0.00585192 9.83754C0.0553299 9.43737 0.606532 9.02853 1.65859 8.61014Z" fill="currentColor"></path></svg>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white" aria-label="Blockchain">
                  <svg width="22" height="20" viewBox="0 0 18 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path fillRule="evenodd" clipRule="evenodd" d="M6.46817 1.13091C5.27673 1.75155 4.30196 2.27674 4.30217 2.29811C4.3027 2.35324 7.16166 3.80113 7.26314 3.7976C7.3093 3.79605 7.64415 3.64191 8.00722 3.45511L8.66745 3.11552L9.38851 3.48616L10.1095 3.85686L11.2903 3.32627C13.0696 2.52676 13.2544 2.43914 13.2254 2.40971C13.187 2.37065 12.5488 2.02782 10.8174 1.11628C9.9806 0.675729 9.16845 0.24378 9.01253 0.156375C8.85663 0.0689698 8.7078 -0.00134158 8.6818 1.94306e-05C8.6558 0.00138045 7.65963 0.510285 6.46817 1.13091ZM1.24251 3.83693L0.0022376 4.47758V7.28925C0.0022376 8.83568 0.0185237 10.1009 0.0385006 10.1009C0.0584083 10.1009 0.668628 9.83638 1.39451 9.51308L2.7143 8.92526V5.96157L3.35924 6.31294C3.85622 6.58345 4.3535 6.85342 4.85107 7.12284L5.69795 7.58136L6.07479 7.41096C6.31113 7.30392 6.54699 7.19583 6.78238 7.08671C6.96427 7.00201 7.41078 6.8009 7.77458 6.63972C8.13839 6.47848 8.47516 6.31633 8.52291 6.27938C8.58635 6.23029 7.81283 5.80283 5.66189 4.69829C4.04055 3.8657 2.66198 3.18712 2.59841 3.19038C2.53483 3.19363 1.92468 3.48454 1.24251 3.83693ZM13.4489 4.01684C12.6042 4.39818 11.9125 4.72542 11.9117 4.74408C11.911 4.76272 12.3714 5.03647 12.9349 5.35232C13.4983 5.66823 13.9594 5.9436 13.9594 5.96433C13.9594 5.98503 13.4608 6.22662 12.8514 6.50131C12.242 6.77594 10.7016 7.47158 9.42828 8.0472L5.16175 9.97573C4.08851 10.4609 3.12111 10.8982 3.01197 10.9476C0.819816 11.94 0.217278 12.2154 0.134533 12.2626C0.0513264 12.3102 0.0324798 12.5867 0.0176701 13.9743L0 15.6293L1.10911 16.1944L2.2182 16.7595L3.75613 16.0654C4.60201 15.6837 5.29405 15.3514 5.29405 15.3269C5.29405 15.3025 5.13774 15.2007 4.94678 15.1005C4.75573 15.0004 4.36136 14.7786 4.07031 14.6077C3.77929 14.4367 3.48909 14.2799 3.42538 14.2591C3.36169 14.2384 3.3105 14.2021 3.31153 14.1784C3.3126 14.1548 3.98983 13.8331 4.8164 13.4635C6.42187 12.7457 7.6505 12.1925 10.2882 10.9996C11.4677 10.4664 12.6473 9.93341 13.8271 9.40078C14.8639 8.93278 16.0695 8.38618 16.5061 8.18613L17.2998 7.82242L17.3175 6.14858L17.3352 4.47481L16.2103 3.89741C15.5916 3.57988 15.0627 3.32085 15.035 3.3218C15.0073 3.32267 14.2936 3.63541 13.4489 4.01684ZM16.9985 10.0554C16.8327 10.1364 16.5053 10.288 16.2708 10.3923C16.0364 10.4966 15.5916 10.6973 15.2823 10.8384L14.7201 11.0948L14.7072 12.5643C14.7002 13.3725 14.6704 14.0302 14.6411 14.0259C14.5746 14.016 13.5208 13.4756 12.4615 12.908C11.6969 12.4983 11.6489 12.4821 11.4693 12.571C11.3654 12.6225 10.7446 12.9009 10.0898 13.1898C9.43488 13.4787 8.87774 13.7339 8.85154 13.757C8.8254 13.7801 10.1434 14.4945 11.7805 15.3446L14.7569 16.8902L16.0284 16.2325C16.7277 15.8707 17.3223 15.5408 17.3496 15.4993C17.4113 15.406 17.406 9.89538 17.3443 9.90284C17.3199 9.90577 17.1642 9.97444 16.9985 10.0554ZM9.95747 16.5235C9.73691 16.6183 9.51642 16.7133 9.29599 16.8083C8.63034 17.0963 8.76079 17.1059 7.96886 16.7116C7.44141 16.4491 7.21405 16.3681 7.11537 16.4074C7.04134 16.4369 6.40427 16.7235 5.69954 17.0443C4.99486 17.3651 4.39384 17.6276 4.36395 17.6276C4.06828 17.6276 4.55982 17.9213 6.45654 18.878L8.68095 20L9.61687 19.5379C10.1316 19.2838 11.1699 18.7749 11.9242 18.4071C12.6784 18.0391 13.2861 17.7286 13.2748 17.7168C13.2633 17.7052 12.6313 17.3806 11.8703 16.9957L10.4866 16.2958L9.95747 16.5235Z" fill="currentColor"></path></svg>
                </Link>
              </div>
              {/* CTA Button */}
              <Button size="sm" className="btn-neural text-white font-semibold px-6 mt-6 w-full">
                Launch App
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-24" id="top">
        {/* Enhanced Hero Section */}
        <section
          ref={heroRef}
          className="w-full py-16 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden neural-pattern"
        >
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              {/* Responsive hero section: stack on mobile, side-by-side on desktop */}
              <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
                {/* Image and floating elements */}
                <div className="w-full max-w-[500px] mx-auto animate-fade-in-scale animation-delay-700">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border-neural shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] group glow-neural">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl"></div>
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 transition-transform duration-700 group-hover:scale-[1.01] data-flow">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2019-06-2025%20at%203.30%E2%80%AFPM.jpg-dFqj2hod6WsiYmEeIDl2cnmZ6aXOwM.jpeg"
                        alt="Rezonate App Interface - AI-Powered Social Media Platform"
                        className="w-full h-full object-cover object-top rounded-xl transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                        style={{ objectFit: "cover", objectPosition: "top center" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
                    {/* Play Button */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 glass-neural rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center cursor-pointer hover:scale-110 glow-ai">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-7 w-7 text-white ml-1"
                      >
                        <polygon points="5,3 19,12 5,21"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Text and actions */}
                <div className="flex flex-col justify-center space-y-6 w-full max-w-xl mx-auto">
                  <div className="space-y-4">
                    <h1 className="hero-title-ai animate-fade-in-up animation-delay-200 text-center lg:text-left">
                      Social Media, <span className="text-gradient-neural">Reinvented</span> – Earn, Engage, Own
                    </h1>
                    <p className="max-w-full text-white/70 text-lg md:text-xl leading-relaxed animate-fade-in-up animation-delay-400 break-words hyphens-auto w-full text-center lg:text-left">
                      Rezonate is the <span className="text-gradient-ai font-semibold">next-gen AI-powered Web3 </span>
                      social platform where your time and content earn real rewards in $REZO tokens. <br className="hidden md:block" />
                      No emails. No middlemen. Just your wallet, your voice, and your value.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-start animate-fade-in-up animation-delay-600">
                    <Button size="lg" className="w-full sm:w-auto px-8 group btn-ai text-white font-semibold text-lg">
                      <BarChart3 className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      <span className="relative">
                        View Chart
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </span>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto group glass-ultra border-white/20 text-white hover:bg-white/10 font-semibold text-lg bg-transparent"
                    >
                      <span className="relative">
                        Join Community
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </span>
                      <Network className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                    </Button>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-6 text-sm animate-fade-in-up animation-delay-800 items-center sm:items-start justify-center sm:justify-start mt-2">
                    {[
                      { icon: CheckCircle, text: "iOS & Android", color: "text-green-400" },
                      { icon: CheckCircle, text: "Web3 Powered", color: "text-blue-400" },
                      { icon: CheckCircle, text: "AI Enhanced", color: "text-purple-400" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 group mt-2 sm:mt-0">
                        <item.icon
                          className={`h-4 w-4 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                        <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Core Features Section */}
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 relative neural-pattern">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4 animate-on-scroll">
                <div className="flex items-center justify-center rounded-full glass-ai px-3 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg border border-blue-400/20 animate-shimmer w-fit mx-auto">
                  <Layers className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                  <span className="mr-1 sm:mr-2 inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm">Core Features</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gradient-ai section-header text-center px-4">
                  Everything You Need in One Platform
                </h2>
                <p className="max-w-[900px] text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                  Rezonate combines the best features of social media with the power of{" "}
                  <span className="text-gradient-neural font-semibold">Web3 technology</span> and{" "}
                  <span className="text-gradient-cyber font-semibold">AI intelligence</span>.
                </p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🎥",
                  title: "Live Streaming & Video Calling",
                  description:
                    "Go live and connect with your audience in real time, or make high-quality video calls with friends.",
                  gradient: "glass-neural",
                  delay: "animation-delay-100",
                },
                {
                  icon: "💬",
                  title: "Realtime Chat & Communities",
                  description:
                    "Engage in instant messaging, join groups, and create spaces centered around shared interests.",
                  gradient: "glass-ai",
                  delay: "animation-delay-200",
                },
                {
                  icon: "💰",
                  title: "Web3 & Crypto Payments",
                  description: "Send and receive cryptocurrency with seamless blockchain integration.",
                  gradient: "glass-cyber",
                  delay: "animation-delay-300",
                },
                {
                  icon: "🔒",
                  title: "Privacy-First Design",
                  description: "You control your data. No tracking, no selling of personal information.",
                  gradient: "glass-neural",
                  delay: "animation-delay-400",
                },
                {
                  icon: "📱",
                  title: "Video Reels & Colorful Posts",
                  description: "Express yourself with short videos and visually appealing text posts.",
                  gradient: "glass-ai",
                  delay: "animation-delay-500",
                },
                {
                  icon: "📊",
                  title: "Polls, Blogs & Job Listings",
                  description: "Engage with the community through polls, write blogs, or explore job opportunities.",
                  gradient: "glass-cyber",
                  delay: "animation-delay-600",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl ${feature.gradient} border border-white/10 p-8 hover-ai animate-on-scroll ${feature.delay} particles`}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-3xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient-ai transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-150"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced AI Features Section */}
        <section id="ai-features" className="w-full py-16 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4 animate-on-scroll">
                <div className="flex items-center justify-center rounded-full glass-neural px-3 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg border border-purple-400/20 glow-neural w-fit mx-auto">
                  <Brain className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
                  <span className="mr-1 sm:mr-2 inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm">AI-Powered Features</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gradient-neural section-header px-4">
                  Intelligent Social Experience
                </h2>
                <p className="max-w-[900px] text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                  Rezonate leverages <span className="text-gradient-ai font-semibold">cutting-edge AI</span> to enhance
                  your social media experience while maintaining{" "}
                  <span className="text-gradient-cyber font-semibold">privacy and security</span>.
                </p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Brain,
                  title: "Smart Content Recommendations",
                  description:
                    "Our AI analyzes your interests to suggest content you'll love, without invading your privacy.",
                  gradient: "glass-neural",
                  iconColor: "text-purple-400",
                },
                {
                  icon: Shield,
                  title: "AI-Powered Content Moderation",
                  description:
                    "Automatic detection of harmful content keeps the platform safe and welcoming for everyone.",
                  gradient: "glass-ai",
                  iconColor: "text-blue-400",
                },
                {
                  icon: Sparkles,
                  title: "AI-Enhanced Content Creation",
                  description: "Create better posts with AI-powered suggestions for captions, hashtags, and editing.",
                  gradient: "glass-cyber",
                  iconColor: "text-pink-400",
                },
                {
                  icon: Cpu,
                  title: "Fraud Detection & Security",
                  description:
                    "Advanced AI algorithms detect suspicious activities and protect your account from threats.",
                  gradient: "glass-neural",
                  iconColor: "text-green-400",
                },
                {
                  icon: Network,
                  title: "Personalized Feed Optimization",
                  description: "Our AI learns your preferences to deliver a feed that's tailored to your interests.",
                  gradient: "glass-ai",
                  iconColor: "text-cyan-400",
                },
                {
                  icon: Brain,
                  title: "AI-Powered Experience",
                  description: "Smart recommendations and automated moderation make for a better social experience.",
                  gradient: "glass-cyber",
                  iconColor: "text-purple-400",
                },
                {
                  icon: Shield,
                  title: "No Middlemen, No Censorship",
                  description: "Transparent governance via DAO ensures fair policies and community-driven decisions.",
                  gradient: "glass-neural",
                  iconColor: "text-blue-400",
                },
                {
                  icon: Cpu,
                  title: "Enhanced Security",
                  description: "Advanced encryption and blockchain technology keep your data and assets secure.",
                  gradient: "glass-ai",
                  iconColor: "text-cyan-400",
                },
                {
                  icon: Network,
                  title: "Seamless Integration",
                  description: "Connect with other Web3 platforms and services for a unified digital experience.",
                  gradient: "glass-cyber",
                  iconColor: "text-pink-400",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl ${feature.gradient} border border-white/10 p-8 hover-ai animate-on-scroll animation-delay-${(index + 1) * 100} data-flow`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ${feature.iconColor} mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 glow-neural`}
                  >
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient-ai transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-150"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Earn Section */}
        <section id="earn" className="w-full py-16 md:py-24 lg:py-32 relative neural-pattern">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4 animate-on-scroll">
                <div className="flex items-center justify-center rounded-full glass-cyber px-3 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg border border-pink-400/20 glow-cyber w-fit mx-auto">
                  <Coins className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
                  <span className="mr-1 sm:mr-2 inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm">Earn Rewards</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gradient-cyber section-header px-4">
                  Get Paid for Your Social Activity
                </h2>
                <p className="max-w-[900px] text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                  Unlike traditional platforms that profit from your content,{" "}
                  <span className="text-gradient-ai font-semibold">Rezonate rewards you</span> for your contributions
                  and engagement.
                </p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🪙",
                  title: "Post & Earn",
                  description: "Earn tokens every time you create and share content that engages the community.",
                  gradient: "glass-cyber",
                },
                {
                  icon: "👍",
                  title: "Engagement Rewards",
                  description: "Get rewarded for likes, comments, and meaningful interactions with other users.",
                  gradient: "glass-neural",
                },
                {
                  icon: "💼",
                  title: "Creator Economy",
                  description: "Monetize your content directly through tips, subscriptions, and exclusive content.",
                  gradient: "glass-ai",
                },
                {
                  icon: "❤️",
                  title: "Community Rewards",
                  description: "Earn by contributing to community moderation, curation, and governance.",
                  gradient: "glass-cyber",
                },
                {
                  icon: "🎁",
                  title: "Referral Program",
                  description: "Earn tokens by inviting friends and growing the Rezonate community.",
                  gradient: "glass-neural",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl ${feature.gradient} border border-white/10 p-8 hover-cyber animate-on-scroll animation-delay-${(index + 1) * 100} particles`}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-3xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient-cyber transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-pink-500/10 blur-2xl transition-all duration-500 group-hover:bg-pink-500/20 group-hover:scale-150"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Why Rezonate Section */}
        <section id="why-rezonate" className="w-full py-16 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4 animate-on-scroll">
                <div className="flex items-center justify-center rounded-full glass-ai px-3 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg border border-blue-400/20 glow-ai w-fit mx-auto">
                  <Zap className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                  <span className="mr-1 sm:mr-2 inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm">Why Rezonate</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gradient-ai section-header text-center px-4">
                  Why Settle for Less? Social Media Should Work for You.
                </h2>
                <p className="max-w-[900px] text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                  Unlike traditional platforms that profit from your content,{" "}
                  <span className="text-gradient-neural font-semibold">Rezonate puts the power back in your hands</span>
                  . Engage, earn, and control your data—all in one place.
                </p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Earn While You Engage",
                  description:
                    "Get rewarded with our ERC-20 token for posting, liking, and sharing content on the platform.",
                  gradient: "glass-neural",
                  iconColor: "text-yellow-400",
                },
                {
                  icon: CheckCircle,
                  title: "Decentralized & Private",
                  description: "Own your content with full control over your data. No more exploitation by big tech.",
                  gradient: "glass-ai",
                  iconColor: "text-green-400",
                },
                {
                  icon: Brain,
                  title: "AI-Powered Experience",
                  description: "Smart recommendations and automated moderation make for a better social experience.",
                  gradient: "glass-cyber",
                  iconColor: "text-purple-400",
                },
                {
                  icon: Shield,
                  title: "No Middlemen, No Censorship",
                  description: "Transparent governance via DAO ensures fair policies and community-driven decisions.",
                  gradient: "glass-neural",
                  iconColor: "text-blue-400",
                },
                {
                  icon: Cpu,
                  title: "Enhanced Security",
                  description: "Advanced encryption and blockchain technology keep your data and assets secure.",
                  gradient: "glass-ai",
                  iconColor: "text-cyan-400",
                },
                {
                  icon: Network,
                  title: "Seamless Integration",
                  description: "Connect with other Web3 platforms and services for a unified digital experience.",
                  gradient: "glass-cyber",
                  iconColor: "text-pink-400",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl ${feature.gradient} border border-white/10 p-8 hover-ai animate-on-scroll animation-delay-${(index + 1) * 100} data-flow`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ${feature.iconColor} mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 glow-neural`}
                  >
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient-ai transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-150"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced How It Works Section */}
        <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32 relative neural-pattern">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4 animate-on-scroll">
                <div className="flex items-center justify-center rounded-full glass-neural px-3 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg border border-purple-400/20 glow-neural w-fit mx-auto">
                  <Cpu className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
                  <span className="mr-1 sm:mr-2 inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm">How It Works</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gradient-neural section-header px-4">
                  Simple, Secure, and Rewarding
                </h2>
                <p className="max-w-[900px] text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                  Getting started with Rezonate is easy. Follow these simple steps to join the{" "}
                  <span className="text-gradient-ai font-semibold">next generation of social media</span>.
                </p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "👤",
                  title: "Create Your Account",
                  description: "Download the app, create your profile, and set up your wallet in minutes.",
                  gradient: "glass-ai",
                },
                {
                  icon: "✍️",
                  title: "Create & Share Content",
                  description: "Post updates, share photos and videos, and engage with your community.",
                  gradient: "glass-neural",
                },
                {
                  icon: "🪙",
                  title: "Earn Rewards",
                  description:
                    "Get tokens for your activity, which can be exchanged for cryptocurrency or used within the platform.",
                  gradient: "glass-cyber",
                },
                {
                  icon: "👥",
                  title: "Join Communities",
                  description: "Connect with like-minded individuals in interest-based communities and groups.",
                  gradient: "glass-ai",
                },
                {
                  icon: "🔒",
                  title: "Secure Your Assets",
                  description: "Use our built-in wallet to securely store and manage your tokens and digital assets.",
                  gradient: "glass-neural",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl ${feature.gradient} border border-white/10 p-8 hover-neural animate-on-scroll animation-delay-${(index + 1) * 100} particles`}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-3xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient-neural transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20 group-hover:scale-150"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Roadmap Section */}
        <section id="roadmap" className="w-full py-16 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4 animate-on-scroll">
                <div className="flex items-center justify-center rounded-full glass-cyber px-3 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg border border-pink-400/20 glow-cyber w-fit mx-auto">
                  <span className="mr-1 sm:mr-2 text-base sm:text-xl">🚀</span>
                  <span className="mr-1 sm:mr-2 inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-pink-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm">Launch Roadmap</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gradient-cyber section-header text-center px-4">
                  Rezonate Launch Roadmap
                </h2>
                <p className="max-w-[900px] text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                  From Web to Web3 — Our step-by-step journey to{" "}
                  <span className="text-gradient-ai font-semibold">decentralize social media</span>.
                </p>
              </div>
            </div>

            {/* Minimal Responsive Roadmap */}
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6 md:gap-8">
                {[
                  {
                    phase: "Phase 1: Web Launch",
                    icon: "🌐",
                    status: "✅ Completed",
                    statusColor: "bg-green-500/20 text-green-400 border-green-400/30",
                    description: "Core features on web: dynamic feed, real-time chat, groups, profile personalization.",
                    gradient: "glass-ai",
                    delay: "animation-delay-300",
                  },
                  {
                    phase: "Phase 2: Mobile Apps",
                    icon: "📱",
                    status: "🚀 In Progress",
                    statusColor: "bg-blue-500/20 text-blue-400 border-blue-400/30 animate-pulse",
                    description:
                      "Native Android & iOS apps, fully synced with web, push notifications & media sharing.",
                    gradient: "glass-neural",
                    delay: "animation-delay-500",
                  },
                  {
                    phase: "Phase 3: AI Integration",
                    icon: "🤖",
                    status: "🔜 Coming Soon",
                    statusColor: "bg-purple-500/20 text-purple-400 border-purple-400/30",
                    description: "Shoutout Timeline, AI Chatbot, Text-to-Image Generator, smart support & discovery.",
                    gradient: "glass-cyber",
                    delay: "animation-delay-700",
                  },
                  {
                    phase: "Phase 4: Blockchain & Decentralization",
                    icon: "🔗",
                    status: "🔜 Coming Soon",
                    statusColor: "bg-pink-500/20 text-pink-400 border-pink-400/30",
                    description: "Web3 wallet login, crypto payments, decentralized content ownership.",
                    gradient: "glass-ai",
                    delay: "animation-delay-900",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl ${item.gradient} border border-white/10 p-6 md:p-8 hover-ai animate-on-scroll ${item.delay} transition-all duration-500`}
                  >
                    {/* Phase Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white/60">
                      {index + 1}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg border border-white/10 glow-neural transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gradient-ai transition-all duration-300">
                            {item.phase}
                          </h3>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${item.statusColor} w-fit`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-1000 ease-out ${
                          index === 0 ? "w-full bg-green-400" : index === 1 ? "w-3/4 bg-blue-400" : "w-1/4 bg-white/30"
                        }`}
                      ></div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-150"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section with Dropdowns */}
        <section id="faq" className="w-full py-16 md:py-24 lg:py-32 relative neural-pattern">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4 animate-on-scroll">
                <div className="flex items-center justify-center rounded-full glass-ai px-3 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg border border-blue-400/20 glow-ai w-fit mx-auto">
                  <span className="mr-1 sm:mr-2 text-base sm:text-xl">❓</span>
                  <span className="mr-1 sm:mr-2 inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm">FAQ</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gradient-ai section-header text-center px-4">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                  Get answers to the most common questions about{" "}
                  <span className="text-gradient-neural font-semibold">Rezonate</span> and how it works.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: "What is Rezonate?",
                  answer:
                    "Rezonate is the next-gen AI-powered Web3 social platform where your time and content earn real rewards in $REZO tokens. No emails. No middlemen. Just your wallet, your voice, and your value.",
                },
                {
                  question: "How do I earn tokens on Rezonate?",
                  answer:
                    "You can earn tokens by posting content, engaging with other users' posts (likes, comments, shares), participating in community governance, referring new users, and contributing to content moderation. The more active and valuable your contributions, the more tokens you earn.",
                },
                {
                  question: "Is Rezonate free to use?",
                  answer:
                    "Yes, Rezonate is completely free to download and use. There are no subscription fees or hidden costs. In fact, you earn tokens while using the platform, making it a rewarding experience rather than a costly one.",
                },
                {
                  question: "How is my privacy protected?",
                  answer:
                    "Rezonate is built with privacy-first principles. Your data is encrypted and stored on decentralized networks, giving you full control over what you share and with whom. We don't sell your data to advertisers or third parties, and you can delete your content at any time.",
                },
                {
                  question: "What can I do with the tokens I earn?",
                  answer:
                    "Tokens can be used within the platform for premium features, tipping other users, or participating in governance votes. You can also exchange them for other cryptocurrencies or cash them out through supported exchanges.",
                },
                {
                  question: "How does the AI enhance my experience?",
                  answer:
                    "Our AI provides personalized content recommendations, helps with content creation through smart suggestions, automatically moderates harmful content, and optimizes your feed based on your interests—all while maintaining your privacy and security.",
                },
              ].map((faq, index) => {
                const isOpen = !!faqOpenStates[index]

                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl glass-neural border border-white/10 hover-ai animate-on-scroll animation-delay-${(index + 1) * 100} data-flow transition-all duration-300`}
                  >
                    <button
                      onClick={() => setFaqOpenStates({ ...faqOpenStates, [index]: !isOpen })}
                      className="w-full p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-2xl transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-gradient-neural transition-all duration-300 pr-4">
                          {faq.question}
                        </h3>
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? "rotate-180 bg-blue-400/20" : "group-hover:bg-white/20"}`}
                        >
                          <svg
                            className="w-4 h-4 text-white transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>

                    <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-150"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Final CTA Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-6 animate-on-scroll">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gradient-matrix">
                  Ready to Take Control of Your Social Media?
                </h2>
                <p className="max-w-[900px] text-white/70 text-lg md:text-xl leading-relaxed">
                  Rezonate is here. Be one of the first to experience social media that{" "}
                  <span className="text-gradient-ai font-semibold">rewards you</span>,{" "}
                  <span className="text-gradient-neural font-semibold">protects your privacy</span>, and gives you{" "}
                  <span className="text-gradient-cyber font-semibold">real ownership</span>.
                </p>
              </div>

              <div className="flex flex-col gap-6 min-[400px]:flex-row animate-on-scroll animation-delay-300">
                <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-center sm:items-center">
                  <Button size="lg" className="w-full sm:w-auto px-10 py-4 group btn-neural text-white font-semibold text-lg glow-neural">
                    <span className="mr-3 text-xl">🚀</span>
                    <span className="relative">
                      Download Now
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-10 py-4 group glass-ultra border-white/20 text-white hover:bg-white/10 font-semibold text-lg bg-transparent"
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="w-full py-8 glass-ultra border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:h-24 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-4 md:px-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rezonate%20%281%29-uSCI5lT1PxvKAkn9B4GMGYxHp6eZxE.png"
                alt="Rezonate Logo"
                width={120}
                height={40}
                className="dark:invert-0 hover:brightness-110 transition-all duration-300"
              />
              <p className="text-center text-sm leading-loose text-white/60 md:text-left">
                Built for the future of social media.{" "}
                <span className="text-gradient-ai font-semibold">Decentralized</span>,{" "}
                <span className="text-gradient-neural font-semibold">AI-powered</span>, and{" "}
                <span className="text-gradient-cyber font-semibold">user-owned</span>.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              {/* Enhanced Social Icons */}
              <Link
                href="#"
                className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 glow-ai"
                aria-label="X (formerly Twitter)"
              >
                <svg width="20" height="20" viewBox="0 0 23 20" fill="currentColor" className="w-5 h-5">
                  <path d="M17.4257 0H20.8183L13.4062 8.47193L22.1262 20H15.2983L9.9508 13.0081L3.83186 20H0.436864L8.36493 10.9385L0 0H7.00084L11.8347 6.39068L17.4257 0ZM16.2348 17.9691H18.1149L5.9794 1.92425H3.96211L16.2348 17.9691Z" />
                </svg>
              </Link>

              <Link
                href="#"
                className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 glow-neural"
                aria-label="Telegram"
              >
                <svg width="20" height="18" viewBox="0 0 23 20" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.65859 8.61014C8.13673 5.78729 12.4561 3.92709 14.6175 3.02781C20.7892 0.461031 22.0713 0.0148607 22.9072 0.000104155C23.0912 -0.00249995 23.5018 0.0426375 23.7683 0.258778C23.9931 0.441065 24.0547 0.687588 24.0843 0.860327C24.1138 1.03393 24.1511 1.42715 24.1216 1.73531C23.7874 5.24911 22.3404 13.7758 21.6043 17.7115C21.2927 19.3772 20.679 19.9354 20.0852 19.9901C18.7953 20.109 17.8153 19.1368 16.5653 18.3174C14.6097 17.0361 13.5047 16.2376 11.6063 14.9867C9.41187 13.5406 10.8346 12.7463 12.0846 11.4477C12.4118 11.1075 18.0974 5.93572 18.2077 5.46698C18.2216 5.40796 18.2346 5.18921 18.1044 5.07377C17.9742 4.95832 17.7823 4.99825 17.6443 5.0295C17.4481 5.07377 14.3241 7.13882 8.27128 11.2247C7.38414 11.834 6.58034 12.13 5.86074 12.1153C5.06736 12.0979 3.54136 11.6665 2.40684 11.2976C1.01538 10.8453 -0.0904999 10.6057 0.00585192 9.83754C0.0553299 9.43737 0.606532 9.02853 1.65859 8.61014Z"
                  />
                </svg>
              </Link>

              <Link
                href="#"
                className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 glow-cyber"
                aria-label="DexTools"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-2xl btn-neural text-white w-14 h-14 glow-neural"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m18 15-6-6-6 6"></path>
          </svg>
        </Button>
      )}
    </div>
  )
}
