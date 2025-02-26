import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { journeyData } from "@/lib/constants/journey-images";

const JourneyTimeline = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

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

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Minha Jornada Pelo Mundo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-up">
            Explorando o mundo um hostel por vez - Uma crônica das minhas aventuras e experiências trabalhando em hostels ao redor do globo.
          </p>
        </div>

        <div className={cn("w-full bg-white font-sans md:px-10 relative", className)} ref={containerRef}>
          <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
            {journeyData.map((yearData, index) => (
              <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-primary border border-primary/30 p-2" />
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-primary/70">
                    {yearData.year}
                  </h3>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-primary/70">
                    {yearData.year}
                  </h3>
                  <div className="space-y-8">
                    {yearData.locations.map((location, locIndex) => (
                      <div key={locIndex}>
                        <h4 className="text-xl font-semibold mb-2 text-primary">{location.title}</h4>
                        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
                          {location.role} | {location.period}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <img
                            src={location.images.first}
                            alt={`${location.title} - imagem 1`}
                            className="rounded-lg object-cover h-44 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                          />
                          <img
                            src={location.images.second}
                            alt={`${location.title} - imagem 2`}
                            className="rounded-lg object-cover h-44 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-primary/30 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary/50 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
