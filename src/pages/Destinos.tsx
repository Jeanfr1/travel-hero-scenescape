import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Star, Compass, Clock, Sun, Coffee, Camera } from 'lucide-react';
import { useState } from 'react';
import { journeyData } from '@/lib/constants/journey-images';
import { tripImages } from '@/lib/constants/gallery-images';

// Define destination types
type Activity = {
  icon: React.ReactNode;
  name: string;
  description: string;
};

type Destination = {
  id: string;
  name: string;
  country: string;
  description: string;
  heroImage: string;
  secondaryImage: string;
  bestTimeToVisit: string;
  activities: Activity[];
  travelTips: string[];
  rating: number;
};

// Create destinations data based on journey data
const destinations: Destination[] = [
  {
    id: 'florianopolis',
    name: 'Florianópolis',
    country: 'Brasil',
    description: 'Conhecida como "Ilha da Magia", Florianópolis encanta com suas 42 praias deslumbrantes, lagoas, dunas e uma rica cultura açoriana. É o destino perfeito para os amantes de natureza, surf e gastronomia à base de frutos do mar.',
    heroImage: 'https://images.unsplash.com/photo-1619546952812-520e98064a52?q=80&w=2071&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1605098293544-25f4c32344c8?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'Dezembro a Março',
    activities: [
      {
        icon: <Sun className="h-5 w-5 text-primary" />,
        name: 'Praias Paradisíacas',
        description: 'Visite as praias de Jurerê Internacional, Joaquina e Campeche para relaxar, praticar esportes aquáticos ou simplesmente apreciar paisagens deslumbrantes.'
      },
      {
        icon: <Compass className="h-5 w-5 text-primary" />,
        name: 'Trilhas Ecológicas',
        description: 'Explore trilhas como a da Lagoinha do Leste ou do Morro das Aranhas para vistas panorâmicas incríveis da ilha.'
      },
      {
        icon: <Coffee className="h-5 w-5 text-primary" />,
        name: 'Gastronomia Local',
        description: 'Saboreie o tradicional sequência de camarão e outros pratos típicos à base de frutos do mar nos restaurantes da Lagoa da Conceição.'
      }
    ],
    travelTips: [
      'Alugue um carro para explorar a ilha com mais liberdade',
      'Reserve mais tempo para o norte da ilha durante o verão e para o sul durante o inverno',
      'Experimente o açaí local, servido de forma diferente do resto do Brasil'
    ],
    rating: 4.8
  },
  {
    id: 'curitiba',
    name: 'Curitiba',
    country: 'Brasil',
    description: 'Capital do Paraná, Curitiba é conhecida por seu planejamento urbano inovador, áreas verdes abundantes e rica cena cultural. Com clima ameno e influência europeia, a cidade oferece qualidade de vida e atrações para todos os gostos.',
    heroImage: '/images/journey/curitiba-1.jpg',
    secondaryImage: '/images/journey/curitiba-2.jpg',
    bestTimeToVisit: 'Março a Maio ou Setembro a Novembro',
    activities: [
      {
        icon: <MapPin className="h-5 w-5 text-primary" />,
        name: 'Jardim Botânico',
        description: 'Visite o cartão-postal da cidade com sua estufa de vidro inspirada no Palácio de Cristal de Londres e jardins bem cuidados.'
      },
      {
        icon: <Camera className="h-5 w-5 text-primary" />,
        name: 'Museu Oscar Niemeyer',
        description: 'Conheça o famoso "Museu do Olho", projetado pelo renomado arquiteto brasileiro, que abriga exposições de arte contemporânea.'
      },
      {
        icon: <Clock className="h-5 w-5 text-primary" />,
        name: 'Linha Turismo',
        description: 'Embarque no ônibus de dois andares que percorre os principais pontos turísticos da cidade, permitindo que você desça e explore até 4 locais diferentes.'
      }
    ],
    travelTips: [
      'Utilize o sistema de transporte público eficiente da cidade',
      'Visite o Mercado Municipal para experimentar o famoso sanduíche de pernil',
      'Leve um casaco mesmo no verão, pois as noites podem ser frescas'
    ],
    rating: 4.6
  },
  {
    id: 'cartagena',
    name: 'Cartagena',
    country: 'Colômbia',
    description: 'Joia do Caribe colombiano, Cartagena das Índias encanta com suas ruas de paralelepípedos, casas coloniais coloridas e muralhas históricas. Uma cidade onde o passado colonial espanhol se encontra com a vibrante cultura caribenha.',
    heroImage: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=2070&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1626201850129-a96cf18fb1c3?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'Dezembro a Abril',
    activities: [
      {
        icon: <Clock className="h-5 w-5 text-primary" />,
        name: 'Cidade Amuralhada',
        description: 'Passeie pelas ruas de paralelepípedos da cidade antiga, cercada por muralhas do século XVI, e descubra praças encantadoras, igrejas históricas e arquitetura colonial.'
      },
      {
        icon: <Sun className="h-5 w-5 text-primary" />,
        name: 'Ilhas do Rosário',
        description: 'Faça um passeio de barco até este arquipélago de 27 ilhas com águas cristalinas, perfeito para snorkeling e relaxamento em praias paradisíacas.'
      },
      {
        icon: <Coffee className="h-5 w-5 text-primary" />,
        name: 'Vida Noturna',
        description: 'Experimente a vibrante cena noturna de Cartagena, com bares de salsa, restaurantes gourmet e terraços com vista para o pôr do sol sobre o mar.'
      }
    ],
    travelTips: [
      'Proteja-se do calor com roupas leves, chapéu e protetor solar',
      'Negocie o preço antes de entrar em táxis ou contratar serviços turísticos',
      'Experimente pratos típicos como a cazuela de mariscos e o ceviche'
    ],
    rating: 4.7
  },
  {
    id: 'peru',
    name: 'Machu Picchu',
    country: 'Peru',
    description: 'Uma das Sete Maravilhas do Mundo Moderno, Machu Picchu é uma cidade inca do século XV situada no topo de uma montanha nos Andes peruanos. Este sítio arqueológico impressionante revela a incrível engenharia e arquitetura da civilização inca.',
    heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'Maio a Setembro (estação seca)',
    activities: [
      {
        icon: <Compass className="h-5 w-5 text-primary" />,
        name: 'Trilha Inca',
        description: 'Para os mais aventureiros, percorra a famosa Trilha Inca de 4 dias até Machu Picchu, passando por ruínas antigas e paisagens de tirar o fôlego.'
      },
      {
        icon: <Camera className="h-5 w-5 text-primary" />,
        name: 'Explorar as Ruínas',
        description: 'Descubra os templos, terraços e estruturas cerimoniais da cidadela inca com um guia que explicará a história e significado de cada seção.'
      },
      {
        icon: <MapPin className="h-5 w-5 text-primary" />,
        name: 'Huayna Picchu',
        description: 'Suba esta montanha íngreme atrás da cidadela principal para uma vista panorâmica espetacular de Machu Picchu e dos vales circundantes.'
      }
    ],
    travelTips: [
      'Reserve ingressos com antecedência, pois há limite diário de visitantes',
      'Aclimatize-se à altitude em Cusco por alguns dias antes de visitar Machu Picchu',
      'Leve repelente, protetor solar e roupa impermeável, pois o clima pode mudar rapidamente'
    ],
    rating: 4.9
  },
  {
    id: 'lisboa',
    name: 'Lisboa',
    country: 'Portugal',
    description: 'Capital de Portugal, Lisboa é uma cidade encantadora construída sobre sete colinas à beira do rio Tejo. Com sua rica história marítima, arquitetura deslumbrante, gastronomia deliciosa e o melancólico fado, Lisboa cativa visitantes do mundo todo.',
    heroImage: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?q=80&w=2071&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=2073&auto=format&fit=crop',
    bestTimeToVisit: 'Março a Maio ou Setembro a Outubro',
    activities: [
      {
        icon: <Clock className="h-5 w-5 text-primary" />,
        name: 'Bairros Históricos',
        description: 'Perca-se nas ruelas de Alfama, o bairro mais antigo da cidade, e visite o Castelo de São Jorge para vistas panorâmicas deslumbrantes.'
      },
      {
        icon: <Coffee className="h-5 w-5 text-primary" />,
        name: 'Gastronomia Portuguesa',
        description: 'Saboreie pastéis de nata na famosa Pastéis de Belém, prove o bacalhau em suas diversas formas e desfrute de vinhos locais em tabernas tradicionais.'
      },
      {
        icon: <Camera className="h-5 w-5 text-primary" />,
        name: 'Monumentos dos Descobrimentos',
        description: 'Visite a Torre de Belém, o Mosteiro dos Jerônimos e o Padrão dos Descobrimentos, símbolos da era dourada das explorações marítimas portuguesas.'
      }
    ],
    travelTips: [
      'Compre o Lisboa Card para transporte público ilimitado e entrada em várias atrações',
      'Use calçados confortáveis para subir e descer as colinas da cidade',
      'Assista a uma apresentação de fado autêntico em Alfama ou no Bairro Alto'
    ],
    rating: 4.8
  },
  {
    id: 'fussen',
    name: 'Füssen',
    country: 'Alemanha',
    description: 'Localizada no sul da Baviera, Füssen é uma charmosa cidade medieval conhecida principalmente por sua proximidade com os famosos castelos de Neuschwanstein e Hohenschwangau. Cercada pelos Alpes e lagos cristalinos, oferece paisagens de conto de fadas.',
    heroImage: '/images/journey/fussen-1.jpg',
    secondaryImage: '/images/journey/fussen-2.jpg',
    bestTimeToVisit: 'Maio a Setembro',
    activities: [
      {
        icon: <Castle className="h-5 w-5 text-primary" />,
        name: 'Castelo de Neuschwanstein',
        description: 'Visite o icônico castelo que inspirou o castelo da Disney, construído pelo Rei Ludwig II da Baviera, conhecido como o "Rei Louco".'
      },
      {
        icon: <MapPin className="h-5 w-5 text-primary" />,
        name: 'Centro Histórico',
        description: 'Explore o centro medieval de Füssen com suas casas coloridas, a antiga abadia beneditina e a rua Reichenstraße com lojas e cafés charmosos.'
      },
      {
        icon: <Compass className="h-5 w-5 text-primary" />,
        name: 'Lagos Alpinos',
        description: 'Desfrute dos lagos Forggensee e Alpsee, perfeitos para nadar no verão, fazer passeios de barco ou simplesmente apreciar a paisagem alpina.'
      }
    ],
    travelTips: [
      'Reserve ingressos para os castelos com antecedência, especialmente na alta temporada',
      'Considere explorar a região de bicicleta para apreciar melhor as paisagens',
      'Experimente especialidades bávaras como pretzel, weisswurst (salsicha branca) e cerveja local'
    ],
    rating: 4.7
  }
];

