import logo from '../image/logo.png';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { DiDatabase } from "react-icons/di";
import p1 from '../image/p1.png';
import p2 from '../image/p2.png';
import p3 from '../image/p3.png';

function Clients() {
    return (
        <>
            <div className='bg-gray-100 pt-15'>

              {/* header */}
              <div className='place-content-center items-center text-center'>
                <h1 className='text-5xl'>We are happy to work with incredible clients</h1>
        
                <p className='mt-8'>Fortune 500 companies and renowned global brands place their trust in our products, solutions,<br></br>and bespoke software development services.</p>
        
                {/* icon image */}
                <div className='flex items-center place-content-center text-center mt-5'>
                  <img src={logo} className='w-180'></img>
                </div>
              </div>
              
              {/* image collarge */}
              <div className='flex px-2 mt-5 gap-5 justify-center'>
              
                {/* left box */}
                <div className='w-[45%]'>

                  <div>
                    <h1 className='text-3xl'>How It Works</h1>
                  </div>

                  {/* box 1*/}
                  <div className='flex p-5 gap-4'>
              
                  {/*serial no.*/}
                  <div className='flex items-center place-content-center text-center'>
                    <h1 className='bg-gray-100 items-center rounded-4xl text-gray-400 text-7xl p-4'>01</h1>
                  </div>
              
                  {/*content*/}
                  <div className='flex rounded-xl p-3 bg-white shadow-xl gap-2'>

                    <div className='items-center place-content-center'>
                    <FaArrowLeft  className='text-blue-400 mt-2 bg-gray-200 rounded-3xl text-5xl p-2' />
                    </div>

                    <div className='pr-3'>
                    <h1 className='text-2xl'>Sign Up and create Account</h1>
                    <h1 className='text-md'>Fill out your details and showcase your skills.</h1>
                    </div>
                  </div>
              
                  </div>
                  
                  {/* box 2*/}
                  <div className='flex p-5 gap-4'>
              
                  {/*content*/}
                  <div className='flex rounded-xl p-3 bg-white shadow-xl gap-2'>

                    <div className='items-center place-content-center'>
                    <FaArrowUp  className='text-orange-400 mt-2 bg-orange-200 rounded-3xl text-5xl p-2' />
                    </div>

                    <div className='pr-3'>
                    <h1 className='text-2xl'>Upload Your Portfolio</h1>
                    <h1 className='text-md'>Add Your resume, videos, and more.</h1>
                    </div>
                  </div>
                  
                  {/*serial no.*/}
                  <div className='flex items-center place-content-center text-center'>
                    <h1 className='bg-gray-100 flex items-center place-content-center text-center rounded-4xl text-gray-400 text-7xl p-4'>02</h1>
                  </div>
              
                  </div>

                  {/* box 3*/}
                  <div className='flex p-5 gap-4'>
              
                  {/*serial no.*/}
                  <div className='flex items-center place-content-center text-center'>
                    <h1 className='bg-gray-100 items-center rounded-4xl text-gray-400 text-7xl p-4'>03</h1>
                  </div>
              
                  {/*content*/}
                  <div className='flex rounded-xl p-3 bg-white shadow-xl gap-2'>

                    <div className='items-center place-content-center'>
                    <DiDatabase  className='text-purple-400 mt-2 bg-purple-200 rounded-3xl text-5xl p-2' />
                    </div>

                    <div className='pr-3'>
                    <h1 className='text-2xl'>Get Discovered</h1>
                    <h1 className='text-md'>Let employers find and contact you.</h1>
                    </div>
                  </div>
              
                  </div>

                </div>
                      
                {/* right box */}
                <div className='w-[45%]'>
              
                  {/* image box 1 2 */}
                  <div className='flex gap-2'>

                    {/* image 1 */}
                    <div className="rounded-2xl w-100 h-[300px] bg-cover bg-center inset-shadow-lg" style={{ backgroundImage: `url(${p1})` }}>
                    </div>
                  
                    {/* image 2 */}
                    <div className="rounded-2xl w-150 h-[400px] bg-cover bg-center inset-shadow-lg" style={{ backgroundImage: `url(${p2})` }}>
                    </div>
                  
                  </div>
                  
                  {/* image 3 */}
                  <div className='flex bg-white rounded-4xl p-3 items-center place-content-center mt-[-10px] w-100'>
                    <div className="rounded-2xl w-60 h-[90px] bg-cover bg-center inset-shadow-lg" style={{ backgroundImage: `url(${p3})` }}>
                    </div>
                    <div className='items-center place-content-center'>
                      <h1 className='text-blue-500 text-xl font-bold'>10K+</h1>
                      <h1 className='text-xl text-gray-400'>Job Seekers</h1>
                    </div>
                  </div>
              
                </div>

              </div>

            </div>
        </>
    )
}

export default Clients;

