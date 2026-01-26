"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { galleryImages } from "@/app/data/gallery";

interface GalleryProps {
  showFilter?: boolean;
}


export function Gallery({ showFilter = false }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<
    "all" | "frontend" | "backend"
  >("all");

  const filteredImages =
    showFilter && selectedTrack !== "all"
      ? galleryImages.filter(
          (image) => image.track === selectedTrack || image.track === "all"
        )
      : galleryImages;

  const infiniteImages = [...filteredImages, ...filteredImages];

  return (
    <section className="overflow-hidden bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-4 text-center text-4xl md:text-5xl"
          style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
        >
          활동 갤러리
        </h2>
        <p
          className="mb-12 text-center text-gray-600"
          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
        >
          멋사에서의 다양한 활동 순간들을 만나보세요
        </p>

        {showFilter ? (
          <>
            <div className="mb-16 flex justify-center gap-4">
              <button
                onClick={() => setSelectedTrack("all")}
                className={`rounded-full px-6 py-3 transition-all ${
                  selectedTrack === "all"
                    ? "bg-[#FF6000] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                type="button"
              >
                전체
              </button>
              <button
                onClick={() => setSelectedTrack("frontend")}
                className={`rounded-full px-6 py-3 transition-all ${
                  selectedTrack === "frontend"
                    ? "bg-[#FF6000] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                type="button"
              >
                프론트엔드
              </button>
              <button
                onClick={() => setSelectedTrack("backend")}
                className={`rounded-full px-6 py-3 transition-all ${
                  selectedTrack === "backend"
                    ? "bg-[#FF6000] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                type="button"
              >
                백엔드
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredImages.map((image) => (
                <div
                  key={`${image.title}-${image.date}`}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl"
                  style={{ height: "300px" }}
                  onClick={() =>
                    setSelectedImage(
                      galleryImages.findIndex((item) => item === image)
                    )
                  }
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3
                        className="mb-1 text-lg"
                        style={{ fontFamily: "SUITE Variable, sans-serif" }}
                      >
                        {image.title}
                      </h3>
                      <p
                        className="text-sm opacity-90"
                        style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                      >
                        {image.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="relative w-full">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                @keyframes scroll-infinite {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(calc(-400px * ${filteredImages.length} - 24px * ${filteredImages.length}));
                  }
                }
                .scroll-container {
                  animation: scroll-infinite 25s linear infinite;
                  display: flex;
                  gap: 24px;
                  width: fit-content;
                }
                .scroll-container:hover {
                  animation-play-state: paused;
                }
              `,
                }}
              />

              <div className="scroll-container">
                {infiniteImages.map((image, index) => (
                  <div
                    key={`${image.title}-${image.date}-${index}`}
                    className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl"
                    style={{ width: "400px", height: "300px" }}
                    onClick={() =>
                      setSelectedImage(index % filteredImages.length)
                    }
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3
                          className="mb-1 text-lg"
                          style={{ fontFamily: "SUITE Variable, sans-serif" }}
                        >
                          {image.title}
                        </h3>
                        <p
                          className="text-sm opacity-90"
                          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                        >
                          {image.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="/gallery"
                className="rounded-full border-2 border-gray-300 px-8 py-3 text-gray-700 transition-all hover:border-[#FF6000] hover:text-[#FF6000]"
                style={{ fontFamily: "Pretendard Variable, sans-serif" }}
              >
                활동 사진 전체보기 →
              </Link>
            </div>
          </>
        )}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 text-white transition-colors hover:text-[#FF6000]"
            onClick={() => setSelectedImage(null)}
            type="button"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="w-full max-w-4xl">
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="w-full rounded-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3
                className="mb-2 text-2xl"
                style={{ fontFamily: "SUITE Variable, sans-serif" }}
              >
                {galleryImages[selectedImage].title}
              </h3>
              <p style={{ fontFamily: "Pretendard Variable, sans-serif" }}>
                {galleryImages[selectedImage].date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
