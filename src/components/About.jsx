// // IMPORT FILES
// import React from 'react';
// import Trainingdog from '/Trainingdog.jpg';
// import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
// import teamMember1 from '/member1.jpg';
// import teamMember2 from '/member2.jpg';
// import teamMember3 from '/member3.jpg';
// import teamMember4 from '/member4.jpg';
// import handsome from '/imgPV2.jpg';
// import BeFunky from '/BeFunky.jpg';
// import puppy from '/puppy.jpg'

// const teamMembers = [
//   {
//     name: 'Sarah Johnson',
//     title: 'Founder',
//     image: teamMember1,
//   },
//   {
//     name: 'Michael Anderson',
//     title: 'Adoption Coordinator',
//     image: teamMember2,
//   },
//   {
//     name: 'Jessica Ramirez',
//     title: 'Veterinary Care Specialist',
//     image: teamMember3,
//   },
//   {
//     name: 'Robert Thompson',
//     title: 'Volunteer Coordinator',
//     image: teamMember4,
//   },
// ];



// function About() {

//   return (
//     <div>




// <div
//   className="  bg-center h-1/4 w-full"
//   style={{
//     backgroundImage: `url('/puppy.jpg')`,
//   }}
// >
//   <div className="absolute  bg-opacity-50"></div>
//   <div className="relative flex justify-center items-center ">
//     <div className="text-center text-white px-4">
//       <h1 className="text-5xl font-bold">Pet Veterinary</h1>
//       <p className="text-xl mt-4">Dog Training & Breeding Professionals</p>
//     </div>
//   </div>
// </div>


      






//       <div className="flex flex-col md:flex-row items-center justify-between bg-[#F5F5F5] p-8 md:p-16">
//         <div className="grid grid-cols-2 gap-4 md:w-1/2">
//           <div className="col-span-2 mt-12 py-9">
//             <img
//               src={handsome}
//               alt="Dog with a person"
//               className="w-[500px] h-[550px] object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         </div>

//         <div className="md:w-1/2 mt-8 md:mt-0 ">
//           <h4 className="text-sm text-orange-600 tracking-wider">YOU NEED A FRIEND?</h4>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">WELCOME TO PawsConnect</h1>
//           <p className="text-gray-600 mt-4">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
//             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           </p>
//           <button className="mt-6 bg-[#F1AC4D] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-700 transition-all">
//             GET STARTED →
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gradient-to-r from-pink-100 via-yellow-100 via-green-100 to-blue-100 min-h-screen">
//       <div className="md:w-1/2 w-full p-6 flex justify-center">
//           <img
//             src={Trainingdog}
//             alt="Man playing with dog"
//             className="rounded-md shadow-lg max-w-full h-auto"
//           />
//         </div>
//         <div className="md:w-1/2 w-full p-4 mt-8 md:mt-0">
//           <h2 className="text-black font-bold text-2xl md:text-3xl uppercase text-center md:text-left">
//             Who We Are
//           </h2>
//           <h1 className="text-black font-bold text-4xl md:text-5xl mt-2 text-center md:text-left">
//             We Love Your Pet, <br /> Just as You Do!
//           </h1>
//           <p className="text-black text-lg md:text-xl mt-4 text-center md:text-left">
//             Welcome to Pawsconnect Pet Services, Indore’s premier pet care destination. Our team is dedicated to ensuring your furry friends receive the best care possible.
//           </p>
//           <div className="flex justify-center md:justify-start">
//             <button className="mt-6 bg-yellow-400 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg flex items-center">
//               Connect us <span className="ml-2">📞</span>
//             </button>
//           </div>
//         </div>

//       </div>

//       <div className="w-full">
//       <img src={BeFunky} alt="" className="w-full" style={{ height: '450px', objectFit: 'cover' }} />

// </div>
// <div className="bg-white py-16">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-800">You're In Good Hands</h2>
//       </div>
      
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
//         {/* Trusted Section */}
//         <div className="p-6">
//           <div className="flex justify-center mb-4">
//             <div className="bg-blue-100 p-4 rounded-full">
//               <img src="/friendship.gif" alt="Trusted Icon" className="w-12 h-12" />
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold text-gray-800">Trusted</h3>
//           <p className="text-gray-600 mt-2">
//             Adopt-a-Pet.com is a trusted organization and our dedicated team of pet experts is here to support you throughout this process.
//           </p>
//         </div>

//         {/* Safe Section */}
//         <div className="p-6">
//           <div className="flex justify-center mb-4">
//             <div className="bg-blue-100 p-4 rounded-full">
//               <img src="/pet-insurance.png" alt="Safe Icon" className="w-12 h-12" />
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold text-gray-800">Safe</h3>
//           <p className="text-gray-600 mt-2">
//             Our expert advice and safe meeting zones make Rehome by Adopt-a-Pet.com the safer alternative to online classifieds.
//           </p>
//         </div>

