import { Database, Monitor } from "lucide-react";

const tracks = [
  {
    icon: Monitor,
    name: "Frontend",
    color: "#FF6000",
    description: "HTML, CSS, JavaScript, React를 활용한 웹 프론트엔드 개발",
    curriculum: [
      {
        week: "1-2주",
        topic: "HTML & CSS 기초",
        content: "HTML 태그, CSS 스타일링, 반응형 디자인",
      },
      {
        week: "3-4주",
        topic: "JavaScript 기초",
        content: "변수, 함수, DOM 조작, 이벤트 처리",
      },
      {
        week: "5-6주",
        topic: "JavaScript 심화",
        content: "ES6+, 비동기 처리, API 통신",
      },
      {
        week: "7-8주",
        topic: "React 기초",
        content: "컴포넌트, Props, State, Hooks",
      },
      {
        week: "9-10주",
        topic: "React 심화",
        content: "Context API, Router, 상태관리",
      },
      {
        week: "11-12주",
        topic: "프로젝트",
        content: "실전 프로젝트 개발 및 배포",
      },
    ],
  },
  {
    icon: Database,
    name: "Backend",
    color: "#1C1C1C",
    description: "Node.js, Django, Spring을 활용한 서버 및 API 개발",
    curriculum: [
      {
        week: "1-2주",
        topic: "Python/Node.js 기초",
        content: "기본 문법, 자료구조, 함수",
      },
      {
        week: "3-4주",
        topic: "데이터베이스",
        content: "SQL 기초, 데이터 모델링, CRUD",
      },
      {
        week: "5-6주",
        topic: "Web Framework",
        content: "Django/Express 기초, MVC 패턴",
      },
      {
        week: "7-8주",
        topic: "REST API",
        content: "API 설계, HTTP 메서드, 인증/인가",
      },
      {
        week: "9-10주",
        topic: "배포 & 운영",
        content: "서버 배포, CI/CD, 모니터링",
      },
      {
        week: "11-12주",
        topic: "프로젝트",
        content: "실전 프로젝트 개발 및 배포",
      },
    ],
  },
];

export function Tracks() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-4 text-center text-4xl md:text-5xl"
          style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
        >
          트랙 소개
        </h2>
        <p
          className="mb-16 text-center text-gray-600"
          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
        >
          자신의 관심사와 목표에 맞는 트랙을 선택하여 전문성을 키워보세요
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {tracks.map((track) => (
            <div key={track.name} className="rounded-2xl bg-[#F9F9F9] p-6">
              <div className="mb-6 flex items-center gap-4">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: track.color }}
                >
                  <track.icon className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3
                    className="mb-1 text-2xl"
                    style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
                  >
                    {track.name}
                  </h3>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                  >
                    {track.description}
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full overflow-hidden rounded-xl bg-white text-sm">
                  <thead>
                    <tr style={{ backgroundColor: track.color }}>
                      <th
                        className="px-4 py-3 text-left text-sm text-white"
                        style={{ fontFamily: "SUITE Variable, sans-serif", width: "25%" }}
                      >
                        기간
                      </th>
                      <th
                        className="px-4 py-3 text-left text-sm text-white"
                        style={{ fontFamily: "SUITE Variable, sans-serif", width: "35%" }}
                      >
                        주제
                      </th>
                      <th
                        className="px-4 py-3 text-left text-sm text-white"
                        style={{ fontFamily: "SUITE Variable, sans-serif", width: "40%" }}
                      >
                        내용
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {track.curriculum.map((item, itemIndex) => (
                      <tr
                        key={`${track.name}-${item.week}`}
                        className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${
                          itemIndex === track.curriculum.length - 1 ? "border-b-0" : ""
                        }`}
                      >
                        <td
                          className="px-4 py-3 text-sm font-semibold"
                          style={{ fontFamily: "Pretendard Variable, sans-serif", color: track.color }}
                        >
                          {item.week}
                        </td>
                        <td
                          className="px-4 py-3 text-sm"
                          style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
                        >
                          {item.topic}
                        </td>
                        <td
                          className="px-4 py-3 text-sm text-gray-600"
                          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                        >
                          {item.content}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
