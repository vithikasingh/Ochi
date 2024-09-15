// import React, { useState } from "react";
// import adoption from "/adoption.jpg"; 
// import pets from "/pets.png";
// import vet from "/vet.png";
// import search from "/search.png";
// import adopt from "/adopt.png";

// import { motion } from 'framer-motion';
// import puppyphoto from '/puppyphoto.png';
// import cat from '/twocat.jpg'

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const animationProps = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.5 }
//   };

//   const faqs = [
//     {
//       question: "Why Should You Adopt a Dog or Cat?",
//       answer:
//         "Did you know that over 2000 people per hour in India run a search right here looking to adopt a pet? Pet adoption is becoming the preferred way to find a new pet. Adoption will always be more convenient than buying a puppy for sale from a pet shop or finding a kitten for sale from a litter. Pet adoption brings less stress and more savings! So what are you waiting for? Go find that perfect pet for home!",
//     },
//     {
//       question: "How can I adopt a pet?",
//       answer:
//         "To adopt a pet, simply search for pets available for adoption in your area, schedule a meeting, and finally, complete the adoption process to bring your new friend home.",
//     },
//     {
//       question: "What are the adoption fees?",
//       answer:
//         "Adoption fees vary depending on the pet and its medical history. The fees help cover the cost of veterinary care, vaccinations, and other necessary expenses.",
//     },
//     {
//       question: "Can you return an adopted pet?",
//       answer:
//         "Yes, donations are always welcome! Your contributions help us rescue, rehabilitate, and rehome more animals in need.",
//     },
//     {
//       question: "What should I prepare before adopting a pet?",
//       answer:
//         "Before adopting a pet, ensure you have all necessary supplies like food, bedding, toys, and grooming tools. It's also important to pet-proof your home, secure any hazardous items, and prepare a designated space for your new pet to feel safe and comfortable.",
//     },
//   ];

//   const handleToggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
    
    
//     <div className="bg-gray-100 py-16 px-4">
      
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-black text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 cursor-pointer"
//               onClick={() => handleToggle(index)}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
//                 <span>{activeIndex === index ? "-" : "+"}</span>
//               </div>
//               <div
//                 className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeIndex === index ? "max-h-96" : "max-h-0"
//                   }`}
//               >
//                 <p className="mt-4 text-gray-600">{faq.answer}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const AdoptionPage = () => {
//   const animationProps = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.5 }
//   };

//   return (
    
//     <div className="bg-white py-12">
      
//       <div className="relative">
//         <img
//           src={adoption}
//           alt="Happy dog"
//           className="w-full h-100 py-12 object-cover" // Adjust height as needed
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//             Re-Home and Adopt a Pet in India
//           </h1>
//           <p className="mt-4 text-sm md:text-base lg:text-lg">
//             Every Pet Deserves a Good Home. #Adoptlove
//           </p>
//           <button className="mt-6 px-6 py-3 bg-teal-400 text-white rounded-full shadow-lg hover:bg-orange-600 transition duration-300">
//             Adopt a pet
//           </button>
//         </div>
//       </div>

//       <div className="container mx-auto mt-12 flex flex-col md:flex-row items-center min-h-screen">
//         {/* Left Column: Dog Image */}
//         <div className="w-full md:w-1/2 p-4 flex justify-center">
//           <img
//             src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg"
//             alt="Adopt me dog"
//             className="w-full h-auto"
//           />
//         </div>

//         {/* Right Column: Adoption Details */}
//         <div className="w-full md:w-1/2 p-4 text-black">
//           <h2 className="text-3xl font-semibold text-center mb-8">
//             Your Pet Adoption Journey With Pawsconnect
//           </h2>

//           {/* Details Section */}
//           <div className="space-y-8">
//             <motion.div
//               className="flex items-center"
//               {...animationProps}
//             >
//               <motion.img
//                 src={search}
//                 alt="Search Pet Icon"
//                 className="w-20 h-20 rounded-full mr-4"
//                 whileHover={{ rotate: 15, scale: 1.1 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               />
//               <div>
//                 <h3 className="font-bold text-lg">Search Pet</h3>
//                 <p>Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</p>
//               </div>
//             </motion.div>

