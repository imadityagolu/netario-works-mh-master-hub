
import { FaComputer } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";

import c01 from '../image/c01.png';

function selector() {

  return (
    <>
    {/* selector */}
    <div className='mt-20 mb-50 px-10'>

      {/* header */}
      <div className=''>
        <h1 className='text-5xl text-center'>Why Choose <br></br>Masters in Me?</h1>
        <p className='text-gray-400 text-center mt-5'>Unlock your true potential and discover a world of opportunities <br></br>that align with your skills, interests, and aspirations</p>
      </div>

      {/* bubbling body */}
      <div className='flex w-full text-center place-content-center items-center justify-around gap-15'>

        {/* left */}
        <div id="left" className='mt-30'>

          <div className='text-center items-center place-content-center p-7 shadow-xl rounded-4xl w-50'>
          
          <div className='flex items-center text-center place-content-center'>
            <FaComputer className='text-6xl text-blue-900'/>
          </div>

          <h1 className='text-2xl mt-3'>Showcase Work</h1>

          <p className='text-gray-500 mt-2'>Showcase your project to stand out among all</p>

          <div className='flex gap-2 place-content-center mt-5'>
            <span className='flex w-25 place-content-center bg-blue-500 p-3 rounded-3xl text-white'>Add Work</span>
          </div>

          </div>

          <div className='flex text-center items-center place-content-center p-3 shadow-xl rounded-4xl w-50'>
          
          <div className='text-center place-content-center'>
            <FaGlobeAmericas className='text-4xl text-blue-900'/>
          </div>
          
          <div className='text-left'>
          <h1 className='text-2xl mt-3'>100K + </h1>
          <p>Worldwide Active Users</p>
          </div>

          </div>

        </div>

        {/* center */}
        <div id="center">
          <img src={c01} className=''></img>
        </div>

        {/* right */}
        <div id="right" className='mt-1'>
          <div className='flex text-center items-center place-content-center p-3 shadow-xl rounded-4xl w-50'>
          
          <div className='text-center place-content-center'>
            <IoChatbubblesOutline className='text-5xl text-blue-900'/>
          </div>
          
          <div className='text-left'>
          <h1 className='text-2xl mt-3 font-bold'>Networking Opportunities</h1>
          </div>

          </div>

          <div className='text-center items-center place-content-center p-5 shadow-xl rounded-4xl w-50'>
          
          <div className='flex items-center text-center place-content-center'>
            <FaComputer className='text-6xl text-blue-900'/>
          </div>

          <h1 className='text-2xl mt-3 font-bold'>Resume Builder</h1>

          <p className='text-gray-500 mt-2'>Create a professional resume using our built-in resume builder.</p>

          <div className='flex gap-2 place-content-center mt-5'>
            <span className='flex w-30 place-content-center bg-blue-500 p-3 rounded-3xl text-white'>Build Resume</span>
          </div>

          </div>

        </div>

      </div>

    </div>

    </>
  )
}

export default selector
