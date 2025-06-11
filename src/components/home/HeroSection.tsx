import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { MembraneModel } from '../3d/MembraneModel';

const HeroSection: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoPlaying(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videoPlaying ? (
          <div className="w-full h-full bg-gradient-to-r from-blue-900/70 to-blue-700/50">
            <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
            <video 
              className="w-full h-full object-cover" 
              autoPlay 
              muted 
              loop
              playsInline
            >
              <source src="https://example.com/videos/membrane-filtration.mp4" type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-900 to-blue-700 animate-pulse"></div>
        )}
      </div>
      
      {/* 3D Model */}
      <div className="absolute inset-0 z-10 opacity-60">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <MembraneModel />
          </Suspense>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Precision Separation Membranes for Extreme Industrial Environments
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-100"
          >
            ISO 9001 Certified Ceramic & Polymer Solutions
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all flex items-center gap-2 group"
            >
              Request Custom Solution Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-md border border-white/30 transition-all flex items-center gap-2"
            >
              Download Technical Playbook
              <Play className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-12 left-0 right-0 bg-white/10 backdrop-blur-md py-4"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="text-white font-medium">Trusted By Industry Leaders</div>
              <div className="flex flex-wrap gap-8 items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="h-12 w-24 bg-white/80 rounded opacity-80 hover:opacity-100 transition-opacity"
                ></motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="h-12 w-24 bg-white/80 rounded opacity-80 hover:opacity-100 transition-opacity"
                ></motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="h-12 w-24 bg-white/80 rounded opacity-80 hover:opacity-100 transition-opacity"
                ></motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="h-12 w-24 bg-white/80 rounded opacity-80 hover:opacity-100 transition-opacity"
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;