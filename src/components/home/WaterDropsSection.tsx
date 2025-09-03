import React, { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const frameCount = 162;
const getFrame = (index: number) =>
  `/assets/waterdrops/frames/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;

const WaterDropSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // animation plays while container scrolls
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  // Preload images
  useEffect(() => {
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = getFrame(i);
    }
  }, []);

  // Render frames
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let currentFrame = 1;
    const img = new Image();

    const render = (index: number) => {
      img.src = getFrame(index);
      img.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    };

    render(currentFrame);

    const unsubscribe = frameIndex.on("change", (v) => {
      const idx = Math.floor(v);
      if (idx !== currentFrame) {
        currentFrame = idx;
        console.log("Rendering frame:", idx); 
        render(currentFrame);
      }
    });

    return () => unsubscribe();
  }, [frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#1e3a8a]">
      {/* Pinned section */}
      <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Canvas animation */}
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

        {/* Overlay text */}
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            style={{ color: "#a3d977", fontFamily: "Diodrum Cyrillic, sans-serif" }}
          >
            Purifying millions of gallons,
          </h1>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mt-2"
            style={{ color: "#a3d977", fontFamily: "Diodrum Cyrillic, sans-serif" }}
          >
            Powering a sustainable future.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default WaterDropSection;