import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { tripImages } from "@/lib/constants/gallery-images";

const ParallaxGallery = ({ className }: { className?: string }) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const third = Math.ceil(tripImages.length / 3);
  const firstPart = tripImages.slice(0, third);
  const secondPart = tripImages.slice(third, 2 * third);
  const thirdPart = tripImages.slice(2 * third);

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Momentos de Nossas Viagens
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-up">
            Explore paisagens deslumbrantes e destinos inesquecíveis através de nossas lentes.
          </p>
        </div>
        
        <div
          className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
          ref={gridRef}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
            <div className="grid gap-10">
              {firstPart.map((imagePath, idx) => (
                <motion.div
                  style={{
                    y: translateYFirst,
                    x: translateXFirst,
                    rotateZ: rotateXFirst,
                  }}
                  key={"grid-1" + idx}
                >
                  <img
                    src={imagePath}
                    className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 hover:shadow-xl transition-shadow duration-300"
                    alt={`Momento de viagem ${idx + 1}`}
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10">
              {secondPart.map((imagePath, idx) => (
                <motion.div key={"grid-2" + idx}>
                  <img
                    src={imagePath}
                    className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 hover:shadow-xl transition-shadow duration-300"
                    alt={`Momento de viagem ${idx + 1}`}
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10">
              {thirdPart.map((imagePath, idx) => (
                <motion.div
                  style={{
                    y: translateYThird,
                    x: translateXThird,
                    rotateZ: rotateXThird,
                  }}
                  key={"grid-3" + idx}
                >
                  <img
                    src={imagePath}
                    className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 hover:shadow-xl transition-shadow duration-300"
                    alt={`Momento de viagem ${idx + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxGallery;
