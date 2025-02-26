
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ParallaxGallery from '@/components/ParallaxGallery';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <VideoHero />
      <WhyChooseUs />
      <ParallaxGallery />
    </main>
  );
};

export default Index;
