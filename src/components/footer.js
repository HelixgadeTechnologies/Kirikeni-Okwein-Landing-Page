import Image from "next/image"
import PlayStore from "@/assets/appstore.png"
import AppleIcon from "@/assets/apple_icon.png"
const Footer = () => {
    return (
      <footer className="bg-[#003338] text-gray-300 py-12 w-screen h-fit">
        <div className="max-w-screen-lg mx-auto">

          <div className="flex flex-wrap md:flex-row md:text-left text-center space-y-10 flex-col justify-between py-8">
            <div>
            <div>
            <a className="pb-10">
            <b className=''>Kirikeni</b><br/>
            <b className='pb-10'>Okwein</b>
            {/* <img src="/logo.svg" alt="Logo" className="h-8" /> */}
          </a>
            </div>
            <div className="flex items-center flex-col md:space-y-5 space-y-1  pt-5">
              <div href="#" className="flex border-white border rounded items-center justify-center px-3 py-2" >
                <Image src={PlayStore} alt="Apple Store" className=" h-6 w-6 mx-2" />
                <div className="">
                    <p>Download on</p>
                    <p>Google Play</p>
                </div>
              </div>
              <div href="#" className="flex border-white border rounded items-center justify-center px-3 py-2" >
                <Image src={AppleIcon} alt="Apple Store" className=" h-8 w-8 mx-2" />
                <div className="">
                    <p>Download on</p>
                    <p>Appstore</p>
                </div>
              </div>
            </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">About us</h4>
              <ul className="flex flex-col md:space-y-5 space-y-1">
                <li><a href="#">Partners</a></li>
                <li><a href="#">Donations</a></li>
                <li><a href="#">Rate us</a></li>
                <li><a href="/contact">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Privacy and Terms</h4>
              <ul className="flex flex-col md:space-y-5 space-y-1">
                <li><a href="/tc">Terms</a></li>
                <li><a href="/privacy">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Social</h4>
              <ul className="flex flex-col md:space-y-5 space-y-1">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Youtube</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <p>Powered by Helixgade 2023 . All rights reserved</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  