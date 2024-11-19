'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full overflow-hidden shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent"></div>
          
          {/* Button container with glassmorphism effect */}
          <div className="relative backdrop-blur-lg bg-white/5 border border-cyan-500/20 rounded-full p-4 hover:shadow-cyan-500/5 transition-all duration-300 flex items-center justify-center">
            <FaArrowUp className="text-cyan-500 text-2xl" />
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
