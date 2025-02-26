
import { Home, User, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { NavBar } from './ui/tubelight-navbar';

const navItems = [
  { name: 'Início', url: '#', icon: Home },
  { name: 'Sobre', url: '#about', icon: User },
  { name: 'Destinos', url: '#destinations', icon: MapPin },
  { name: 'Contato', url: '#contact', icon: Phone }
];

const Navbar = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <div className="relative">
      <NavBar 
        items={navItems.map(item => ({
          ...item,
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.url)
        }))} 
      />
      <div className="fixed top-4 right-4 z-50">
        <Button 
          className="bg-primary hover:bg-primary-dark text-white"
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
  );
};

export default Navbar;
