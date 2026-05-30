import { Metadata } from "next";

export const metadata: Metadata = {
  title: "창원 상남동 프라이빗 라운지 | DOPAMINE",
  description:
    "창원 상남동 프라이빗 라운지 DOPAMINE. 고급스럽고 프라이빗한 분위기의 공간. 편한 문의 가능합니다.",
  keywords: [
    "창원 상남동",
    "창원 라운지",
    "상남동 프라이빗",
    "창원 분위기 좋은 곳",
    "창원 VIP 라운지",
    "DOPAMINE",
  ],
};

export default function DopaminePrivateLounge() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1800&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="tracking-[10px] text-zinc-400 mb-4 text-sm uppercase">
            Changwon Sangnam-dong Private Lounge
          </p>

          <h1 className="text-6xl md:text-8xl font-light tracking-widest mb-8 text-yellow-500">
            DOPAMINE
          </h1>

          <p className="text-zinc-300 text-lg md:text-2xl leading-relaxed mb-10">
            프라이빗한 공간에서
            <br />
            분위기 있는 시간을 경험하세요.
          </p>

          <a
            href="tel:010-5041-5141"
            className="inline-flex items-center gap-4 border border-yellow-500 px-8 py-4 rounded-full backdrop-blur-sm bg-white/5 hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer"
          >
            <span className="text-xl tracking-wider">편한 문의</span>
            <span className="text-xl font-semibold">O1O-5041-5141</span>
          </a>
        </div>
      </section>

      {/* Mood Section */}
      <section className="py-28 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl text-yellow-500 mb-8 font-light tracking-wide">
              PRIVATE MOOD
            </h2>

            <p className="text-zinc-300 text-lg leading-9 mb-8">
              조용하고 프라이빗한 공간,
              <br />
              세련된 인테리어와 고급스러운 무드.
              <br />
              편안하게 대화와 분위기를 즐길 수 있는 공간입니다.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="border border-zinc-800 p-6 rounded-3xl bg-zinc-900/40 backdrop-blur-sm">
                <h3 className="text-yellow-500 text-xl mb-3">Luxury Room</h3>
                <p className="text-zinc-400 text-sm leading-7">
                  감각적인 조명과 프라이빗 룸 구성
                </p>
              </div>

              <div className="border border-zinc-800 p-6 rounded-3xl bg-zinc-900/40 backdrop-blur-sm">
                <h3 className="text-yellow-500 text-xl mb-3">Premium Service</h3>
                <p className="text-zinc-400 text-sm leading-7">
                  편안하고 고급스러운 분위기 제공
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop"
              alt="고급스러운 라운지 인테리어"
              className="rounded-[30px] h-[240px] object-cover w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1200&auto=format&fit=crop"
              alt="분위기 있는 조명"
              className="rounded-[30px] h-[240px] object-cover w-full mt-16"
            />

            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop"
              alt="프라이빗 공간"
              className="rounded-[30px] h-[240px] object-cover w-full -mt-8"
            />

            <img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop"
              alt="VIP 라운지 분위기"
              className="rounded-[30px] h-[240px] object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Space Section */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl text-yellow-500 font-light tracking-wider mb-6">
            PRIVATE SPACE
          </h2>

          <p className="text-zinc-400 text-lg leading-8">
            조용한 공간에서 편안하게
            <br />
            프라이빗한 시간을 즐겨보세요.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-[35px] group">
            <img
              src="https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?q=80&w=1200&auto=format&fit=crop"
              alt="Premium Room"
              className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl text-yellow-500 mb-2">Premium Room</h3>
              <p className="text-zinc-300">감각적인 프라이빗 공간</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[35px] group md:mt-16">
            <img
              src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Interior"
              className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl text-yellow-500 mb-2">Luxury Interior</h3>
              <p className="text-zinc-300">고급스럽고 세련된 분위기</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[35px] group">
            <img
              src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop"
              alt="VIP Lounge"
              className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl text-yellow-500 mb-2">VIP Lounge</h3>
              <p className="text-zinc-300">프라이빗한 휴식 공간</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950 text-center">
        <h2 className="text-4xl md:text-5xl text-yellow-500 font-light tracking-widest mb-8">
          RESERVATION & CONTACT
        </h2>

        <p className="text-zinc-400 text-lg leading-8 mb-10">
          창원 상남동
          <br />
          편안한 분위기의 프라이빗 라운지
        </p>

        <a
          href="tel:010-5041-5141"
          className="inline-block border border-yellow-500 rounded-full px-10 py-5 hover:bg-yellow-500 hover:text-black transition duration-300"
        >
          <span className="text-2xl tracking-wider font-medium">
            O1O-5041-5141
          </span>
        </a>
      </section>
    </div>
  );
}
