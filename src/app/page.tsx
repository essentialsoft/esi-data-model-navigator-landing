import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />
        <div className={`max-w-6xl mx-auto`}>
        <FAQ />
        <CTA />
        </div>
      </Container>
    </>
  );
};

export default HomePage;
