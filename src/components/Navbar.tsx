
import { Home, User, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { NavBar } from './ui/tubelight-navbar';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Destinations', url: '#destinations', icon: MapPin },
  { name: 'Contact', url: '#contact', icon: Phone }
];

const Navbar = () => {
  return (
    <div className="relative">
      <NavBar items={navItems} />
      <div className="fixed top-4 right-4 z-50">
        <Button className="bg-primary hover:bg-primary-dark text-white">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
