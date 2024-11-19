"use client"
import React, { useEffect, useRef, useState } from 'react';

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Particle class to represent nodes in the network
  class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    connections: Particle[];
    color: string;
    binary: string;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.connections = [];
      this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
      this.binary = Math.random() > 0.5 ? "1" : "0";
    }

    update(width: number, height: number) {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
  }

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const particles: Particle[] = [];
    const particleCount = 50;
    const connectionDistance = 150;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        
        // Draw binary numbers
        ctx.font = '12px monospace';
        ctx.fillStyle = particle.color;
        ctx.fillText(particle.binary, particle.x, particle.y);

        // Find and draw connections
        particles.forEach(other => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance && particle !== other) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(${parseInt(particle.color)}, ${1 - distance / connectionDistance})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className="relative inset-0 bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
};

export default CyberBackground;