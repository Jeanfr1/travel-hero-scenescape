import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { journeyData } from "@/lib/constants/journey-images";
import TiltCard from "@/components/ui/tilt-card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import AnimatedText from "@/components/ui/animated-text";

const JourneyTimeline = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeYear, setActiveYear] = useState<string | null>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const scaleTransform = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);
  const blurTransform = useTransform(scrollYProgress, [0, 0.1], [3, 0]);

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
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
              text="Minha Jornada Pelo Mundo"
              animation="reveal"
              as="h2"
              className="text-3xl md:text-5xl font-bold mb-4 font-heading text-primary-600 gradient-text-primary"
            />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto font-body"
          >
            Explorando o mundo um hostel por vez - Uma crônica das minhas aventuras e experiências trabalhando em hostels ao redor do globo.
          </motion.p>
        </motion.div>

        <motion.div
          className={cn("w-full bg-white/80 backdrop-blur-sm font-sans md:px-10 relative rounded-xl shadow-lg", className)}
          ref={containerRef}
          style={{
            scale: scaleTransform,
            filter: `blur(${blurTransform}px)`,
          }}
          transition={{ duration: 0.5 }}
        >
          <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
            {journeyData.map((yearData, index) => (
              <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                <div
                  className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full"
                  onMouseEnter={() => setActiveYear(yearData.year)}
                  onMouseLeave={() => setActiveYear(null)}
                >
                  <motion.div
                    className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-white flex items-center justify-center shadow-glow-accent"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div
                      className="h-5 w-5 rounded-full bg-gradient-accent border border-accent/30 p-2"
                      animate={{
                        scale: activeYear === yearData.year ? [1, 1.2, 1] : 1
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: activeYear === yearData.year ? Infinity : 0,
                        repeatType: "reverse"
                      }}
                    />
                  </motion.div>
                  <motion.h3
                    className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold gradient-text-accent font-heading"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {yearData.year}
                  </motion.h3>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <motion.h3
                    className="md:hidden block text-2xl mb-4 text-left font-bold gradient-text-accent font-heading"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {yearData.year}
                  </motion.h3>
                  <div className="space-y-12">
                    {yearData.locations.map((location, locIndex) => (
                      <motion.div
                        key={locIndex}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: locIndex * 0.2 }}
                        className="card-glass p-6 rounded-xl"
                      >
                        <h4 className="text-xl font-semibold mb-2 text-accent-600 font-heading">{location.title}</h4>
                        <p className="text-primary-700 dark:text-neutral-200 text-sm md:text-base mb-2 font-body">
                          {location.role} | {location.period}
                        </p>
                        <p className="text-gray-600 text-sm md:text-base mb-6 italic font-body">
                          {location.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <TiltCard
                            glareEnabled={true}
                            glareMaxOpacity={0.2}
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            perspective={1000}
                            className="overflow-hidden rounded-lg"
                          >
                            <img
                              src={location.images.first}
                              alt={`${location.title} - imagem 1`}
                              className="rounded-lg object-cover h-52 w-full hover:scale-105 transition-transform duration-700 ease-in-out img-glow"
                            />
                          </TiltCard>
                          <TiltCard
                            glareEnabled={true}
                            glareMaxOpacity={0.2}
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            perspective={1000}
                            className="overflow-hidden rounded-lg"
                          >
                            <img
                              src={location.images.second}
                              alt={`${location.title} - imagem 2`}
                              className="rounded-lg object-cover h-52 w-full hover:scale-105 transition-transform duration-700 ease-in-out img-glow"
                            />
                          </TiltCard>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-accent/30 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-accent via-accent/50 to-transparent from-[0%] via-[10%] rounded-full shadow-glow-accent"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
