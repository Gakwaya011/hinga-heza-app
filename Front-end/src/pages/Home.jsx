import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion for scroll animations
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import HowItWorks from '../components/HowItWorks';
import SampleLandListings from '../components/SampleLandListings';
import Blog from '../components/BlogSection';
import TestimonialSection from '../components/TestimonialSection';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Home = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Other Sections with Scroll Animations */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation on scroll
        variants={fadeInVariant}
      >
        <MissionSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
      >
        <HowItWorks />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
      >
        <SampleLandListings />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
      >
        <Blog />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
      >
        <TestimonialSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
      >
        <CTASection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
      >
        <FAQSection />
      </motion.div>

      {/* Footer without animation (static) */}
      <Footer />
    </div>
  );
};

export default Home;
