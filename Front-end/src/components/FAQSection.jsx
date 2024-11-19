import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const faqs = [
  {
    question: 'What is Hinga Heza?',
    answer: 'Hinga Heza is a platform connecting buyers and sellers of agricultural land in Rwanda.',
  },
  {
    question: 'How can I list my land?',
    answer: 'You can list your land by signing up and accessing the “Add Listing” section in your account.',
  },
  {
    question: 'Is there a fee for using the platform?',
    answer: 'No, registering and browsing is free. Listing fees may apply for premium features.',
  },
];

const FAQSection = () => (
  <Box sx={{ padding: '4rem 2rem', backgroundColor: '#f4f4f4' }}>
    <Typography
      variant="h5"
      sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem' }}
    >
      Frequently Asked Questions
    </Typography>
    {faqs.map((faq, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }} // Staggered animation
      >
        <Accordion sx={{ marginBottom: '1rem' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id={`faq-${index}`}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      </motion.div>
    ))}
  </Box>
);

export default FAQSection;
