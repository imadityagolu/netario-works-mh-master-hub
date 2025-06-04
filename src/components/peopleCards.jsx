import { IoArrowUndoCircle } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { IoMdGitMerge } from "react-icons/io";
import { FaPenRuler } from "react-icons/fa6";
import { BiLogoNodejs } from "react-icons/bi";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoWalkSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

import img4 from '../image/010.png';
import img5 from '../image/020.png';
import img6 from '../image/030.png';
import img7 from '../image/040.png';
import img8 from '../image/050.png';
import img9 from '../image/060.png';

function PeopleCards() {
  return (
    <>
      {/* people cards */}
      <div className="mt-10 mb-8 text-center px-4">

        {/* description */}
        <h1 className="text-3xl sm:text-4xl font-bold">
          Discover the <br /> Emerging Masters
        </h1>
        <p className="mt-4 text-sm sm:text-base">
          Find the best master for your company and boost<br /> your business 10x!
        </p>

        {/* type */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-8 text-gray-500">
          <a href="#" className="rounded-lg border-2 p-2 flex items-center justify-center text-sm sm:text-base">
            <IoArrowUndoCircle className="text-xl sm:text-2xl mr-1" /> All
          </a>
          <a href="#" className="rounded-lg border-2 p-2 flex items-center justify-center text-sm sm:text-base">
            <IoCodeSlash className="text-xl sm:text-2xl mr-1" /> Developer
          </a>
          <a href="#" className="rounded-lg border-2 p-2 flex items-center justify-center text-sm sm:text-base">
            <BiLogoNodejs className="text-xl sm:text-2xl mr-1" /> UI Designer
          </a>
          <a href="#" className="rounded-lg border-2 p-2 flex items-center justify-center text-sm sm:text-base">
            <IoMdGitMerge className="text-xl sm:text-2xl mr-1" /> Project Manager
          </a>
          <a href="#" className="rounded-lg border-2 p-2 flex items-center justify-center text-sm sm:text-base">
            <FaPenRuler className="text-lg sm:text-xl mr-1" /> Designer
          </a>
          <a href="#" className="rounded-lg border-2 p-2 flex items-center justify-center text-sm sm:text-base">
            <IoDocumentTextSharp className="text-xl sm:text-2xl mr-1" /> Accountant
          </a>
          <a href="#" className="rounded-lg border-2 p-2 flex items-center justify-center text-sm sm:text-base">
            <IoWalkSharp className="text-xl sm:text-2xl mr-1" /> Human Resource
          </a>
        </div>

        {/* cards */}
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-5 justify-center px-4 sm:px-10">

          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">

            <div className="flex justify-center">
              <img src={img4} className="rounded-3xl w-25 h-25  object-cover" alt="Zrand Hobs" />
            </div>

            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>

            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Zrand Hobs</h1>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">Developer</p>

            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Glimp</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wordpress</span>
            </div>

          </div>

          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
            <div className="flex justify-center">
              <img src={img5} className="rounded-3xl  w-25 h-25 object-cover" alt="Dorothy Wood" />
            </div>
            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Dorothy Wood</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Developer</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Elementor</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wix</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Illustrator</span>
            </div>
          </div>

          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
            <div className="flex justify-center">
              <img src={img6} className="rounded-3xl  w-25 h-25 object-cover" alt="Timothy Baker" />
            </div>
            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Timothy Baker</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Teacher</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Figma</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Elementor</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wordpress</span>
            </div>
          </div>

          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
            <div className="flex justify-center">
              <img src={img7} className="rounded-3xl  w-25 h-25 object-cover" alt="Shane Pratt" />
            </div>
            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Shane Pratt</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Developer</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Figma</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wordpress</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Gimp</span>
            </div>
          </div>

          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
            <div className="flex justify-center">
              <img src={img8} className="rounded-3xl  w-25 h-25 object-cover" alt="Frances Washing" />
            </div>
            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Frances Washing</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Developer</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Wordpress</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wix</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Illustrator</span>
            </div>
          </div>

          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
            <div className="flex justify-center">
              <img src={img9} className="rounded-3xl  w-25 h-25 object-cover" alt="Jason Bell" />
            </div>
            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Jason Bell</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Web Designer</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Elementor</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wordpress</span>
            </div>
          </div>
          
          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
            <div className="flex justify-center">
              <img src={img4} className="rounded-3xl  w-25 h-25 object-cover" alt="Zrand Hobs" />
            </div>
            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Zrand Hobs</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Developer</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Glimp</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wordpress</span>
            </div>
          </div>

          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
            <div className="flex justify-center">
              <img src={img5} className="rounded-3xl  w-25 h-25 object-cover" alt="Dorothy Wood" />
            </div>
            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Dorothy Wood</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Developer</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Elementor</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wix</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Illustrator</span>
            </div>
          </div>

          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
            <div className="flex justify-center">
              <img src={img6} className="rounded-3xl  w-25 h-25 object-cover" alt="Timothy Baker" />
            </div>
            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Timothy Baker</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Teacher</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Figma</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Elementor</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wordpress</span>
            </div>
          </div>

          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
            <div className="flex justify-center">
              <img src={img7} className="rounded-3xl w-25 h-25 object-cover" alt="Shane Pratt" />
            </div>
            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Shane Pratt</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Developer</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Figma</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wordpress</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Gimp</span>
            </div>
          </div>

          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
            <div className="flex justify-center">
              <img src={img8} className="rounded-3xl  w-25 h-25 object-cover" alt="Frances Washing" />
            </div>
            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Frances Washing</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Developer</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Wordpress</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wix</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Illustrator</span>
            </div>
          </div>

          <div className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
            <div className="flex justify-center">
              <img src={img9} className="rounded-3xl w-25 h-25 object-cover" alt="Jason Bell" />
            </div>
            <div className="flex justify-center mt-3">
              <p className="flex items-center text-sm sm:text-base">
                <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> 4.8 (6)
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl mt-3 font-semibold">Jason Bell</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Web Designer</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="rounded-2xl border py-1 px-3 text-sm">Elementor</span>
              <span className="rounded-2xl border py-1 px-3 text-sm">Wordpress</span>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default PeopleCards;