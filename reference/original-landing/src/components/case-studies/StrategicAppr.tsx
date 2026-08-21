import React from 'react'

function StrategicAppr({ data }: { data: any }) {
  return (
    <div className='px-4'>
      <div className='grid grid-cols-1 md:grid-cols-12 mt-[50px] gap-6 items-center'>
        <div className='md:col-span-6'>
          <h1 className='text-3xl pt-sans-bold mt-6 md:mt-10'>{data?.title}</h1>
          <p className='text-lg mt-5 pt-sans-regular text-justify break-words'>
            {data?.description}
          </p>
        </div>
        <div className='md:col-span-6 flex justify-center md:justify-end mt-5 md:mt-0'>
          <div className='w-full max-w-[400px]'>
            <img className='w-full h-auto' src={data?.img} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StrategicAppr
