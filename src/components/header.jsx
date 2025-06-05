import { useState } from "react";
import { FaBagShopping, FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

import img1 from '../image/01.png';
import img2 from '../image/02.png';
import img3 from '../image/03.png';

function Header() {
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <>
      {/* header */}
      <div className='bg-gradient-to-br from-yellow-500 to-yellow-100 py-4 sm:py-8 px-4 sm:px-20'>

        {/* navbar */}
        <nav className='flex justify-between items-center'>
          <h1 className="text-2xl sm:text-3xl text-white font-bold">MH. Master Hub</h1>

          <div className='hidden md:flex gap-5 text-base sm:text-md'>
            <a href="" className="hover:underline">Create Resume</a>
            <a href="" className="hover:underline">Skillset</a>
            <a href="" className="hover:underline">Partnered Job Board</a>
            <a href="" className="hover:underline">Contact Us</a>
          </div>

          <div className='hidden md:flex mt-[-5px] rounded-3xl border border-white p-3 text-white hover:bg-white hover:text-black hover:border-white transition-colors'>
            <a href="#" className='flex font-bold gap-2 items-center'>
              Register Now 
              <MdArrowOutward className='text-2xl sm:text-3xl bg-white text-blue-500 rounded-3xl p-1'/>
            </a>
          </div>

          <button 
            className="text-2xl md:hidden cursor-pointer transition-transform duration-300" 
            onClick={handleClick}
          >
            {flag ? (
              <div className="border rounded-lg p-1 transition-transform duration-300 text-white px-4 py-2 text-3xl">
                X
              </div>
            ) : (
              <div className="border rounded-lg p-2 transition-transform duration-300 text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </div>
            )}
          </button>
        </nav>

        {/* navbar for small screen */}
        {flag && (
          <div className='md:hidden flex flex-col gap-3 mt-4 text-base'>
            <a href="" className="m-2 hover:underline">Create Resume</a>
            <a href="" className="m-2 hover:underline">Skillset</a>
            <a href="" className="m-2 hover:underline">Partnered Job Board</a>
            <a href="" className="m-2 hover:underline">Contact Us</a>
            <a href="#" className='m-2 w-full sm:w-48 flex font-bold gap-2 items-center justify-center rounded-3xl border border-white p-3 text-white hover:bg-white hover:text-black hover:border-white transition-colors'>
              Register Now 
              <MdArrowOutward className='text-2xl sm:text-3xl bg-white text-blue-500 rounded-3xl p-1'/>
            </a>
          </div>
        )}

        {/* description */}
        <div className='w-full text-center'>
          <div className='flex w-full items-center mt-6 sm:mt-10 justify-center'>
            <h1 className='flex w-64 sm:w-80 p-2 bg-white rounded-3xl justify-center text-center items-center text-sm sm:text-base'>
              <FaBagShopping className="mr-2 text-lg sm:text-xl" />Your #1 Platform for Skill Sharing
            </h1>
          </div>

          <h1 className='text-3xl sm:text-6xl md:text-6xl mt-6 sm:mt-8 text-blue-950 font-bold leading-tight'>
            Showcase Your Mastery.
            <br />
            Get Connected
          </h1>

          <h1 className='mt-4 sm:mt-5 text-base sm:text-xl px-4'>Create your profile, showcase your skills, and let employers find you.</h1>

          <div className='flex w-full flex-col sm:flex-row text-center justify-center items-center mt-6 sm:mt-8 gap-2 px-4'>
            <h1 className='flex w-full sm:w-[30rem] justify-center bg-white p-3 rounded-3xl text-sm sm:text-base'>
              <FaSearch className='text-lg sm:text-2xl items-center mr-2' /> e.g. UX Designer | 
              <FaLocationDot className='text-lg sm:text-2xl items-center mx-2' /> e.g. Liverpool, USA
            </h1>
            <span className='flex w-24 sm:w-24 justify-center bg-blue-500 p-3 rounded-3xl text-white text-sm sm:text-base mt-2 sm:mt-0'>Search</span>
          </div>
        </div>

        {/* small screen images */}
        <div className='flex flex-wrap mt-20 w-full items-center justify-center md:hidden slider-container'>
          <img src={img1} alt="Image 1" className="w-100 sm:w-48 h-auto object-cover" />
          <img src={img2} alt="Image 2" className="w-100 sm:w-48 h-auto object-cover" />
          <img src={img3} alt="Image 3" className="w-100 sm:w-48 h-auto object-cover" />
        </div>
        
        {/* big screen image*/}
        <div className='hidden md:flex flex-wrap mt-20 w-full items-center justify-center'>
          <img src={img1} alt="Image 1" className="w-80 object-cover" />
          <img src={img2} alt="Image 2" className="w-80 object-cover" />
          <img src={img3} alt="Image 3" className="w-80 object-cover" />
          <img src={img1} alt="Image 1" className="w-80 object-cover" />
        </div>
        
      </div>
    </>
  );
}

export default Header;