//             <motion.div
//               className="flex items-center"
//               {...animationProps}
//             >
//               <motion.img
//                 src={pets}
//                 alt="Connect Icon"
//                 className="w-20 h-20 rounded-full mr-4"
//                 whileHover={{ rotate: 15, scale: 1.1 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               />
//               <div>
//                 <h3 className="font-bold text-lg">Connect</h3>
//                 <p>Once you find a pet, click "show number" to get contact info for their pet parent or rescue.</p>
//               </div>
//             </motion.div>

//             <motion.div
//               className="flex items-center"
//               {...animationProps}
//             >
//               <motion.img
//                 src={adopt}
//                 alt="AdoptLove Icon"
//                 className="w-20 h-20 rounded-full mr-4"
//                 whileHover={{ rotate: 15, scale: 1.1 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               />
//               <div>
//                 <h3 className="font-bold text-lg">AdoptLove</h3>
//                 <p>The rescue or pet parents will walk you through the adoption process. Prepare your home for the arrival of your fur baby.</p>
//               </div>
//             </motion.div>

//             <motion.div
//               className="flex items-center"
//               {...animationProps}
//             >
//               <motion.img
//                 src={vet}
//                 alt="Free Vet Consultation Icon"
//                 className="w-20 h-20 rounded-full mr-4"
//                 whileHover={{ rotate: 15, scale: 1.1 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               />
//               <div>
//                 <h3 className="font-bold text-lg">Free Vet Consultation</h3>
//                 <p>ThePetNest will help your pet settle down in its new home. Reach out to us for a free vet consultation.</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-center  bg-[url('https://dm6g3jbka53hp.cloudfront.net/static-images/pet-mating__banner-section__customer-banner.jpg')] bg-cover bg-center bg-no-repeat py-28"
//       ></div>


// <div className="flex flex-col items-center justify-center h-screen bg-white">
//         <p className="text-sm text-yellow-600">Let's get in touch</p>
//         <h1 className="text-4xl font-bold text-gray-900 mt-2">Adopt a Puppy Today</h1>
//         <div className="flex justify-center mt-8 space-x-8">
//           <div className="relative">
//             <img
//               src={puppyphoto}
//               alt="Puppy"
//               className="w-64 h-auto z-10 relative"
//             />
//           </div>
//           <div className="relative">
//   <img
//     src={cat}
//     alt="twocat"
//     className="w-64 h-auto z-10 relative rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//   />
// </div>

        

//         <div className=""></div>
//       </div>
//       <button className="mt-8 px-6 py-3 bg-red-500 text-white rounded-full text-lg hover:bg-red-600 focus:outline-none">
//         View Puppies →
//       </button>
//     </div>

//       <div className="bg-gray-100 py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-black text-3xl font-bold mb-8">How it works?</h2>
//           <div className="flex justify-center space-x-12">
//             {/* Search */}
//             <div className="flex flex-col items-center">
//               <div className="mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-12 h-12 text-gray-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.606-10.606 7.5 7.5 0 0010.606 10.606z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-black text-xl font-semibold">Search</h3>
//               <p className="text-gray-600">
//                 Simply enter your city to start your search
//               </p>
//             </div>

//             {/* Meet */}
//             <div className="flex flex-col items-center">
//               <div className="mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-12 h-12 text-gray-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M7.5 11.25v-1.5a4.5 4.5 0 019 0v1.5M4.5 16.5h15m-15 0a2.25 2.25 0 01-2.25-2.25v-3a2.25 2.25 0 012.25-2.25m15 7.5a2.25 2.25 0 002.25-2.25v-3a2.25 2.25 0 00-2.25-2.25m-15 7.5v1.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-1.5m-15 0h15"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-black text-xl font-semibold">Meet</h3>
//               <p className="text-gray-600">
//                 Schedule your appointment to meet the pet you love
//               </p>
//             </div>

