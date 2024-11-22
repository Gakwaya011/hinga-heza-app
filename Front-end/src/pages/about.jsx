import React from "react";
import AboutHero from "../components/AboutHero";
import StorySection from "../components/StorySection";
import ValuesSection from "../components/ValuesSection";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
