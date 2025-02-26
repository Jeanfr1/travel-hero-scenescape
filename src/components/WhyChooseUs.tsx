
import { Trophy, Compass, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Trophy className="w-10 h-10 text-primary" />,
      title: "Orientação Especializada",
      description: "Nossos especialistas em viagens criam roteiros perfeitos adaptados às suas preferências.",
    },
    {
      icon: <Compass className="w-10 h-10 text-primary" />,
      title: "Destinos Únicos",
      description: "Descubra joias escondidas e locais extraordinários fora do caminho comum.",
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Experiência Personalizada",
      description: "Cada jornada é personalizada para criar sua história de viagem perfeita.",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Compromisso com Segurança",
      description: "Sua segurança e conforto são nossas principais prioridades durante toda a viagem.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Por Que Nos Escolher
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-up">
            Experimente a diferença com nossos serviços premium de viagem projetados para tornar sua jornada inesquecível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:-translate-y-2 transition-all duration-300 hover:shadow-lg bg-white border-none overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
