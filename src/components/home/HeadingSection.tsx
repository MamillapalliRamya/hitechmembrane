import React, { useEffect, useRef } from "react";

const AboutExcellence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-rise-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (containerRef.current) observer.observe(containerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      Array.from(cards).forEach((card, index) => {
        observer.observe(card);
      });
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        Array.from(cards).forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <div
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('/images/about-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Centered Heading */}
          <h1
            className="text-3xl font-bold md:text-4xl  text-gray-900 mb-12 md:mb-20 text-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
            ref={contentRef}
            style={{ animation: "fadeInUp 0.7s ease-out forwards" }}
          >
            ACCLAIMED WORLDWIDE FOR ITS EXCELLENCE IN WATER FILTER MEMBRANE
            SOLUTION
          </h1>
          <hr className="p-2 w-full" />
          {/* Animated Cards Container */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {/* Left Card - Animate from left */}

            <section className=" p-4">
              <div
                className="w-full   rounded-xl  overflow-hidden transition-all duration-500 ease-out opacity-0 -translate-x-20  hover:-translate-y-2"
                style={{ animation: "slideInLeft 0.7s ease-out forwards 0.2s" }}
              >
                <div className="p-8 h-full transition-all duration-300 ">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    OUR EXCELLENCE IN MEMBRANE TECHNOLOGY
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Since its inception in 1995, Deliver quality, credibility
                      and well-engineered water filter membrane products.
                      Hi-Tech has always wished for the wellness of people.
                    </p>
                    <p>
                      With global footprints already marked within a span of a
                      decade, we grew stronger and larger organically within our
                      stakeholders inclined and became inclined towards
                      maintaining the ability to provide a right product-price
                      mix.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Card - Animate from right */}
              <div
                className="w-full md:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-out opacity-0 translate-x-20 hover:shadow-xl hover:-translate-y-2"
                style={{
                  animation: "slideInRight 0.7s ease-out forwards 0.2s",
                }}
              ></div>
              <div
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
                ref={cardsRef}
              >
                {/* ANSI-58 Certified Card */}
                <div
                  className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 opacity-0 translate-y-20 transition-all duration-700 ease-out delay-200
              hover:shadow-md hover:-translate-y-1 hover:bg-blue-100 hover:border-blue-600 transform-gpu"
                  style={{ animation: "fadeInUp 0.7s ease-out forwards 0.2s" }}
                >
                  <h3 className="text-lg font-semibold text-blue-800">
                    ANSI-58 Certified
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our membranes meet rigorous industry standards
                  </p>
                </div>

                {/* Best RO Membrane Card */}
                <div
                  className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 opacity-0 translate-y-20 transition-all duration-700 ease-out delay-300
              hover:shadow-md hover:-translate-y-1 hover:bg-green-100 hover:border-green-600 transform-gpu"
                  style={{ animation: "fadeInUp 0.7s ease-out forwards 0.3s" }}
                >
                  <h3 className="text-lg font-semibold text-green-800">
                    Best RO Membrane
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Awarded 2014-2015, 2015-2016 by Water Digest
                  </p>
                </div>

                {/* Technology Award Card */}
                <div
                  className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 opacity-0 translate-y-20 transition-all duration-700 ease-out delay-400
              hover:shadow-md hover:-translate-y-1 hover:bg-amber-100 hover:border-amber-600 transform-gpu"
                  style={{ animation: "fadeInUp 0.7s ease-out forwards 0.4s" }}
                >
                  <h3 className="text-lg font-semibold text-amber-800">
                    Technology Award
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Best Membrane Technology, Dubai 2015
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Awards/Certifications Section */}
      </div>

      {/* Add this to your global CSS */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-rise-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default AboutExcellence;
