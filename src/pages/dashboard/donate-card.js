import Layout from "@/components/Layout";
import React, { useState } from "react";
import Image from "next/image";
import Modal2 from "@/components/Modal2";
import Logo from "@/assets/fish.png";

function Donate() {
  const [checked, setIsChecked] = useState(false);
  const [steps, setSteps] = useState(0);

  const handleCheckboxChange = () => {
    setIsChecked(!checked);
  };

  const handleStepsChange = (value) => {
    setSteps(steps + 1);
  };

  return (
    <Layout ActivePage="donations" h="Donations">
      <div className="md:w-[82vw] py-5 md:px-[50px] px-5 pt-[10px] ">
        <div className="flex w-full justify-between items-center">
          <h4 className="py-10">Add Card Details</h4>
          {/* <a className="text-[#00484E]" href='/dashboard/donate-card'>Add Card</a> */}
        </div>
        <form className="">
          <div className="md:flex md:space-x-5 space-y-5">
            <div>
                <label>Card Number</label>
                <div className="flex items-center border-b border-gray">
                <input
                    type="text"
                    className=" w-[90vw] px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 bg-white w-full"
                    placeholder="0000 **** **** 0000"
                />
                </div>

            </div>
            <div>
                <label>CVV</label>
                <div className="flex items-center border-b border-gray w-fit">
                <input
                    type="text"
                    className="w-[90vw] px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 bg-white w-[40%]"
                    placeholder="197"
                />
                </div>

            </div>
          </div>
          <div className="flex flex-col-reverse md:space-x-5 space-y-5 md:my-7">
            <div>
                <label>Password:</label>
                <div className="flex items-center border-b border-gray">
                <input
                    type="password"
                    className="w-[90vw] px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 bg-white w-full"
                    placeholder="********"
                />
                </div>

            </div>
            <div>
                <label>Expiry Date:</label>
                <div className="flex items-center border-b border-gray w-fit">
                <input
                    type="date"
                    className="px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 bg-white w-full"
                    placeholder="09/03"
                />
                </div>

            </div>
          </div>
            <button
            onClick={handleStepsChange}
            className="md:w-[18%] w-full pt-2 pb-2 text-center rounded-lg mt-10  bg-[#005259] text-white  py-[10px] px-4 rounded hover:bg-white hover:border text-[16px] hover:border-[#005A58] hover:text-[#005A58]"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Donate;
