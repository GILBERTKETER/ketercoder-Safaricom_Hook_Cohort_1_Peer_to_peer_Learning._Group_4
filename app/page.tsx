import { Hero, PortfolioHeader, Footer, ScrollToTopButton, GlowingMovingLines, SocialLinks, Contact, Projects, ServicesSection, ExperienceSection, CertificationsSection, SkillsSection, TestimonialsCarousel } from "@/components/index"
export default function Home() {
  return (

    <div className="bg-black">
      <GlowingMovingLines>
        <PortfolioHeader />
        <Hero />
        <SocialLinks />
        <ServicesSection />
        <SkillsSection />
        <ExperienceSection />
        <Projects />
        <CertificationsSection />
        <TestimonialsCarousel />
        <Contact />
        <Footer />
        <ScrollToTopButton/>
      </GlowingMovingLines>

    </div>
  );
}
