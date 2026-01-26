import { Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2A2A2A] px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex justify-center gap-6">
          <button
            type="button"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3A3A3A] transition-colors hover:bg-[#FF6000]"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3A3A3A] transition-colors hover:bg-[#FF6000]"
            aria-label="Github"
          >
            <Github className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-8 text-center">
          <span
            className="inline-flex items-center gap-2 text-gray-300"
            style={{ fontFamily: "Pretendard Variable, sans-serif" }}
          >
            멋쟁이사자처럼 연암공과대학교 16기
          </span>
        </div>
        <div
          className="text-center text-sm text-gray-500"
          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
        >
          <p>© 2026. LIKELION YEONHAM All pictures cannot be copied without permission</p>
        </div>
      </div>
    </footer>
  );
}
