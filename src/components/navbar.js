import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between text-white bg-[#003338] py-[20px]">
      <div>
        {/* <Link href="/"> */}
          <a>
            <b className='md:ml-20 ml-5'>Kirikeni</b><br/>
            <b className='md:ml-20 ml-5'>Okwein</b>
            {/* <img src="/logo.svg" alt="Logo" className="h-8" /> */}
          </a>
        {/* </Link> */}
      </div>
      <div>
        {/* <Link href="/get-started"> */}
          <a className="text-gray-500 hover:text-white mr-4 border-white bg-[#00484E] text-white py-[16px] px-[18px] rounded">Get Started</a>
        {/* </Link> */}
        {/* <Link href="/login"> */}
          <a className="text-gray-500 hover:text-gray-900 mr-4 border-white bg-[#fff] text-[#00484E] py-[16px] px-[18px] rounded">Login</a>
        {/* </Link> */}
      </div>
    </nav>
  )
}

export default NavBar
