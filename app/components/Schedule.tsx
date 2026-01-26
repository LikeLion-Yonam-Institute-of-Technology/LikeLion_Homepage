import { Clock, MapPin } from "lucide-react";
import { scheduleItems } from "@/app/data/schedule";

export default function Schedule() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2
          className="mb-4 text-center text-3xl md:text-4xl"
          style={{ fontFamily: "SUITE Variable, sans-serif", color: "#1C1C1C" }}
        >
          연간 일정
        </h2>
        <p
          className="mb-16 text-center text-gray-600"
          style={{ fontFamily: "Pretendard Variable, sans-serif" }}
        >
          1년 동안 학교별 교육 및 행사에 참여하며, 내 아이디어를 내 손으로 실현하는
          뜻깊은 경험을 할 수 있어요.
        </p>

        <div className="overflow-x-auto pb-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:flex lg:flex-nowrap lg:gap-0 lg:justify-start">
            {scheduleItems.map((item, index) => (
              <div
                key={item.title}
                className={`w-full lg:relative lg:basis-0 lg:flex-shrink lg:flex-grow ${
                  index === 0 ? "lg:ml-0" : "lg:-ml-[30px]"
                }`}
              >
                <div
                  className={`relative h-full rounded-2xl p-6 transition-all duration-300 sm:p-8 lg:rounded-none lg:pr-16 ${
                    index === 0
                      ? "lg:[clip-path:polygon(0_0,calc(100%_-_40px)_0,100%_50%,calc(100%_-_40px)_100%,0_100%)]"
                      : "lg:[clip-path:polygon(0_0,calc(100%_-_40px)_0,100%_50%,calc(100%_-_40px)_100%,0_100%,40px_50%)] lg:pl-24"
                  }`}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#FF6000" : "#FF7A33",
                    minHeight: "260px",
                    paddingLeft: "24px",
                    zIndex: scheduleItems.length - index,
                  }}
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-4 lg:pl-4">
                      <span
                        className="inline-block rounded-full border border-white/30 bg-white/20 px-4 py-1 text-sm text-white backdrop-blur-sm"
                        style={{ fontFamily: "SUITE Variable, sans-serif" }}
                      >
                        {item.month}
                      </span>
                    </div>

                    <h3
                      className="mb-3 text-2xl text-white lg:pl-4"
                      style={{ fontFamily: "SUITE Variable, sans-serif" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mb-4 flex-grow text-sm text-white/90 lg:pl-4"
                      style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                    >
                      {item.description}
                    </p>

                    <div
                      className="space-y-2 text-sm text-white/80 lg:pl-4"
                      style={{ fontFamily: "Pretendard Variable, sans-serif" }}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-white" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-white" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