//             {/* Adopt */}
//             <div className="flex flex-col items-center">
//               <div className="mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-12 h-12 text-gray-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M16.5 10.5V6.75A3.75 3.75 0 0012.75 3h-1.5A3.75 3.75 0 007.5 6.75V10.5m9 0H7.5m9 0h-9m9 0v7.5A2.25 2.25 0 0114.25 20.25H9.75A2.25 2.25 0 017.5 18V10.5h9zM15 10.5V6.75M9 10.5V6.75M9 16.5h6"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-black text-xl font-semibold">Adopt</h3>
//               <p className="text-gray-600">
//                 Finally adopt the dog or cat you love
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}

//       <FAQSection />


//     </div >
    
//   );
// };


// export default AdoptionPage;


// import React from "react";
// import { motion } from "framer-motion";
// import adoption from "/adoption.jpg"; 
// import pets from "/pets.png";
// import vet from "/vet.png";
// import search from "/search.png";
// import adopt from "/adopt.png";
// import puppyphoto from '/puppyphoto.png';
// import cat from '/twocat.jpg';
// import FAQSection from "./FAQSection"; // Assuming FAQSection is in a separate file

// const AdoptionPage = () => {
//   const animationProps = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.5 }
//   };

//   return (
//     <div className="bg-white py-12">
//       {/* Hero Section */}
//       <motion.div
//         className="relative"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <img
//           src={adoption}
//           alt="Happy dog"
//           className="w-full h-100 py-12 object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//             Re-Home and Adopt a Pet in India
//           </h1>
//           <p className="mt-4 text-sm md:text-base lg:text-lg">
//             Every Pet Deserves a Good Home. #Adoptlove
//           </p>
//           <button className="mt-6 px-6 py-3 bg-teal-400 text-white rounded-full shadow-lg hover:bg-orange-600 transition duration-300">
//             Adopt a pet
//           </button>
//         </div>
//       </motion.div>

//       {/* Adoption Details Section */}
//       <motion.div
//         className="container mx-auto mt-12 flex flex-col md:flex-row items-center min-h-screen"
//         {...animationProps}
//       >
//         {/* Left Column: Dog Image */}
//         <motion.div
//           className="w-full md:w-1/2 p-4 flex justify-center"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <img
//             src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg"
//             alt="Adopt me dog"
//             className="w-full h-auto"
//           />
//         </motion.div>

//         {/* Right Column: Adoption Details */}
//         <motion.div
//           className="w-full md:w-1/2 p-4 text-black"
//           {...animationProps}
//         >
//           <h2 className="text-3xl font-semibold text-center mb-8">
//             Your Pet Adoption Journey With Pawsconnect
//           </h2>

