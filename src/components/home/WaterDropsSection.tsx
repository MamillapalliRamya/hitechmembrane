import React, { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

const WaterDropSection: React.FC<Props> = ({ onComplete }) => {
  const [textState, setTextState] = useState<'hidden' | 'visible' | 'exit'>('hidden');

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const show = setTimeout(() => setTextState("visible"), 3000);
    const exit = setTimeout(() => setTextState("exit"), 8300);

    const done = setTimeout(() => {
      document.body.style.overflow = "auto";
      onComplete();
    }, 11800);

    return () => {
      clearTimeout(show);
      clearTimeout(exit);
      clearTimeout(done);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <section className="fixed inset-0 z-[9999] overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        playsInline
      >
        <source src="/assets/videos/waterdrops_loop.mp4" type="video/mp4" />
      </video>

      {/* OPTIONAL DARK OVERLAY (helps text readability) */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* TEXT */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center h-full
          transition-all duration-700 ease-out
          ${
            textState === "visible"
              ? "translate-y-0 opacity-100"
              : textState === "exit"
              ? "-translate-y-full opacity-0"
              : "translate-y-full opacity-0"
          }`}
      >
        <h1 className="text-4xl md:text-5xl text-black font-medium">
          Purifying millions of gallons,
        </h1>
        <h1 className="text-4xl md:text-5xl text-black font-medium mt-2">
          Powering a sustainable future.
        </h1>
      </div>
    </section>
  );
};

export default WaterDropSection;
