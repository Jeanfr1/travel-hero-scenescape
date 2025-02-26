import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
  color?: string;
  particleSize?: number;
  particleColor?: string;
  particleOpacity?: number;
}

export const Particles = ({
  className = '',
  quantity = 50,
  staticity = 50,
  ease = 50,
  refresh = false,
  color = '#ffffff',
  particleSize = 1.5,
  particleColor,
  particleOpacity = 0.5,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<Array<Particle>>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const requestAnimationFrameId = useRef<number | null>(null);

  const getContainerSize = () => {
    if (!canvasContainerRef.current) return { w: 0, h: 0 };
    return {
      w: canvasContainerRef.current.offsetWidth,
      h: canvasContainerRef.current.offsetHeight,
    };
  };

  const resizeCanvas = () => {
    if (!canvasRef.current || !canvasContainerRef.current) return;

    const { w, h } = getContainerSize();
    containerSize.current = { w, h };

    canvasRef.current.width = w;
    canvasRef.current.height = h;

    particles.current.forEach((particle) => {
      particle.x = Math.random() * w;
      particle.y = Math.random() * h;
    });
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!canvasContainerRef.current) return;

    const rect = canvasContainerRef.current.getBoundingClientRect();
    const { w, h } = containerSize.current;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && x <= w && y >= 0 && y <= h) {
      mouse.current = { x, y };
    }
  };

  const initParticles = () => {
    const { w, h } = containerSize.current;
    particles.current = Array(quantity)
      .fill(null)
      .map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: 0,
        vy: 0,
        originalX: Math.random() * w,
        originalY: Math.random() * h,
        size: Math.random() * particleSize + 0.5,
      }));
  };

  const drawParticles = () => {
    if (!context.current) return;

    context.current.clearRect(
      0,
      0,
      containerSize.current.w,
      containerSize.current.h
    );

    particles.current.forEach((particle) => {
      const { x, y, size } = particle;

      context.current!.beginPath();
      context.current!.arc(x, y, size, 0, Math.PI * 2);
      context.current!.fillStyle = particleColor || color;
      context.current!.globalAlpha = particleOpacity;
      context.current!.fill();
    });
  };

  const animate = () => {
    if (!context.current) return;

    drawParticles();
    updateParticles();

    requestAnimationFrameId.current = requestAnimationFrame(animate);
  };

  const updateParticles = () => {
    const { w, h } = containerSize.current;

    particles.current.forEach((particle) => {
      const { x, y, originalX, originalY } = particle;

      // Calculate distance between particle and mouse
      const dx = mouse.current.x - x;
      const dy = mouse.current.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Calculate force to apply to the particle
      const force = Math.max(100 - distance, 0) / staticity;

      // Calculate direction to move away from mouse
      if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        particle.vx -= Math.cos(angle) * force;
        particle.vy -= Math.sin(angle) * force;
      }

      // Apply gravitational pull back to original position
      particle.vx += (originalX - x) / ease;
      particle.vy += (originalY - y) / ease;

      // Apply velocity with damping
      particle.vx *= 0.92;
      particle.vy *= 0.92;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Boundary check
      if (particle.x < 0 || particle.x > w || particle.y < 0 || particle.y > h) {
        particle.x = originalX;
        particle.y = originalY;
        particle.vx = 0;
        particle.vy = 0;
      }
    });
  };

  useEffect(() => {
    if (!canvasRef.current || !canvasContainerRef.current) return;

    context.current = canvasRef.current.getContext('2d');

    containerSize.current = getContainerSize();
    resizeCanvas();
    initParticles();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', onMouseMove);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);

      if (requestAnimationFrameId.current) {
        cancelAnimationFrame(requestAnimationFrameId.current);
      }
    };
  }, [quantity, staticity, ease, refresh]);

  return (
    <div
      ref={canvasContainerRef}
      className={cn('absolute inset-0 overflow-hidden', className)}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
  size: number;
}

export default Particles;
