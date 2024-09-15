// import React from 'react';
// import contactdog from '/contact-dog.webp';

// const Contact = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-white">
//       <div className="w-full max-w-md p-8 space-y-6">
//         <h2 className="text-3xl font-bold text-gray-800">CONTACT US</h2>
//         <p className="text-gray-600">Send us a message and we will get back to you.</p>
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             placeholder="E-mail"
//             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             placeholder="Message"
//             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
//           />
//           <button
//             type="submit"
//             className="w-full p-3 text-white bg-black rounded hover:bg-gray-800 focus:outline-none"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//       <div className="hidden lg:block">
//         <img
//           src={contactdog} // Replace with your image URL
//           alt="Dog with sunglasses"
//           className="w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default Contact;




import React from 'react';
import { motion } from 'framer-motion';
import contactdog from '/contact-dog.webp'; // Adjust the image path

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        className="w-full max-w-md p-8 space-y-6"
      >
        <motion.h2
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
        >
          CONTACT US
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.4 }}
        >
          Send us a message and we will get back to you.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="space-y-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.6 }}
        >
          <motion.input
            type="text"
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          />
          <motion.input
            type="email"
            placeholder="E-mail"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          />
          <motion.textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          />
          <motion.button
            type="submit"
            className="w-full p-3 text-white bg-black rounded hover:bg-gray-800 focus:outline-none"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Right Side Image with Rotation and Slide Animation */}
      <motion.div
        className="hidden lg:block"
        initial={{ x: '100vw', rotate: 30 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.4 }}
      >
        <img
          src={contactdog}
          alt="Dog with sunglasses"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Contact;
