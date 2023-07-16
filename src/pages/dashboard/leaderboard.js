import Layout from "@/components/Layout";
import React from "react";
import ProfileImg from "@/assets/profile-img.png";
import Image from "next/image";
import GiftBox from "@/assets/mdi_gift.png";
import SearchIcon from "@mui/icons-material/Search";
import FirstIcon from "@/assets/first-icon.png"
import SecondIcon from "@/assets/second-icon.png"
import ThirdIcon from "@/assets/third-icon.png"
import Fb from "@/assets/fb.png"
import Logo from "@/assets/fish.png"
import MsgIcon from "@/assets/msg-icon.png"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const showDonation = [
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
];

function leaderboard() {
  return (
    <Layout ActivePage="leaderboard" h="Leaderboard"> 
      <div className="md:flex md:py-5 md:px-[50px] md:px-4 px-1 pt-[10px] md:space-x-10 space-y-3 mb-5">
        <div className="rounded-lg border border-gray md:w-[40vw] w-screen md:h-[570px] flex flex-col  items-center bg-[#F7F8F978] text-center  py-5 pt-7">
          <div className="flex items-center px-5  md:px-8 px-3">
            <button className="bg-[#F7F8F978] rounded-l-md  border-l border-t border-b px-4 py-2 text-black">
              <SearchIcon />
            </button>
            <input
              type="text"
              className=" border-r border-t border-b  bg-[#F7F8F978] rounded-r-md px-4 py-2 md:w-[30vw] w-[80vw]"
              placeholder="Email, name or username"
            />
          </div>
          <div className="flex w-full md:space-x-8 space-x-4  md:px-8 px-3">
            <button
              className="w-full pt-2 pb-2 text-center rounded-lg mt-10  bg-[#005259] text-white  py-[10px] md:px-4 rounded hover:bg-white hover:border md:text-[16px] text-[14px] hover:border-[#005A58] hover:text-[#005A58]"
              type="submit"
            >
              Weekly
            </button>
            <button
              className="w-full pt-2 pb-2 text-center rounded-lg mt-10  text-[#005259]  py-[10px] md:px-4 rounded bg-white border md:text-[16px] text-[14px border-[#005A58] text-[#005A58]"
              type="submit"
            >
              Monthly
            </button>
            <button
              className="w-full pt-2 pb-2 text-center rounded-lg mt-10  text-[#005259]  py-[8px] md:px-4 rounded bg-white border md:text-[16px] text-[14px border-[#005A58] text-[#005A58]"
              type="submit"
            >
              All Time
            </button>
          </div>
          <div className="h-400px overflow-scroll">
            <div className="flex text-left py-7 space-x-8 md:w-[40vw] px-10 h-fit justify-left items-center border-b">
              <div className="relative ">
                <Image src={FirstIcon} alt='' className="w-9 h-9"/>
                <p className="absolute top-[9px] text-[7px] left-[16px]">1</p>
              </div>
                <Image src={ProfileImg} alt='' className="w-12 h-12"/>
                <p className="hover:test">Peace Onyinyechi</p>
            </div>
            <div className="flex text-left py-7 space-x-8 md:w-[40vw] px-10 h-fit justify-left items-center border-b">
              <div className="relative ">
                <Image src={SecondIcon} alt='' className="w-9 h-9"/>
                <p className="absolute top-[9px] text-[7px] left-[16px]">2</p>
              </div>
                <Image src={ProfileImg} alt='' className="w-12 h-12"/>
                <p className="hover:test">Ralph Edwards</p>
            </div>
            <div className="flex text-left py-7 space-x-8 md:w-[40vw] px-10 h-fit justify-left items-center border-b">
              <div className="relative ">
                <Image src={ThirdIcon} alt='' className="w-9 h-9"/>
                <p className="absolute top-[9px] text-[7px] left-[16px]">3</p>
              </div>
                <Image src={ProfileImg} alt='' className="w-12 h-12"/>
                <p className="hover:test">Jacob Jones</p>
            </div>
            <div className="flex text-left py-7 space-x-8 md:w-[40vw] px-10 h-fit justify-left items-center border-b">
              <div className="relative ">
                {/* <Image src={ThirdIcon} alt='' className="w-9 h-9"/> */}
                <p className="pl-5 text-[15px]">4</p>
              </div>
                <Image src={ProfileImg} alt='' className="w-12 h-12"/>
                <p className="hover:test">Jacob Jones</p>
            </div>
            <div className="flex text-left py-7 space-x-8 md:w-[40vw] px-10 h-fit justify-left items-center border-b">
              <div className="relative ">
                {/* <Image src={ThirdIcon} alt='' className="w-9 h-9"/> */}
                <p className="pl-5 text-[15px]">5</p>
              </div>
                <Image src={ProfileImg} alt='' className="w-12 h-12"/>
                <p className="hover:test">Jacob Jones</p>
            </div>
            <div className="flex text-left py-7 space-x-8 md:w-[40vw] px-10 h-fit justify-left items-center border-b">
              <div className="relative ">
                {/* <Image src={ThirdIcon} alt='' className="w-9 h-9"/> */}
                <p className="pl-5 text-[15px]">6</p>
              </div>
                <Image src={ProfileImg} alt='' className="w-12 h-12"/>
                <p className="hover:test">Jacob Jones</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray md:w-[30vw] md:h-fit ">
          <div className="text-center  flex space-x-2 px-10 py-5">
            <div className="bg-[#F7F8F9] py-[1px] px-[7px]">X</div>
            <h5 className="font-semibold">Search for Friends</h5>
          </div>
          <div className="flex items-center px-5">
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
                  <Image src={Logo} alt='' className="w-6 h-6"/>
                  <Image src={Fb} className="absolute top-[9px] text-[7px] left-[16px]"/>
                </div>
                <div className="px-10">
                  <p className="hover:test text-[#00484E]">Connect to Facebook</p>
                  <p className="text-[#A0ABBB] text-[14px] w-[60%] ">See who you know on Kirikeni Okwein</p>
                </div>
              </div>
              <div className="">
                <ChevronRightIcon/>
              </div>
            </div>
            <div className="flex text-left py-7 space-x-8 w-[30vw] px-5 h-fit justify-left items-center ">
            <div className="flex items-center">
              <div className="relative ">
                <Image src={MsgIcon} alt='' className="w-9 h-9"/>
                {/* <p className="absolute top-[9px] text-[7px] left-[16px]">2</p> */}
              </div>
                {/* <Image src={ProfileImg} alt='' className="w-12 h-12"/> */}
                <div className="px-10">
                  <p className="hover:test text-[#00484E]">Invite friends</p>
                  <p className="text-[#A0ABBB] text-[14px]">Learn together with friends</p>
                </div>
                </div>
                <div className="">
                <ChevronRightIcon/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default leaderboard;
