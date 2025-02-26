import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Particles } from "@/components/ui/particles";

const Contato = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Animated background gradient
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem Enviada!",
        description: "Entraremos em contato em breve.",
      });

      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        message: "",
      });
      setFormStep(0);
    }, 1500);
  };

  const nextStep = () => {
    if (formStep < 2) {
      setFormStep(formStep + 1);
    }
  };

  const prevStep = () => {
    if (formStep > 0) {
      setFormStep(formStep - 1);
    }
  };

  const canProceedToStep1 = formData.name && formData.email;
  const canProceedToStep2 = formData.phone && formData.destination;
  const canSubmit = formData.message;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  // Direction for slide animation
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    if (
      (formStep === 0 && newDirection === 1 && canProceedToStep1) ||
      (formStep === 1 && newDirection === 1 && canProceedToStep2) ||
      (formStep === 1 && newDirection === -1) ||
      (formStep === 2 && newDirection === -1)
    ) {
      setPage([page + newDirection, newDirection]);
      if (newDirection > 0) {
        nextStep();
      } else {
        prevStep();
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: "transform 0.2s ease-out",
          }}
        />
        <Particles
          className="absolute inset-0"
          quantity={100}
          color="#6366f1"
          staticity={80}
          ease={30}
          particleOpacity={0.2}
        />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos ansiosos para planejar sua próxima aventura. Preencha o formulário abaixo e embarque nessa jornada conosco.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto" ref={formRef}>
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-primary/10 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              {/* Progress indicator */}
              <div className="w-full bg-white p-4 border-b border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">
                    Passo {formStep + 1} de 3
                  </span>
                  <span className="text-sm text-gray-500">
                    {formStep === 0 ? "Informações Básicas" : formStep === 1 ? "Detalhes de Contato" : "Sua Mensagem"}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((formStep + 1) / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Form steps */}
              <div className="p-6 relative overflow-hidden">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="min-h-[350px] flex flex-col justify-between"
                >
                  {formStep === 0 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">
                          Nome Completo
                        </Label>
                        <div className="relative">
                          <Input
                            id="name"
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                            className="bg-white border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-purple-500 transition-all"
                          />
                          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" style={{ width: formData.name ? '100%' : '0%' }} />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">
                          Email
                        </Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            required
                            className="bg-white border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-purple-500 transition-all"
                          />
                          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" style={{ width: formData.email ? '100%' : '0%' }} />
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="pt-4 flex justify-end"
                      >
                        <Button
                          onClick={() => paginate(1)}
                          disabled={!canProceedToStep1}
                          className={`px-8 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300 ${
                            !canProceedToStep1 ? "opacity-50 cursor-not-allowed" : "hover:shadow-glow-sm"
                          }`}
                        >
                          Próximo
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}

                  {formStep === 1 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700">
                          Telefone
                        </Label>
                        <div className="relative">
                          <Input
                            id="phone"
                            placeholder="(00) 00000-0000"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            required
                            className="bg-white border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-purple-500 transition-all"
                          />
                          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" style={{ width: formData.phone ? '100%' : '0%' }} />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="destination" className="text-gray-700">
                          Destino de Interesse
                        </Label>
                        <div className="relative">
                          <Input
                            id="destination"
                            placeholder="Para onde você quer ir?"
                            value={formData.destination}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                destination: e.target.value,
                              })
                            }
                            required
                            className="bg-white border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-purple-500 transition-all"
                          />
                          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" style={{ width: formData.destination ? '100%' : '0%' }} />
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="pt-4 flex justify-between"
                      >
                        <Button
                          onClick={() => paginate(-1)}
                          className="px-8 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-all duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Anterior
                        </Button>
                        <Button
                          onClick={() => paginate(1)}
                          disabled={!canProceedToStep2}
                          className={`px-8 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300 ${
                            !canProceedToStep2 ? "opacity-50 cursor-not-allowed" : "hover:shadow-glow-sm"
                          }`}
                        >
                          Próximo
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}

                  {formStep === 2 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700">
                          Sua Mensagem
                        </Label>
                        <div className="relative">
                          <textarea
                            id="message"
                            placeholder="Conte-nos sobre sua viagem dos sonhos..."
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                            required
                            className="min-h-[150px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-800 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none transition-all"
                          />
                          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" style={{ width: formData.message ? '100%' : '0%' }} />
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="pt-4 flex justify-between"
                      >
                        <Button
                          onClick={() => paginate(-1)}
                          className="px-8 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-all duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Anterior
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          disabled={!canSubmit || isSubmitting}
                          className={`px-8 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300 ${
                            !canSubmit || isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-glow-sm"
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar Mensagem
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Floating cards decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-500/10 backdrop-blur-xl rounded-2xl z-0"
            style={{ transform: "rotate(-10deg)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/10 backdrop-blur-xl rounded-2xl z-0"
            style={{ transform: "rotate(15deg)" }}
          />
        </div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Telefone</h3>
            <p className="text-gray-600">+55 (11) 99999-9999</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
            <p className="text-gray-600">contato@viajantes.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Endereço</h3>
            <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default Contato;