//           {/* Details Section */}
//           <div className="space-y-8">
//             {[search, pets, adopt, vet].map((imgSrc, idx) => (
//               <motion.div
//                 key={idx}
//                 className="flex items-center"
//                 {...animationProps}
//               >
//                 <motion.img
//                   src={imgSrc}
//                   alt="Feature Icon"
//                   className="w-20 h-20 rounded-full mr-4"
//                   whileHover={{ rotate: 15, scale: 1.1 }}
//                   transition={{ type: 'spring', stiffness: 300 }}
//                 />
//                 <div>
//                   <h3 className="font-bold text-lg">{['Search Pet', 'Connect', 'AdoptLove', 'Free Vet Consultation'][idx]}</h3>
//                   <p>{['Adopt a dog or cat who\'s right for you. Simply enter your city above to start your search.', 
//                         'Once you find a pet, click "show number" to get contact info for their pet parent or rescue.', 
//                         'The rescue or pet parents will walk you through the adoption process. Prepare your home for the arrival of your fur baby.',
//                         'ThePetNest will help your pet settle down in its new home. Reach out to us for a free vet consultation.'][idx]}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Adoption Call to Action */}
//       <motion.div
//         className="flex flex-col items-center justify-center h-screen bg-white"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <p className="text-sm text-yellow-600">Let's get in touch</p>
//         <h1 className="text-4xl font-bold text-gray-900 mt-2">Adopt a Puppy Today</h1>
//         <div className="flex justify-center mt-8 space-x-8">
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <motion.img
//               src={puppyphoto}
//               alt="Puppy"
//               className="w-64 h-auto z-10 relative"
//               whileHover={{ scale: 1.1, y: -10, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)" }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             />
//           </motion.div>
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <motion.img
//               src={cat}
//               alt="twocat"
//               className="w-64 h-auto z-10 relative rounded-full"
//               whileHover={{ scale: 1.1, y: -10, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)" }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             />
//           </motion.div>
//         </div>
//         <button className="mt-8 px-6 py-3 bg-red-500 text-white rounded-full text-lg hover:bg-red-600 focus:outline-none">
//           View Puppies →
//         </button>
//       </motion.div>

//       {/* How It Works Section */}
//       <motion.div
//         className="bg-gray-100 py-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container mx-auto text-center">
//           <h2 className="text-black text-3xl font-bold mb-8">How it works?</h2>
//           <div className="flex justify-center space-x-12">
//             {['Search', 'Meet', 'Adopt'].map((step, idx) => (
//               <motion.div
//                 key={idx}
//                 className="flex flex-col items-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: idx * 0.2 }}
//               >
//                 <div className="mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-12 h-12 text-gray-700"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d={step === 'Search' ? "M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.606-10.606 7.5 7.5 0 0010.606 10.606z" : step === 'Meet' ? "M7.5 11.25v-1.5a4.5 4.5 0 019 0v1.5M4.5 16.5h15m-15 0a2.25 2.25 0 01-2.25-2.25v-3a2.25 2.25 0 012.25-2.25m15 7.5a2.25 2.25 0 002.25-2.25v-3a2.25 2.25 0 00-2.25-2.25m-15 7.5v1.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-1.5m-15 0h15" : "M16.5 10.5V6.75A3.75 3.75 0 0012.75 3h-1.5A3.75 3.75 0 007.5 6.75V10.5m9 0H7.5m9 0h-9m9 0v7.5A2.25 2.25 0 0114.25 20.25H9.75A2.25 2.25 0 017.5 18V10.5h9zM15 10.5V6.75M9 10.5V6.75M9 16.5h6"}
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-black text-xl font-semibold">{step}</h3>
//                 <p className="text-gray-600">{step === 'Search' ? 'Simply enter your city to start your search' : step === 'Meet' ? 'Schedule your appointment to meet the pet you love' : 'Finally adopt the dog or cat you love'}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* FAQ Section */}
//       <FAQSection />
//     </div>
//   );
// };

// export default AdoptionPage;



import React from "react";
import { motion } from "framer-motion";
import adoption from "/adoption.jpg"; 
import pets from "/pets.png";
import vet from "/vet.png";
import search from "/search.png";
import adopt from "/adopt.png";
import puppyphoto from '/puppyphoto.png';
import cat from '/twocat.jpg';
import FAQSection from "./FAQSection";
import { useNavigate } from "react-router-dom";

