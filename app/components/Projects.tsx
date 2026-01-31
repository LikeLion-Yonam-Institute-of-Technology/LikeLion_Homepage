"use client";

import { useState } from "react";
import Link from "next/link";
import { allProjects, generations } from "@/app/data/projects";

interface ProjectsProps {
  showFullPage?: boolean;
}

export function Projects({ showFullPage = false }: ProjectsProps) {
  const [selectedGeneration, setSelectedGeneration] = useState(
    generations[0] ?? "14기"
  );

  const filteredProjects =
    selectedGeneration === "전체"
      ? allProjects
      : allProjects.filter((project) => project.generation === selectedGeneration);

  const visibleProjects = showFullPage ? filteredProjects : allProjects.slice(0, 8);

  return (
    <section className={`${showFullPage ? "min-h-screen" : ""} bg-white px-6 py-20`}>
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-4 text-center text-4xl md:text-5xl"
          style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
        >
          {showFullPage ? "프로젝트" : "Projects"}
        </h2>
        <p
          className="mb-12 text-center text-gray-600"
          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
        >
          각자지들의 다양한 프로젝트를 확인해 보세요!
        </p>

        {showFullPage ? (
          <div className="mb-12 mt-8 flex flex-wrap justify-center gap-3">
            {generations.map((gen) => (
              <button
                key={gen}
                onClick={() => setSelectedGeneration(gen)}
                className={`rounded-full px-6 py-2 text-sm transition-all ${
                  selectedGeneration === gen
                    ? "bg-[#FF6000] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                type="button"
              >
                {gen}{" "}
                {gen !== "전체" &&
                  `(${allProjects.filter((project) => project.generation === gen).length})`}
              </button>
            ))}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visibleProjects.map((project) => (
            <div
              key={`${project.generation}-${project.title}`}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="text-xs font-medium text-[#FF6000]"
                    style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                  >
                    {project.generation}
                  </span>
                </div>

                <h3
                  className="mb-2 text-lg text-[#1C1C1C]"
                  style={{ fontFamily: "SUITE Variable, sans-serif" }}
                >
                  {project.title}
                </h3>

                <p
                  className="mb-4 line-clamp-2 text-sm text-gray-600"
                  style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                      style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showFullPage ? (
          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="rounded-full border-2 border-gray-300 px-8 py-3 text-gray-700 transition-all hover:border-[#FF6000] hover:text-[#FF6000]"
              style={{ fontFamily: "Pretendard Variable, sans-serif" }}
            >
              프로젝트 전체보기 →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
