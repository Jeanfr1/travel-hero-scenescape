import { useRef, useState, useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: ScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        // Check if the element is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);

          // If triggerOnce is true, mark as triggered and disconnect observer
          if (triggerOnce) {
            setHasTriggered(true);
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        root: null, // viewport
        rootMargin,
        threshold,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    ref,
    isVisible,
    hasTriggered,
  };
};

// Predefined animation classes for common effects
export const scrollAnimationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  },
  slideUp: {
    hidden: { y: 100 },
    visible: { y: 0, transition: { duration: 0.6 } },
  },
  slideDown: {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 0.6 } },
  },
  slideLeft: {
    hidden: { x: 100 },
    visible: { x: 0, transition: { duration: 0.6 } },
  },
  slideRight: {
    hidden: { x: -100 },
    visible: { x: 0, transition: { duration: 0.6 } },
  },
  flip: {
    hidden: { rotateY: 90 },
    visible: { rotateY: 0, transition: { duration: 0.8 } },
  },
  rotate: {
    hidden: { rotate: -15 },
    visible: { rotate: 0, transition: { duration: 0.5 } },
  },
  staggerChildren: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export default useScrollAnimation;
