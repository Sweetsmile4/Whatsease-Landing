import React from 'react'

function CaseStudiesFeature({features}:{features:any}) {
  return (
    <div>
      <div className=''>

<div className='mt-14 md:mt-[50px] mb-10 p-3'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5'>
    {features.map((feature:any, index:any) => (
      <div key={index} className='w-full max-w-[380px] mx-auto text-center'>
        <div className='md:w-[300px] md:h-[300px] w-[180px] h-[180px] mx-auto'>
          <img className='w-full h-full object-fill' src={feature.image} alt={feature.title} />
        </div>
        <div className='mt-5'>
          <h1 className='text-2xl pt-sans-bold'>{feature.title}</h1>
          <p className='pt-sans-regular text-base sm:text-lg md:text-[16px] mt-6'>
            {feature.description}
          </p>
        </div>
      </div>
    ))}
  </div>


</div>

</div>
    </div>
  )
}

export default CaseStudiesFeature
