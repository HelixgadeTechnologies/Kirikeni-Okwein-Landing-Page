import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Google from "@/assets/google.png";
import Image from "next/image";
import Link from "next/link";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="md:bg-[#005259] bg-white h-screen w-screen flex flex-col justify-center items-center">
      <div className="md:w-[506px] w-full px-5 bg-white rounded-lg h-fit pb-5 text-center">
        <h2 className="text-[33px] font-bold py-5">Log In</h2>
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
                value={email}
                onChange={handleEmailChange}
                className="w-full py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                placeholder="Enter your email"
              />

            </div>
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                placeholder="Enter your password"
              />
              <span
                className="absolute right-3 top-2/4 transform -translate-y-2/4 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <VisibilityIcon className="text-gray-500" />
                ) : (
                  <VisibilityOffIcon className="text-gray-500" />
                )}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2  rounded-sm border border-black bg-transparent w-5 h-5"
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <Link href="/auth/forgot-password" className="text-[#00B4AF] ">
            Forgot Password
          </Link>
          </div>
          <button
            type="submit"
            className="bg-[#005259] rounded-lg text-white py-3 px-4 w-full rounded hover:bg-[#005259] my-5"
          >
            Log In
          </button>
          <div className="my-5">
            <p>
              Don’t have an Account? <Link className="text-[#00B4AF]" href={"/auth/signup"}>Sign up</Link>
            </p>
          </div>
          <div className="flex items-center my-5">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="mx-3 text-gray-500">or</div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <button className="flex items-center justify-center px-4 py-2 w-full border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100">
            <Image src={Google} className="mr-2 h-10 w-10" />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default login;
