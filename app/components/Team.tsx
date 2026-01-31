import { Github, Linkedin, Mail } from "lucide-react";
import { teamMembers } from "@/app/data/team";

export function Team() {
  return (
    <section className="bg-[#F9F9F9] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-2 text-center text-4xl md:text-5xl"
          style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
        >
          운영진 소개
        </h2>
        <p
          className="mb-12 text-center text-gray-600"
          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
        >
          14기 운영진
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden bg-gray-100" />
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
                  <button
                    className="text-gray-400 transition-colors hover:text-[#FF6000]"
                    type="button"
                  >
                    <Github className="h-5 w-5" />
                  </button>
                  <button
                    className="text-gray-400 transition-colors hover:text-[#FF6000]"
                    type="button"
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button
                    className="text-gray-400 transition-colors hover:text-[#FF6000]"
                    type="button"
                  >
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
