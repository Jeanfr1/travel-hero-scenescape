import { useRef, useState, useEffect } from 'react';

interface MagneticOptions {
  strength?: number;
  radius?: number;
  resetDuration?: number;
}

export const useMagnetic = <T extends HTMLElement = HTMLDivElement>({
  strength = 30,
  radius = 100,
  resetDuration = 500
}: MagneticOptions = {}) => {
  const elementRef = useRef<T | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!elementRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = elementRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distance = Math.sqrt(
      Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
    );

    if (distance < radius) {
      setIsHovered(true);

      // Calculate the magnetic pull (stronger when closer)
      const pull = 1 - Math.min(distance / radius, 1);

      // Calculate the movement direction
      const moveX = (clientX - centerX) * pull * (strength / 10);
      const moveY = (clientY - centerY) * pull * (strength / 10);

      setPosition({ x: moveX, y: moveY });

      // Clear any existing reset timeout
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    } else if (isHovered) {
      handleMouseLeave();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    // Smoothly reset position after mouse leaves
    timeoutRef.current = window.setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, resetDuration);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [radius, strength, isHovered]);

  return {
    ref: elementRef,
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: isHovered ? 'transform 0.1s ease-out' : `transform ${resetDuration}ms ease-out`,
    },
    isHovered,
  };
};

export default useMagnetic;
