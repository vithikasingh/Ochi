



import React from "react";
import { CiUser } from "react-icons/ci";
import { FaDog } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { FaCat } from "react-icons/fa";
import { SiDatadog } from "react-icons/si";
import { motion } from "framer-motion";
import Trainingdog from '/Trainingdog.jpg';
import cutecat from '/cutecat.jpeg';
import cutedog from '/cutedog.jpeg';
import cutecat1 from '/cutecat1.jpeg';
import Adoptdog from '/Adoptdog.png';



const animationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const Navbar = () => {
  return (
    <motion.div 
      className="w-full bg-gradient-to-b from-white to-teal-400 pt-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <div className="textstructure mt-40 px-20 flex items-center">
        <motion.div {...animationProps}>
          <motion.h1 
            className="text-black text-6xl font-medium leading-none tracking-tighter"
            whileHover={{ scale: 1.05, color: "#00C9A7" }}
          >
"Find All-in-One Solutions for Adoption, Care, and More"          </motion.h1>
          <motion.h1 
            className="text-black text-6xl font-medium leading-none tracking-tighter"
            whileHover={{ scale: 1.05, color: "#00C9A7" }}
          >
            Animal suited to
          </motion.h1>
          <motion.h1 
            className="text-black text-6xl font-medium leading-none tracking-tighter"
            whileHover={{ scale: 1.05, color: "#00C9A7" }}
          >
            You
          </motion.h1>
        </motion.div>
        <motion.img
          src="die-wolf.png"
          alt="Wolf Image"
          className="w-96 h-auto ml-12 mt-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
        />
      </div>
      
      {/* Add margin-bottom or padding-bottom to ensure space between the sections */}
      <div className="mb-12"></div>
      
      {/* Services Section */}
      <div className="bg-white py-20">
        <div className="text-center mb-12">
          <h1 className="text-black text-4xl font-light leading-none tracking-tighter">
            Our Services
          </h1>

          {/* Centered Icon with Smaller Lines */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-0.5 w-16 bg-green-500"></div>
            <CiUser size={30} className="text-green-500 mx-2" />
            <div className="h-0.5 w-16 bg-green-500"></div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 p-6 rounded-full">
              <FaDog size={50} className="text-black" />
            </div>
            <h3 className="mt-6 text-xl text-black font-semibold">Pet Breeding</h3>
            <p className="text-gray-500 mt-2">
              Our goal is to make sure that every pet owner has the opportunity to meet their pet’s needs and provide them with the best possible experience.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 p-6 rounded-full">
              <MdOutlinePets size={50} className="text-black" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black">Adoption</h3>
            <p className="text-gray-500 mt-2">
              Want to Get a Pet of Your Own? Here's where you should be! For adoption in Indore, we offer healthy kittens and cats.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 p-6 rounded-full">
              <MdOutlinePets size={50} className="text-black" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black">Grooming</h3>
            <p className="text-gray-500 mt-2">
            Get your furry friend looking their best with Petsfolio's professional dog grooming services. Our experienced groomers provide expert care to keep your dog clean, healthy, and happy.            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 p-6 rounded-full">
              <MdOutlinePets size={50} className="text-black" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black">consultancy</h3>
            <p className="text-gray-500 mt-2">
            "Comprehensive pet consultancy offering expert guidance on health, grooming, training, and nutrition to ensure your pet's well-being."</p>
            </div>
          

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 p-6 rounded-full">
              <FaCat size={50} className="text-black" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black">Care Shelter</h3>
            <p className="text-gray-500 mt-2">
              We provide a comfortable and safe environment for your dog to stay while you are away. Our dog hostel is staffed 24/7, and we offer both long-term and short-term boarding options.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 p-6 rounded-full">
              <SiDatadog size={50} className="text-black" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black">Training</h3>
            <p className="text-gray-500 mt-2">
            Our professional dog trainers use positive reinforcement techniques to train your dog and help them learn good behavior. We offer basic obedience training, advanced training, and behavior modification training.            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center p-8 bg-black min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div 
          className="md:w-1/2 w-full p-6 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={Trainingdog} 
            alt="Man playing with dog" 
            className="rounded-md shadow-lg max-w-full h-auto"
          />
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 w-full p-4 mt-8 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-white font-bold text-2xl md:text-3xl uppercase text-center md:text-left">
            Who We Are
          </h2>
          <h1 className="text-white font-bold text-4xl md:text-5xl mt-2 text-center md:text-left">
            We Love Your Pet, <br /> Just as You Do!
          </h1>
          <p className="text-white text-lg md:text-xl mt-4 text-center md:text-left">
            Welcome to Pawsconnect Pet Services, Indore’s premier pet care destination. Our team is dedicated to ensuring your furry friends receive the best care possible.
          </p>
          <div className="flex justify-center md:justify-start">
            
          </div>
        </motion.div>
      </motion.div>

      
      <div className="bg-[#D1F6F1] flex items-center justify-between px-8 py-16 md:px-24">
      {/* Text Section */}
      <div className="text-left max-w-lg">
        <h2 className="text-4xl md:text-5xl text-red-700 leading-tight mb-4">
          Preparing To Welcome A New Indie At Home?
        </h2>
        <p className="text-lg text-black mb-8">
          As your furry friend journeys from puppyhood to adulthood, they will require 360° supervision—right from nutrition and vaccinations to grooming and socialization. Refer to our care guide for adopted dogs that includes vet-approved tips for helping newly adopted dogs live strong, healthy, and happy lives.
        </p>
        
      </div>

      {/* Dog Image */}
      <div className="hidden md:block">
        <img
          src={Adoptdog}
          alt="Dog"
          className="w-64 h-auto object-contain"
        />
      </div>
    </div>

      {/* Last Call to Action Section */}

    <motion.div 
        className="flex flex-col items-center justify-center bg-teal-600 bg-[url('https://dm6g3jbka53hp.cloudfront.net/static-images/pet-mating__list-your-pet__dog-banner.jpg')] bg-cover bg-center bg-no-repeat py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <h1 className="text-white text-4xl font-bold mb-4 text-center">
          Ready to Join the Community?
        </h1>
        <p className="text-white text-xl text-center mb-6 px-4 md:px-0 font-medium leading-none tracking-tighter">
          Hey dog and cat lovers! Searching for the perfect mate for your furry baby? Register your pet and quickly
        </p>
        <p className=" font-medium leading-none tracking-tighter text-white text-xl text-center mb-6 px-4 md:px-0">
          get the best pet for adoption in Indore.
        </p>
        
      </motion.div>
      



    </motion.div>

  );
};

export default Navbar;
