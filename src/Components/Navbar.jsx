import React, { useState } from 'react';
import logo from '../assets/new.jpg';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import resum from '../assets/resum.jpg'
import { Link } from 'react-scroll';


function Navbar() {
  const [menu, setMenu] = useState(false);
  // create array
  const navItems=[
      {
        id:1,
        text:"Home"
      },

      {
        id:2,
        text:"About"
      },

      {
        id:3,
        text:"Portfolio"
      },

      {
        id:4,
        text:"Experience"
      },

      {
        id:5,
        text:"Contact"
      },
    
  ]


  return (
    <>
      <div className="p-3 pr-10 shadow-md h-16 fixed top-0 right-0 left-0 bg-gradient-to-br from-blue-500 to-blue-30 bg-opacity-70 bg-cover z-50 bg-white ">
        <div className="flex justify-between items-center h-12">
          <div className="flex space-x-2">
            <img src={resum} alt="" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">Kanhaiya Kuma<span className='text-red-500 text-2xl'>R</span></h1>
              <p className='text-sm'>Web Developer</p>
            </div>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
            {
            navItems.map(({ id, text }) => (
             <li className=' hover:text-red-400 hover:scale-105 duration-200 cursor-pointer' key={id}>
              <Link to = {text}
              smooth = {true}
              duration={500}
              offset={-70}
              activeClass="active"
              >
              {text}
              </Link>

              </li>
            ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">{menu ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}</div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu &&(
          <div className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 bg-orange-300 rounded-xl shadow-orange-300 h-80 overflow-hidden border-[2px] mt-28  translate-x-4 duration-200">
          <ul className="md:hidden ">
             {
            navItems.map(({ id, text }) => (
             <li className='  p-2 hover:text-red-400 hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>
               <Link onClick={() => setMenu(!menu)} to = {text}
              smooth = {true}
              duration={500}
              offset={-70}
              activeClass="active"
              >
              {/* {text} */}
              {text}
              </Link>
              </li>
            ))}
          </ul>
          </div>
        )}
        
      </div>
    </>
  );
}

export default Navbar;
