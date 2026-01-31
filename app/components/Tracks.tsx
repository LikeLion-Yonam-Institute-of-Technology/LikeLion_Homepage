"use client";

import { useState } from "react";
import { backendTrack, frontendTrack } from "@/app/data/tracks";

function TrackTable({
  rows,
}: {
  rows: {
    week: string;
    stage: string;
    topic: string;
    content: string;
    keywords: string;
  }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px] border-collapse rounded-xl border border-gray-200 text-left text-sm">
        <thead className="bg-[#F9F9F9]">
          <tr>
            {["주차", "단계", "주제", "주요 학습 내용", "핵심 기술 키워드"].map(
              (header) => (
                <th
                  key={header}
                  className="border-b border-gray-200 px-4 py-3 font-semibold text-[#1C1C1C]"
                  style={{ fontFamily: "SUITE Variable, sans-serif" }}
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.week}-${row.topic}`} className="border-b border-gray-200">
              <td className="px-4 py-3 font-semibold text-[#1C1C1C]">
                {row.week}
              </td>
              <td className="px-4 py-3 text-[#1C1C1C]">{row.stage}</td>
              <td className="px-4 py-3 text-[#1C1C1C]">{row.topic}</td>
              <td className="px-4 py-3 text-gray-600">{row.content}</td>
              <td className="px-4 py-3 text-gray-600">{row.keywords}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Tracks() {
  const [activeTrack, setActiveTrack] = useState<"frontend" | "backend">(
    "frontend"
  );

  const track = activeTrack === "frontend" ? frontendTrack : backendTrack;

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-2 text-center text-4xl md:text-5xl"
          style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
        >
          커리큘럼
        </h2>
        <p
          className="mb-12 text-center text-gray-600"
          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
        >
          프론트엔드/백엔드 트랙을 선택해 커리큘럼을 확인하세요
        </p>

        <div className="mb-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTrack("frontend")}
            className={`cursor-pointer rounded-full px-6 py-2 text-sm transition-all ${
              activeTrack === "frontend"
                ? "bg-[#FF6000] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            style={{ fontFamily: "Pretendard Variable, sans-serif" }}
          >
            프론트 트랙
          </button>
          <button
            type="button"
            onClick={() => setActiveTrack("backend")}
            className={`cursor-pointer rounded-full px-6 py-2 text-sm transition-all ${
              activeTrack === "backend"
                ? "bg-[#FF6000] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            style={{ fontFamily: "Pretendard Variable, sans-serif" }}
          >
            백엔드 트랙
          </button>
        </div>

        <div className="mb-6">
          <h3
            className="mb-2 text-2xl text-[#1C1C1C]"
            style={{ fontFamily: "SUITE Variable, sans-serif" }}
          >
            {track.title}
          </h3>
          <p
            className="text-sm text-gray-600"
            style={{ fontFamily: "Pretendard Variable, sans-serif" }}
          >
            {track.subtitle}
          </p>
        </div>

        <TrackTable rows={track.rows} />
      </div>
    </section>
  );
}
