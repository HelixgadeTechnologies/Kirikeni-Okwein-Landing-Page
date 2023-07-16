import Layout from "@/components/Layout";
import React, { useState } from "react";

function Settings() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <Layout ActivePage={"more"} h={"Settings"}>
      <div className="px-10">
        <div>
          <div>
            <div className="flex text-left items-left">
              <div
                className={`pr-40 pl-1 py-2 rounded-tl-md text-left font-bold text-[17px]  ${
                  activeTab === "tab1"
                    ? " text-[#005259]  border-b-[5px] border-[#005259]"
                    : " text-[#005259]"
                }`}
                onClick={() => handleTabClick("tab1")}
              >
                Personal Details
              </div>
              <div
                className={`pr-40 pl-1 py-2 rounded-tl-md text-left font-bold text-[17px]  ${
                  activeTab === "tab2"
                    ? " text-[#005259]  border-b-[5px] border-[#005259]"
                    : " text-[#005259]"
                }`}
                onClick={() => handleTabClick("tab2")}
              >
                Password Settings
              </div>
             
            </div>

            <div className="py-4  border-t-0">
              {activeTab === "tab1" && <div>
                <div className="bg-[#005259] rounded-lg">
                    <h4 className="text-white py-2 px-2 font-semibold">Personal Details</h4>
                </div>
                <form className="flex flex-col  space-y-10">
                   
                    <div className="flex space-x-10 mt-10">
                    <div className="w-[133px]">
                            <label className="mt-10">Profile Picture</label>
                        </div>
                        <div>
                            <input className="border rounded-lg" type={"file"}/>
                            <p>No file selected</p>
                            <p>Maximum image size 1MB</p>
                        </div>
                    </div>
                    <div className="flex space-x-10 mt-10">
                    <div className="w-[133px]">
                            <label className="">Name</label>
                        </div>
                        <div>
                            <input className="border-b border-[#A0ABBB] bg-transparent w-[334px]" type={"text"} placeholder="Peace Onyinye"/>
                            
                        </div>
                    </div>
                    <div className="flex space-x-10 mt-10">
                        <div className="w-[133px]">
                            <label className="">Date Of Birth</label>
                        </div>
                        <div>
                            <input className="border-b border-[#A0ABBB] bg-transparent w-[334px]" type={"date"}/>
                            
                        </div>
                    </div>
                    <button
        //   onClick={handleStepsChange}
          className="h-[50px] w-[165px] pt-3 pb-3 text-center rounded-lg mt-10  bg-[#005259] text-white  py-[10px] px-4 rounded hover:bg-white hover:border text-[16px] hover:border-[#005A58] hover:text-[#005A58]"
          type="submit"
        >
          Save
        </button>
                </form>
                </div>
                }
              {activeTab === "tab2" && <div>
                <div className="bg-[#005259] rounded-lg">
                    <h4 className="text-white py-2 px-2 font-semibold">Password Settings</h4>
                </div>
                <form className="flex flex-col  space-y-10">

                    <div className="flex space-x-10 mt-10">
                    <div className="w-[133px]">
                            <label className="">Current Password</label>
                        </div>
                        <div>
                            <input className="border-b border-[#A0ABBB] bg-transparent w-[334px]" type={"password"} placeholder="****"/>
                            
                        </div>
                    </div>
                    <div className="flex space-x-10 mt-10">
                        <div className="w-[133px]">
                            <label className="">New Password</label>
                        </div>
                        <div>
                            <input className="border-b border-[#A0ABBB] bg-transparent w-[334px]" type={"password"} placeholder="****"/>
                            
                        </div>
                    </div>
                    <button
        //   onClick={handleStepsChange}
          className="h-[50px] w-[165px] pt-3 pb-3 text-center rounded-lg mt-10  bg-[#005259] text-white  py-[10px] px-4 rounded hover:bg-white hover:border text-[16px] hover:border-[#005A58] hover:text-[#005A58]"
          type="submit"
        >
          Save
        </button>
                </form>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Settings;
