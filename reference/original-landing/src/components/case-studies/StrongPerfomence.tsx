'use client'
import React from 'react'

function StrongPerformance({ data }: { data: any }) {
  return (
    <div className='grid lg:grid-cols-12  items-center'>
      <div className='py-[50px] lg:col-span-6 col-span-6 md:order-0 order-1'>
        <h1 className='pt-sans-bold text-3xl'>{data?.title}</h1>
        <p className='pt-sans-regular mt-3 text-lg '>
          {data?.description}
        </p>

        <ul className='list-disc pl-5 mt-5'>
          {
            data?.items?.map((item: any, id: number) => (
              <li key={id} className='text-black pt-sans-regular mb-2 text-lg' dangerouslySetInnerHTML={{ __html:item }}>
              
              </li>
            ))
          }
        </ul>
      </div>
      <div className='lg:col-span-6 col-span-6 flex justify-end md:order-1 order-0'>
        <div className='md:w-[90%] w-[80%] md:mx-0 mx-auto'>
          <img className='w-full' src='/svg/all/illus.svg' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default StrongPerformance
