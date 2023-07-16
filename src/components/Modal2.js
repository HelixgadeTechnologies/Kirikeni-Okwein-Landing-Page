import React from 'react'

function Modal2({children}) {
  return (
    <div className="fixed z-[50] w-screen h-screen bg-black top-0 left-0 bg-opacity-50 flex justify-center items-center">
        <div className="absolute z-[100] bg-white rounded-[20px] w-[415px] h-fit text-center px-8 py-8">
      {children}
    </div>
    </div>
  )
}

export default Modal2
