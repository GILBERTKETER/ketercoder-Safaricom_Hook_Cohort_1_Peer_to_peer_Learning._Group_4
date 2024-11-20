"use client"
import React, { useState, useEffect } from "react";
import { Hero, LoadingSpinner, PortfolioHeader, Footer, ScrollToTopButton, GlowingMovingLines, SocialLinks, Contact, Projects, EducationAndInterests, ServicesSection, ExperienceSection, CertificationsSection, SkillsSection, TestimonialsCarousel } from "@/components/index"
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <LoadingSpinner logoSrc="/images/logo.png" message="Preparing portfolio..." />;
  }
  return (

    <div className="bg-black">
      <GlowingMovingLines>
        <PortfolioHeader />
        <Hero />
        <SocialLinks />
        <EducationAndInterests />
        <ServicesSection />
        <SkillsSection />
        <ExperienceSection />
        <Projects />
        <CertificationsSection />
        <TestimonialsCarousel />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </GlowingMovingLines>

    </div>
  );
}
