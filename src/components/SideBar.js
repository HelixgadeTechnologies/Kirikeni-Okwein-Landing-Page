import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import VerifiedIcon from "@mui/icons-material/Verified";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import Modal2 from "@/components/Modal2.js";

const SideBar = ({ ActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropped, setIsDropped] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="md:hidden text-white cursor-pointer fixed top-5 left-6 text-[20px] z-[100] md:z-0"
        onClick={toggleSidebar}
      >
        {isOpen == true ? (
          <CloseIcon style={{ color: "#fff" }} />
        ) : (
          <MenuIcon style={{ color: "#003338" }} className="" />
        )}
      </div>
      <div
        className={` fixed bottom-0 left-0 top-0 md:z-[99] md:left-auto md:top-auto md:bottom-auto md:w-[17.8vw] w-[75vw] overflow-y-hidden md:h-screen shadow-lg md:bg-transparent bg-[#005259] py-10 px-7 ${
          isOpen == true ? "flex" : "hidden md:flex"
        }`}
      >
        <div
          className={`md:flex flex-col md:h-screen  ${
            isOpen ? "md:block" : "md:block"
          }`}
        >
          <div className="flex flex-col text-2xl md:text-[#005259] text-white mb-10 pt-5 md:pt-0">
            <b>Kirikeni</b>
            <b>Okwein</b>
          </div>
          <div className="flex flex-col text-white md:text-[#4B5768]">
            <Link href="/dashboard/">
              <div
                className={`flex space-x-4 w-[180px] items-center py-5 px-4 ${
                  ActivePage === "dashboard"
                    ? "bg-[#A0ABBB40] bg-opacity-[75%] rounded-lg"
                    : ""
                }`}
              >
                <HomeIcon />
                <p className="16px">Home</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col text-white md:text-[#4B5768]">
            <Link href="/dashboard/leaderboard">
              <div
                className={`flex space-x-4 w-[180px] items-center py-5 px-4 ${
                  ActivePage === "leaderboard"
                    ? "bg-[#A0ABBB40] bg-opacity-[75%] rounded-lg"
                    : ""
                }`}
              >
                <VerifiedIcon />
                <p className="16px">Leaderboard</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col text-white md:text-[#4B5768]">
            <Link href="/dashboard/donate">
              <div
                className={`flex space-x-4 w-[180px] items-center py-5 px-4 ${
                  ActivePage === "donations"
                    ? "bg-[#A0ABBB40] bg-opacity-[75%] rounded-lg"
                    : ""
                }`}
              >
                <CardGiftcardIcon />
                <p className="16px">Donations</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col text-white md:text-[#4B5768]">
          <Link href="/dashboard/profile">
            <div
              className={`flex space-x-4 w-[180px] items-center py-5 px-4 ${
                ActivePage === "profile"
                  ? "bg-[#A0ABBB40] bg-opacity-[75%] rounded-lg"
                  : ""
              }`}
            >
              <AccountCircleIcon />
              <p className="16px">Profile</p>
            </div>
          </Link>
          </div>
          <div
            className="flex flex-col text-white md:text-[#4B5768] relative"
            onClick={() => setIsDropped(!isDropped)}
          >
            <div
              className={`flex space-x-4 w-[180px] items-center py-5 px-4 ${
                ActivePage === "more"
                  ? "bg-[#A0ABBB40] bg-opacity-[75%] rounded-lg"
                  : ""
              }`}
            >
              <div className="md:bg-black bg-white rounded-full p-1 md:text-white text-[#00484E]">
                <MoreHorizIcon />
              </div>
              <p className="16px">More</p>
            </div>
            {isDropped ? (
              <div className="bg-white border rounded-lg ">
                <a href="/dashboard/notifications">
                  <div className="py-3 px-4 hover:bg-[#D9D9D9]">
                    Notifications
                  </div>
                </a>
                <a href='/dashboard/settings'> <div className="py-3 px-4 hover:bg-[#D9D9D9]" >Settings</div></a>
                <div
                  className="py-3 px-4 hover:bg-[#D9D9D9]"
                  onClick={() => setIsLogout(!isLogout)}
                >
                  Logout
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {isLogout ? (
        <Modal2>
          <div className="py-5">
            <div className="px-[50px] pb-3">

            <h3 className="text-[#005259] text-[23px] font-semibold">Are you sure you want to go?</h3>
            <p>Logging out will not erase your saved progress</p>
            </div>
            <div className="flex flex-col">
              <a
              href="/auth/login"
                className="w-full pt-2 pb-2 text-center rounded-lg mt-5  bg-[#005259] text-white  py-[8px]  rounded  text-[16px] "
                type="submit"
              >
                Logout
              </a>
              <button
            onClick={() => setIsLogout(false)}
                className="w-full pt-2 pb-2 text-center rounded-lg mt-2  bg-transparent   py-[8px]  rounded hover:bg-white border text-[16px] border-[#005A58] text-[#005A58]"
                type="submit"
              >
                Cancel
              </button>
          </div>
          </div>
        </Modal2>
      ) : null}
    </>
  );
};

export default SideBar;
