import Image from 'next/image';
import React from 'react';
import Logo from "@/assets/fish.png"
import Spinner from "@/assets/spinner.png"

const Modal1 = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md text-center w-[503.278px] h-[351px]">
        <div className='my-10 '>
        <Image src={Logo} alt="Logo" className="w-[96px] h-[104px] mx-auto mb-4" />
        </div>
        <h2 className='text-[#005259]'>Loading...</h2>
        <Spinner/>
        <p>Let’s kick it off from where you stopped, your on your way to going pro.</p>
      </div>
    </div>
  );
};

export default Modal1;
