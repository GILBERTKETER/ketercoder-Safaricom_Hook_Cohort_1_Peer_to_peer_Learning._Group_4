"use client";
import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface GlowingBranchingLinesProps {
  children?: React.ReactNode;
}

const GlowingBranchingLines: React.FC<GlowingBranchingLinesProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pointCount, setPointCount] = useState<number>(300);
  const LINE_LENGTH = 150;

  // Update point count based on screen size
  const updatePointCount = () => {
    const isMobile = window.innerWidth <= 768;
    setPointCount(isMobile ? 75 : 300);
  };

  useEffect(() => {
    updatePointCount();
    window.addEventListener("resize", updatePointCount);
    return () => {
      window.removeEventListener("resize", updatePointCount);
    };
  }, []);

  const initializePoints = (width: number, height: number) => {
    const initialPoints: Point[] = [];
    for (let i = 0; i < pointCount; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const speed = 3;
      initialPoints.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      });
    }
    pointsRef.current = initialPoints;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    // Resize canvas and initialize points based on container size
    const resizeCanvas = () => {
      if (containerRef.current) {
        // Get the actual content height including all children
        const contentHeight = Math.max(
          containerRef.current.scrollHeight,
          window.innerHeight
        );
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = contentHeight;
        initializePoints(canvas.width, contentHeight);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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

    const updatePoints = () => {
      const width = canvas.width;
      const height = canvas.height;

      pointsRef.current = pointsRef.current.map(point => {
        let { x, y, vx, vy } = point;
        x += vx;
        y += vy;

        // Wrap points around if they go outside the canvas bounds
        if (x < 0) x = width;
        if (x > width) x = 0;
        if (y < 0) y = height;
        if (y > height) y = 0;

        return { x, y, vx, vy };
      });
    };

    const animate = () => {
      updatePoints();
      draw(ctx);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [pointCount]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex flex-col">
      <canvas ref={canvasRef} className="fixed inset-0 bg-black" />
      <div className="relative z-10 flex-grow">
        {children}
      </div>
    </div>
  );
};

export default GlowingBranchingLines;