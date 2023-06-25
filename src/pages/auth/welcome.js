import React from "react";
import Link from "next/link";
import Logo from "@/assets/fish.png";
import Image from "next/image";
function resetPassword() {

  return (
    <div className="md:bg-[#005259] bg-white h-screen w-screen flex flex-col justify-center items-center">
    <div className="md:w-[506px] w-full px-5 bg-white rounded-lg h-fit pb-5 text-center">
        <h2 className="text-[33px] font-bold py-5">Miebaka</h2>
        <form className="flex flex-col space-y-3 justify-center items-center">
          <Image src={Logo} alt="" className="h-[80px] w-[56px]" />
          <p>
            Learn Wakrike Language with ease whenever and whereever you want for
            free{" "}
          </p>
          <Link
            href="/dashboard"
            type="submit"
            className="bg-[#005259] rounded-lg text-white py-3 px-4 w-full rounded hover:bg-[#005259] my-5"
          >
            Continue
          </Link>
        </form>
      </div>
    </div>
  );
}

export default resetPassword;