//         {/* Secure Section */}
//         <div className="p-6">
//           <div className="flex justify-center mb-4">
//             <div className="bg-blue-100 p-4 rounded-full">
//               <img src="/shield.gif" alt="Secure Icon" className="w-12 h-12" />
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold text-gray-800">Secure</h3>
//           <p className="text-gray-600 mt-2">
//             Your personal information will never be shared or shown to the public.
//           </p>
//         </div>
//       </div>
//     </div>
//     </div>

//   );
// }
// export default About;




// IMPORT FILES
// IMPORT FILES
import React from 'react';
import Trainingdog from '/Trainingdog.jpg';
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import teamMember1 from '/member1.jpg';
import teamMember2 from '/member2.jpg';
import teamMember3 from '/member3.jpg';
import teamMember4 from '/member4.jpg';
import handsome from '/imgPV2.jpg';
import BeFunky from '/BeFunky.jpg';
import puppy from '/puppy.jpg'
import dogcat from '/dogcat.png'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    title: 'Founder',
    image: teamMember1,
  },
  {
    name: 'Michael Anderson',
    title: 'Adoption Coordinator',
    image: teamMember2,
  },
  {
    name: 'Jessica Ramirez',
    title: 'Veterinary Care Specialist',
    image: teamMember3,
  },
  {
    name: 'Robert Thompson',
    title: 'Volunteer Coordinator',
    image: teamMember4,
  },
];

function About() {

  return (
    <div className="relative">

      {/* Hero Section */}
      <div
        className="relative bg-center bg-cover h-[50vh] md:h-[60vh] w-full"
        style={{ backgroundImage: `url(${puppy})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">Pet Veterinary</h1>
            <p className="text-lg md:text-xl mt-4">Dog Training & Breeding Professionals</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#F5F5F5] p-8 md:p-16">
        <div className="grid grid-cols-2 gap-4 md:w-1/2">
          <div className="col-span-2 mt-12 py-9">
            <img
              src={dogcat}
              alt="Dog with a person"
              className="w-full h-auto md:w-[500px] md:h-[550px] object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 ">
          <h4 className="text-sm text-orange-600 tracking-wider animate-fade-in">YOU NEED A FRIEND?</h4>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 animate-fade-in">WELCOME TO PawsConnect</h1>
          <p className="text-gray-600 mt-4 animate-fade-in">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="mt-6 bg-[#F1AC4D] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-700 transition-transform duration-300 transform hover:scale-105">
            GET STARTED →
          </button>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gradient-to-r from-pink-100 via-yellow-100 via-green-100 to-blue-100 min-h-screen animate-fade-in">
        <div className="md:w-1/2 w-full p-6 flex justify-center">
          <img
            src={Trainingdog}
            alt="Man playing with dog"
            className="rounded-md shadow-lg max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="md:w-1/2 w-full p-4 mt-8 md:mt-0">
          <h2 className="text-black font-bold text-2xl md:text-3xl uppercase text-center md:text-left animate-fade-in">
            Who We Are
          </h2>
          <h1 className="text-black font-bold text-3xl md:text-4xl mt-2 text-center md:text-left animate-fade-in">
            We Love Your Pet, <br /> Just as You Do!
          </h1>
          <p className="text-black text-lg md:text-xl mt-4 text-center md:text-left animate-fade-in">
            Welcome to Pawsconnect Pet Services, Indore’s premier pet care destination. Our team is dedicated to ensuring your furry friends receive the best care possible.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="mt-6 bg-yellow-400 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg flex items-center transform transition-transform duration-300 hover:scale-105">
              Connect us <span className="ml-2">📞</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trusted, Safe, Secure Section */}
      <div className="w-full">
        <img src={BeFunky} alt="" className="w-full h-[450px] object-cover" />
      </div>
      <div className="bg-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 animate-fade-in">You're In Good Hands</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center animate-fade-in">
          {/* Trusted Section */}
          <div className="p-6 transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <img src="/friendship.gif" alt="Trusted Icon" className="w-12 h-12" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Trusted</h3>
            <p className="text-gray-600 mt-2">
              Adopt-a-Pet.com is a trusted organization and our dedicated team of pet experts is here to support you throughout this process.
            </p>
          </div>

          {/* Safe Section */}
          <div className="p-6 transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <img src="/pet-insurance.png" alt="Safe Icon" className="w-12 h-12" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Safe</h3>
            <p className="text-gray-600 mt-2">
              Our expert advice and safe meeting zones make Rehome by Adopt-a-Pet.com the safer alternative to online classifieds.
            </p>
          </div>

          {/* Secure Section */}
          <div className="p-6 transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <img src="/shield.gif" alt="Secure Icon" className="w-12 h-12" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Secure</h3>
            <p className="text-gray-600 mt-2">
              Your personal information will never be shared or shown to the public.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

