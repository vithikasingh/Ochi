// import React from 'react';
// import loginpet from '/loginpet.jpg'


// const Signup = () => {
 

//   return (
//     <div className="flex justify-center items-center min-h-screen mt-20 bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg flex max-w-4xl">
//         {/* Left Side Image */}
//         <div className="w-1/2 hidden md:block">
//           <img
//             src={loginpet} 
//             alt="Dog"
//             className="object-cover w-full h-full rounded-l-lg"
//           />
//         </div>

//         {/* Right Side Form */}
//         <div className="w-full md:w-1/2 p-8">
//           <h2 className="text-2xl font-semibold mb-6 text-gray-800">LOG IN</h2>

//           <form>
//             <label className="block text-gray-700 text-sm mb-2">Mobile Number</label>
//             <input
//               type="tel"
//               placeholder="+91 Your valid mobile number"
//               className="border border-gray-300 w-full p-2 mb-6 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />

//             <button
//               type="submit"
//               className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-200"
//             >
//               Get OTP
//             </button>
//           </form>

//           <div className="mt-4 text-sm text-gray-600">
//             DON'T HAVE AN ACCOUNT?{' '}
//             <a href="#" className="text-blue-600 font-semibold hover:underline">
//               SIGN UP.
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default Signup;



import React from 'react';
import { motion } from 'framer-motion';
import loginpet from '/loginpet.jpg'

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-10 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md rounded-lg flex flex-col md:flex-row max-w-4xl w-full"
      >
        {/* Left Side Image */}
        <motion.div
          className="w-full md:w-1/2 hidden md:block"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
        >
          <img
            src={loginpet}
            alt="Dog"
            className="object-cover w-full h-full rounded-l-lg"
          />
        </motion.div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8">
          <motion.h2
            className="text-2xl font-semibold mb-6 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            LOG IN
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-gray-700 text-sm mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="+91 Your valid mobile number"
              className="border border-gray-300 w-full p-2 mb-6 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-200"
            >
              Get OTP
            </motion.button>
          </motion.form>

          <div className="mt-4 text-sm text-gray-600">
            DON'T HAVE AN ACCOUNT?{' '}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              SIGN UP.
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
