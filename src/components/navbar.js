import Link from "next/link";
import MenuIcon from "@/assets/menu-icon.png";
import Image from "next/image";
import { useState } from "react";
const NavBar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between text-white bg-[#003338] md:py-[29px] py-4 border-b border-[#00484E] md:pl-3 md:pr-[60px]">
      <div>
        <a href="/">
          <b className="md:ml-20 ml-5 text-[19px]">Kirikeni</b>
          <br />
          <b className="md:ml-20 ml-5 text-[19px]">Okwein</b>
        </a>
      </div>
      <div className="hidden md:block">
        <a className="text-gray-500 hover:text-white mr-4 border border-white bg-[#00484E] text-white py-[10px] px-[18px] rounded">
          Get Started
        </a>
        <a className="text-gray-500 hover:text-gray-900 mr-4 border-white bg-[#fff] text-[#00484E] py-[10px] px-[18px] rounded">
          Login
        </a>
      </div>
      <div className="relative block md:hidden">
        <Image
          src={MenuIcon}
          alt="icon"
          className="mr-5 w-8 h-6"
          onClick={() => handleToggle()}
        />
      </div>
      {isOpen ? (
        <div className="bg-[#00484E] h-[109px] w-[130px] px-3 absolute right-[20px] top-[65px]  rounded-lg rounded-tr-none flex flex-col space-y-2 py-2">
          <a className="text-gray-500 hover:text-white border-white bg-[#00A0AD] rounded p-1 mb-1 mt-2 text-center text-white">
            Get Started
          </a>
          <a className="text-gray-500 hover:text-white border-white bg-[#00A0AD] rounded p-1  text-center text-white">
            Login
          </a>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavBar;
