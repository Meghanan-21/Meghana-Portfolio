import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#050816", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <InfoCards />
      <About />
      <TechStack />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
