import { Container } from "@/components/container";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marque-img";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full pb-24">
      <Container>
        {/* Hero Section */}
        <section className="my-12 lg:my-16">
          <div className="space-y-6">
            <h1 className="text-4xl text-center md:text-left md:text-6xl lg:text-7xl">
              <span className="text-outline mr-4 font-extrabold md:text-8xl lg:text-9xl">
                AInterv
              </span>
              <span className="font-extrabold text-foreground">
                - The AI Interview App
              </span>
            </h1>
            
            <p className="font-light text-lg md:text-xl text-muted-foreground max-w-2xl text-center md:text-left">
              Boost your interview skills and increase your chances of landing your dream job with AInterv.
            </p>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="mt-16 mb-8">
          <div className="relative w-full rounded-2xl bg-gray-500 h-[420px] lg:h-[500px] shadow-2xl overflow-hidden group">
            <img 
              src="/assets/img/main-img.jpeg"
              alt="AI Interview preparation interface"
              className="w-full h-full object-cover transition-transform duration-300 "
            />

            {/* Brand Badge */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-md hover:bg-white/90 transition-all duration-200 shadow-lg">
              <span className="text-sm font-medium text-gray-800">
                Interviews Copilot &copy;
              </span>
            </div>

            {/* Feature Card */}
            <div className="hidden md:flex absolute w-80 lg:w-96 bottom-6 right-6 p-6 rounded-xl bg-white/80 backdrop-blur-md hover:bg-white/90 transition-all duration-200 shadow-lg flex-col space-y-4">
              <div className="space-y-2">
                <h3 className="text-gray-800 font-semibold text-lg">
                  AI-Powered Practice
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Experience realistic interview scenarios with our advanced AI system. 
                  Get personalized feedback and improve your performance.
                </p>
              </div>

              <Button className="w-fit group">
                Generate Interview
                <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        </section>
      </Container>

      {/* Partner Logos Marquee */}
      <section className="w-full py-8 bg-muted/30">
        <Marquee 
          pauseOnHover 
          gradient={false} 
          speed={50}
          className="py-4"
        >
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
        </Marquee>
      </section>

      {/* Call to Action Section */}
      <Container>
        <section className="py-16 lg:py-24">
          <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to ace your next interview?
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                Transform the way you prepare, gain confidence, and boost your
                chances of landing your dream job. Let AI be your edge in
                today's competitive job market.
              </p>
            </div>

            <div className="pt-4">
              <Link to="/generate" className="inline-block w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-4 text-lg group hover:shadow-lg transition-all duration-200"
                >
                  Start Practicing Now
                  <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;