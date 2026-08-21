import React from 'react'
import Testimonial1 from '../Testimonial1'
import Testimonial2 from '../Testimonial2'

function Testimonial() {
  return (
    <div className=''>
        <div className='w-1/2 mx-auto py-10 text-black'>
        <h1 className='pt-sans-bold text-6xl text-center'><i> trusted by many, </i></h1>
        <h1 className='pt-sans-bold text-7xl text-center mt-2 text-[#04B851]'> loved by all. </h1>
        <p className='text-center pt-sans-normal text-lg mt-2'>- hear from our customers and find out how whatsease is revolutionizing the industry with whatsapp-powered events and receiving highly satisfactory customer experiences.</p>
        </div>
        <div className='bg-gradient-to-br from-white via-[#13D960]/30 to-white from-[10%] via-[50%] to-[90%]  py-3'>
  <Testimonial1/>
  <Testimonial2/>
</div>

    </div>

  )
}

export default Testimonial
