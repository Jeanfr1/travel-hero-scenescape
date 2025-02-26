
import { Button } from '@/components/ui/button';

const VideoHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://player.vimeo.com/external/469073507.sd.mp4?s=81bc5cc1943a14d18c12dfee8b4ee66437e40bf0&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-white uppercase bg-primary/80 rounded-full">
            Discover the World
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Journey Begins With Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience breathtaking destinations and create unforgettable memories with our curated travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg">
              Explore Destinations
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navbg px-8 py-6 text-lg">
              View Our Tours
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