const AdoptionPage = () => {
  const containerAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const itemAnimationProps = {
    whileHover: { scale: 1.05, rotate: 5 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 300 }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/tinder");
  };

  return (
    <div className="bg-white py-12">
      {/* Hero Section */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={adoption}
          alt="Happy dog"
          className="w-full h-100 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Re-Home and Adopt a Pet in India
          </h1>
          <p className="mt-4 text-sm md:text-base lg:text-lg">
            Every Pet Deserves a Good Home. #Adoptlove
          </p>
          
          <button  onClick={handleClick} className="mt-6 px-6 py-3 bg-teal-400 text-white rounded-full shadow-lg hover:bg-teal-500 transition duration-300" >View Puppies →</button>
        </div>
      </motion.div>

      {/* Adoption Details Section */}
      <motion.div
        className="container mx-auto mt-12 flex flex-col md:flex-row items-center"
        {...containerAnimationProps}
      >
        {/* Left Column: Dog Image */}
        <motion.div
          className="w-full md:w-1/2 p-4 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg"
            alt="Adopt me dog"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right Column: Adoption Details */}
        <motion.div
          className="w-full md:w-1/2 p-4 text-black"
          {...containerAnimationProps}
        >
          <h2 className="text-3xl font-semibold text-center mb-8">
            Your Pet Adoption Journey With Pawsconnect
          </h2>

          {/* Details Section */}
          <div className="space-y-8">
            {[search, pets, adopt, vet].map((imgSrc, idx) => (
              <motion.div
                key={idx}
                className="flex items-center"
                {...containerAnimationProps}
              >
                <motion.img
                  src={imgSrc}
                  alt="Feature Icon"
                  className="w-20 h-20 rounded-full mr-4"
                  {...itemAnimationProps}
                />
                <div>
                  <h3 className="font-bold text-lg">{['Search Pet', 'Connect', 'AdoptLove', 'Free Vet Consultation'][idx]}</h3>
                  <p>{['Adopt a dog or cat who\'s right for you. Simply enter your city above to start your search.', 
                        'Once you find a pet, click "show number" to get contact info for their pet parent or rescue.', 
                        'The rescue or pet parents will walk you through the adoption process. Prepare your home for the arrival of your fur baby.',
                        'ThePetNest will help your pet settle down in its new home. Reach out to us for a free vet consultation.'][idx]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Adoption Call to Action */}
      <motion.div
        className="flex flex-col items-center justify-center bg-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-yellow-600">Let's get in touch</p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Adopt a Puppy Today</h1>
        <div className="flex justify-center mt-8 space-x-8">
          <motion.div
            className="relative"
            {...itemAnimationProps}
          >
            <img
              src={puppyphoto}
              alt="Puppy"
              className="w-64 h-auto rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            className="relative"
            {...itemAnimationProps}
          >
            <img
              src={cat}
              alt="twocat"
              className="w-64 h-auto rounded-full shadow-md"
            />
          </motion.div>
        </div>
        <button onClick={handleClick} className="mt-8 px-6 py-3 bg-red-500 text-white rounded-full text-lg hover:bg-red-600 focus:outline-none">
          View Puppies →
        </button>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        className="bg-gray-100 py-16"
        {...containerAnimationProps}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-black text-3xl font-bold mb-8">How it works?</h2>
          <div className="flex justify-center text-black space-x-12">
            {['Search', 'Meet', 'Adopt'].map((step, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={step === 'Search' ? "M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.606-10.606 7.5 7.5 0 0010.606 10.606z" : step === 'Meet' ? "M7.5 11.25v-1.5a4.5 4.5 0 019 0v1.5M4.5 16.5h15m-15 0a2.25 2.25 0 01-2.25-2.25v-3a2.25 2.25 0 012.25-2.25m15 7.5a2.25 2.25 0 002.25-2.25v-3a2.25 2.25 0 00-2.25-2.25m-15 7.5v1.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-1.5m-15 0h15" : "M16.5 10.5V6.75A3.75 3.75 0 0012.75 3h-1.5A3.75 3.75 0 007.5 6.75V10.5m9 0H7.5m9 0h-9m9 0v7.5A2.25 2.25 0 0114.25 20.25H9.75A2.25 2.25 0 017.5 18v-7.5" }
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">{step}</h3>
                <p className="text-gray-600">{['Search for pets in your area and find your perfect match.', 
                                              'Meet the pets and see if they are a good fit for you and your family.',
                                              'Complete the adoption process and bring your new pet home.'][idx]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdoptionPage;
