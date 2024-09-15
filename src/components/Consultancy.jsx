import React from 'react';
import petvet from '/petvet.jpg'
import Drvet from "/Drvet.jpg"
import dogbed from "/dogbed.png"


const ConsultationSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Background Image */}
        <div className="relative w-full h-83">
          <img
            src={petvet}
            alt="Dog and Human"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Box */}
        <div className="bg-white shadow-lg p-8 -mt-24 w-11/12 md:w-3/5 lg:w-1/2 relative z-10">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
    Book Online Vet Consultation - Consult a Vet Instantly
  </h2>
  <p className="text-gray-600 mt-2">
    Book Trusted Veterinary Consultation For Pets Near You
  </p>
  
  <div className="mt-6">
    <button className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600">
      Coming soon
    </button>
  </div>




</div>

      </div><div className="bg-gray-50 py-12">
  <div className="container mx-auto flex flex-col lg:flex-row items-center">
    {/* Left side: Image */}
    <div className="lg:w-1/2 p-6">
      <img 
        src={Drvet}
        alt="Vet and Dog" 
        className="rounded-lg shadow-md w-full"
      />
    </div>

    {/* Right side: Text content */}
    <div className="lg:w-1/2 p-6">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
        How Online Veterinarian Service works?
      </h2>
      
      <ul className="space-y-8">
        {/* First step */}
        <li className="flex items-start">
          <div className="mr-4 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4zm0 4c-3.31 0-6 2.69-6 6v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-3.31-2.69-6-6-6zm0 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Ask a question</h3>
            <p className="text-gray-600">
              Ask anything related to health, nutrition, behavior of your pet.
            </p>
          </div>
        </li>

        {/* Second step */}
        <li className="flex items-start">
          <div className="mr-4 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4zm0 4c-3.31 0-6 2.69-6 6v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-3.31-2.69-6-6-6zm0 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Tell us more about your pet and yourself</h3>
            <p className="text-gray-600">
              You can even upload photos and medical documents if you desire.
            </p>
          </div>
        </li>

        {/* Third step */}
        <li className="flex items-start">
          <div className="mr-4 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4zm0 4c-3.31 0-6 2.69-6 6v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-3.31-2.69-6-6-6zm0 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Receive a response from veterinarian</h3>
            <p className="text-gray-600">
              A real Veterinarian answers your questions and/or begins LIVE chat with you.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<div className="bg-yellow-50 py-12">
  <div className="container mx-auto flex flex-col lg:flex-row items-center">
    
    {/* Left side: Text content */}
    <div className="lg:w-1/2 p-6 bg-yellow-100 rounded-lg shadow-md">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
        Curated by vets for your pet's unique needs
      </h2>
      
      <ul className="space-y-4">
        {/* First point */}
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-gray-700">
            24/7 advice from India's Qualified vet wherever you are.
          </p>
        </li>

        {/* Second point */}
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-gray-700">
            Quick access, right when you need one. No appointment necessary.
          </p>
        </li>

        {/* Third point */}
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-gray-700">
            Available from any smartphone, or desktop device.
          </p>
        </li>

        {/* Fourth point */}
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-gray-700">
            Avoid the stress of travel and save time.
          </p>
        </li>
      </ul>
    </div>
    
    {/* Right side: Image */}
    <div className="lg:w-1/2 p-6 flex justify-center">
      <img 
        src={dogbed}
        alt="Dog on bed"
        className="w-full lg:w-3/4 object-cover"
      />
    </div>
  </div>
</div>


    </section>
    
    
  );
};

export default ConsultationSection;
