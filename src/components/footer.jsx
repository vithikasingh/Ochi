import React from 'react';

const Footer = () => {
  return (
    <footer className=" w-full text-white py-12 mt-auto">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Footer Left */}
        <div className="footer-left">
          <p className="text-sm">
            <span className="text-lg font-bold mb-2 block">About the company</span>
            PawsConnect is your one-stop platform for all pet-related needs. From adoption to grooming, training, and consultancy, we are committed to connecting pet lovers with essential services. Whether you're looking for a furry friend, expert advice, or quality care, PawsConnect is here to help pets and owners thrive.          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="w-8 h-8 flex justify-center items-center bg-gray-700 rounded-full hover:bg-blue-500">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="w-8 h-8 flex justify-center items-center bg-gray-700 rounded-full hover:bg-blue-500">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="w-8 h-8 flex justify-center items-center bg-gray-700 rounded-full hover:bg-blue-500">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#" className="w-8 h-8 flex justify-center items-center bg-gray-700 rounded-full hover:bg-blue-500">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#" className="w-8 h-8 flex justify-center items-center bg-gray-700 rounded-full hover:bg-blue-500">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Footer Center */}
        <div className="footer-center">
          <div className="flex items-center mb-4">
            <i className="fa fa-map-marker w-10 h-10 text-2xl bg-gray-700 rounded-full flex justify-center items-center"></i>
            <p className="ml-3 text-sm">
              <span>Street name and number</span>
              City, Country
            </p>
          </div>
          <div className="flex items-center mb-4">
            <i className="fa fa-phone w-10 h-10 text-2xl bg-gray-700 rounded-full flex justify-center items-center"></i>
            <p className="ml-3 text-sm">(+00) 0000 000 000</p>
          </div>
          <div className="flex items-center">
            <i className="fa fa-envelope w-10 h-10 text-2xl bg-gray-700 rounded-full flex justify-center items-center"></i>
            <p className="ml-3 text-sm">
              <a href="mailto:office@company.com" className="text-blue-400 hover:underline">office@company.com</a>
            </p>
          </div>
        </div>

        {/* Footer Right */}
        <div className="footer-right">
          <h2 className="text-2xl font-bold">
            Company<span className="text-blue-400">Logo</span>
          </h2>
          <p className="menu mt-4 space-x-3">
            <a href="#" className="hover:text-blue-400">Home</a> |
            <a href="#" className="hover:text-blue-400">About</a> |
            <a href="#" className="hover:text-blue-400">Services</a> |
            <a href="#" className="hover:text-blue-400">Portfolio</a> |
            <a href="#" className="hover:text-blue-400">News</a> |
            <a href="#" className="hover:text-blue-400">Contact</a>
          </p>
          <p className="mt-6 text-blue-400 text-sm">Company Name &copy; 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
