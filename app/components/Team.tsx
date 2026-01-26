import { Github, Linkedin, Mail } from "lucide-react";
import { teamMembers } from "@/app/data/team";

export function Team() {
  return (
    <section className="bg-[#F9F9F9] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-4 text-center text-4xl md:text-5xl"
          style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
        >
          운영진 소개
        </h2>
        <p
          className="mb-16 text-center text-gray-600"
          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
        >
          열정과 전문성을 갖춘 운영진이 여러분의 성장을 돕습니다
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                ) : null}
              </div>
              <div className="p-6">
                <h3
                  className="mb-1 text-xl"
                  style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
                >
                  {member.name}
                </h3>
                <p
                  className="mb-3 text-[#FF6000]"
                  style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                >
                  {member.role}
                </p>
                <p
                  className="mb-4 text-sm text-gray-600"
                  style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                >
                  {member.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-[#FF6000]"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-[#FF6000]"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-[#FF6000]"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