// Custom Castle icon component
function Castle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2h12v6H6zM6 8v14M18 8v14M2 22h20M9 8v2M15 8v2M9 12h6M9 16h6" />
    </svg>
  );
}

const Destinos = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter destinations based on search term and country filter
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          destination.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || destination.country === filter;
    return matchesSearch && matchesFilter;
  });

  // Get unique countries for filter
  const countries = Array.from(new Set(destinations.map(d => d.country)));

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop")',
            backgroundPosition: 'center 30%'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl animate-fade-up">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-white uppercase bg-primary/80 rounded-full">
              Explore o Mundo
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nossos Destinos
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Descubra lugares incríveis e experiências únicas que transformarão sua forma de viajar.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar destinos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    filter === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Todos
                </button>
                {countries.map((country) => (
                  <button
                    key={country}
                    onClick={() => setFilter(country)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      filter === country
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <motion.div
                  key={destination.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.heroImage}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{destination.country}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{destination.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-600">Melhor época: {destination.bestTimeToVisit}</span>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Principais Atividades:</h4>
                      <ul className="space-y-2">
                        {destination.activities.slice(0, 2).map((activity, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-1">{activity.icon}</div>
                            <div>
                              <span className="font-medium text-gray-800">{activity.name}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-6 w-full bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 rounded-lg transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhum destino encontrado</h3>
              <p className="text-gray-500">Tente ajustar seus filtros ou termos de busca</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Destination */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Destino em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça mais sobre um de nossos destinos mais populares e as experiências incríveis que ele oferece.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/images/journey/peru-1.jpg"
                  alt="Machu Picchu"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-lg hidden md:block">
                  <img
                    src="/images/journey/peru-2.jpg"
                    alt="Machu Picchu detalhe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-gray-800">Machu Picchu, Peru</h3>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">4.9</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">Melhor época: Maio a Setembro</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Uma das Sete Maravilhas do Mundo Moderno, Machu Picchu é uma cidade inca do século XV
                situada no topo de uma montanha nos Andes peruanos. Este sítio arqueológico impressionante
                revela a incrível engenharia e arquitetura da civilização inca, com terraços agrícolas,
                templos e observatórios astronômicos perfeitamente preservados.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Por que visitar:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <Compass className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-gray-600">Explore ruínas incas perfeitamente preservadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <Camera className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-gray-600">Vistas panorâmicas de tirar o fôlego dos Andes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-gray-600">Conexão com uma das civilizações mais fascinantes da história</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Planejar Viagem
                </button>
                <button className="border border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-lg font-medium transition-colors">
                  Ver Mais Detalhes
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Travel Inspiration */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Inspiração para Viagens</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra momentos mágicos capturados em nossos destinos favoritos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tripImages.slice(0, 8).map((image, index) => (
              <motion.div
                key={index}
                className={`overflow-hidden rounded-lg ${
                  index === 0 || index === 7 ? 'col-span-2 row-span-2' : ''
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={image}
                  alt={`Inspiração de viagem ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Sua Próxima Aventura?</h2>
            <p className="text-xl text-white/90 mb-8">
              Deixe-nos ajudar a planejar a viagem dos seus sonhos para qualquer um desses destinos incríveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Fale Conosco
              </button>
              <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
                Ver Todos os Destinos
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Destinos;
