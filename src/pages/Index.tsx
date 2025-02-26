
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ParallaxGallery from '@/components/ParallaxGallery';
import JourneyTimeline from '@/components/JourneyTimeline';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <VideoHero />
      <WhyChooseUs />
      <ParallaxGallery />
      <JourneyTimeline />
    </main>
  );
};

export default Index;
