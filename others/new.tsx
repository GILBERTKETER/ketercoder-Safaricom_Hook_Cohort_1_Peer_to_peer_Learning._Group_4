"use client";
import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const ConnectedLines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const POINT_COUNT = 300; // Increased number of points for more density
  const ESCAPE_DISTANCE = 100;

  // Initialize points
  useEffect(() => {
    const initialPoints: Point[] = [];
    for (let i = 0; i < POINT_COUNT; i++) {
      initialPoints.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
      });
    }
    setPoints(initialPoints);
  }, []);

  // Function to draw the points and lines
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw lines between points
    points.forEach((point, index) => {
      for (let i = index + 1; i < points.length; i++) {
        const other = points[i];
        const distance = Math.hypot(other.x - point.x, other.y - point.y);
        if (distance < 150) {
          ctx.strokeStyle = `rgba(0, 255, 255, ${1 - distance / 150})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }

      // Draw the individual points
      ctx.fillStyle = 'rgba(0, 255, 255, 1)';
      ctx.beginPath();
      ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  // Function to update points based on mouse movement
  const updatePoints = (x: number, y: number) => {
    setPoints(points.map(point => {
      const dx = point.x - x;
      const dy = point.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < ESCAPE_DISTANCE) {
        // Move point away from the mouse
        const angle = Math.atan2(dy, dx);
        return {
          ...point,
          x: point.x + Math.cos(angle) * ESCAPE_DISTANCE,
          y: point.y + Math.sin(angle) * ESCAPE_DISTANCE
        };
      }
      return point;
    }));
  };

  // Handle mouse events
  const handleMouseMove = (e: MouseEvent) => {
    updatePoints(e.clientX, e.clientY);
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      updatePoints(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  // Set up canvas and event listeners
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      draw(ctx);
      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [points]);

  return <canvas ref={canvasRef} className="relative inset-0 bg-black" />;
};

export default ConnectedLines;
