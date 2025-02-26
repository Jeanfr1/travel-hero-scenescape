
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ParallaxGallery from '@/components/ParallaxGallery';
import JourneyTimeline from '@/components/JourneyTimeline';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <VideoHero />
      <WhyChooseUs />
      <ParallaxGallery />
      <JourneyTimeline />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
