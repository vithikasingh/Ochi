import React from "react";
import doggreen from "/doggreen.png"
import groom from "/groom.jpg"
import top from "/top.svg"
// import Pooch from "/Pooch."
import groomer from "/groomer.svg"
import dog from "/dog.png"
import animals from "/animals.png"
import homePamper from "/homePamper.webp"


const Grooming = () => {
  return (
    <div>
<section className="bg-white h-screen flex items-center justify-center">
      <div className="relative max-w-7xl mx-auto flex items-center w-full">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-8 bg-green-300 rounded-l-lg text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to <br /> Pets grooming!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We believe that only the best is good enough for your pet. That's why our expert groomers will treat your dog like one of their own.
          </p>
          
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-white relative overflow-hidden rounded-r-lg">
          <img // Add the correct image path
            src={doggreen}
            alt="Dog"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src={groom} 
            alt="Groomer with Dog"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Handpicked Groomers Meet Your Pet Needs
          </h2>

          {/* Grooming Features */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full">
                <img src={animals} alt="Icon" className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Book a Top Rated Groomer Near You
                </h3>
                <p className="text-sm text-gray-600">
                  Find dog groomer nearby, select a best groomer based on budget and top ratings.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full">
                <img src={top} alt="Icon" className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Personalized Grooming Packages
                </h3>
                <p className="text-sm text-gray-600">
                  Customize your dog grooming packages to match your pet's needs.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full">
                <img src={groomer} alt="Icon" className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Groomer With Full Accessories
                </h3>
                <p className="text-sm text-gray-600">
                  Just relax! Professional pet groomer brings all the necessary grooming equipment.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full">
                <img src={dog} alt="Icon" className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Grooming Service at Your Place
                </h3>
                <p className="text-sm text-gray-600">
                  Enjoy the convenience of in-home grooming, reducing travel stress for your pet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-12">
      
      <div className="bg-pink-600 py-16 flex flex-col md:flex-row justify-center items-center px-4 md:px-20">
      {/* Image Section */}
      <div className="flex justify-center mb-8 md:mb-0 md:mr-8">
        <div className="rounded-full bg-pink-700 p-6">
          <img 
            src={homePamper} // Replace with your image URL
            alt="Dog in a bath"
            className="rounded-full w-72 h-72 object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-white max-w-lg">
        <h2 className="text-sm uppercase tracking-widest mb-2">Personalized Pampering</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Is Our Specialty</h1>
        <p className="mb-6">
          Puppy life isn't always naps and snacks. It can be hard work. Reward your favorite sidekick with a luxurious Woof Gang spa day!
        </p>
        <p className="mb-8">
          Our pet salons are designed to make your pup feel calm, relaxed, and indulged while being bathed, styled, and adored. Our wag-nificent groomers are extensively trained, and dedicated to making every visit feel like a day at the park!
        </p>
        <button className="bg-white text-pink-600 font-semibold px-6 py-2 rounded hover:bg-pink-100 transition">
          Learn More
        </button>
      </div>
    </div>
    </section>


    

    </div>
    
    
  );
};

export default Grooming;
