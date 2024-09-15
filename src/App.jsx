


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Landingpage from './components/Landingpage';
// import Services from './components/Services';
// import About from './components/About';
// import Connect from './components/Connect';
// import Ownership from './components/Ownership';
// import Adoption from './components/Adoption';
// import Consultancy from './components/Consultancy';
// import CareShelter from './components/CareShelter';
// import Matting from './components/Matting';
// import Contact from './components/Contact'
// import Footer from './components/footer'

// export default function App() {
//   return (
//     <div className="w-full h-screen bg-zinc-900 text-white">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Landingpage />} />
//           <Route path="/adoption" element={<Adoption />} />
//           <Route path="/consultancy" element={<Consultancy />} />
//           <Route path="/care-shelter" element={<CareShelter />} />
//           <Route path="/matting" element={<Matting />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/connect" element={<Connect />} />
//           <Route path="/ownership" element={<Ownership />} />
//           {/* Default route */}
//           <Route path="*" element={<Landingpage />} />
          
          
//         </Routes>
        

       
//       </Router>      

      
//     </div>
    
    
//   );
// }
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Services from './components/Services';
import About from './components/About';
import Connect from './components/Connect';

import Adoption from './components/Adoption';
import Consultancy from './components/Consultancy';
import Careshelter from './components/careshelter';
import Grooming from './components/Grooming';

import Training from './components/Training';

import Matting from './components/Matting';
import Contact from './components/Contact';
import Footer from './components/footer';
import Signup from './components/Signup';



export default function App() {
  return (
    
    <div className="w-full min-h-screen bg-zinc-900 text-white flex flex-col">


      <Router>
        <Navbar />
        <div className="flex-grow">
        

          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path='/careshelter' element={<Careshelter/>} />
            <Route path="/matting" element={<Matting />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Grooming" element={<Grooming />} />

            <Route path="/Training" element={<Training />} />

            <Route path="/connect" element={<Connect />} />
            <Route path="/Signup" element={<Signup />} />

            


            

            {/* Default route */}
            <Route path="*" element={<Landingpage />} />
          </Routes>
        </div>
        {/* Footer at the bottom */}
        {/* {footer at the booteom } */}

        <Footer />
      </Router>
    </div>
    
  );
}






// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Landingpage from './components/Landingpage';
// import Services from './components/Services';
// import About from './components/About';
// import Connect from './components/Connect';
// import Ownership from './components/Ownership';
// import Adoption from './components/Adoption';
// import Consultancy from './components/Consultancy';
// import CareShelter from './components/CareShelter';
// import Matting from './components/Matting';
// import Contact from './components/Contact';

// import Footer from './components/footer';
// export default function App() {
//   return (
//     <div className="w-full min-h-screen bg-zinc-900 text-white flex flex-col">
//       <Router>
//         <Navbar />
//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Landingpage />} />
//             <Route path="/adoption" element={<Adoption />} />
//             <Route path="/consultancy" element={<Consultancy />} />
//             <Route path="/care-shelter" element={<CareShelter />} />
//             <Route path="/matting" element={<Matting />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/connect" element={<Connect />} />
//             <Route path="/ownership" element={<Ownership />} />
//             {/* Default route */}
//             <Route path="*" element={<Landingpage />} />
//           </Routes>
//         </div>
//         {/* Footer at the bottom */}
//         <Footer />
//       </Router>
//     </div>
//   );
// }













