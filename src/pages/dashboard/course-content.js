import React from 'react'
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
function CourseContent() {
  return (
    <div className='bg-white w-screen h-screen overflow-hidden px-[30vw] py-20'>
        <div>
            <div className='flex justify-center items-center space-x-3'>
            <div className="bg-[#F7F8F9] py-[1px] px-[7px]">X</div>
            <div class="w-full h-4 bg-[#EEEEEF] rounded-full overflow-hidden">
                <div class="h-full bg-[#00A0AD]" style={{width: "50%"}}></div>
            </div>
            </div>
            <h3 className='text-center text-2xl font-semibold py-5'>Translate this sentence</h3>
            <div className='border'></div>
            <div className='border-b  py-5 flex justify-center items-center space-x-5'>
                <div className='rounded-full text-white bg-[#005259] p-5'>
                <VolumeUpOutlinedIcon className='text-[20px]'/>

                </div>
            <h3 className='text-center text-2xl font-semibold'>Translate this sentence</h3>
            </div>
        <button
        //   onClick={handleStepsChange}
          className="w-full font-semibold w-[90vw] pt-5 pb-5 text-center rounded-lg mt-10  bg-[#005259] text-white  py-[10px] px-4 rounded hover:bg-white hover:border text-[16px] hover:border-[#005A58] hover:text-[#005A58]"
          type="submit"
        >
          Submit
        </button>
        </div>
    </div>
  )
}

export default CourseContent
