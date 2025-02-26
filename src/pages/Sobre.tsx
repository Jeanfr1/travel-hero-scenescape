import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Award, Globe, Users, Calendar, Briefcase } from 'lucide-react';
import { journeyData } from '@/lib/constants/journey-images';

const Sobre = () => {
  // Calculate total countries and experiences from journey data
  const allLocations = journeyData.flatMap(year => year.locations);
  const uniqueCountries = new Set(allLocations.map(loc => loc.title.split(',')[1]?.trim() || loc.title.split(',')[0]?.trim()));
  const totalExperiences = allLocations.length;

  // Get years of experience (current year - earliest year in journey data)
  const years = journeyData.map(year => parseInt(year.year));
  const earliestYear = Math.min(...years);
  const yearsOfExperience = new Date().getFullYear() - earliestYear + 1;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2531&auto=format&fit=crop")',
            backgroundPosition: 'center 30%'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl animate-fade-up">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-white uppercase bg-primary/80 rounded-full">
              Minha História
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Olá, eu sou a Lais!
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Apaixonada por viagens e novas experiências. Desde que me lembro, sempre tive um mapa na mão e sonhos de lugares distantes no coração.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/journey/peru-1.jpg"
                alt="Lais em Machu Picchu"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Minha Jornada</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tudo começou aos 18 anos, quando fiz minha primeira viagem solo para Florianópolis. Aquele frio na barriga ao descer do ônibus, a sensação de liberdade... foi amor à primeira vista! Desde então, viajar se tornou mais que um hobby - virou minha paixão e profissão.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Com anos de experiência trabalhando em hostels e guiando turistas ao redor do mundo, trago um conhecimento único e perspectivas locais para cada jornada que planejo. Acredito que viajar não é apenas sobre visitar lugares, mas sobre criar conexões, descobrir novas perspectivas e voltar para casa transformado.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Globe className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{uniqueCountries.size} Países</p>
                    <p className="text-sm text-gray-500">Explorados</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{totalExperiences} Experiências</p>
                    <p className="text-sm text-gray-500">Profissionais</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Calendar className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{yearsOfExperience} Anos</p>
                    <p className="text-sm text-gray-500">De Experiência</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">1000+</p>
                    <p className="text-sm text-gray-500">Viajantes Felizes</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Experiências</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uma jornada de paixão pelo turismo e experiências autênticas ao redor do mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop"
                  alt="Início da Jornada"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">O Início da Minha Jornada</h3>
                <p className="text-gray-600 mb-4">
                  Minha paixão por viagens começou com uma mochila nas costas e um desejo insaciável
                  de explorar o mundo. Trabalhando em hostels pelo Brasil, descobri o poder de
                  conectar pessoas através de experiências compartilhadas.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2064&auto=format&fit=crop"
                  alt="Expandindo Horizontes"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Momentos Marcantes</h3>
                <p className="text-gray-600 mb-4">
                  Um dos momentos mais marcantes foi quando me perdi nas ruas de Cartagena, Colômbia. O que parecia um problema se transformou em uma tarde incrível, conhecendo uma família local que me ensinou a dançar salsa e compartilhou histórias fascinantes sobre a cidade.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop"
                  alt="Criando Experiências"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Minha Filosofia de Viagem</h3>
                <p className="text-gray-600 mb-4">
                  Aprendi que viajar não é sobre quantos lugares você visita, mas sobre as histórias que você coleciona. Como aquela vez em Füssen, Alemanha, quando acordei às 5h para ver o nascer do sol no Castelo de Neuschwanstein - uma visão que nunca vou esquecer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Especialidades</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combino experiência internacional com conhecimento local para criar experiências de viagem excepcionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 rounded-full">
                <MapPin className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Roteiros Personalizados</h3>
                <p className="text-gray-600">
                  Crio itinerários sob medida que combinam atrações imperdíveis com experiências
                  autênticas fora dos circuitos turísticos tradicionais, adaptados ao seu estilo de viagem.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 rounded-full">
                <Globe className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Experiências Culturais</h3>
                <p className="text-gray-600">
                  Facilito imersões culturais autênticas, conectando viajantes com tradições locais,
                  gastronomia regional e experiências que revelam a verdadeira essência de cada destino.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 rounded-full">
                <Users className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Viagens em Grupo</h3>
                <p className="text-gray-600">
                  Organizo viagens em grupo que equilibram aventura, cultura e momentos de relaxamento,
                  criando um ambiente onde novas amizades florescem enquanto exploramos destinos incríveis.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 rounded-full">
                <Award className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Consultoria de Viagem</h3>
                <p className="text-gray-600">
                  Ofereço consultoria especializada para viajantes independentes, compartilhando dicas
                  valiosas, recomendações locais e orientações que transformam sua jornada.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Começar Sua Aventura?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Meu maior desejo é inspirar você a criar suas próprias histórias. Seja explorando as ruas de Lisboa ou descobrindo os segredos de São Paulo, estou aqui para te guiar nessa jornada. Vamos juntos transformar sonhos em memórias?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.link/wzdjjk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Reserve Agora
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Fale Comigo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Sobre;
