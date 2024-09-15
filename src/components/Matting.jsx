import React from "react";
import doggreen from "/doggreen.png";
import cat from "/cat.png"
import dogpet from "/dogpet.png"
import horsepet from "/horsepet.png"
import dog2 from "/dog2.png"



import { FaUserAlt, FaPaw, FaComments, FaMapMarkerAlt } from "react-icons/fa"; // Icons from FontAwesome

const DogBreedingSection = () => {
  const cardData = [
    {
      icon: <FaUserAlt size={40} />,
      title: "Create Your Custom Profile",
      description:
        "Post photos of your pup, add details about them including their personality, age, breed, and more!",
    },
    {
      icon: <FaPaw size={40} />,
      title: "Match with Pups",
      description:
        "Unlimited free browsing of the cutest dogs in your area! Change your settings to specify the types of dogs and people you want to meet!",
    },
    {
      icon: <FaComments size={40} />,
      title: "Chat and Meet",
      description:
        "Pawmates matches show up on your custom wheel! Swipe through your match wheel and start chatting with people and their pups!",
    },
    {
      icon: <FaMapMarkerAlt size={40} />,
      title: "Our Pet Business Map",
      description:
        "Looking for the top-rated vets, pet food stores, walkers, or anything else related to your pup? Check out our Pawmates Map!",
    },
  ];

  return (
    <div>
      <div className="bg-white text-black py-20 px-4 text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">Dog Breeding</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Breeding a litter of puppies is a rewarding experience, but it can
          also be costly and time-consuming. Whether you're an established dog
          breeder or just starting out, learn more about responsible dog
          breeding. We've got the details you need to make informed decisions
          and ensure the welfare of your dog and their offspring.
        </p>
      </div>
      <section className="py-16 bg-white  text-center">
      <h2 className="text-5xl text-black font-bold  mb-4">Connect with the right mate</h2>
      <h2 className="text-gray-600 mb-8 text-3xl ">Explore endless options to find your pet’s true match.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-5xl">
        {/* Dog Card */}
        <div className="relative bg-orange-500 rounded-lg p-4">
          <div className="absolute inset-0 bg-grid-orange opacity-40 rounded-lg"></div>
          <img src={dogpet} alt="Dog" className="relative z-10 w-full h-53 object-cover rounded-lg shadow-md" />
          <h3 className="relative z-10 text-2xl font-bold text-gray-800 mt-4">DOGS</h3>
        </div>
        
        {/* Cat Card */}
        <div className="relative bg-yellow-400 rounded-lg p-4">
          <div className="absolute inset-0 bg-grid-yellow opacity-40 rounded-lg"></div>
          <img src={cat} alt="Cat" className="relative z-10 w-full h-53 object-cover rounded-lg shadow-md" />
          <h3 className="relative z-10 text-2xl font-bold text-gray-800 mt-4">CATS</h3>
        </div>
        
        {/* Horse Card */}
        <div className="relative bg-blue-400 rounded-lg p-4">
          <div className="absolute inset-0 bg-grid-blue opacity-40 rounded-lg"></div>
          <img src={horsepet} alt="Horse" className="relative z-10 w-full h-53 object-cover rounded-lg shadow-md" />
          <h3 className="relative z-10 text-2xl font-bold text-gray-800 mt-4">HORSES</h3>
        </div>
      </div>
    </section>


      <div className="relative bg-yellow-400  py-10 px-8 rounded-lg shadow-lg text-center max-w-4xl mx-auto mt-20">
        <h2 className="text-4xl font-bold text-white mb-4">
          Connect & Meet Pets on Petmeety
        </h2>
        <p className="text-white text-lg  py-3 mb-7">
          We provide a safe and secure platform for pet owners to connect, chat,
          and meet up with their furry friends. Our goal is to make sure that
          every pet owner has the opportunity to meet their pet’s needs and
          provide them with the best possible experience.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white text-lg font-semibold px-6 py-3 rounded-full">
          Get Started
        </button>
        {/* Floating Dog Image */}
        <img
          src={dog2}
          alt="Dog"
          className="absolute -top-10 right-4 w-40 h-auto transition-transform transform hover:scale-105 duration-300"
        />
      </div>

      <div className="bg-cyan-300 py-10 px-6 rounded-lg shadow-lg text-center mt-10">      <h1 className=" text-black mb-6 text-4xl ">Explore endless options to find your pet’s true match.</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:bg-gray-100"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="bg-gray-200 p-4 rounded-full">{card.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      

    </div>
  );
};

export default DogBreedingSection;
