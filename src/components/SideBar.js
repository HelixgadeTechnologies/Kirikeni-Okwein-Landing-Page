// import { useState } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import HomeIcon from '@mui/icons-material/Home';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// const Sidebar = ({ActivePage}) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };
//   console.log("ActivePage")
//   return (
//     <>
//     <div className="flex flex-col h-screen w-[25%] shadow-lg md:bg-white bg-[#005259] py-10 px-7">
//         <div className='flex flex-col text-2xl text-[#005259] mb-10'>
//             <b>Kirikeni</b>
//             <b>Okwein</b>
//         </div>
//         <div className='flex flex-col'>
//             <div className={`flex space-x-4 w-[200px] items-center py-5 px-4 ${ActivePage =="dashboard"?"bg-[#A0ABBB40] opacity-[75%] rounded-lg":""}`}>
//                 <HomeIcon/>
//                 <p className='16px'>Home</p>
//             </div>
//         </div>
//         <div className='flex flex-col'>
//             <div className={`flex space-x-4 w-[200px] items-center py-5 px-4 ${ActivePage =="leaderboard"?"bg-[#A0ABBB40] opacity-[75%] rounded-lg":""}`}>
//                 <VerifiedIcon/>
//                 <p className='16px'>Leaderboard</p>
//             </div>
//         </div>
//         <div className='flex flex-col'>
//             <div className={`flex space-x-4 w-[200px] items-center py-5 px-4 ${ActivePage =="donations"?"bg-[#A0ABBB40] opacity-[75%] rounded-lg":""}`}>
//                 <CardGiftcardIcon/>
//                 <p className='16px'>Donations</p>
//             </div>
//         </div>
//         <div className='flex flex-col'>
//             <div className={`flex space-x-4 w-[200px] items-center py-5 px-4 ${ActivePage =="profile"?"bg-[#A0ABBB40] opacity-[75%] rounded-lg":""}`}>
//                 <AccountCircleIcon/>
//                 <p className='16px'>Profile</p>
//             </div>
//         </div>
//         <div className='flex flex-col'>
//             <div className={`flex space-x-4 w-[200px] items-center py-5 px-4 ${ActivePage =="more"?"bg-[#A0ABBB40] opacity-[75%] rounded-lg":""}`}>
//                 <div className='bg-black rounded-full p-1 text-white'>
//                 <MoreHorizIcon/>

//                 </div>
//                 <p className='16px'>More</p>
//             </div>
//         </div>
//     </div>
//     </>
//   );
// };

// export default Sidebar;

import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Sidebar = ({ ActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(isOpen);
  };

  return (
    < >
    {/* Menu Icon */}
    {/* className='bg-black opacity-25 w-screen h-screen fixed' */}
    <div
        className="md:hidden text-white cursor-pointer fixed top-5 left-6 text-[20px]"
        onClick={toggleSidebar}
      >
        {isOpen !=true ? <CloseIcon  style={{color:"#fff"}}/> : <MenuIcon style={{color:"#005259"}}/>}
      </div>
    <div className={`flex flex-col h-screen md:w-[25%] w-[75vw] shadow-lg md:bg-white bg-[#005259] py-10 px-7 ${isOpen?"":"hidden"}`}>
      

      {/* Sidebar Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block md:py-0 py-10`}>
        <div className='flex flex-col text-2xl md:text-[#005259] text-white mb-10'>
          <b>Kirikeni</b>
          <b>Okwein</b>
        </div>

        <div className='flex flex-col text-white md:text-[#4B5768]'>
          <div
            className={`flex space-x-4 w-[200px] items-center py-5 px-4 ${
              ActivePage === 'dashboard'
                ? 'bg-[#A0ABBB40] opacity-[75%] rounded-lg'
                : ''
            }`}
          >
            <HomeIcon />
            <p className='16px'>Home</p>
          </div>
        </div>

        <div className='flex flex-col text-white md:text-[#4B5768]'>
          <div
            className={`flex space-x-4 w-[200px] items-center py-5 px-4 ${
              ActivePage === 'leaderboard'
                ? 'bg-[#A0ABBB40] opacity-[75%] rounded-lg'
                : ''
            }`}
          >
            <VerifiedIcon />
            <p className='16px'>Leaderboard</p>
          </div>
        </div>

        <div className='flex flex-col text-white md:text-[#4B5768]'>
          <div
            className={`flex space-x-4 w-[200px] items-center py-5 px-4 ${
              ActivePage === 'donations'
                ? 'bg-[#A0ABBB40] opacity-[75%] rounded-lg'
                : ''
            }`}
          >
            <CardGiftcardIcon />
            <p className='16px'>Donations</p>
          </div>
        </div>

        <div className='flex flex-col text-white md:text-[#4B5768]'>
          <div
            className={`flex space-x-4 w-[200px] items-center py-5 px-4 ${
              ActivePage === 'profile'
                ? 'bg-[#A0ABBB40] opacity-[75%] rounded-lg'
                : ''
            }`}
          >
            <AccountCircleIcon />
            <p className='16px'>Profile</p>
          </div>
        </div>

        <div className='flex flex-col text-white md:text-[#4B5768]'>
          <div
            className={`flex space-x-4 w-[200px] items-center py-5 px-4 ${
              ActivePage === 'more'
                ? 'bg-[#A0ABBB40] opacity-[75%] rounded-lg'
                : ''
            }`}
          >
            <div className='md:bg-black bg-white rounded-full p-1 md:text-white text-[#00484E]'>
              <MoreHorizIcon />
            </div>
            <p className='16px'>More</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
