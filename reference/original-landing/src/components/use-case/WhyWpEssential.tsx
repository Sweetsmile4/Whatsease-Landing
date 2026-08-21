import React from 'react'

const reasonContent = {
  heading1:'Why WhatsApp is Essential for',
  heading2:'Effective Cart Recovery in Modern E-Commerce',
  description:'Traditional recovery methods like emails and web notifications are losing their edge — customers want speed, convenience, and direct communication. That’s where WhatsApp steps in.'
}

function WhyWpEssential({content = reasonContent}:{content:any}) {
  return (
    <div>
          <div>
      <div className='py-12 px-3'>
        <div className='bg-white  px-4'>
            <div className='text-center'>
                <h1 className='text-black pt-sans-bold md:text-4xl sm:3xl  text-2xl'><i> {content?.heading1}  </i> </h1>
                <h1 className='text-[#04B851] pt-sans-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>{content?.heading2}</h1>
                <p className='text-black text-lg pt-sans-regular mt-5 md:w-2/3 mx-auto'>
                  {content?.description}
                </p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WhyWpEssential
