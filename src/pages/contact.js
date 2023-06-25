import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className='w-screen h-fit'>
      <div className="flex items-center justify-center h-screen">
  <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2  ">
    <div className='text-center'>
      <h1 className="text-2xl font-bold mb-4 text-[#005A58]">Contact Us</h1>
      <p className="text-[#005A58]">We’d love to hear from you. Please fill out this form.</p>
    </div>
    <form className="space-y-4">
      <div>
        <label className="block font-medium text-gray-700 mb-2" for="email">
          Email
        </label>
        <input className="form-input w-full py-3 border-[#005A58] border bg-white" id="email" type="email" required/>
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-2" for="name">
          Full Name
        </label>
        <input className="form-input w-full py-3 border-[#005A58] border bg-white" id="name" type="text" required/>
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-2" for="message">
          Message
        </label>
        <textarea className="form-input w-full h-40 border-[#00403F] border bg-white" id="message" required></textarea>
      </div>
      <button className="w-full  bg-[#005A58] text-white font-bold py-2 px-4 rounded hover:bg-white hover:border hover:border-[#005A58] hover:text-[#005A58]" type="submit">
        Send message
      </button>
    </form>
  </div>
</div>

      </div>
      <Footer/>
    </>
  )
}
