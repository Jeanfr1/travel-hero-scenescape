
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <VideoHero />
      <WhyChooseUs />
    </main>
  );
};

export default Index;
