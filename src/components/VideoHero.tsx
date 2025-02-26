
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Particles from '@/components/ui/particles';
import AnimatedText from '@/components/ui/animated-text';
import { useMagnetic } from '@/hooks/use-magnetic';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const VideoHero = () => {
  const { ref: magneticRef1, style: magneticStyle1, isHovered: isHovered1 } = useMagnetic({ strength: 25 });
  const { ref: magneticRef2, style: magneticStyle2, isHovered: isHovered2 } = useMagnetic({ strength: 25 });
  const { ref: scrollRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/hero-background.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay with particles */}
      <div className="absolute inset-0 bg-black/50" />
      <Particles
        className="z-10"
        quantity={100}
        staticity={30}
        color="#ffffff"
        particleSize={1.2}
        particleOpacity={0.3}
      />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4 z-20">
        <motion.div
          ref={scrollRef as React.RefObject<HTMLDivElement>}
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-white uppercase bg-gradient-accent rounded-full shadow-glow-accent animate-pulse-slow font-heading">
              Descubra o Mundo
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <AnimatedText
              text="Viajantes Sem Fronteiras"
              animation="reveal"
              as="h1"
              className="text-4xl md:text-6xl font-bold text-white font-heading text-shadow-lg"
              animationDelay={0.5}
              animationDuration={0.1}
              color="white"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body leading-relaxed"
          >
            Experimente destinos deslumbrantes e crie memórias inesquecíveis com nossas experiências de viagem selecionadas.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <div ref={magneticRef1} style={magneticStyle1} className="magnetic-button">
              <Button
                className="bg-gradient-accent hover:shadow-glow-accent text-white px-8 py-6 text-lg font-heading transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://wa.link/wzdjjk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale Conosco
                </a>
              </Button>
            </div>

            <div ref={magneticRef2} style={magneticStyle2} className="magnetic-button">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navbg px-8 py-6 text-lg font-heading transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
                asChild
              >
                <a href="/recursos">
                  Guias e Recursos
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent z-10" />
    </div>
  );
};

export default VideoHero;
