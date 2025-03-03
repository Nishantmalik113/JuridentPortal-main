import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import Footer from './Footer'


export default function Hero() {
  window.scrollTo(0,0)
    let ScrollContainer = document.querySelector(".carousel")
    const [width, setWidth] = useState(0)
    const refContainer = useRef();
  
    useEffect(()=>{
      let ScrollContainer = document.querySelector(".carousel")
      if (refContainer.current) {
          setWidth(refContainer.current.offsetWidth)
      }
      console.log(width, refContainer, ScrollContainer)
      }, [])

  return (
    
    <div className="min-h-screen flex flex-col bg-[#0B0B26]">
      <Header/>
      
      <section className= 'min-h-screen overflow-hidden flex flex-col bg-[#060223] items-center justify-center hero relative'>
      <img src="../ellipse-top.png" className='absolute rotate-27 right-[-25vw] top-[-20vh] sm:right-[-150px] sm:top-[-200px] z-102' alt="" />
      <img src="../ellipse-bottom.png" className='absolute sm:bottom-[-300px] bottom-[-20vh]' alt="" />
        <img src="../JURIDENT.png" className='absolute opacity-0 sm:opacity-[1] left-5' alt="" />
        <div ref={refContainer} className='carousel snap-x snap-mandatory relative items-center mx-20'>
            <div className='Carousel_card snap-center flex flex-col items-center' >
                <img src="../Jurident-Logo.png" className='sm:w-fit w-[350px] z-101' alt="" />
            </div>
            <div className='Carousel_card  snap-center flex flex-col items-center gap-10' >
                <div className='flex gap-10 items-center justify-center w-[150px] sm:w-[450px]'>
                    <img src="../organised.png" className=' z-101' alt="" />
                    <div className='flex flex-col gap-5'>
                        <h1 className=' text-3xl sm:text-5xl font-semibold text-[#C99F4A]'>Stay Organised</h1>
                        <p className='sm:text-3xl text-white'>Ensure that your schedule is accurate by entering new appointments or events into our digital calender.</p>
                    </div>
                </div>
                <img src="../organised-nav.png" alt="" />
            </div>
            <div className='Carousel_card snap-center flex flex-col items-center gap-10' >
            <div className='flex items-center justify-center w-[350px] sm:w-[650px]'>
                    <img src="../late.png" className='w-[200px] sm:w-full z-101' alt="" />
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl sm:text-5xl font-semibold text-[#C99F4A]'>Never be Late</h1>
                        <p className='sm:text-3xl text-white'>Our alarm system integrated within the app will notify you of any upcoming events.
                        </p>
                    </div>
                </div>
                <img src="../late-nav.png" alt="" />
            </div>
            <div className='Carousel_card snap-center flex flex-col items-center gap-10' >
            <div className='flex gap-10 items-center justify-center w-[150px] sm:w-[450px]'>
                    <img src="../everything.png" className=' z-101' alt="" />
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl sm:text-5xl font-semibold text-[#C99F4A]'>Everything in one Place</h1>
                        <p className='sm:text-3xl text-white'>Add your personal notes to any case you'd prefer.</p>
                    </div>
                </div>
                <img src="../everything-nav.png" alt="" />
            </div>
        </div>
        <div className='absolute opacity-0 sm:opacity-[1] pointer-events-none sm:pointer-events-auto z-103 flex items-center justify-center sm:gap-[80vw] gap-[50vw]'>
            <button className=' w-15 sm:w-20' onClick={()=>{
                      ScrollContainer.style.scrollBehavior = "smooth"
                      ScrollContainer.scrollLeft -= width
                  }}><img src="../left-arrow.png" alt="" /></button>
           <button className=' w-15 sm:w-20' onClick={()=>{
                      ScrollContainer.style.scrollBehavior = "smooth"
                      ScrollContainer.scrollLeft += width
                  }}><img src="../right-arrow.png" alt="" /></button>
        </div>
    </section>

      <Footer/>
    </div>
  )
}    

