"use client";
import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface GlowingBranchingLinesProps {
  children?: React.ReactNode; // Accepts any nested components or elements
}

const GlowingBranchingLines: React.FC<GlowingBranchingLinesProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const [pointCount, setPointCount] = useState<number>(300); // Default to 300 points for desktop
  const LINE_LENGTH = 150;

  // Adjust point count based on screen width
  const updatePointCount = () => {
    const isMobile = window.innerWidth <= 768; // Assuming 768px as mobile breakpoint
    setPointCount(isMobile ? 75 : 300); // Reduce points by 4 on mobile
  };

  // Initialize points only once or when point count changes
  useEffect(() => {
    updatePointCount(); // Set initial point count based on screen size
    window.addEventListener('resize', updatePointCount); // Update point count on resize

    return () => {
      window.removeEventListener('resize', updatePointCount); // Clean up on unmount
    };
  }, []);

  useEffect(() => {
    const initialPoints: Point[] = [];
    for (let i = 0; i < pointCount; i++) {
      const angle = Math.random() * 2 * Math.PI; // Random initial direction
      const speed = 3; // Constant speed, twice the previous value
      initialPoints.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: Math.cos(angle) * speed, // Set constant horizontal velocity
        vy: Math.sin(angle) * speed, // Set constant vertical velocity
      });
    }
    pointsRef.current = initialPoints;
  }, [pointCount]);

  // Function to draw glowing lines and nodes
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    pointsRef.current.forEach((point, index) => {
      for (let i = index + 1; i < pointsRef.current.length; i++) {
        const other = pointsRef.current[i];
        const distance = Math.hypot(other.x - point.x, other.y - point.y);

        if (distance < LINE_LENGTH) {
          const glowIntensity = 1 - distance / LINE_LENGTH;

          ctx.strokeStyle = `rgba(0, 255, 255, ${glowIntensity})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = 'rgba(0, 255, 255, 1)';
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  // Update point positions for constant movement
  const updatePoints = () => {
    pointsRef.current = pointsRef.current.map(point => {
      let { x, y, vx, vy } = point;

      // Move points at a constant speed in their current direction
      x += vx;
      y += vy;

      // Wrap points around the canvas
      if (x < 0) x = window.innerWidth;
      if (x > window.innerWidth) x = 0;
      if (y < 0) y = window.innerHeight;
      if (y > window.innerHeight) y = 0;

      return { x, y, vx, vy };
    });
  };

  // Set up animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      updatePoints(); // Update positions smoothly
      draw(ctx); // Draw points and glowing lines
      requestAnimationFrame(animate); // Continuously animate for smoothness
    };

    animate();
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 bg-black z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowingBranchingLines;
