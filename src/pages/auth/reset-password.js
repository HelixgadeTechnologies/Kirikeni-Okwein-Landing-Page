import React, { useRef } from "react";
import Link from "next/link";

function resetPassword() {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    if (e.target.value.length === e.target.maxLength) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <div className="md:bg-[#005259] bg-white h-screen w-screen flex flex-col justify-center items-center">
      <div className="md:w-[506px] w-full px-5 bg-white rounded-lg h-fit pb-5 text-center">
        <h2 className="text-[33px] font-bold py-5">You’ve got a mail</h2>
        <p className="text-left pb-3">
          We have sent a 4 digit OTP verification code to your email address,
          check your email and enter the code below.
        </p>
        <form>
          <div className="mb-4 text-left">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <div className="flex space-x-4 justify-around">
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <input
                      key={index}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      type="text"
                      maxLength="1"
                      className="md:w-20 w-1/4 h-16 px-4 py-2 border border-gray-300 rounded-md text-center bg-[#E7EAEE]"
                      onChange={(e) => handleChange(e, index)}
                    />
                  ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3  text-center items-center justify-between">
            <label htmlFor="rememberMe">Didn’t receive an email?</label>
            <label htmlFor="rememberMe">
              Resend code in <span className="text-[#00B4AF] ">59s</span>
            </label>
          </div>
          <Link
            href="/auth/new-password"
            type="submit"
            className="bg-[#005259] rounded-lg text-white py-3 px-4 w-full rounded hover:bg-[#005259] my-5"
          >
            Confirm
          </Link>
        </form>
      </div>
    </div>
  );
}

export default resetPassword;
