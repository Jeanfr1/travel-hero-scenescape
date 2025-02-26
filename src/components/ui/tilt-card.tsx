import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareEnabled?: boolean;
  glareMaxOpacity?: number;
  glareColor?: string;
  glarePosition?: 'all' | 'top' | 'right' | 'bottom' | 'left';
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  tiltReverse?: boolean;
  tiltScale?: number;
  perspective?: number;
  transitionSpeed?: number;
  transitionEasing?: string;
  gyroscope?: boolean;
  reset?: boolean;
}

export const TiltCard = ({
  children,
  className = '',
  glareEnabled = true,
  glareMaxOpacity = 0.2,
  glareColor = 'rgba(255, 255, 255, 0.8)',
  glarePosition = 'all',
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  tiltReverse = false,
  tiltScale = 1.05,
  perspective = 1000,
  transitionSpeed = 400,
  transitionEasing = 'cubic-bezier(.03,.98,.52,.99)',
  gyroscope = false,
  reset = true,
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltValues, setTiltValues] = useState({
    tiltX: 0,
    tiltY: 0,
    glareOpacity: 0,
    glareX: 50,
    glareY: 50,
    scale: 1,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (in percentage)
    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    // Calculate tilt angles
    const multiplier = tiltReverse ? -1 : 1;
    const tiltX = multiplier * ((mouseY - 0.5) * 2 * tiltMaxAngleX);
    const tiltY = multiplier * -((mouseX - 0.5) * 2 * tiltMaxAngleY);

    // Calculate glare position
    const glareX = mouseX * 100;
    const glareY = mouseY * 100;

    // Calculate glare opacity based on mouse distance from center
    const distanceFromCenter = Math.sqrt(
      Math.pow(mouseX - 0.5, 2) + Math.pow(mouseY - 0.5, 2)
    );
    const glareOpacity = Math.min(distanceFromCenter * 2 * glareMaxOpacity, glareMaxOpacity);

    setTiltValues({
      tiltX,
      tiltY,
      glareOpacity: glareEnabled ? glareOpacity : 0,
      glareX,
      glareY,
      scale: tiltScale,
    });
  };

  const handleMouseLeave = () => {
    if (reset) {
      setTiltValues({
        tiltX: 0,
        tiltY: 0,
        glareOpacity: 0,
        glareX: 50,
        glareY: 50,
        scale: 1,
      });
    }
  };

  // Handle device orientation for gyroscope effect
  React.useEffect(() => {
    if (!gyroscope) return;

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (!cardRef.current || !e.beta || !e.gamma) return;

      // Beta is front-to-back tilt in degrees, where front is positive
      // Gamma is left-to-right tilt in degrees, where right is positive
      const beta = Math.min(Math.max(e.beta, -45), 45);
      const gamma = Math.min(Math.max(e.gamma, -45), 45);

      // Convert to percentage (-45...45 => 0...1)
      const betaPercentage = (beta + 45) / 90;
      const gammaPercentage = (gamma + 45) / 90;

      // Calculate tilt angles
      const multiplier = tiltReverse ? -1 : 1;
      const tiltX = multiplier * ((betaPercentage - 0.5) * 2 * tiltMaxAngleX);
      const tiltY = multiplier * ((gammaPercentage - 0.5) * 2 * tiltMaxAngleY);

      // Calculate glare position
      const glareX = gammaPercentage * 100;
      const glareY = betaPercentage * 100;

      // Calculate glare opacity
      const distanceFromCenter = Math.sqrt(
        Math.pow(betaPercentage - 0.5, 2) + Math.pow(gammaPercentage - 0.5, 2)
      );
      const glareOpacity = Math.min(distanceFromCenter * 2 * glareMaxOpacity, glareMaxOpacity);

      setTiltValues({
        tiltX,
        tiltY,
        glareOpacity: glareEnabled ? glareOpacity : 0,
        glareX,
        glareY,
        scale: tiltScale,
      });
    };

    window.addEventListener('deviceorientation', handleDeviceOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [gyroscope, tiltReverse, tiltMaxAngleX, tiltMaxAngleY, glareEnabled, glareMaxOpacity, tiltScale]);

  // Determine glare position class
  const getGlarePositionClass = () => {
    switch (glarePosition) {
      case 'top':
        return 'top-0 left-0 right-0 h-[30%]';
      case 'right':
        return 'top-0 right-0 bottom-0 w-[30%]';
      case 'bottom':
        return 'bottom-0 left-0 right-0 h-[30%]';
      case 'left':
        return 'top-0 left-0 bottom-0 w-[30%]';
      case 'all':
      default:
        return 'inset-0';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn('relative overflow-hidden', className)}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tiltValues.tiltX,
        rotateY: tiltValues.tiltY,
        scale: tiltValues.scale,
      }}
      transition={{
        duration: transitionSpeed / 1000,
        ease: transitionEasing,
      }}
    >
      {children}

      {/* Glare effect */}
      {glareEnabled && (
        <div
          className={cn('absolute pointer-events-none', getGlarePositionClass())}
          style={{
            background: `radial-gradient(circle at ${tiltValues.glareX}% ${tiltValues.glareY}%, ${glareColor}, transparent)`,
            opacity: tiltValues.glareOpacity,
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
