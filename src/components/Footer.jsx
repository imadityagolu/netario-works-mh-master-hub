import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return(
        <>
    {/* footer */}
    <div className='flex gap-20 justify-between bg-linear-to-br from-yellow-500 to-yellow-100 w-full pt-8 px-30 pb-4'>

      {/* information */}
      <div className='w-110'>

      {/* info */}
      <div className='text-base/10'>
        <h1 className='text-4xl text-blue-500'>MH.Master Hub</h1>

        <p><b>Corporate Head Office</b>: 3787 Jerry Dove Drive, Florence, South Carolina, 29501, United States.</p>

        <p><b>Phone</b>: 843-496-7759</p>

        <p><b>Fax</b>: 02-222264303</p>

        <p><b>Email</b>: info@mastershub.com</p>
      </div>

      {/* copyright */}
      <div className='mt-15'>
        <p>©2024 All rights reserved</p>
      </div>

      </div>

      {/* about us */}
      <div className=''>
        <div className='text-base/12'>
          <h1 className='text-2xl font-bold'>About us</h1>
          <p>Company milestone</p>
          <p>Web mail</p>
          <p>Board of Directors</p>
          <p>Senior Management</p>
        </div>
      </div>

      {/* others */}
      <div className=''>
        <div className='text-base/12'>
          <h1 className='text-2xl font-bold'>Others</h1>
          <p>How it works</p>
          <p>Terms and condition</p>
          <p>Privacy Policy</p>
          <p>About Us</p>
        </div>
      </div>

      {/* others */}
      <div className=''>
        <div className='text-base/12'>
          <h1 className='text-2xl font-bold'>Others</h1>
          <p>How it works</p>
          <p>Terms and condition</p>
          <p>Privacy Policy</p>
          <p>About Us</p>
        </div>

        {/* icons */}
        <div className='flex gap-5 mt-20'>
          <FaInstagram className='text-xl'/>
          <FaTelegramPlane className='text-xl'/>
          <AiOutlineTikTok className='text-xl'/>
          <FaYoutube className='text-xl'/>
        </div>

      </div>

    </div>
        </>
    )
}

export default Footer;