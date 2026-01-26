import { Award, Code, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "실전 교육",
    description: "웹/앱 개발부터 배포까지 실무 중심의 교육 프로그램",
  },
  {
    icon: Users,
    title: "네트워킹",
    description: "전국 대학생 개발자들과의 교류 및 협업 기회",
  },
  {
    icon: Rocket,
    title: "창업 지원",
    description: "아이디어 구현부터 사업화까지 전방위 지원",
  },
  {
    icon: Award,
    title: "성장 기회",
    description: "해커톤, 프로젝트 경진대회 등 다양한 성장 기회 제공",
  },
];

export function About() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-4 text-center text-4xl md:text-5xl"
          style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
        >
          멋사 소개
        </h2>
        <p
          className="mx-auto mb-16 max-w-2xl text-center text-gray-600"
          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
        >
          2013년부터 시작된 멋쟁이사자처럼은 국내 최대 규모의 IT 창업 및 개발자
          양성 교육 동아리입니다.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-[#F9F9F9] p-6 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6000]">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3
                className="mb-3 text-xl"
                style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: "Pretendard Variable, sans-serif" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
