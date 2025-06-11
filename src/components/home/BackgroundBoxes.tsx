// components/BackgroundBoxes.tsx


import React from "react";


// If you don't have the utils file, you can include this utility directly
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

interface BackgroundBoxesProps {
  className?: string;
  gridSize?: { rows: number; cols: number };
  colors?: string[];
  boxSize?: { width: string; height: string };
  animationDuration?: number;
  showPlusIcons?: boolean;
  skewAngle?: number;
}

export const BackgroundBoxes = ({
  className,
  gridSize = { rows: 30, cols: 15 }, // Further reduced for better performance
  boxSize = { width: "2.5rem", height: "2.5rem" }, // Slightly larger default
  // animationDuration = 0.3,
  showPlusIcons = true,
  skewAngle = 15, // More subtle skew by default
}: BackgroundBoxesProps) => {
  const rows = React.useMemo(
    () => new Array(gridSize.rows).fill(1),
    [gridSize.rows]
  );
  const cols = React.useMemo(
    () => new Array(gridSize.cols).fill(1),
    [gridSize.cols]
  );

  // const getRandomColor = React.useCallback(() => {
  //   return colors[Math.floor(Math.random() * colors.length)];
  // }, [colors]);

  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden",
        "pointer-events-none select-none",
        className
      )}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 flex origin-center"
        style={{
          transform: `skewX(-${skewAngle}deg) skewY(${
            skewAngle / 3
          }deg) scale(1.2)`,
        }}
      >
        {rows.map((_, i) => (
          <div
            key={`row-${i}`}
            className="relative flex"
            style={{ height: boxSize.height }}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.5 }}
          >
            {cols.map((_, j) => (
              <div
                key={`col-${j}`}
                className={cn(
                  "border border-white/5", // more subtle border
                  "transition-colors duration-1000"
                )}
                style={{
                  width: boxSize.width,
                  height: boxSize.height,
                }}
                // whileHover={{
                //   backgroundColor: getRandomColor(),
                //   transition: { duration: animationDuration },
                // }}
                // animate={{
                //   transition: { duration: 3 + Math.random() * 7 }, // more varied timing
                // }}
              >
                {showPlusIcons && i % 5 === 0 && j % 5 === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 opacity-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(BackgroundBoxes);
