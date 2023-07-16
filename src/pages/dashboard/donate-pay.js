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
      <div className="w-[82vw] py-5 md:px-[50px] px-5 pt-[10px] ">
        <div className="flex flex-col md:flex-row w-full justify-between items-center">
          <h4 className="text-center w-[100vw] md:w-fit text-[20px] md:pl-0 pl-[20%] md:my-0 my-6">Select Payment Method</h4>
          <a className="text-[#00484E] text-right md:text-left md:w-fit w-[100vw]" href='/dashboard/donate-card'>Add Card</a>
        </div>
        <div className="md:flex mt-5 md:space-x-10 space-y-5 md:space-y-0">
          <div className="border rounded-lg md:w-[335px] w-[90vw] h-[88px] flex items-center justify-between px-5 ">
            <div className="flex items-center space-x-3">
              <div className="h-[55px] w-[55px] bg-black rounded-full"></div>
              <p>Paypal</p>
            </div>
            <div>
              <div className="border border-[#00484E] rounded-full p-[1px]">
                <div
                  className={`w-5 h-5  rounded-full flex items-center justify-center cursor-pointer ${
                    checked
                      ? "border-[#00484E] bg-[#00484E]"
                      : "border-gray-400"
                  }`}
                  onClick={handleCheckboxChange}
                ></div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg md:w-[335px] w-[90vw] h-[88px] flex items-center justify-between px-5 ">
            <div className="flex items-center space-x-3">
              <div className="h-[55px] w-[55px] bg-black rounded-full"></div>
              <p>Google Pay</p>
            </div>
            <div>
              <div className="border border-[#00484E] rounded-full p-[1px]">
                <div
                  className={`w-5 h-5  rounded-full flex items-center justify-center cursor-pointer ${
                    checked
                      ? "border-[#00484E] bg-[#00484E]"
                      : "border-gray-400"
                  }`}
                  onClick={handleCheckboxChange}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex mt-5 md:space-x-10 space-y-5 md:space-y-0">
          <div className="border rounded-lg md:w-[335px] w-[90vw] h-[88px] flex items-center justify-between px-5 ">
            <div className="flex items-center space-x-3">
              <div className="h-[55px] w-[55px] bg-black rounded-full"></div>
              <p>Apple Pay</p>
            </div>
            <div>
              <div className="border border-[#00484E] rounded-full p-[1px]">
                <div
                  className={`w-5 h-5  rounded-full flex items-center justify-center cursor-pointer ${
                    checked
                      ? "border-[#00484E] bg-[#00484E]"
                      : "border-gray-400"
                  }`}
                  onClick={handleCheckboxChange}
                ></div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg md:w-[335px] w-[90vw] h-[88px] flex items-center justify-between px-5  ">
            <div className="flex items-center space-x-3">
              <div className="h-[55px] w-[55px] bg-black rounded-full"></div>
              <p>Paypal</p>
            </div>
            <div>
              <div className="border border-[#00484E] rounded-full p-[1px]">
                <div
                  className={`w-5 h-5  rounded-full flex items-center justify-center cursor-pointer ${
                    checked
                      ? "border-[#00484E] bg-[#00484E]"
                      : "border-gray-400"
                  }`}
                  onClick={handleCheckboxChange}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleStepsChange}
          className="md:w-[35%] w-[90vw] pt-5 pb-5 text-center rounded-lg mt-10  bg-[#005259] text-white  py-[10px] px-4 rounded hover:bg-white hover:border text-[16px] hover:border-[#005A58] hover:text-[#005A58]"
          type="submit"
        >
          Continue
        </button>
      </div>
      {steps == 1 ? (
        <Modal2>
          <p className="font-bold py-2 text-[20px]">Card Payment</p>
          <p className="pb-3">Logging out will not erase your saved progress</p>

          <div className="rounded-lg bg-[#F7F8F9] h-[224px] flex flex-col justify-center text-left px-4 ">
            <div className="border-b border-[#A0ABBB]">
              <label>Enter Amount:</label>
              <div className="flex items-center">
                <div className="bg-white  px-4 py-2">₦</div>
                <input
                  type="text"
                  className="px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 bg-white w-full"
                  placeholder="Amount"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleStepsChange}
            className="w-full pt-3 pb-3 text-center rounded-lg mt-10  bg-[#005259] text-white  py-[10px] px-4 rounded hover:bg-white hover:border text-[16px] hover:border-[#005A58] hover:text-[#005A58]"
            type="submit"
          >
            Continue
          </button>
        </Modal2>
      ) : steps == 2 ? (
        <Modal2>
          <p className="font-bold py-2 text-[20px]">Review Summary</p>
          {/* <p className="pb-3">Logging out will not erase your saved progress</p> */}

          <div className="rounded-lg bg-[#F7F8F9] h-[224px] flex flex-col justify-center text-left px-4 ">
            <div className="flex justify-between px-3  py-4">
              <p>Price</p>
              <p className="font-bold">₦ 2,000</p>
            </div>
            <div className="flex justify-between px-3 border-gray border-b py-4">
              <p>Discount</p>
              <p className="font-bold">₦ 0.00</p>
            </div>
            <div className="flex justify-between px-3  py-4">
              <p>Total Payment</p>
              <p className="font-bold text-[#00484E]">₦ 2,000</p>
            </div>
          </div>
          <h4 className="py-6 font-bold text-[17px] text-left">Payment Method</h4>
          <div className="border rounded-lg w-[335px] h-[88px] flex items-center justify-between px-5 ">
            <div className="flex items-center space-x-3">
              <div className="h-[55px] w-[55px] bg-black rounded-full"></div>
              <p>**** **** **** 0000</p>
            </div>
            <p className="text-[#00484E]">Change</p>
          </div>
          <button
          onClick={handleStepsChange}
            className="w-full pt-3 pb-3 text-center rounded-lg mt-10  bg-[#005259] text-white  py-[10px] px-4 rounded hover:bg-white hover:border text-[16px] hover:border-[#005A58] hover:text-[#005A58]"
            type="submit"
          >
            Proceed to payment
          </button>
        </Modal2>
      ) : steps==3?
      <Modal2>
        <div className="text-center flex flex-col items-center space-y-3">

      <Image src={Logo} alt="" className="h-[80px] w-[56px]" />
          <p>
          You have successfully donated to Kirikeni Okwein learning platform {" "}
          </p>
          <button
          onClick={()=>setSteps(0)}
            type="submit"
            className="bg-[#005259] rounded-lg text-white py-3 px-4 w-full rounded hover:bg-[#005259] my-5"
          >
            Close
          </button>
        </div>
      </Modal2>:null}
    </Layout>
  );
}

export default Donate;
