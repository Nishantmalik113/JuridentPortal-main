import React from 'react'
import { Link } from 'react-router-dom'

export default function EmailVerification() {
  return (
    <div className="min-h-screen overflow-hidden py-10 sm:py-0  flex flex-col bg-[#060223] items-center justify-center relative">
        <img src="../ellipse-top.png" className='absolute rotate-27 right-[-25vw] top-[-20vh] sm:right-[-150px] sm:top-[-200px] z-102' alt="" />
        <img src="../ellipse-bottom.png" className='absolute sm:bottom-[-300px] bottom-[-20vh]' alt="" />
        <img src="../JURIDENT.png" className='absolute opacity-0 sm:opacity-[1] left-5' alt="" />
        <img src="../Jurident-Logo-bottom.png" className='absolute opacity-0 sm:opacity-[1] right-5 bottom-5' alt="" />
        <div className='flex flex-col gap-3 items-center p-5 z-101 rounded-lg w-full'>
            <img src="../EmailVerification.png" alt="" className='w-[100px]' />
            <h2 className="text-5xl font-semibold text-[#C99F4A] text-center">Email Verification</h2>
            <div className='flex flex-col gap-5 max-w-3xs'>
                <p className="text-center text-gray-300 mt-1 text-sm">Please enter the code you might’ve just recieved on your registered email.</p>
                <input type="text" placeholder="6 digit code" className="w-full p-3 bg-white text-black rounded-lg focus:outline-none" />
                <Link to="../dashboard">
                    <button type='button' className="w-full bg-blue-600 p-2.5 rounded-lg text-white font-semibold hover:bg-blue-700 text-lg">
                        Verify
                    </button>
                </Link>
            </div>
            <p className="text-center text-white cursor-pointer mt-3 text-sm">
                Didn't get code? <a href='../EmailVerification'className='text-[#C99F4A]' > Resend OTP</a>
            </p>
        </div>
    </div>
  )
}
