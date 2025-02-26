
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useMagnetic } from "@/hooks/use-magnetic"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import AnimatedText from "@/components/ui/animated-text"
import { Link } from "react-router-dom"

function Footer() {
  const { ref, style, isHovered } = useMagnetic({ strength: 15 });
  const { ref: footerRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    hover: {
      scale: 1.2,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-bg-light to-primary-100 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-accent-300 blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-primary-300 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-gold-300 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={footerRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="mb-10 rounded-full bg-gradient-accent p-8 shadow-glow-accent animate-pulse-slow"
          >
            <Icons.logo className="h-8 w-8 text-white" />
          </motion.div>

          <motion.nav
            variants={itemVariants}
            className="mb-10 flex flex-wrap justify-center gap-8"
          >
            <Link to="/" className="font-heading text-primary-700 hover:text-accent-500 transition-colors duration-300 hover:scale-105 transform inline-block">Início</Link>
            <Link to="/sobre" className="font-heading text-primary-700 hover:text-accent-500 transition-colors duration-300 hover:scale-105 transform inline-block">Sobre</Link>
            <Link to="/destinos" className="font-heading text-primary-700 hover:text-accent-500 transition-colors duration-300 hover:scale-105 transform inline-block">Destinos</Link>
            <Link to="/recursos" className="font-heading text-primary-700 hover:text-accent-500 transition-colors duration-300 hover:scale-105 transform inline-block">Guias e Recursos</Link>
            <Link to="/contato" className="font-heading text-primary-700 hover:text-accent-500 transition-colors duration-300 hover:scale-105 transform inline-block">Contato</Link>
          </motion.nav>

          <motion.div
            variants={itemVariants}
            className="mb-10 flex space-x-6"
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm border-accent-200 hover:border-accent-400 hover:shadow-glow-accent transition-all duration-300" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-accent-500" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
            </motion.div>

            <motion.div variants={iconVariants} whileHover="hover">
              <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm border-accent-200 hover:border-accent-400 hover:shadow-glow-accent transition-all duration-300" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 text-accent-500" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
            </motion.div>

            <motion.div variants={iconVariants} whileHover="hover">
              <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm border-accent-200 hover:border-accent-400 hover:shadow-glow-accent transition-all duration-300" asChild>
                <a href="https://www.instagram.com/alaisviaja?igsh=MXRzeTNiOGhuNnprOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-accent-500" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
            </motion.div>

            <motion.div variants={iconVariants} whileHover="hover">
              <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm border-accent-200 hover:border-accent-400 hover:shadow-glow-accent transition-all duration-300" asChild>
                <a href="https://www.linkedin.com/in/laispedrodepuiz/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-accent-500" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-10 w-full max-w-md"
          >
            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-center font-heading text-primary-700 mb-4 text-lg">Receba Novidades</h3>
              <form className="flex space-x-2">
                <div className="flex-grow relative">
                  <Label htmlFor="email" className="sr-only">Email</Label>
                  <Input
                    id="email"
                    placeholder="Digite seu email"
                    type="email"
                    className="rounded-full border-accent-200 focus:border-accent-400 focus:ring-accent-400 pl-10 backdrop-blur-sm bg-white/80"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent-400" />
                </div>
                <div ref={ref} style={style} className="magnetic-button">
                  <Button type="submit" className="rounded-full bg-gradient-accent hover:shadow-glow-accent text-white font-heading transition-all duration-300">
                    <Send className="h-4 w-4 mr-2" />
                    <span>Enviar</span>
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <AnimatedText
              text={`© ${new Date().getFullYear()} Viajantes Sem Fronteiras`}
              animation="fade"
              className="text-sm text-primary-600 font-body"
              animationDuration={0.03}
            />
            <p className="text-xs text-primary-500 mt-2 font-body">
              Todos os direitos reservados.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer;
