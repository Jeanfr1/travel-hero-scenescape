import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: 'typewriter' | 'fade' | 'bounce' | 'wave' | 'scramble' | 'reveal';
  animationDelay?: number;
  animationDuration?: number;
  color?: string;
  highlightColor?: string;
  highlightWords?: string[];
  as?: React.ElementType;
}

export const AnimatedText = ({
  text,
  className = '',
  once = true,
  repeatDelay = 0,
  animation = 'fade',
  animationDelay = 0,
  animationDuration = 0.05,
  color,
  highlightColor,
  highlightWords = [],
  as: Component = 'span',
}: AnimatedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [key, setKey] = useState(0);

  // For scramble animation
  useEffect(() => {
    if (animation === 'scramble') {
      let iteration = 0;
      const maxIterations = 10;

      const scrambleText = () => {
        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          return;
        }

        const scrambled = text
          .split('')
          .map((char, idx) => {
            // Keep spaces and punctuation
            if (char === ' ' || /[.,!?;:]/.test(char)) return char;

            // Gradually reveal more correct characters as iterations progress
            const shouldReveal = idx < (text.length * (iteration / maxIterations));
            if (shouldReveal) return char;

            // Otherwise scramble with random character
            return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'[
              Math.floor(Math.random() * 62)
            ];
          })
          .join('');

        setDisplayText(scrambled);
        iteration++;
      };

      const interval = setInterval(scrambleText, 50);

      return () => clearInterval(interval);
    }
  }, [animation, text, key]);

  // For typewriter animation
  const typewriterVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '100%',
      transition: {
        delay: animationDelay,
        duration: text.length * 0.06,
      },
    },
  };

  // For fade animation (letter by letter)
  const fadeLetterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * animationDuration + animationDelay,
      },
    }),
  };

  // For bounce animation
  const bounceLetterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * animationDuration + animationDelay,
        type: 'spring',
        stiffness: 700,
        damping: 10,
      },
    }),
  };

  // For wave animation
  const waveLetterVariants = {
    hidden: { y: 0 },
    visible: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        delay: i * animationDuration + animationDelay,
        repeat: once ? 0 : Infinity,
        repeatDelay: repeatDelay,
        duration: 0.3,
      },
    }),
  };

  // For reveal animation
  const revealVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animationDuration,
        delayChildren: animationDelay,
      },
    },
  };

  const revealChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Reset animation
  useEffect(() => {
    if (!once && repeatDelay > 0) {
      const timer = setTimeout(() => {
        setKey(prev => prev + 1);
      }, repeatDelay * 1000);

      return () => clearTimeout(timer);
    }
  }, [once, repeatDelay, key]);

  // Highlight specific words
  const renderHighlightedText = (text: string) => {
    if (highlightWords.length === 0) return text;

    let result = text;
    highlightWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      result = result.replace(regex, `<span class="text-highlight">${word}</span>`);
    });

    return result;
  };

  // Render based on animation type
  const renderAnimatedText = () => {
    switch (animation) {
      case 'typewriter':
        return (
          <div className="relative inline-block overflow-hidden">
            <motion.div
              key={key}
              variants={typewriterVariants}
              initial="hidden"
              animate="visible"
              className="whitespace-nowrap"
              style={{ color }}
            >
              {displayText}
            </motion.div>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: animationDelay + text.length * 0.06, duration: 0.2 }}
              className="absolute right-0 top-0 h-full w-[2px] bg-current"
            />
          </div>
        );

      case 'fade':
      case 'bounce': {
        const variants = animation === 'fade' ? fadeLetterVariants : bounceLetterVariants;
        return (
          <span style={{ color }}>
            {displayText.split('').map((char, i) => (
              <motion.span
                key={`${char}-${i}-${key}`}
                custom={i}
                variants={variants}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        );
      }

      case 'wave':
        return (
          <span style={{ color }}>
            {displayText.split('').map((char, i) => (
              <motion.span
                key={`${char}-${i}-${key}`}
                custom={i}
                variants={waveLetterVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        );

      case 'scramble':
        return <span style={{ color }}>{displayText}</span>;

      case 'reveal':
        return (
          <motion.div
            key={key}
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            style={{ color }}
          >
            {displayText.split(' ').map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={revealChildVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        );

      default:
        return <span style={{ color }}>{displayText}</span>;
    }
  };

  return (
    <Component
      className={cn('', className)}
      style={{
        ['--highlight-color' as string]: highlightColor,
      }}
    >
      {renderAnimatedText()}
    </Component>
  );
};

export default AnimatedText;
