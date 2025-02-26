import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Compass, Languages, Utensils } from 'lucide-react';
import Footer from '@/components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Recursos = () => {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="dicas" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="dicas">Dicas de Viagem</TabsTrigger>
              <TabsTrigger value="destinos">Destinos</TabsTrigger>
            </TabsList>

            <TabsContent value="dicas" className="mt-6">
              <div className="grid grid-cols-1 gap-8">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <MapPin className="h-5 w-5 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 font-heading">Transporte</h3>
                        </div>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Considere voos com escalas ou em horários menos populares para economizar.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Assine alertas de preços para ser notificado sobre promoções.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Utilize aplicativos como Skyscanner, Kayak e Google Flights para comparar preços.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Considere passes de transporte público para economizar em grandes cidades.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Reserve voos com antecedência, idealmente 2-3 meses antes da viagem.</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <Utensils className="h-5 w-5 text-purple-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 font-heading">Alimentação</h3>
                        </div>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Prefira cozinhar no hostel ou comprar comida em mercados locais.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Experimente a comida de rua, que geralmente é mais barata e autêntica.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Use apps como Too Good To Go para comprar comida excedente de restaurantes a preços reduzidos.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Pesquise restaurantes populares entre os locais, não apenas os turísticos.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Leve uma garrafa de água reutilizável para economizar e reduzir o uso de plástico.</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                              <path d="M2 22h20"></path>
                              <path d="M6 18V2"></path>
                              <path d="M18 18V2"></path>
                              <path d="M6 11h12"></path>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 font-heading">Hospedagem</h3>
                        </div>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Considere hostels, Airbnb ou Couchsurfing para economizar em acomodações.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Fique em bairros um pouco afastados do centro turístico para encontrar melhores preços.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Verifique se o café da manhã está incluído e se há cozinha compartilhada disponível.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Leia as avaliações com atenção, especialmente sobre limpeza e localização.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Considere estadias mais longas para obter descontos semanais ou mensais.</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 font-heading">Segurança</h3>
                        </div>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Mantenha cópias digitais de documentos importantes (passaporte, vistos, etc.).</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Contrate um seguro viagem que cubra emergências médicas e cancelamentos.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Pesquise sobre golpes comuns no destino e como evitá-los.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Compartilhe seu itinerário com amigos ou familiares.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Use bolsas e mochilas antifurto em áreas movimentadas.</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 font-heading">Planejamento</h3>
                        </div>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Viaje na baixa temporada para economizar e evitar multidões.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Pesquise sobre feriados locais que possam afetar seu itinerário.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Baixe mapas offline e aplicativos úteis antes da viagem.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Verifique se precisa de vistos ou vacinas com antecedência.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Deixe algum espaço no itinerário para descobertas espontâneas.</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            {/* Destinations Content */}
            <TabsContent value="destinos" className="mt-6">
              <div className="grid grid-cols-1 gap-8">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants} className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 font-heading">Melhores Destinos para 2025</h2>
                    <p className="text-gray-600 mb-6">
                      Descubra os destinos mais promissores para o próximo ano, combinando custo-benefício, segurança e experiências únicas.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <motion.div
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <Card className="h-full border-primary/10 transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <MapPin className="h-6 w-6 text-blue-600" />
                          </div>
                          <CardTitle className="text-xl font-heading">Albânia</CardTitle>
                          <CardDescription>Costa Adriática a preços acessíveis</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">
                            Com praias deslumbrantes e cidades históricas, a Albânia oferece uma experiência mediterrânea a preços muito abaixo da média europeia.
                          </p>
                          <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                            <a href="https://www.albania.al" target="_blank" rel="noopener noreferrer">
                              Saiba Mais
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <Card className="h-full border-primary/10 transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <Compass className="h-6 w-6 text-purple-600" />
                          </div>
                          <CardTitle className="text-xl font-heading">Geórgia</CardTitle>
                          <CardDescription>Vinhos e montanhas do Cáucaso</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">
                            Conhecida por sua hospitalidade, paisagens deslumbrantes e tradição vinícola milenar, a Geórgia é um destino único e acessível.
                          </p>
                          <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
                            <a href="https://georgia.travel" target="_blank" rel="noopener noreferrer">
                              Saiba Mais
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <Card className="h-full border-primary/10 transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                            <Languages className="h-6 w-6 text-pink-600" />
                          </div>
                          <CardTitle className="text-xl font-heading">Vietnã</CardTitle>
                          <CardDescription>Cultura vibrante e gastronomia única</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">
                            O Vietnã combina paisagens deslumbrantes, cidades vibrantes e uma culinária incrível a preços muito acessíveis.
                          </p>
                          <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
                            <a href="https://vietnam.travel" target="_blank" rel="noopener noreferrer">
                              Saiba Mais
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Recursos;
