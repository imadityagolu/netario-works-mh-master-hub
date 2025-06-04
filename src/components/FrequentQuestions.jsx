import { FaPlus } from "react-icons/fa6";

function FrequentQuestions() {
    return(
        <>
    {/* frequent questions */}
    <div className='py-20'>

      {/* header */}
      <div className='flex justify-between px-25'>
        <div>
          <h1 className='text-4xl'>Frequently asked Questions</h1>
        </div>
      </div>

      {/* question box */}
      <div className='flex px-10 mt-5 gap-5 justify-center'>

        {/* left box */}
        <div className='w-[45%]'>

          {/* box 1*/}
          <div className='flex border-1 rounded-3xl border-gray-100 p-5 gap-4'>

            {/*serial no.*/}
            <div>
              <h1 className='bg-gray-100 items-center rounded-4xl text-2xl p-4'>01</h1>
            </div>

            {/*content*/}
            <div>
              <h1 className='text-2xl'>How do I create an account on the job board?</h1>
              <br></br>
              <h1 className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sunt quia unde quos quisquam ducimus totam eum! Ratione, esse quod!</h1>
            </div>

            {/*dropdown*/}
            <div>
              <FaPlus className='text-blue-400 mt-2' />
            </div>

          </div>

          {/* box 2*/}
          <div className='flex border-1 rounded-3xl border-gray-100 p-5 gap-4 mt-5'>

            {/*serial no.*/}
            <div>
              <h1 className='bg-gray-100 items-center rounded-4xl text-2xl p-4'>02</h1>
            </div>

            {/*content*/}
            <div>
              <h1 className='text-2xl'>How do I apply for a job through the platform?</h1>
              <br></br>
              <h1 className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sunt quia unde quos quisquam ducimus totam eum! Ratione, esse quod!</h1>
            </div>

            {/*dropdown*/}
            <div>
              <FaPlus className='text-blue-400 mt-2' />
            </div>

          </div>

          {/* box 3*/}
          <div className='flex border-1 rounded-3xl border-gray-100 p-5 gap-4 mt-5'>

            {/*serial no.*/}
            <div>
              <h1 className='bg-gray-100 items-center rounded-4xl text-2xl p-4'>03</h1>
            </div>

            {/*content*/}
            <div>
              <h1 className='text-2xl'>How can I track the status of my job applications?</h1>
              <br></br>
              <h1 className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sunt quia unde quos quisquam ducimus totam eum! Ratione, esse quod!</h1>
            </div>

            {/*dropdown*/}
            <div>
              <FaPlus className='text-blue-400 mt-2' />
            </div>

          </div>

        </div>
        
        {/* right box */}
        <div className='w-[45%]'>

          {/* box 4*/}
          <div className='flex border-1 rounded-3xl border-gray-100 p-5 gap-4 bg-blue-200'>

            {/*serial no.*/}
            <div>
              <h1 className='bg-gray-100 items-center rounded-4xl text-2xl p-4'>04</h1>
            </div>

            {/*content*/}
            <div>
              <h1 className='text-2xl'>How do I create an account on the job board?</h1>
              <br></br>
              <h1 className='text-lg'>Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use the advanced search filters to narrow down results by industry, job type (full-time, part-time, freelance), and experience level. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae exercitationem amet corrupti</h1>
            </div>

            {/*dropdown*/}
            <div>
              <FaPlus className='text-blue-400 mt-2' />
            </div>

          </div>

          {/* box 5*/}
          <div className='flex border-1 rounded-3xl border-gray-100 p-5 gap-4 mt-5'>

            {/*serial no.*/}
            <div>
              <h1 className='bg-gray-100 items-center rounded-4xl text-2xl p-4'>05</h1>
            </div>

            {/*content*/}
            <div>
              <h1 className='text-2xl'>How do I create an account on the job board?</h1>
              <br></br>
              <h1 className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sunt quia unde quos quisquam ducimus totam eum! Ratione, esse quod!</h1>
            </div>

            {/*dropdown*/}
            <div>
              <FaPlus className='text-blue-400 mt-2' />
            </div>

          </div>

        </div>

      </div>

    </div>
        </>
    )
}

export default FrequentQuestions;