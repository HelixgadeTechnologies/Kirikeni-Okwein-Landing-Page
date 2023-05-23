import Image from "next/image";
import PlayStore from "@/assets/appstore.png";
import playstore from "@/assets/playstore2.png";
import applestore from "@/assets/applestore2.png";
import AppleIcon from "@/assets/apple_icon.png";
const Footer = () => {
  return (
    // <footer className="bg-[#003338] text-gray-300 py-12 w-screen h-fit">
    //   <div className="max-w-screen-lg mx-auto">
    //     <div className="md:flex block">
    //       <div className="flex flex-wrap md:flex-row md:text-left text-center space-y-10 flex-col py-8 pr-20">
    //         <div className="flex flex-col text-center md:pl-10  w-screen">
    //           <div>
    //             <a className="pb-10" href="/">
    //               <b className="">Kirikeni</b>
    //               <br />
    //               <b className="pb-10">Okwein</b>
    //             </a>
    //           </div>
    //           <div className="flex items-center md:flex-col md:space-y-5 space-y-1 justify-around  pt-5">
    //             <Image
    //               src={playstore}
    //               alt="Apple Store"
    //               className=" h-[50px] w-[150px] "
    //             />

    //             <Image
    //               src={applestore}
    //               alt="Apple Store"
    //               className=" h-[50px] w-[150px]"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex md:space-x-[180px] space-x-[25px] px-5 md:pt-[35px] flex-row">
    //         <div>
    //           <h4 className="font-bold md:text-[25px]  mb-5">About us</h4>
    //           <ul className="flex flex-col md:space-y-5 space-y-1">
    //             <li>
    //               <a href="#">Partners</a>
    //             </li>
    //             <li>
    //               <a href="#">Donations</a>
    //             </li>
    //             <li>
    //               <a href="#">Rate us</a>
    //             </li>
    //             <li>
    //               <a href="/contact">Contact us</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h4 className="font-bold md:text-[25px] mb-5">Privacy and Terms</h4>
    //           <ul className="flex flex-col md:space-y-5 space-y-1">
    //             <li>
    //               <a href="/tc">Terms</a>
    //             </li>
    //             <li>
    //               <a href="/privacy">Privacy</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h4 className="font-bold md:text-[25px] mb-5">Social</h4>
    //           <ul className="flex flex-col md:space-y-5 space-y-1">
    //             <li>
    //               <a href="#">Facebook</a>
    //             </li>
    //             <li>
    //               <a href="#">Instagram</a>
    //             </li>
    //             <li>
    //               <a href="#">Youtube</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-wrap justify-center pt-3">
    //       <p>Powered by Helixgade 2023 . All rights reserved</p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-[#003338] py-12 md:px-16 text-white -screen h-fit">
      <div className="flex flex-col md:flex-row md:py-20">
        <div className="md:w-[30%] text-center md:text-left px-5">
        <div className=" pb-10">
            <a className="pb-10" href="/">
                 <b className="">Kirikeni</b>
                <br />
                  <b className="pb-10">Okwein</b>
              </a>
              </div>
              <div className="flex md:flex-col md:space-x-0 md:space-y-5 space-x-5 justify-between">
           <Image
             src={playstore}
           alt="Apple Store"
            className="md:h-[50px] md:w-[150px]  h-[56px]"
          />

        <Image
           src={applestore}
            alt="Apple Store"
             className=" md:h-[50px] md:w-[150px]  h-[56px]"
          />
        </div>
        </div>
        <div className="flex justify-between md:space-x-[180px] space-x-[25px] px-5 md:px-0 py-10 md:py-0 flex-row">
            <div>
              <h4 className="font-bold md:text-[25px]  mb-5">About us</h4>
              <ul className="flex flex-col md:space-y-5 space-y-3">
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Donations</a>
                </li>
                <li>
                  <a href="#">Rate us</a>
                </li>
                <li>
                  <a href="/contact">Contact us</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold md:text-[25px] mb-5">Privacy and Terms</h4>
              <ul className="flex flex-col md:space-y-5 space-y-3">
                <li>
                  <a href="/tc">Terms</a>
                </li>
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold md:text-[25px] mb-5">Social</h4>
              <ul className="flex flex-col md:space-y-5 space-y-3">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
      </div>
      <div className="flex flex-wrap justify-center pt-5">
        <p>Powered by <a href="www.helixgade.com" target={"_blank"}>Helixgade</a> 2023 . All rights reserved</p>
      </div>
  </footer>
  );
};

export default Footer;
