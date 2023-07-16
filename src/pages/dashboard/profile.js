import Layout from "@/components/Layout";
import React, { useState } from "react";
import Camera from "@/assets/camera.png";
import Image from "next/image";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import EditIcon from "@mui/icons-material/Edit";
import ProfileImage from "@/assets/profile-img.png"
import SearchIcon from "@mui/icons-material/Search";
import Fb from "@/assets/fb.png";
import Logo from "@/assets/fish.png";
import MsgIcon from "@/assets/msg-icon.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Stamp from "@/assets/stamp.png";

function Profile() {
    const [searchOpen, setSearchOpen] = useState(false)
  return (
    <Layout ActivePage={"profile"} h="Profile">
      <div>
        <div className="px-5 flex pb-10 mx-10  items-center justify-left space-x-8 border-b w-[76vw]">
          <div className="bg-[#D9D9D9] border-[#D1FAE5] border rounded-full w-[114px] h-[114px] relative z-[0]">
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-[#005259]">
              PO
            </p>
            <Image src={Camera} alt="" className="bottom-2 right-0 absolute" />
          </div>
          <div>
            <p className="text-[#005259] text-[26px] font-semibold mt-10">
              Peace Onyinyechi
            </p>
            <p className="text-[#64748B]">peaceonyinyechi@gmail.com</p>
            <div className="flex space-x-2">
              <QueryBuilderIcon style={{ color: "#64748B" }} />
              <p className="text-[#64748B]">Joined December 2022</p>
            </div>
            <button
              //   onClick={handleStepsChange}
              className="w-[165px] pt-3 pb-3 text-center rounded-lg mt-3  bg-transparent text-[#005259]  py-[10px] px-5 rounded bg-white border text-[16px] border-[#005A58] text-[#005A58] flex space-x-3"
              type="submit"
            >
              <EditIcon />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
        <div className="flex py-10 px-5 mx-10 space-x-10">
          <div className="w-[41vw]">
            <div className="flex space-x-5">
              <button
                className="w-[263px] h-[58px] pt-4 pb-4 text-center rounded-lg mt-2  bg-[#005259] text-white  py-[10px] px-4 rounded border text-[16px] border-[#005A58] text-[#005A58] flex space-x-3 items-center justify-center"
                type="submit"
              >
                <PersonAddAltOutlinedIcon />
                <span>Add Friends</span>
              </button>
              <button
                className="w-[265px] h-[58px] text-center rounded-lg mt-2  bg-transparent text-[#005259]   px-4 rounded bg-white border text-[16px] border-[#005A58] text-[#005A58] flex flex-col text-center items-center justify-center"
                type="submit"
              >
                <span>900 XRP</span>
                <span>Total Points</span>
              </button>
            </div>
            <h3 className="text-2xl py-5 font-semibold">Completed Lessons</h3>
            <div className="rounded-lg border h-[257px]">
              <div className="flex">
                <div className="flex text-left py-7 space-x-3 w-[19.3vw] px-3 h-fit justify-left items-center">
                  <div className="flex items-center">
                    <div className="bg-[#005A58] rounded-lg h-[85px] w-[120px] px-1 py-2 flex justify-center items-center flex-col ">
                      <div className="relative ">
                        <Image
                          src={Stamp}
                          alt=""
                          className="w-[51px] h-[50px]"
                        />
                        <p className="absolute top-[15px] text-[7px] left-[24px] text-white">
                          3
                        </p>
                      </div>
                      <span className="text-white ">Level 4 </span>
                    </div>
                    <div className="px-2">
                      <p className="hover:test text-[#00484E] text-[14px]">
                        Greeting in Wakirike
                      </p>
                      <div className="flex space-x-2 justify-around items-center">
                        <p className="text-[#A0ABBB] text-[11px] w-[90%] ">
                          You Completed your Greeting Lesson
                        </p>
                        <div>2/4</div>
                        <ChevronRightIcon />
                      </div>
                    </div>
                  </div>
                  {/* <div className="">
                        <ChevronRightIcon />
                        </div> */}
                </div>
                <div className="flex text-left py-7 space-x-3 w-[19.3vw] px-3 h-fit justify-left items-center">
                  <div className="flex items-center">
                    <div className="bg-[#005A58] rounded-lg h-[85px] w-[120px] px-1 py-2 flex justify-center items-center flex-col ">
                      <div className="relative ">
                        <Image
                          src={Stamp}
                          alt=""
                          className="w-[51px] h-[50px]"
                        />
                        <p className="absolute top-[15px] text-[7px] left-[24px] text-white">
                          3
                        </p>
                      </div>
                      <span className="text-white ">Level 4 </span>
                    </div>
                    <div className="px-2">
                      <p className="hover:test text-[#00484E] text-[14px]">
                        Greeting in Wakirike
                      </p>
                      <div className="flex space-x-2 justify-around items-center">
                        <p className="text-[#A0ABBB] text-[11px] w-[90%] ">
                          You Completed your Greeting Lesson
                        </p>
                        <div>2/4</div>
                        <ChevronRightIcon />
                      </div>
                    </div>
                  </div>
                  {/* <div className="">
                        <ChevronRightIcon />
                        </div> */}
                </div>
              </div>
              <div className="flex">
                <div className="flex text-left  space-x-3 w-[19.3vw] px-3 h-fit justify-left items-center">
                  <div className="flex items-center">
                    <div className="bg-[#005A58] rounded-lg h-[85px] w-[120px] px-1 py-2 flex justify-center items-center flex-col ">
                      <div className="relative ">
                        <Image
                          src={Stamp}
                          alt=""
                          className="w-[51px] h-[50px]"
                        />
                        <p className="absolute top-[15px] text-[7px] left-[24px] text-white">
                          3
                        </p>
                      </div>
                      <span className="text-white ">Level 4 </span>
                    </div>
                    <div className="px-2">
                      <p className="hover:test text-[#00484E] text-[14px]">
                        Greeting in Wakirike
                      </p>
                      <div className="flex space-x-2 justify-around items-center">
                        <p className="text-[#A0ABBB] text-[11px] w-[90%] ">
                          You Completed your Greeting Lesson
                        </p>
                        <div>2/4</div>
                        <ChevronRightIcon />
                      </div>
                    </div>
                  </div>
                  {/* <div className="">
                        <ChevronRightIcon />
                        </div> */}
                </div>
                <div className="flex text-left  space-x-3 w-[19.3vw] px-3 h-fit justify-left items-center">
                  <div className="flex items-center">
                    <div className="bg-[#005A58] rounded-lg h-[85px] w-[120px] px-1 py-2 flex justify-center items-center flex-col ">
                      <div className="relative ">
                        <Image
                          src={Stamp}
                          alt=""
                          className="w-[51px] h-[50px]"
                        />
                        <p className="absolute top-[15px] text-[7px] left-[24px] text-white">
                          3
                        </p>
                      </div>
                      <span className="text-white ">Level 4 </span>
                    </div>
                    <div className="px-2">
                      <p className="hover:test text-[#00484E] text-[14px]">
                        Greeting in Wakirike
                      </p>
                      <div className="flex space-x-2 justify-around items-center">
                        <p className="text-[#A0ABBB] text-[11px] w-[90%] ">
                          You Completed your Greeting Lesson
                        </p>
                        <div>2/4</div>
                        <ChevronRightIcon />
                      </div>
                    </div>
                  </div>
                  {/* <div className="">
                        <ChevronRightIcon />
                        </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray md:w-[30vw] md:h-fit ">
            <div className="text-center  flex space-x-2 px-10 py-5">
              <div className="bg-[#F7F8F9] py-[1px] px-[7px]">X</div>
              <h5 className="font-semibold">Search for Friends</h5>
            </div>
            <div className="flex items-center px-5" onClick={()=>setSearchOpen(!searchOpen)}>
              <button className="bg-[#F7F8F978] rounded-l-md  border-l border-t border-b px-4 py-2 text-black">
                <SearchIcon />
              </button>
              <input
                type="text"
                className=" border-r border-t border-b  bg-[#F7F8F978] rounded-r-md px-4 py-2 w-full"
                placeholder="Search"
              />
            </div>
            <div className=" overflow-scroll">
              <div className="flex text-left py-7 space-x-5 w-[30vw] px-5 h-fit justify-left items-center">
                <div className="flex items-center">
                  <div className="relative ">
                    <Image src={Logo} alt="" className="w-6 h-6" />
                    <Image
                      src={Fb}
                      className="absolute top-[9px] text-[7px] left-[16px]"
                    />
                  </div>
                  <div className="px-10">
                    <p className="hover:test text-[#00484E]">
                      Connect to Facebook
                    </p>
                    <p className="text-[#A0ABBB] text-[14px] w-[60%] ">
                      See who you know on Kirikeni Okwein
                    </p>
                  </div>
                </div>
                <div className="">
                  <ChevronRightIcon />
                </div>
              </div>
              <div className="flex text-left py-7 space-x-8 w-[30vw] px-5 h-fit justify-left items-center ">
                <div className="flex items-center">
                  <div className="relative ">
                    <Image src={MsgIcon} alt="" className="w-9 h-9" />
                  </div>
                  <div className="px-10">
                    <p className="hover:test text-[#00484E]">Invite friends</p>
                    <p className="text-[#A0ABBB] text-[14px]">
                      Learn together with friends
                    </p>
                  </div>
                </div>
                <div className="">
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchOpen ? (
        <div className="fixed z-[50] w-screen h-screen bg-black top-0 left-0 bg-opacity-50 flex justify-center items-center">
          <div className="absolute z-[100] bg-white rounded-[20px] w-[415px] h-fit text-center px-4 py-8">
          <div className="text-center  flex space-x-2 px-4 py-5 ">
              <div className="bg-[#F7F8F9] py-[1px] px-[7px]" onClick={()=>setSearchOpen(false)}>X</div>
              <h5 className="font-semibold">Search for Friends</h5>
            </div>
            <div className="flex items-center px-4 mb-4 pb-4 border-b">
              <button className="bg-[#F7F8F978] rounded-l-md  border-l border-t border-b px-4 py-2 text-black">
                <SearchIcon />
              </button>
              <input
                type="text"
                className=" border-r border-t border-b  bg-[#F7F8F978] rounded-r-md px-4 py-2 w-full"
                placeholder="Search"
              />
            </div>
            <div className=" overflow-scroll rounded-lg border">
              <div className="flex text-left py-4 space-x-5 w-[30vw] px-1 h-fit justify-center items-center px-5 border-b">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-5">
                        <div className=" ">
                            <Image src={ProfileImage} alt="" className="w-16 h-16" />
                            
                        </div>
                        <div className="pr-10">
                            <p className="hover:test text-[#00484E]">
                            Peace Onyinyechi
                            </p>
                        
                        </div>
                    </div>
                </div>
                <div className="">
                  <PersonAddAltOutlinedIcon />
                </div>
              </div>
              <div className="flex text-left py-4 space-x-5 w-[30vw] px-1 h-fit justify-center items-center px-5">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-5">
                        <div className=" ">
                            <Image src={ProfileImage} alt="" className="w-16 h-16" />
                            
                        </div>
                        <div className="pr-10">
                            <p className="hover:test text-[#00484E]">
                            Peace Onyinyechi
                            </p>
                        
                        </div>
                    </div>
                </div>
                <div className="">
                  <PersonAddAltOutlinedIcon />
                </div>
              </div>
              <div className="flex text-left py-4 space-x-5 w-[30vw] px-1 h-fit justify-center items-center px-5 border-b">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-5">
                        <div className=" ">
                            <Image src={ProfileImage} alt="" className="w-16 h-16" />
                            
                        </div>
                        <div className="pr-10">
                            <p className="hover:test text-[#00484E]">
                            Peace Onyinyechi
                            </p>
                        
                        </div>
                    </div>
                </div>
                <div className="">
                  <PersonAddAltOutlinedIcon />
                </div>
              </div>
              <div className="flex text-left py-4 space-x-5 w-[30vw] px-1 h-fit justify-center items-center px-5">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-5">
                        <div className=" ">
                            <Image src={ProfileImage} alt="" className="w-16 h-16" />
                            
                        </div>
                        <div className="pr-10">
                            <p className="hover:test text-[#00484E]">
                            Peace Onyinyechi
                            </p>
                        
                        </div>
                    </div>
                </div>
                <div className="">
                  <PersonAddAltOutlinedIcon />
                </div>
              </div>
              <div className="flex text-left py-2 space-x-5 w-[30vw] px-1 h-fit justify-center items-center px-5 border-b">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-5">
                        
                        <div className="pr-10">
                            <p className="text-[#00A0AD]">
                            Next
                            </p>
                        
                        </div>
                    </div>
                </div>
                <div className="">
                  <ChevronRightIcon style={{color:"#00A0AD"}} />
                </div>
              </div>
             
            </div>
          </div>
        </div>
      ) : null}
    </Layout>
  );
}

export default Profile;
