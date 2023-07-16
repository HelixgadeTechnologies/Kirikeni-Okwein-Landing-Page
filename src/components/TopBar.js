import React from 'react'
import profile from "@/assets/profile-img.png"
import Image from 'next/image'
import NotificationsIcon from '@mui/icons-material/Notifications';
function TopBar({h}) {
  return (
    <div className='fixed flex md:w-[82.3vw] justify-between items-center md:px-10 pl-14 px-4 h-[62px] border-b border-gray-300 z-[10] w-screen bg-white'>
        <h6 className='text-[#005259] pt-3'>{h}</h6>
        {/* <h6>Home</h6> */}
        <div className='flex space-x-5'>
            <Image src={profile} alt=""/>
            <NotificationsIcon style={{color:"#005259", fontSize:"30px"}}/>
        </div>
    </div>
  )
}

export default TopBar
