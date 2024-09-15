import React from "react";
import { motion } from "framer-motion";
// import trainingdog from "/trainingdog.jpg"
import training from "/training.jpg";
import understandingdog from '/understandingdog.png'
import peeingimage from '/peeingimage.jpeg'
import trainingheader from '/trainingheader.webp'





const Training = () => {
  return (
    <div className="font-poppins bg-white text-black overflow-x-hidden">
      <div
  className="bg-cover bg-center h-96 flex items-center justify-center text-center pt-16" // Added top padding (pt-16)
  style={{ backgroundImage: `url(${training})` }} // Corrected background image usage
>
  <div className="bg-black bg-opacity-50 p-8 rounded">
    <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">
      Dog Training Service at Home
    </h1>
    <p className="text-lg text-white mb-6">
      Dog-friendly, one-on-one dog training
    </p>
    <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition">
      Book a Session
    </button>
  </div>
</div>


      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-36 bg-slate-300">
        <div className="container mx-auto text-center px-4">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-semibold text-oxford-blue mb-8">
              Professional Training for a Happier Pet
            </h1>
            <p className="text-lg text-oxford-blue mb-8">
              Customized Training Solutions for Every Pet—Building Trust,
              Confidence, and Lifelong Skills.
            </p>
            
          </motion.div>
        </div>
        <img
          
          alt="shape"
          className="absolute w-[900px] top-[-230px] right-[-300px] -[-1]"
        />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-32 text-center text-black bg-cover bg-center bg-[url('./assets/images/bg-wave.svg')]"
      >
        <div className="container mx-auto px-4 ">
          <motion.h2
            className="text-4xl text-black font-semibold mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Do any of these statements sound like you?
          </motion.h2>
          <motion.p
            className="text-lg text-black mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unlock your dog’s potential with expert training designed to address
            all levels of behavior, from basic obedience to advanced skills.
          </motion.p>
          <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <li className="bg-white p-8 rounded-lg shadow-lg">
  <div className="text-center">
    <img
      src={understandingdog} // Replace with your actual image path
      alt="Dog behavior"
      className="mx-auto mb-4 w-24 h-24 object-cover" // Adjust width and height as needed
    />
    <div className="text-bittersweet text-5xl mb-4">
      <ion-icon name="paw-outline"></ion-icon>
    </div>
    <h3 className="text-2xl text-oxford-blue font-semibold mb-4">
      Frustrated by Your Dog’s Behavior?
    </h3>
    <p className="text-davys-gray">
      Tired of disobedience or embarrassing habits? Our training tackles these
      issues, giving you control and confidence.
    </p>
  </div>
</li>

            {/* Card 2 */}
            <li className="bg-white p-8 rounded-lg shadow-lg">
            <img
      src={peeingimage} // Replace with your actual image path
      alt="Dog behavior"
      className="mx-auto mb-4 w-24 h-24 object-cover" // Adjust width and height as needed
    />
              <div className="text-center">
                <div className="text-bittersweet text-5xl mb-4">
                  <ion-icon name="home-outline"></ion-icon>
                </div>
                <h3 className="text-2xl text-oxford-blue font-semibold mb-4">
                  Puppy Chewing and Peeing Everywhere?
                </h3>
                <p className="text-davys-gray">
                  Our puppy program focuses on house training and teaching
                  commands to stop destructive habits early.
                </p>
              </div>
            </li>
            {/* Card 3 */}
            <li className="bg-white p-8 rounded-lg shadow-lg">
            <img
      src={trainingheader} // Replace with your actual image path
      alt="Dog behavior"
      className="mx-auto mb-4 w-24 h-24 object-cover" // Adjust width and height as needed
    />
              <div className="text-center">
                <div className="text-bittersweet text-5xl mb-4">
                  <ion-icon name="newspaper-outline"></ion-icon>
                </div>
                <h3 className="text-2xl text-oxford-blue font-semibold mb-4">
                  Want to Teach New Skills?
                </h3>
                <p className="text-davys-gray">
                  Even well-behaved dogs can learn more! Our training offers fun
                  ways to advance your dog's obedience and skills.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      

      {/* More sections here... */}
    </div>
  );
};

export default Training;
