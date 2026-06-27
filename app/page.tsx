import { AnimatedBackground } from "@/components/animated-background";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { FeaturedWork } from "@/components/featured/featured-work";
import { Experience } from "@/components/sections/experience";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <FeaturedWork />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
