import Link from "next/link";
import React from "react";

function ForgotPassword() {
  return (
    <div className="md:bg-[#005259] bg-white h-screen w-screen flex flex-col justify-center items-center">
      <div className="md:w-[506px] w-full px-5 bg-white rounded-lg h-fit pb-5 text-center">
        <h2 className="text-[33px] font-bold py-5">Forgot Password</h2>
        <p className="text-left pb-3">
          Enter your email to get address to get an OTP code to reset your
          password
        </p>
        <form>
          <div className="mb-4 text-left">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <Link
            href={"/auth/reset-password"}
            type="submit"
            className="bg-[#005259] rounded-lg text-white py-3 px-4 w-full rounded hover:bg-[#005259] my-5"
          >
            Get OTP
          </Link>
          <div className="my-5">
            <p>
              Remember your password?{" "}
              <Link className="text-[#00B4AF]" href={"/auth/login"}>
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
