import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { tripImages } from "@/lib/constants/gallery-images";
import TiltCard from "@/components/ui/tilt-card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import AnimatedText from "@/components/ui/animated-text";

const ParallaxGallery = ({ className }: { className?: string }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Enhanced parallax effects
  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotateFirst = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const scaleFirst = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const translateYSecond = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleSecond = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotateThird = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scaleThird = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const third = Math.ceil(tripImages.length / 3);
  const firstPart = tripImages.slice(0, third);
  const secondPart = tripImages.slice(third, 2 * third);
  const thirdPart = tripImages.slice(2 * third);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section className="py-24 bg-mesh">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={titleVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <AnimatedText
              text="Momentos de Nossas Viagens"
              animation="reveal"
              as="h2"
              className="text-3xl md:text-5xl font-bold mb-4 font-heading gradient-text-primary"
            />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto font-body"
          >
            Explore paisagens deslumbrantes e destinos inesquecíveis através de nossas lentes.
          </motion.p>
        </motion.div>

        <div
          className={cn("h-[45rem] items-start overflow-y-auto w-full custom-scrollbar rounded-xl shadow-lg", className)}
          ref={gridRef}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
            <div className="grid gap-10">
              {firstPart.map((imagePath, idx) => (
                <motion.div
                  style={{
                    y: translateYFirst,
                    x: translateXFirst,
                    rotate: rotateFirst,
                    scale: scaleFirst,
                  }}
                  key={"grid-1" + idx}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setSelectedImage(imagePath)}
                >
                  <TiltCard
                    glareEnabled={true}
                    glareMaxOpacity={0.2}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={1000}
                    className="overflow-hidden rounded-lg cursor-pointer"
                  >
                    <img
                      src={imagePath}
                      className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 shadow-glow-primary img-glow"
                      alt={`Momento de viagem ${idx + 1}`}
                    />
                  </TiltCard>
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10">
              {secondPart.map((imagePath, idx) => (
                <motion.div
                  key={"grid-2" + idx}
                  style={{
                    y: translateYSecond,
                    scale: scaleSecond,
                  }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setSelectedImage(imagePath)}
                >
                  <TiltCard
                    glareEnabled={true}
                    glareMaxOpacity={0.2}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={1000}
                    className="overflow-hidden rounded-lg cursor-pointer"
                  >
                    <img
                      src={imagePath}
                      className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 shadow-glow-primary img-glow"
                      alt={`Momento de viagem ${idx + 1}`}
                    />
                  </TiltCard>
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10">
              {thirdPart.map((imagePath, idx) => (
                <motion.div
                  style={{
                    y: translateYThird,
                    x: translateXThird,
                    rotate: rotateThird,
                    scale: scaleThird,
                  }}
                  key={"grid-3" + idx}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setSelectedImage(imagePath)}
                >
                  <TiltCard
                    glareEnabled={true}
                    glareMaxOpacity={0.2}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={1000}
                    className="overflow-hidden rounded-lg cursor-pointer"
                  >
                    <img
                      src={imagePath}
                      className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 shadow-glow-primary img-glow"
                      alt={`Momento de viagem ${idx + 1}`}
                    />
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl">
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="max-h-[90vh] max-w-full object-contain rounded-xl shadow-2xl"
                />
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ParallaxGallery;
