import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyAlescars from "@/components/WhyAlescars";
import WhyGermany from "@/components/WhyGermany";
import ProcessTimeline from "@/components/ProcessTimeline";
import CasesGallery from "@/components/CasesGallery";
import RequestForm from "@/components/RequestForm";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <WhyAlescars />
        <WhyGermany />
        <ProcessTimeline />
        <CasesGallery />
        <RequestForm />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
