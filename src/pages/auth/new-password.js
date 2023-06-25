import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Link from "next/link";

function login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="md:bg-[#005259] bg-white h-screen w-screen flex flex-col justify-center items-center">
      <div className="md:w-[506px] w-full px-5 bg-white rounded-lg h-fit pb-5 text-center">
        <h2 className="text-[33px] font-bold py-5">Reset Passowrd</h2>
        <form>
          <div className="mb-4 text-left">
            <label className="block mb-1" htmlFor="password">
              New Password
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
          
          <Link
            href="/auth/welcome"
            type="submit"
            className="bg-[#005259] rounded-lg text-white py-3 px-4 w-full rounded hover:bg-[#005259] my-5"
          >
            Save
          </Link>
        </form>
      </div>
    </div>
  );
}

export default login;
