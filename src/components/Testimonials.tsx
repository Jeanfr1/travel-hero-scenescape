
import { useState } from "react";
import { TestimonialCard } from "@/components/ui/testimonial-cards";

const testimonials = [
  {
    id: 1,
    testimonial: "Os hostels são incríveis! A equipe foi extremamente amigável e prestativa. Me senti em casa imediatamente.",
    author: "Sarah M. - Nômade Digital",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    testimonial: "Melhor experiência em hostel! Os eventos comunitários e a atmosfera foram extraordinários.", 
    author: "James L. - Blogueiro de Viagem",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    testimonial: "Limpo, confortável e cheio de pessoas incríveis. Prolonguei minha estadia duas vezes porque amei tanto!",
    author: "Maria G. - Viajante Solo",
    image: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }
];

const Testimonials = () => {
  const [positions, setPositions] = useState<("front" | "middle" | "back")[]>(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop() as "front" | "middle" | "back");
    setPositions(newPositions);
  };

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 animate-fade-up">
            O Que Nossos Hóspedes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-up">
            Leia sobre as experiências de viajantes que se hospedaram em nossos hostels ao redor do mundo.
          </p>
        </div>
        
        <div className="flex justify-center items-center min-h-[500px]">
          <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
