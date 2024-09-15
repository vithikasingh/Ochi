import React, { useState } from "react";
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why Should You Adopt a Dog or Cat?",
      answer: "Did you know that over 2000 people per hour in India run a search right here looking to adopt a pet? Pet adoption is becoming the preferred way to find a new pet. Adoption will always be more convenient than buying a puppy for sale from a pet shop or finding a kitten for sale from a litter. Pet adoption brings less stress and more savings! So what are you waiting for? Go find that perfect pet for home!",
    },
    {
      question: "How can I adopt a pet?",
      answer: "To adopt a pet, simply search for pets available for adoption in your area, schedule a meeting, and finally, complete the adoption process to bring your new friend home.",
    },
    {
      question: "What are the adoption fees?",
      answer: "Adoption fees vary depending on the pet and its medical history. The fees help cover the cost of veterinary care, vaccinations, and other necessary expenses.",
    },
    {
      question: "Can you return an adopted pet?",
      answer: "Yes, donations are always welcome! Your contributions help us rescue, rehabilitate, and rehome more animals in need.",
    },
    {
      question: "What should I prepare before adopting a pet?",
      answer: "Before adopting a pet, ensure you have all necessary supplies like food, bedding, toys, and grooming tools. It's also important to pet-proof your home, secure any hazardous items, and prepare a designated space for your new pet to feel safe and comfortable.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      className="bg-gray-100 py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-black text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 cursor-pointer"
              onClick={() => handleToggle(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
              >
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQSection;
