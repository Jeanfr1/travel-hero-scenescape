export type JourneyLocation = {
  title: string;
  period: string;
  role: string;
  description: string;
  images: {
    first: string;
    second: string;
  };
};

export type JourneyYear = {
  year: string;
  locations: JourneyLocation[];
};

export const journeyData: JourneyYear[] = [
  {
    year: "2025",
    locations: [
      {
        title: "Füssen, Alemanha",
        period: "Janeiro 2025 - 1 mês",
        role: "Guia Turística & Recepção",
        description: "🏰 Explorando os castelos de conto de fadas da Baviera e guiando turistas pelo encantador cenário alpino. Uma experiência mágica entre montanhas, lagos e a arquitetura medieval alemã!",
        images: {
          first: "/images/journey/fussen-1.jpg",
          second: "/images/journey/fussen-2.jpg"
        }
      }
    ]
  },
  {
    year: "2024",
    locations: [
      {
        title: "Lisboa, Portugal",
        period: "Outubro 2024 - 1 mês",
        role: "Recepção",
        description: "🇵🇹 Vivendo entre ruelas de paralelepípedos e o som melancólico do fado. Recebi viajantes de todo o mundo enquanto descobria os segredos da cidade das sete colinas e saboreava pastéis de nata fresquinhos!",
        images: {
          first: "/images/journey/lisboa-1.jpg",
          second: "/images/journey/lisboa-2.jpg"
        }
      },
      {
        title: "Florianópolis, Brasil",
        period: "Fevereiro 2024 - 3 meses",
        role: "Marketing & Auxiliar de Cozinha",
        description: "🏄‍♀️ Paraíso dos surfistas e amantes da natureza! Dividi meu tempo entre criar conteúdo para as redes sociais do hostel e preparar deliciosos cafés da manhã com vista para o mar. Dias de sol, praias paradisíacas e muita energia boa!",
        images: {
          first: "/images/journey/florianopolis-1.jpg",
          second: "/images/journey/florianopolis-2.jpg"
        }
      },
      {
        title: "São Paulo, Brasil",
        period: "Janeiro 2024 - 1 mês",
        role: "Recepção",
        description: "🏙️ Mergulhei na energia vibrante da maior metrópole da América Latina! Entre arranha-céus, museus de classe mundial e uma cena gastronômica diversificada, ajudei viajantes a descobrirem os tesouros escondidos desta cidade que nunca dorme.",
        images: {
          first: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          second: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      }
    ]
  },
  {
    year: "2023",
    locations: [
      {
        title: "La Paz, Bolívia",
        period: "Dezembro 2023 - 2 semanas",
        role: "Recepção",
        description: "🏔️ A cidade mais alta do mundo me recebeu com sua cultura vibrante e paisagens impressionantes. Trabalhei em um hostel no centro histórico, ajudando viajantes a explorarem esta cidade única entre montanhas.",
        images: {
          first: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          second: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      },
      {
        title: "Peru",
        period: "Agosto - Outubro 2023",
        role: "Várias funções",
        description: "🇵🇪 Uma jornada incrível por três cidades peruanas: Lima (capital gastronômica), Mancora (paraíso dos surfistas) e Cusco (coração do Império Inca). Trabalhei em diferentes funções como bartender, party promoter e marketing, criando experiências memoráveis para os hóspedes enquanto explorava a rica cultura e paisagens deslumbrantes deste país.",
        images: {
          first: "/images/journey/peru-1.jpg",
          second: "/images/journey/peru-2.jpg"
        }
      },
      {
        title: "Colômbia",
        period: "Fevereiro - Maio 2023",
        role: "Várias funções",
        description: "🇨🇴 Uma jornada incrível por três cidades colombianas: Bogotá (capital vibrante e moderna), Cartagena (cidade colonial com praias paradisíacas) e Santa Marta (cidade mais antiga da Colômbia). Trabalhei em diferentes funções como recepcionista, auxiliar de café da manhã e housekeeping, enquanto explorava a rica cultura, música caribenha e a hospitalidade calorosa dos locais.",
        images: {
          first: "/images/journey/cartagena-1.jpg",
          second: "/images/journey/cartagena-2.jpg"
        }
      }
    ]
  },
  {
    year: "2022",
    locations: [
      {
        title: "Curitiba, Brasil",
        period: "Maio 2022 - 1 mês",
        role: "Recepção, Social Media & Party Promoter",
        description: "🌳 A cidade mais verde do Brasil me acolheu com seus parques incríveis e clima europeu. Trabalhei em um hostel aconchegante, gerenciando as redes sociais e organizando eventos enquanto explorava a rica cena cultural da capital paranaense.",
        images: {
          first: "/images/journey/curitiba-1.jpg",
          second: "/images/journey/curitiba-2.jpg"
        }
      }
    ]
  }
];
