import Layout from "@/components/Layout";
import React, { useState } from "react";
import Fish from "@/assets/fish.png"
import Image from "next/image";
import LockIcon from '@mui/icons-material/Lock';
import Modal1 from "@/components/Modal1";

function Dashboard() {
  const [ModalState, setModalState] = useState(false)
  const handleModal =() =>{
    setModalState(!ModalState)
  }
  return (
    <Layout ActivePage="dashboard" h='Home'>
      <div className="px-6 py-5">
        <div>
          <h4 className="text-[#005259] text-[20px] font-bold">
            Welcome, Peace
          </h4>
          <p>
            Understanding how to speak Wakirike is a step away by selecting a
            course to start learning. See all available courses in Wakirike,
            finish courses to unlock the next course.{" "}
          </p>
        </div>
        <div className="mt-4">
          <h4 className="text-[#005259] text-[20px] font-bold">Courses</h4>
          <hr />

          <div className="flex flex-grow md:flex-row flex-col md:space-x-5 space-y-5 md:space-y-0 mt-5">
            <div className="bg-[#00484E] md:w-1/3 w-full text-white px-3 py-4 rounded-lg flex  flex-row">
              <div className="w-2/3 flex flex-col space-y-2">
                <h4 className=" text-[17px] font-bold">
                  Greating in warkirike{" "}
                </h4>
                <p>Learn basic pronunciations in the Kirikeni language.</p>
                <button onClick={handleModal} className="bg-transparent border border-white rounded text-white py-2 px-auto w-[121px]">
                  Start Course
                </button>
              </div>
              <div className="w-1/3 flex justify-end items-center">
              <div className="bg-white h-[59px] w-[59px] rounded-full p-4">
                <Image src={Fish} alt="h-fit w-fit"/>
              </div>
              </div>
            </div>
            <div className="bg-[#009A96] md:w-1/3 w-full text-white px-3 py-4 rounded-lg flex  flex-row">
              <div className="w-2/3 flex flex-col space-y-2">
                <h4 className=" text-[17px] font-bold">
                  Greating in warkirike{" "}
                </h4>
                <p>Learn basic pronunciations in the Kirikeni language.</p>
                <button className="bg-transparent border border-white rounded text-white py-2 px-auto w-[121px]">
                  Start Course
                </button>
              </div>
              <div className="w-1/3 flex justify-end items-center">
              <div className="bg-gray-200 h-[59px] w-[59px] rounded-full p-3">
                <LockIcon  className="h-fit w-fit"/>
              </div>
              </div>
            </div>
            <div className="bg-[#005A58] md:w-1/3 w-full text-white px-3 py-4 rounded-lg flex  flex-row">
              <div className="w-2/3 flex flex-col space-y-2">
                <h4 className=" text-[17px] font-bold">
                  Greating in warkirike{" "}
                </h4>
                <p>Learn basic pronunciations in the Kirikeni language.</p>
                <button className="bg-transparent border border-white rounded text-white py-2 px-auto w-[121px]">
                  Start Course
                </button>
              </div>
              <div className="w-1/3 flex justify-end items-center">
              <div className="bg-gray-200 h-[59px] w-[59px] rounded-full p-3">
                <LockIcon  className="h-fit w-fit"/>
              </div>
              </div>
            </div>
          </div>
          <div className="flex flex-grow md:flex-row flex-col md:space-x-5 space-y-5 md:space-y-0 mt-5">
            <div className="bg-[#009A96] md:w-1/3 w-full text-white px-3 py-4 rounded-lg flex  flex-row">
              <div className="w-2/3 flex flex-col space-y-2">
                <h4 className=" text-[17px] font-bold">
                  Greating in warkirike{" "}
                </h4>
                <p>Learn basic pronunciations in the Kirikeni language.</p>
                <button className="bg-transparent border border-white rounded text-white py-2 px-auto w-[121px]">
                  Start Course
                </button>
              </div>
              <div className="w-1/3 flex justify-end items-center">
              <div className="bg-white h-[59px] w-[59px] rounded-full p-4">
                <Image src={Fish} alt="h-fit w-fit"/>
              </div>
              </div>
            </div>
            <div className="bg-[#00B4AF] md:w-1/3 w-full text-white px-3 py-4 rounded-lg flex  flex-row">
              <div className="w-2/3 flex flex-col space-y-2">
                <h4 className=" text-[17px] font-bold">
                  Greating in warkirike{" "}
                </h4>
                <p>Learn basic pronunciations in the Kirikeni language.</p>
                <button className="bg-transparent border border-white rounded text-white py-2 px-auto w-[121px]">
                  Start Course
                </button>
              </div>
              <div className="w-1/3 flex justify-end items-center">
              <div className="bg-gray-200 h-[59px] w-[59px] rounded-full p-3">
                <LockIcon  className="h-fit w-fit"/>
              </div>
              </div>
            </div>
            <div className="bg-[#009A96] md:w-1/3 w-full text-white px-3 py-4 rounded-lg flex  flex-row">
              <div className="w-2/3 flex flex-col space-y-2">
                <h4 className=" text-[17px] font-bold">
                  Greating in warkirike{" "}
                </h4>
                <p>Learn basic pronunciations in the Kirikeni language.</p>
                <button className="bg-transparent border border-white rounded text-white py-2 px-auto w-[121px]">
                  Start Course
                </button>
              </div>
              <div className="w-1/3 flex justify-end items-center">
              <div className="bg-gray-200 h-[59px] w-[59px] rounded-full p-3">
                <LockIcon  className="h-fit w-fit"/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {
        ModalState==true?<><Modal1 /></>:""
      } */}
    </Layout>
  );
}

export default Dashboard;
