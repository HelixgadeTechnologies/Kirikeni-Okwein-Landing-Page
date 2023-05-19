import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import PlayStore from "@/assets/appstore.png";
import AppleIcon from "@/assets/apple_icon.png";
import Fish from "@/assets/fish.png";
import Img1 from "@/assets/Ellipse 5.png";
import Mobile from "@/assets/mobile-phone.png";
import mockupheader from "@/assets/mockup-header.png"
import icon1 from "@/assets/icon1.png"
import icon2 from "@/assets/icon2.png"
import icon3 from "@/assets/icon3.png"
import icon4 from "@/assets/icon4.png"
import mockup2 from "@/assets/mockup-2.png"
import Smile from "@/assets/image-smile.png"
import playstore from "@/assets/playstore.png"
import applestore from "@/assets/applestore.png"
import playstore2 from "@/assets/playstore2.png"
import applestore2 from "@/assets/applestore2.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {isOpen, setIsOpen} =  useState(false)
  return (
    <>
      <NavBar />
      <header className="md:h-[85vh] md:py-10 md:px-28 px-6 bg-[#003338] flex md:flex-row flex-col-reverse ">
        <div className="md:w-[40vw] ">
          {" "}
          <Image src={mockupheader} alt="fish icon" className="w-[350px] h-[490px]" />
        </div>
        <div className="md:w-[60vw] md:py-10 py-5 text-center md:text-left md:pl-[69px] pr-[0px]">
          <h1 className="text-4xl font-[600] text-[#E7EAEE] py-5 md:leading-[80px] md:tracking-normal md:line-clamp-6	 md:text-[3.8rem]">
            Learn Wakirike
             Language with ease
          </h1>
          <p className="py-2 pt-4 text-[#E7EAEE] leading-[25px] tracking-[-0.02em] text-[21px]">
            The free, fun and effective way to learn Wakrike language, with self
            paced and detailed learning materials you are a step away from
            understanding the language
          </p>
          <div className="flex items-center flex-row space-x-[21px] pt-10">
          <Image
                src={playstore2}
                alt="Apple Store"
                className=" md:h-[70px] md:w-[218px] w-[167.09px] h-[56px]"
              />
             
          
             <Image
                src={applestore2}
                alt="Apple Store"
                className=" md:h-[70px] md:w-[222px] w-[167.09px] h-[56px]"
              />
          </div>
        </div>
      </header>
      <div className="md:px-40 md:py-10 bg-white pt-20  px-2">
        <h1 className="text-[#323A46] md:text-[50px] text-[30px] px-10 md:px-1 tracking-[-0.04em] font-semibold md:text-left text-center">
          About Wakirike Language Platform
        </h1>
        <div className="flex flex-wrap md:flex-row items-center justify-center flex-col pt-5">
          <div className="md:w-1/2 w-[90vw] p-4 flex items-center justify-center flex-col space-y-5 md:block">
            <div className="w-fit h-fit bg-gray-500 rounded-full "><Image src={icon1} alt="icon1"/></div>
            <b className="text-[#1A1A1A] text-2xl">Cultural Value</b>
            <p className="text-[#4B5768] leading-[32px] tracking-[-0.02em] text-center md:text-left">
              Kirikeni Okwein, a language learning platform dedicated to
              preserving and promoting the Wakirike language.Language is an
              essential part of culture, and preserving the Wakirike language is
              crucial to preserving the identity and heritage of the Okirika
              people.{" "}
            </p>
          </div>
          <div className="md:w-1/2 w-[90vw] p-4 flex items-center justify-center flex-col space-y-5 md:block">
            <div className="w-fit h-fit bg-gray-500 rounded-full "><Image src={icon2} alt="icon1"/></div>
            <b className="text-[#1A1A1A] text-2xl">Personalized Learnimg</b>
            <p className="text-[#4B5768] leading-[32px] tracking-[-0.02em] text-[#64748B] text-center md:text-left">
            Our platform offers an interactive and user-friendly experience designed to help both beginners and advanced learners improve their Wakirike language skills.
            </p>
          </div>
          <div className="md:w-1/2 w-[90vw] p-4 flex items-center justify-center flex-col space-y-5 md:block">
            <div className="w-fit h-fit bg-gray-500 rounded-full "><Image src={icon3} alt="icon1"/></div>
            <b className="text-[#1A1A1A] text-2xl">Learn on the go </b>
            <p className="text-[#4B5768] leading-[32px] tracking-[-0.02em] text-[#64748B] text-center md:text-left">
            Our platform is tailored to meet your needs. You can learn at your own pace, on your own schedule, and from anywhere in the world. It is available on both web and mobile devices, making it easy to learn on the go and at your own pace.
            </p>
          </div>
          <div className="md:w-1/2 w-[90vw] p-4 flex items-center justify-center flex-col space-y-5 md:block">
            <div className="w-fit h-fit bg-gray-500 rounded-full "><Image src={icon4} alt="icon1"/></div>
            <b className="text-[#1A1A1A] text-2xl">Simplified Learning</b>
            <p className="text-[#4B5768] leading-[32px] tracking-[-0.02em] text-[#64748B] text-center md:text-left">
            Our platform is tailored to meet your needs. You can learn at your own pace, on your own schedule, and from anywhere in the world. It is available on both web and mobile devices, making it easy to learn on the go and at your own pace.
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-10 md:py-0 bg-white flex flex-col md:flex-row md:px-40 py-10 items-center justify-center">
        <div className="md:w-[30%]">
          <Image src={Fish} alt="fish icon" className="w-[136.06px] h-[182px] md:w-[228px] md:h-[304.76px]"/>
        </div>
        <div className="md:w-[70%] md:pr-20 px-5 pt-2">
          <h1 className="text-[#323A46] md:text-[50px] text-[30px] text-center md:text-left tracking-[-0.04em] font-semibold">
            A better platform to Learn Wakirike
          </h1>
          <p className="leading-[32px] tracking-[-0.02em] text-[#64748B] text-center md:text-left">
            Learning Kirikeni Okwein is fun and effective. Our language learning
            platform is designed to help you develop real-world communication
            skills by providing quick, bite-sized lessons that are both engaging
            and effective. By breaking down the learning process into manageable
            chunks, you'll be able to absorb new information more easily and
            retain it for longer periods of time. As you progress through the
            lessons, you'll earn points and badges that keep you motivated and
            engaged.
          </p>
        </div>
      </div>
      <div className="px-5 py-10 bg-white flex md:flex-row flex-col md:pl-28 md:py-10 md:pr-10">
        <div className="md:w-[60%] md:pr-20">
          <h1 className="text-[#323A46] md:text-[50px] text-[30px] pt-0 md:pt-20  text-center md:text-left tracking-[-0.03em] leading-[50px] font-bold">
            Learn anytime, anywhere with Kirikeni Okwein
          </h1>
          <p className="leading-[32px] tracking-[-0.02em] text-[#64748B] text-[20px] text-center md:text-left md:pr-20">
            Learn without commute breaks, become more productive in your
            learning with our iPhone and Android apps. Download them and see why
            Apple and Google gave us their highest accolades.
          </p>
          <div className="flex items-center flex-cold space-x-3 pt-10">
          
              <Image
                src={playstore}
                alt="Apple Store"
                className=" h-[60px] w-[170px] "
              />
             
          
             <Image
                src={applestore}
                alt="Apple Store"
                className=" h-[60px] w-[170px] "
              />
          </div>
        </div>

        <div className="w-[40%] hidden md:block ">
          <Image src={mockup2} alt="fish icon" className="md:w-[537.5px] md:h-[520.44px]"/>
        </div>
      </div>
      <div className="md:px-20 md:py-10 bg-white  md:text-center md:text-left pt-10 ">
      <h1 className="text-[#323A46] md:text-[50px] text-[30px] md:pl-5  text-center md:text-left tracking-[-0.03em] leading-[72px] font-bold">Comments From People</h1>
        <div className="md:hidden block">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper py-10"
      >
        <SwiperSlide>
          <div className="bg-white border rounded-lg overflow-hidden m-4 md:w-72 h-[280px] my-8">
            <div className="p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-4 bg-gray-400"></div>
                <div>
                  <p className="font-bold text-gray-800">Ayaosi Godfrey</p>
                  <p className="text-gray-700 text-sm">Product Manager</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 leading-[32px] tracking-[-0.02em]">"I have always wanted to learn the Wakirike language, but I found it difficult to find resources that were both accessible and effective. That's why I was thrilled to discover the Kirikeni Okwein app. interested in learning the language."</p>
              </div>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide> 
          <div className="bg-white border rounded-lg overflow-hidden m-4 h-[280px] md:w-fit my-8">
            <div className="p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-4 bg-gray-400"></div>
                <div>
                  <p className="font-bold text-gray-800">Friday Ndifreke</p>
                  <p className="text-gray-700 text-sm">Painter</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 leading-[32px] tracking-[-0.02em]">
                As a native Wakirike speaker, I was excited to see an app that was designed specifically to help non-native   learn the language. I have been using the Kirikeni Okwein app to teach my non-Wakirike speaking friends, </p>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide> <div className="bg-white border rounded-lg overflow-hidden m-4 h-[280px] md:w-fit my-8">
            <div className="p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-4 bg-gray-400"></div>
                <div>
                  <p className="font-bold text-gray-800">Ayanwu Blessing </p>
                  <p className="text-gray-700 text-sm ">Product Designer</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 leading-[32px] tracking-[-0.02em]"> The app covers a wide range of language topics, from basic vocabulary to more advanced grammar concepts. The interactive features, such as quizzes and games, make learning fun and engaging.</p>
              </div>
            </div>
          </div></SwiperSlide>
       
      </Swiper>
        </div>
        <div>
        <div className="md:flex hidden text-center md:text-left">
          <div className="bg-white border rounded-lg overflow-hidden m-4 flex-grow h-[280px]">
            <div className="p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-4 bg-gray-400"></div>
                <div>
                  <p className="font-bold text-gray-800">Ayaosi Godfrey</p>
                  <p className="text-gray-700 text-sm">Product Manager</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 leading-[32px] tracking-[-0.02em]">"I have always wanted to learn the Wakirike language, but I found it difficult to find resources that were both accessible and effective. That's why I was thrilled to discover the Kirikeni Okwein app. interested in learning the language."</p>
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-lg overflow-hidden m-4 flex-grow h-[280px]">
            <div className="p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-4 bg-gray-400"></div>
                <div>
                  <p className="font-bold text-gray-800">Friday Ndifreke</p>
                  <p className="text-gray-700 text-sm">Painter</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 leading-[32px] tracking-[-0.02em]">
                As a native Wakirike speaker, I was excited to see an app that was designed specifically to help non-native   learn the language. I have been using the Kirikeni Okwein app to teach my non-Wakirike speaking friends, </p>
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-lg overflow-hidden m-4 flex-grow h-[280px]">
            <div className="p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-4 bg-gray-400"></div>
                <div>
                  <p className="font-bold text-gray-800">Ayanwu Blessing </p>
                  <p className="text-gray-700 text-sm ">Product Designer</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 leading-[32px] tracking-[-0.02em]"> The app covers a wide range of language topics, from basic vocabulary to more advanced grammar concepts. The interactive features, such as quizzes and games, make learning fun and engaging.</p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
      <div className=" bg-white flex md:flex-row flex-col-reverse items-center justify-center md:px-40 px-1 py-5 pt-10 md:py-20">
        <div className="md:w-[60%] md:pr-20">
          <h1 className="  text-[#323A46] md:text-[50px] text-[30px]  text-center md:text-left tracking-[-0.04em] font-semibold px-5">
            Effective and Efficient courses.
          </h1>
          <p className="text-[#64748B] leading-[32px] tracking-[-0.02em] px-5 text-center md:text-left">
            Our courses is designed to be interactive, so you'll have plenty of
            opportunities to practice your new language skills with other
            learners and native speakers. With each lesson, you'll gain
            confidence in your ability to speak and understand the Wakirike
            language. You can learn at your own pace, on your own schedule, and
            from anywhere in the world. And because our platform is available on
            both web and mobile devices, you can learn whenever and wherever you
            want.
          </p>
        </div>
        <div className="w-[40%]">
          <Image src={Smile} alt="fish icon" />
        </div>
      </div>
      <Footer />
    </>
  );
}
