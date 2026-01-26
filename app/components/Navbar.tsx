"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { label: "홈", href: "/" },
  { label: "운영진", href: "/team" },
  { label: "갤러리", href: "/gallery" },
  { label: "프로젝트", href: "/projects" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isSolid = pathname !== "/" || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        isSolid ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-2xl transition-colors ${
              isSolid ? "text-[#FF6000]" : "text-white"
            }`}
            style={{ fontFamily: "SUITE Variable, sans-serif" }}
          >
            LIKELION
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isSolid
                    ? "text-[#1C1C1C] hover:text-[#FF6000]"
                    : "text-white hover:text-[#FF6000]"
                }`}
                style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className={`transition-colors md:hidden ${
              isSolid ? "text-[#1C1C1C]" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 pb-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#1C1C1C] transition-colors hover:text-[#FF6000]"
                  style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
