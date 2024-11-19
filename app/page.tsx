import { Hero, PortfolioHeader, Footer, GlowingMovingLines, SocialLinks, Contact, Card, ServicesSection, ExperienceSection, CertificationsSection, SkillsSection } from "@/components/index"
export default function Home() {
  return (

    <div className="bg-black">
      <GlowingMovingLines>
        <PortfolioHeader />
        <Hero />
        <SocialLinks/>
        <Card/>
        <ServicesSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
        <Contact/>
        <Footer/>
      </GlowingMovingLines>

    </div>
  );
}
