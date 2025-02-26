
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const journeyData = [
  {
    title: "2025",
    content: (
      <div>
        <h4 className="text-xl font-semibold mb-2 text-primary">Füssen, Germany</h4>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
          Tourist Guide & Reception | January 2025 - 1 month
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1534313314376-a72289b6181e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Neuschwanstein Castle"
            className="rounded-lg object-cover h-44 w-full shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Füssen Town"
            className="rounded-lg object-cover h-44 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="space-y-8">
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">Lisbon, Portugal</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Reception | October 2024 - 1 month
          </p>
          <img
            src="https://images.unsplash.com/photo-1513735492246-483525079686?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Lisbon"
            className="rounded-lg object-cover h-44 w-full shadow-lg"
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">Florianópolis, Brazil</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Marketing & Kitchen Assistant | February 2024 - 3 months
          </p>
          <img
            src="https://images.unsplash.com/photo-1625433669678-99c6bf547f65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Florianópolis"
            className="rounded-lg object-cover h-44 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="space-y-8">
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">La Paz, Bolivia</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Reception | December 2023 - 2 weeks
          </p>
          <img
            src="https://images.unsplash.com/photo-1559604185-f46689c0f834?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="La Paz"
            className="rounded-lg object-cover h-44 w-full shadow-lg"
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">Cusco, Peru</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Bartender | October 2023 - 1 month
          </p>
          <img
            src="https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Cusco"
            className="rounded-lg object-cover h-44 w-full shadow-lg"
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">Máncora, Peru</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Party Promoter | September 2023 - 3 weeks
          </p>
          <img
            src="https://images.unsplash.com/photo-1603649293417-89e0504286cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Mancora Beach"
            className="rounded-lg object-cover h-44 w-full shadow-lg"
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">Lima, Peru</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Marketing & Party Promoter | August 2023 - 1 month
          </p>
          <img
            src="https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Lima"
            className="rounded-lg object-cover h-44 w-full shadow-lg"
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">Cartagena, Colombia</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Housekeeping & Reception | May 2023 - 1 month
          </p>
          <img
            src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Cartagena"
            className="rounded-lg object-cover h-44 w-full shadow-lg"
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">Santa Marta, Colombia</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Breakfast Assistant | April 2023 - 1 month
          </p>
          <img
            src="https://images.unsplash.com/photo-1586094285164-3577206a9c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Santa Marta"
            className="rounded-lg object-cover h-44 w-full shadow-lg"
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">Bogotá, Colombia</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Reception | February 2023 - 2 months
          </p>
          <img
            src="https://images.unsplash.com/photo-1628082878598-ed6a5d03c57b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Bogota"
            className="rounded-lg object-cover h-44 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h4 className="text-xl font-semibold mb-2 text-primary">Curitiba, Brazil</h4>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
          Reception, Social Media & Party Promoter | May 2022 - 1 month
        </p>
        <img
          src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Curitiba"
          className="rounded-lg object-cover h-44 w-full shadow-lg"
        />
      </div>
    ),
  },
];

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
            My Journey Around the World
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-up">
            Exploring the world one hostel at a time - A chronicle of my adventures and experiences working in hostels across the globe.
          </p>
        </div>

        <div
          className={cn("w-full bg-white font-sans md:px-10", className)}
          ref={containerRef}
        >
          <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className="flex justify-start pt-10 md:pt-40 md:gap-10"
              >
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-primary border border-primary/30 p-2" />
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-primary/70">
                    {item.title}
                  </h3>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-primary/70">
                    {item.title}
                  </h3>
                  {item.content}
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
