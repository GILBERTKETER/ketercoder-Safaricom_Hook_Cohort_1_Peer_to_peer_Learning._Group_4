"use client";
import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  rotation: number;
  glowIntensity: number;
  opacity: number;
  flickerSpeed: number;
}

interface GlowingBranchingLinesProps {
  children?: React.ReactNode;
}

const GlowingBranchingLines: React.FC<GlowingBranchingLinesProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const starsRef = useRef<Star[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pointCount, setPointCount] = useState<number>(300);
  const LINE_LENGTH = 150;
  const STAR_COUNT = 100; // Increased number of stars

  const drawStar = (
    ctx: CanvasRenderingContext2D, 
    x: number, 
    y: number, 
    size: number, 
    rotation: number, 
    glowIntensity: number,
    opacity: number
  ) => {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.translate(x, y);
    ctx.rotate(rotation);

    // Create gradient for glow effect
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 1.5);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${glowIntensity * opacity})`);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    // Draw glow
    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(0, 0, size * 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Draw star shape
    ctx.beginPath();
    ctx.fillStyle = 'white';
    for (let i = 0; i < 10; i++) {
      const radius = i % 2 === 0 ? size : size / 2;
      const angle = (Math.PI / 5) * i;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  };

  const initializeStars = (width: number, height: number) => {
    const initialStars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      initialStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 10, // Fixed size of 20px diameter
        rotation: Math.random() * Math.PI * 2,
        glowIntensity: Math.random() * 0.5 + 0.5, // Random glow between 0.5 and 1
        opacity: Math.random() * 0.5 + 0.5, // Random initial opacity
        flickerSpeed: Math.random() * 0.02 + 0.01 // Random flicker speed
      });
    }
    starsRef.current = initialStars;
  };
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
        const contentHeight = Math.max(
          containerRef.current.scrollHeight,
          window.innerHeight
        );
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = contentHeight;
        initializePoints(canvas.width, contentHeight);
        initializeStars(canvas.width, contentHeight);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars with flickering effect
      starsRef.current = starsRef.current.map(star => {
        // Flicker opacity
        let newOpacity = star.opacity + (Math.random() * 2 - 1) * star.flickerSpeed;
        newOpacity = Math.max(0.1, Math.min(1, newOpacity));

        // Randomly reposition star if it fades out completely
        if (newOpacity <= 0.1) {
          return {
            ...star,
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            opacity: Math.random() * 0.5 + 0.5,
            flickerSpeed: Math.random() * 0.02 + 0.01
          };
        }

        return {
          ...star,
          opacity: newOpacity
        };
      });

      // Draw stars
      starsRef.current.forEach(star => {
        drawStar(
          ctx, 
          star.x, 
          star.y, 
          star.size, 
          star.rotation, 
          star.glowIntensity,
          star.opacity
        );
      });

      // Existing points and lines drawing code remains the same
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
        const { x, y, vx, vy } = point;
        const newX = x + vx;
        const newY = y + vy;

        const wrappedX = newX < 0 ? width : (newX > width ? 0 : newX);
        const wrappedY = newY < 0 ? height : (newY > height ? 0 : newY);

        return { x: wrappedX, y: wrappedY, vx, vy };
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