"use client"
import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

interface Line {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  completed: boolean;
  direction: 'right' | 'up';
  length: number;
  nodes: Node[];
}

const NetworkLinesNodes: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<Line[]>([]);
  const animationFrameRef = useRef<number>(0);

  const createNode = (x: number, y: number): Node => ({
    x,
    y,
    radius: Math.random() * 2 + 2,
    pulse: 0,
    pulseSpeed: Math.random() * 0.02 + 0.01
  });

  const createNodesForLine = (line: Line): Node[] => {
    const nodes: Node[] = [];
    const nodeCount = Math.floor(line.length / 30); // Node every 30 pixels
    
    for (let i = 0; i <= nodeCount; i++) {
      const progress = i / nodeCount;
      const x = line.startX + (line.endX - line.startX) * progress;
      const y = line.startY + (line.endY - line.startY) * progress;
      nodes.push(createNode(x, y));
    }
    
    return nodes;
  };

  const createNewLine = (startX: number, startY: number): Line => {
    const direction: 'right' | 'up' = Math.random() > 0.5 ? 'right' : 'up';
    const length = direction === 'right' 
      ? Math.random() * 100 + 100 
      : Math.random() * 80 + 80;

    const line = {
      startX,
      startY,
      endX: direction === 'right' ? startX + length : startX,
      endY: direction === 'up' ? startY - length : startY,
      progress: 0,
      speed: Math.random() * 1.5 + 0.8,
      completed: false,
      direction,
      length,
      nodes: []
    };

    line.nodes = createNodesForLine(line);
    return line;
  };

  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize starting lines across the width of the screen
    const initialLines: Line[] = [];
    const lineSpacing = canvas.width / 15;
    
    for (let x = -lineSpacing; x < canvas.width; x += lineSpacing) {
      const startY = canvas.height + Math.random() * 100;
      initialLines.push(createNewLine(x, startY));
    }
    
    linesRef.current = initialLines;
  };

  const drawGlowingLine = (
    ctx: CanvasRenderingContext2D,
    line: Line,
    progress: number
  ) => {
    const currentEndX = line.startX + (line.endX - line.startX) * progress;
    const currentEndY = line.startY + (line.endY - line.startY) * progress;

    // Draw outer glow
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
    ctx.lineWidth = 8;
    ctx.moveTo(line.startX, line.startY);
    ctx.lineTo(currentEndX, currentEndY);
    ctx.stroke();

    // Draw main line
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
    ctx.lineWidth = 2;
    ctx.moveTo(line.startX, line.startY);
    ctx.lineTo(currentEndX, currentEndY);
    ctx.stroke();

    // Draw nodes
    line.nodes.forEach((node, index) => {
      const nodeProgress = index / (line.nodes.length - 1);
      if (nodeProgress <= progress) {
        node.pulse = (node.pulse + node.pulseSpeed) % 1;
        
        // Outer glow
        ctx.beginPath();
        ctx.fillStyle = `rgba(0, 255, 255, ${0.2 - node.pulse * 0.2})`;
        ctx.arc(node.x, node.y, node.radius + 4 + node.pulse * 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner node
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw lines
    linesRef.current.forEach((line, index) => {
      line.progress += 0.01 * line.speed;

      if (line.progress >= 1 && !line.completed) {
        line.completed = true;
        
        // Create new branching line
        const newDirection = line.direction === 'right' ? 'up' : 'right';
        const newLine = createNewLine(line.endX, line.endY);
        newLine.direction = newDirection;
        linesRef.current.push(newLine);

        // Create a new line at the bottom if needed
        if (line.direction === 'up' && Math.random() > 0.5) {
          const startY = canvas.height + Math.random() * 100;
          const startX = Math.random() * canvas.width;
          linesRef.current.push(createNewLine(startX, startY));
        }
      }

      // Remove lines that have moved off screen
      if (line.endY < -100 || line.endX > canvas.width + 100) {
        linesRef.current.splice(index, 1);
      }

      drawGlowingLine(ctx, line, Math.min(line.progress, 1));
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    initializeCanvas();

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative inset-0 bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default NetworkLinesNodes;