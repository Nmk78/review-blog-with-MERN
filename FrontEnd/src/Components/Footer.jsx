import React from "react";
import github from '../assets/github.svg'
import gmail from '../assets/gmail.svg'
import facebook from '../assets/facebook.svg'

const Footer = () => {
  return (
    <footer className="bottom-0 flex flex-col md:flex-row w-full items-center justify-between bg-cyan-600 p-3 text-gray-200 drop-shadow-lg">
      <div className="text-sm md:text-base lg:text-lg xl:text-xl">
      &copy; 2023 Nay Myo Khant. All rights reserved.
      </div>

      <div className="flex space-x-2 bg-white p-1 rounded-md m-2">
      <a href="https://github.com/Nmk78/Book-List/">
      <img src={github} alt="Github logo" className="w-6 md:w-10" />

      </a>
      <a href="mailto:naymyokhant78@gmail.com">
      <img src={gmail} alt="gmail logo" className="w-6 md:w-10" />

      </a>
      <a href="https://www.facebook.com/nmk135/">
      <img src={facebook} alt="facebook logo" className="w-6 md:w-10" />

      </a>
      </div>
    </footer>
  );
};

export default Footer;
