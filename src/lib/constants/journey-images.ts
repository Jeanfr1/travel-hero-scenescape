
export type JourneyLocation = {
  title: string;
  period: string;
  role: string;
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
        role: "Guia Turístico & Recepção",
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
        images: {
          first: "/images/journey/lisboa-1.jpg",
          second: "/images/journey/lisboa-2.jpg"
        }
      },
      {
        title: "Florianópolis, Brasil",
        period: "Fevereiro 2024 - 3 meses",
        role: "Marketing & Auxiliar de Cozinha",
        images: {
          first: "/images/journey/florianopolis-1.jpg",
          second: "/images/journey/florianopolis-2.jpg"
        }
      }
    ]
  },
  // ... Add more years as needed
];
