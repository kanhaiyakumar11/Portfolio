import React from 'react'
// import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { ReactTyped} from "react-typed";


import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import profile from '../assets/profile.png'
// import resum from '../assets/resum.jpg';



function Home() {
  return (
    <>
    
    <div name="Home" className="max-w-screen-2*l container mx-auto px-4 md:ps-20 my-20">
        <div className="flex flex-col md:flex-row ">
        <div className="md:w-1/2 mt-12 md:mt-24 order-2 md:order-1">
            <span>Welcome In My Feed</span>

            <div className="flex space-x-1 text-xl md:text-3xl">
            <h1>Hello, I'm a</h1>
            {/* <span className="text-red-700 font-bold">Developer</span> */}
            <ReactTyped className="text-red-700 font-bold"
          strings={["Developer", "Programmer" , "Kanhaiya Kumar"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

{/* <ReactTyped
      strings={[
        "Search for products",
        "Search for categories",
        "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    /> */}
            </div>
             <br />
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum distinctio assumenda deserunt eius. Aperiam non assumenda architecto excepturi repellat. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            {/* windwo desion */}
        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 pt-2">
        <div className="space-y-2">
          <h1 className="font-bold pt-2 text-lg text-center md:text-left">Availeble</h1>
          <ul className="flex space-x-3 text-3xl pt-2      cursor-pointer">

             <li className="hover:scale-110 duration-200 bg-blue-400  text-blue-200 rounded-xl border-[2px]">
              <a href="https://www.facebook.com/">
              <FaFacebook/>
              </a>
              </li>

             <li className="hover:scale-110 duration-200 bg-blue-500  text-blue-200 rounded-xl border-[2px]">
              <a href="https://in.linkedin.com/">
              <IoLogoLinkedin/>
              </a>
              </li>

             <li className="hover:scale-110 duration-20 bg-white  text-red-500 rounded-xl border-[2px]">
              <a href="https://www.youtube.com/">
              <FaYoutube/>
              </a> 
              </li>

             <li className="hover:scale-110 duration-200 bg-blue-400  text-blue-200 rounded-xl border-[2px]">
              <a href="https://web.telegram.org/a/">
              <FaTelegramPlane/>
              </a>
              </li>

          </ul>
        </div>

        <div className="md:w-flex-row">
          <h1 className="font-bold pt-3 text-lg text-center ">Currenty working on</h1>
              <div className="flex space-x-5 font-xl mt-3">
             <IoLogoJavascript className=" bg-yellow-200 text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
             <FaReact className="text-3xl bg-blue-400 md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
             <DiNodejs className="text-3xl bg-green-400 md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
             <DiMongodb className="text-3xl bg-green-600 md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
             </div>
        </div>
        </div>

        </div>

        {/* image working */}

       <div className=" md:w-1/2 md:ml-48 md:mt-[95px] user-image bg-red-400 w-60 ml-12 order-1">
         <img src={profile} className="md:w-80 w md:h-80 rounded-3xl" />
       </div>
  
       </div>
   </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr />
    <hr />
    </>
  )
}

export default Home
