import { Home, User, MapPin, Phone, Menu, X, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { NavBar } from './ui/tubelight-navbar';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useMagnetic } from '@/hooks/use-magnetic';

const navItems = [
  { name: 'Início', url: '/', icon: Home },
  { name: 'Sobre', url: '/sobre', icon: User },
  { name: 'Destinos', url: '/destinos', icon: MapPin },
  { name: 'Guias e Recursos', url: '/recursos', icon: BookOpen },
  { name: 'Contato', url: '/contato', icon: Phone }
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { ref, style, isHovered } = useMagnetic({ strength: 20 });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // If it's an anchor link on the same page
    if (targetId.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(targetId.substring(2));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      setMobileMenuOpen(false);
    }
    // If it's just the home page
    else if (targetId === '/' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
    // Otherwise, let the normal navigation happen
    else {
      setMobileMenuOpen(false);
    }
  };

  // Animation variants
  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.2
      }
    },
    exit: { y: -100, opacity: 0 }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={navbarVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/10 backdrop-blur-lg shadow-lg' : ''
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavBar
            items={navItems.map(item => ({
              ...item,
              onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.url)
            }))}
          />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center px-4 py-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white font-heading text-xl font-bold"
          >
            Viajantes
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 rounded-full bg-primary/20 backdrop-blur-md"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-navbg/95 to-navbg/90 backdrop-blur-lg p-4 rounded-b-2xl shadow-lg"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="mb-3"
                >
                  <a
                    href={item.url}
                    onClick={(e) => handleNavClick(e, item.url)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 text-white transition-colors"
                  >
                    <item.icon size={20} />
                    <span className="font-heading">{item.name}</span>
                  </a>
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                className="mt-6 mb-2"
              >
                <Button
                  className="w-full bg-gradient-accent hover:shadow-glow-accent text-white font-heading"
                  asChild
                >
                  <a
                    href="https://wa.link/wzdjjk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reserve Agora
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Reserve Button (Desktop) */}
      <div className="fixed top-4 right-4 z-50 hidden md:block">
        <div
          ref={ref}
          style={style}
          className="magnetic-button"
        >
          <Button
            className="bg-gradient-accent hover:shadow-glow-accent text-white font-heading transition-all duration-300"
            asChild
          >
            <a
              href="https://wa.link/wzdjjk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve Agora
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
