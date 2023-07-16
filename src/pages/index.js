import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

import Blessing from "@/assets/blessing.png"
import Godfrey from "@/assets/godfrey.png"
import Friday from "@/assets/friday.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {isOpen, setIsOpen} =  useState(false)
  return (
    <>
      <NavBar />
      <header className="md:h-[85vh] md:py-10 md:px-28 px-6 bg-[#003338] flex md:flex-row flex-col-reverse ">
        <div className="md:w-[40vw] flex justify-center">
          {" "}
          <Image src={mockupheader} alt="fish icon" className="w-[350px] h-[490px]" />
        </div>
        <div className="md:w-[60vw] md:py-10 py-5 text-center md:text-left md:pl-[69px] pr-[0px]">
          <h1 className="text-4xl font-[600] text-[#E7EAEE] py-5 md:leading-[80px] md:tracking-normal md:line-clamp-6	 md:text-[3.8rem]">
            Learn Wakirike
             Language with ease
          </h1>
          <p className="py-0 pt-1 text-[#E7EAEE] leading-[25px] tracking-[-0.02em] text-[18px]">
          Discover the beauty and intricacy of the Wakirike language, known for its perceived difficulty even among its native speakers. Dive into the rich language and culture of the Okirika people through Kirikeniokwein. Our app offers an easy, accessible, engaging, and highly effective approach to learning Wakirike. Start your language journey today and unravel the wonders of Wakirike with Kirikeniokwein.
          </p>
          <div className="flex items-center justify-between md:justify-start flex-row space-x-[21px] pt-10">
          <Image
                src={playstore2}
                alt="Apple Store"
                className=" md:h-[70px] md:w-[218px]  h-[56px] w-[42vw]"
              />
             
          
             <Image
                src={applestore2}
                alt="Apple Store"
                className=" md:h-[70px] md:w-[222px]  h-[56px] w-[42vw]"
              />
          </div>
        </div>
      </header>
      <div className="md:px-[100px] px-[20px] bg-white">
        <div className="md:py-10 md:pt-20 bg-white pt-20 ">
          <h1 className="text-[#323A46] md:text-[50px] text-[30px]  md:px-1 tracking-[-0.04em] font-bold md:text-left text-center">
          Why Choose Kirikeniokwein?
          </h1>
          <div className="flex flex-wrap md:flex-row items-center justify-center flex-col pt-3 space-y-10 ">
            <div className="md:w-1/2 w-[90vw] md:mt-[40px]  flex items-center justify-center flex-col space-y-3 md:block">
              <div className="w-fit h-fit bg-gray-500 rounded-full "><Image src={icon1} alt="icon1"/></div>
              <b className="text-[#1A1A1A] text-2xl  mt-5 block">Learn Anytime, Anywhere</b>
              <p className="text-[#4B5768] leading-[32px] tracking-[-0.02em] text-center md:text-left md:mr-5">
              With our mobile app and web-based platform, you can learn Wakirike at your convenience. Whether you're on the go or prefer to study from the comfort of your home, Kirikeniokwein is accessible from any device with an internet connection..{" "}
              </p>
            </div>
            <div className="md:w-1/2 w-[90vw]  flex items-center justify-center flex-col space-y-3 md:block" style={{paddingTop:0}}>
              <div className="w-fit h-fit bg-gray-500 rounded-full "><Image src={icon2} alt="icon1"/></div>
              <b className="text-[#1A1A1A] text-2xl mt-5 block">Personalized Learning Experience</b>
              <p className="text-[#4B5768] leading-[32px] tracking-[-0.02em] text-[#64748B] text-center md:text-left pb-[31px]">
              We understand that everyone learns at their own pace. That's why Kirikeniokwein tracks your progress and provides personalized recommendations based on your strengths and areas for improvement. Maximize your learning potential with tailored lessons and activities.
              </p>
            </div>
            <div className="md:w-1/2 w-[90vw]  flex items-center justify-center flex-col space-y-3 md:block">
              <div className="w-fit h-fit bg-gray-500 rounded-full "><Image src={icon3} alt="icon1"/></div>
              <b className="text-[#1A1A1A] text-2xl mt-5 block">Simplified Learning </b>
              <p className="text-[#4B5768] leading-[32px] tracking-[-0.02em] text-[#64748B] text-center md:text-left md:mr-5">
              Kirikeniokwein simplifies the complexities of the Wakirike language. Our app breaks it down into manageable bits, making learning easy for all levels. With a user-friendly interface and seamless navigation, you can start your Wakirike journey with just a few taps.
              </p>
            </div>
            <div className="md:w-1/2 w-[90vw]  flex items-center justify-center flex-col space-y-3 md:block">
              <div className="w-fit h-fit bg-gray-500 rounded-full "><Image src={icon4} alt="icon1"/></div>
              <b className="text-[#1A1A1A] text-2xl  mt-5 block">Motivation</b>
              <p className="text-[#4B5768] leading-[32px] tracking-[-0.02em] text-[#64748B] text-center md:text-left">
              Our app is designed to fuel your growth by enhancing your learning habits. With a perfect blend of fun learning patterns, timely reminders, and instant feedback, we keep you motivated and help you make continuous progress. Track your journey, celebrate milestones, and witness your language skills thrive as you embark on your learning journey with us.
              </p>
            </div>
          </div>
        </div>
        <div className="md:py-0 bg-white flex flex-col md:flex-row  pt-20 pb-10 md:pb-16 md:pt-5 items-center justify-center">
          <div className="md:w-[35%] flex justify-center">
            <Image src={Fish} alt="fish icon" className="w-[136.06px] h-[182px] md:w-[228px] md:h-[304.76px]"/>
          </div>
          <div className="md:w-[65%] md:pr-20 pt-2">
            <h1 className="text-[#323A46] md:text-[50px] text-[30px] text-center md:text-left tracking-[-0.04em] font-bold">
            Comprehensive Curriculum
            </h1>
            <p className="leading-[32px] tracking-[-0.02em] text-[#64748B] text-center md:text-left text-[16px]">
            Our platform offers a comprehensive curriculum that covers all essential language skills, including reading, writing, listening, and speaking. Dive into audio and text-based lessons, engage in interactive activities, and test your knowledge with assessments.

            </p>
          </div>
        </div>
        <div className="pt-20 md:pt-0 bg-white flex md:flex-row flex-col  md:py-10 md:pr-10">
          <div className="md:w-[60%] md:pr-10">
            <h1 className="text-[#323A46] md:text-[50px] text-[30px] pt-0 md:pt-20  text-center md:text-left tracking-[-0.03em] leading-[50px] font-bold">
            Rich Database of Words and Phrases

            </h1>
            <p className="leading-[32px] tracking-[-0.02em] text-[#64748B] text-[16px] text-center md:text-left md:pr-20">
            Explore our robust database of Wakirike words and phrases, complete with definitions and pronunciation guides. Expand your vocabulary and deepen your understanding of the language with ease.

            </p>
            <div className="flex items-center md:justify-start justify-between flex-cold space-x-2 pt-10">
            
                <Image
                  src={playstore}
                  alt="Apple Store"
                  className=" h-[55px] md:w-[190px] w-[43vw]"
                />
              
            
              <Image
                  src={applestore}
                  alt="Apple Store"
                  className=" h-[55px] md:w-[190px] w-[43vw] "
                />
            </div>
          </div>

          <div className="w-[40%] hidden md:block ">
            <Image src={mockup2} alt="fish icon" className="md:w-full md:h-[470.44px]"/>
          </div>
        </div>
        <div className=" md:py-10 bg-white  md:text-center md:text-left pt-10 ">
        <h1 className="text-[#323A46] md:text-[50px] text-[30px]  text-center md:text-left tracking-[-0.03em] leading-[72px] font-bold">Comments From People</h1>
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
                  <div className="w-10 h-10 rounded-full mr-4 bg-gray-400">
                  <Image src={Godfrey} alt=""/>
                  </div>
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
                  <div className="w-10 h-10 rounded-full mr-4 bg-gray-400">
                    <Image src={Friday} alt=""/>
                  </div>
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
                  <div className="w-10 h-10 rounded-full mr-4 bg-gray-400">
                  <Image src={Blessing} alt=""/>
                  </div>
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
          <div className="md:flex hidden text-center md:text-left space-x-10">
            <div className="bg-white border rounded-lg overflow-hidden my-4 flex-grow h-[280px]">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full mr-4 bg-gray-400">
                    <Image src={Godfrey} alt=""/>
                  </div>
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
            <div className="bg-white border rounded-lg overflow-hidden my-4 flex-grow h-[280px]">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full mr-4 bg-gray-400">
                  <Image src={Friday} alt=""/>
                  </div>
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
            <div className="bg-white border rounded-lg overflow-hidden my-4 flex-grow h-[280px]">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full mr-4 bg-gray-400">
                  <Image src={Blessing} alt=""/>
                  </div>
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
        <div className=" bg-white flex md:flex-row flex-col-reverse items-center justify-center  py-5 pt-10 md:py-20">
          <div className="md:w-[60%] md:pr-20">
            <h1 className="  text-[#323A46] md:text-[50px] text-[30px]  text-center md:text-left tracking-[-0.04em] font-bold ">
              Effective and Efficient courses.
            </h1>
            <p className="text-[#64748B] leading-[32px] tracking-[-0.02em] pb-5 text-center md:text-left">
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
          <div className="w-[40%] md:my-0 mb-7 mt-10">
            <Image src={Smile} alt="fish icon" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
