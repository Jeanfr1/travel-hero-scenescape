
import { Trophy, Compass, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Trophy className="w-10 h-10 text-primary" />,
      title: "Expert Guidance",
      description: "Our experienced travel experts craft perfect itineraries tailored to your preferences.",
    },
    {
      icon: <Compass className="w-10 h-10 text-primary" />,
      title: "Unique Destinations",
      description: "Discover hidden gems and extraordinary locations off the beaten path.",
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Personalized Experience",
      description: "Every journey is customized to create your perfect travel story.",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Safe Travel Promise",
      description: "Your safety and comfort are our top priorities throughout your journey.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-up">
            Experience the difference with our premium travel services designed to make your journey unforgettable.
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
