// import React from 'react';
// import { CiTrophy, CiUser } from "react-icons/ci";

// function Services() {
//   return (
//     <div>
      // <div className="bg-white py-20">
      //   <h1 className="text-black text-6xl justify-center flex font-light leading-none tracking-tighter">
      //     our services
      //   </h1>
      
      //   {/* Centered Icon with Smaller Lines */}
      //   <div className="flex items-center justify-center mt-8">
      //     {/* Left Line */}
      //     <div className="h-0.5 w-16 bg-green-500"></div>
          
      //     {/* Icon */}
      //     <CiUser size={30} className="text-green-500 mx-2" />
          
      //     {/* Right Line */}
      //     <div className="h-0.5 w-16 bg-green-500"></div>
      //   </div>
//         <h1 className='text-black text-center'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.</h1>
//         <h1 className='text-black text-center'> Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</h1>
//       </div>
//     </div>
//   );
// }

// export default Services;



// import React from 'react';
// import { CiDesktop } from "react-icons/ci";

// function Services() {
//   return (
//     <div className="bg-white py-20">
//       <h1 className="text-black text-4xl justify-center flex font-light leading-none tracking-tighter mb-12">
//         Our Services
//       </h1>
      
//       {/* Service Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
//         {/* Service Card 1 */}
//         <div className="flex flex-col items-center text-center">
//           <div className="bg-gray-100 p-6 rounded-full">
//             {/* <CiDesktop size={50} className="text-black" /> */}
//           </div>
//           <h3 className="mt-4 text-xl font-semibold">Fully Responsive</h3>
//           <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//         </div>

//         {/* Service Card 2 */}
//         <div className="flex flex-col items-center text-center">
//           <div className="bg-gray-100 p-6 rounded-full">
//             {/* <CiBook size={50} className="text-black" /> */}
//           </div>
//           <h3 className="mt-4 text-xl font-semibold">Latest Bootstrap</h3>
//           <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//         </div>

//         {/* Service Card 3 */}
//         <div className="flex flex-col items-center text-center">
//           <div className="bg-gray-100 p-6 rounded-full">
//             {/* <CiBriefcase size={50} className="text-black" /> */}
//           </div>
//           <h3 className="mt-4 text-xl font-semibold">Dedicated Support</h3>
//           <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//         </div>

//         {/* Service Card 4 */}
//         <div className="flex flex-col items-center text-center">
//           <div className="bg-gray-100 p-6 rounded-full">
//             {/* <CiHeart size={50} className="text-black" /> */}
//           </div>
//           <h3 className="mt-4 text-xl font-semibold">We Love Our Customer</h3>
//           <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//         </div>

//         {/* Service Card 5 */}
//         <div className="flex flex-col items-center text-center">
//           <div className="bg-gray-100 p-6 rounded-full">
//             {/* <CiChartBar size={50} className="text-black" /> */}
//           </div>
//           <h3 className="mt-4 text-xl font-semibold">Modern Design</h3>
//           <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//         </div>

//         {/* Service Card 6 */}
//         <div className="flex flex-col items-center text-center">
//           <div className="bg-gray-100 p-6 rounded-full">
//             {/* <CiCode size={50} className="text-black" /> */}
//           </div>
//           <h3 className="mt-4 text-xl font-semibold">HTML5/CSS3</h3>
//           <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;


import React from 'react';
import { CiUser } from "react-icons/ci";
import { FaDog  } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { FaCat } from "react-icons/fa";
import { SiDatadog } from "react-icons/si";
import mating from '/mating.jpg';



// import { CiDesktop, CiBook, CiBriefcase, CiHeart, CiChartBar, CiCode } from "react-icons/ci";

function Services() {
  return (
    <div className="bg-white py-20">
      {/* Trophy Section */}
      <div className="text-center mb-12">
        <h1 className="text-black text-4xl font-light leading-none tracking-tighter">
          Our Services
        </h1>
        
        {/* Centered Icon with Smaller Lines */}
        <div className="flex items-center justify-center mt-8">
          {/* Left Line */}
          <div className="h-0.5 w-16 bg-green-500"></div>
          
          {/* Icon */}
          <CiUser size={30} className="text-green-500 mx-2" />
          
          {/* Right Line */}
          <div className="h-0.5 w-16 bg-green-500"></div>
        </div>
      </div>
      
      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
        {/* Service Card 1 */}
        <div className="flex flex-col items-center text-center"> 
          <div className="bg-gray-100 p-6 rounded-full">
             <FaDog size={50} className="text-black" />
            
          </div>
          <h3 className="mt-6 text-xl text-black font-semibold">Pet Breeding</h3>
          <p className="text-gray-500 mt-2">Our goal is to make sure that every pet owner has the opportunity to meet their pet’s needs and provide them with the best possible experience..</p>
          {/* <img src={mating} alt="" className="h-full w-1/2 right-elem" /> */}


        </div>

        {/* Service Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 p-6 rounded-full">
             <MdOutlinePets size={50} className="text-black" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-black">Adaption</h3>
          <p className="text-gray-500 mt-2">Want to Get a Pet of Your Own? Here's where you should be! For adoption in Indore, we offer healthy kittens and cats.</p>
        </div>

        {/* Service Card 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 p-6 rounded-full">
           
            <FaCat size={50} className="text-black" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-black">Care Shelter</h3>
          <p className="text-gray-500 mt-2">We provide a comfortable and safe environment for your dog to stay while you are away. Our dog hostel is staffed 24/7, and we offer both long-term and short-term boarding options.</p>
        </div>

        {/* Service Card 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 p-6 rounded-full">
            <SiDatadog size={50} className="text-black" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-black">We Love Our Customers</h3>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>

        
      </div>
    </div>
  );
}

 export default Services;


