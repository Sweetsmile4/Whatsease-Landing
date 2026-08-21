import React from 'react'

export default function ImpactAndResult({ sections }: { sections: any }) {
  return (
    <div>
      <div className='mt-10'>
        {sections.map((section: any, index: any) => (
          <div
            key={index}
            className='grid grid-cols-1 md:grid-cols-12 gap-4 mt-10 items-center'
          >
            {section.isImgFirst ? (
              <>
                {/* Image first on desktop, top on mobile */}
                <div className='md:col-span-5 md:order-0 order-0 flex justify-center md:justify-start'>
                  <div className='w-[80%] mx-auto max-w-[450px]'>
                    <img className='w-full h-auto' src={section.imgSrc} alt='' />
                  </div>
                </div>
                <div className='md:col-span-7  md:order-1 order-1 flex flex-col justify-end items-start md:items-end'>
                  <h1 className='text-3xl pt-sans-bold'>{section.title}</h1>
                  <p className='md:text-xl text-md mt-5 pt-sans-regular md:text-justify break-words'>
                    {section.content}
                  </p>
                  <p className='md:text-xl text-md mt-5 pt-sans-regular md:text-justify break-words'>
                    {section?.secondContent}
                  </p>
                  {section.highlight && (
                    <h1 className='md:text-xl text-md mt-5 pt-sans-bold'>
                      {section.highlight}
                    </h1>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Content first on desktop, top on mobile */}
                <div className='md:col-span-7 md:order-0 order-1'>
                  <h1 className='text-3xl pt-sans-bold'>{section.title}</h1>
                  <p className='md:text-xl text-md mt-5 pt-sans-regular md:text-justify break-words'>
                    {section.content}
                  </p>
                  <p className='md:text-xl text-md mt-5 pt-sans-regular md:text-justify break-words'>
                    {section?.secondContent}
                  </p>
                  {section.highlight && (
                    <h1 className='md:text-xl text-md mt-5 pt-sans-bold'>
                      {section.highlight}
                    </h1>
                  )}
                </div>
                <div className='md:col-span-5 md:order-1 order-0 flex justify-center md:justify-end mt-5 md:mt-0'>
                  <div className='w-full max-w-[450px]'>
                    <img className='w-full h-auto' src={section.imgSrc} alt='' />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
