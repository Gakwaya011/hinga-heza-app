import React from "react";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default ContactPage;

