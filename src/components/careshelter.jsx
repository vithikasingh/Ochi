import React from 'react';
import puppy from '/puppy.jpg'; // Import the image if necessary or use a direct URL
import DogHead from '/Doghead.png'

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${puppy})`, // Use the image path or variable
            filter: 'brightness(70%)',
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full p-6 sm:p-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white">
            A Better Life for India's <br /> Stray Animals
          </h1>
          <p className="text-lg text-gray-300 mt-4 sm:mt-6">
            We are shelter and foster focused, working to build a strong,
            compassionate animal welfare network in Hyderabad, India.
          </p>
          <button className="mt-8 px-6 py-3 bg-orange-500 text-white font-bold text-lg rounded-lg hover:bg-orange-600">
            Donate
          </button>
        </div>
      </div>

      {/* Action Cards Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Donate Card */}
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">DONATE</h2>
              <p>Every dollar makes a difference in the lives of these animals. SAFI offers many ways to donate.</p>
              <button className="mt-6 px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600">
                Learn More
              </button>
            </div>

            {/* Volunteer Card */}
            <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">VOLUNTEER</h2>
              <p>Find volunteer opportunities in India, US, or internationally!</p>
              <button className="mt-6 px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600">
                Learn More
              </button>
            </div>

            {/* Adopt Card */}
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">ADOPT</h2>
              <p>Everyone deserves a home. See how you can help our shelter animals find forever families.</p>
              <button className="mt-6 px-4 py-2 bg-gray-700 text-white font-bold rounded hover:bg-gray-600">
                Learn More
              </button>
            </div>

            {/* Fundraise Card */}
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">FUNDRAISE</h2>
              <p>Start your own social media fundraising campaign, and help raise funds for India's shelters.</p>
              <button className="mt-6 px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* First Section: Text Left, Image Right */}
  <div className="p-4 flex flex-col justify-center  ">
    <h2 className="text-xl font-bold mt-4">Providing housing, care, & more for India's most vulnerable dogs</h2>
    <p className="mt-2">Since 2009, we've helped build hospitals and high-welfare shelters for stray animals in India.</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      See our impact
    </button>
  </div>
  <div className="p-4">
    <img src={puppy} alt="Vulnerable dogs in India" className="w-full h-auto" />
  </div>

  {/* Second Section: Image Left, Text Right */}
  <div className="p-4">
    <img src={puppy} alt="Helping Hands team" className="w-full h-auto" />
  </div>
  <div className="p-4 flex flex-col justify-center">
    <h3 className="text-lg font-semibold mt-4">79.99 million individuals at serious risk</h3>
    <p className="mt-1">Helping Hands has rescued thousands of animals to rehabilitate wildlife and house strays in need.</p>
  </div>
</div>

    <div className="w-full">
        <img src={DogHead} alt="" className="w-full h-[450px] object-cover" />
      </div>





    </div>
  );
};

export default HeroSection;
