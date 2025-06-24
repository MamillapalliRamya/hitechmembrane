import React from 'react';
import { motion } from 'framer-motion';

interface TitleSectionProps {
  title: string;
  backgroundImage: string;
  overlay?: boolean;
  overlayOpacity?: number;
  textColor?: string;
  className?: string;
  noBgColor?: boolean;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  backgroundImage,
  overlay = true,
  overlayOpacity = 0.5,
  textColor = 'text-white',
  className = '',
  noBgColor = false,
}) => {
  return (
    <section className={`relative h-96 flex items-center justify-start ${noBgColor ? '' : 'bg-white'} ${className}`} style={{ height: "33rem", marginTop: "85px" }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 container mx-auto px-3 lg:px-5"
>
  <div className="max-w-4xl">
    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${textColor}`}>
      {title}
    </h1>
  </div>
</motion.div>

      {/* Blue accent line (optional) */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" /> */}
    </section>
  );
};

export default TitleSection;