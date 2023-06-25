import React from 'react'
import profile from "@/assets/profile-img.png"
import Image from 'next/image'
import NotificationsIcon from '@mui/icons-material/Notifications';
function TopBar() {
  return (
    <div className='flex md:w-[74.9vw] justify-between items-center md:px-5 pl-14 px-4 h-[70px] border-b border-gray-300 w-screen'>
        <h6 className='text-[#005259]'>Home</h6>
        {/* <h6>Home</h6> */}
        <div className='flex space-x-5'>
            <Image src={profile} alt=""/>
            <NotificationsIcon style={{color:"#005259", fontSize:"30px"}}/>
        </div>
    </div>
  )
}

export default TopBar
