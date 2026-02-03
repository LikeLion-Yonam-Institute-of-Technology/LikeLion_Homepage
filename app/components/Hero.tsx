import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#FF6000] px-6 text-white">
      <div className="w-full max-w-5xl text-center">
        <h1
          className="mb-6 text-4xl sm:text-5xl md:text-7xl"
          style={{ fontFamily: "SUITE Variable, sans-serif" }}
        >
          멋쟁이 사자처럼
        </h1>
        <p
          className="mb-8 text-xl md:text-3xl"
          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
        >
          IT 창업 및 개발자 양성을 위한 대학생 연합 동아리
        </p>
        <p
          className="mx-auto max-w-2xl text-base opacity-90 md:text-lg"
          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
        >
          누구나 자신의 아이디어를 실현할 수 있도록, 프로그래밍 교육과 창업 지원을
          통해 테크 기반 혁신가를 양성합니다.
        </p>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
}
