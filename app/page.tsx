
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";
import SecondQuote from "@/components/main/SecondQuote";
import Education from "@/components/main/Education";
import Contact from "@/components/main/Contact";
import { WavyBackgroundDemo } from "@/components/main/WavyBackgroundDemo";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <SecondQuote/>
        <Skills />
        <Education/>
        <Projects />
        /<WavyBackgroundDemo /> 
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
