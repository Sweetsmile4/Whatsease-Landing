'use client'
import { FC } from 'react';

interface Feature {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFirst: boolean;
}

interface ReasonToChooseProps {
  data: {
    title: string;
    companyName: string;
    competitor: string;
    features: Feature[];
  };
}

const ReasonToChoose: FC<ReasonToChooseProps> = ({ data }) => {
  const { title, companyName, competitor, features } = data;
  
  return (
    <div>
      <div className="min-h-[300px] px-4 sm:px-8 md:px-12 lg:px-20 py-8 bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%]">
        <div className="min-h-[300px]">
          {/* Heading Section */}
          <div className="text-center">
            <h1 className="text-black pt-sans-bold text-2xl sm:text-3xl lg:text-4xl">
              <i>{title}</i>
            </h1>
            <h1 className="text-[#04B851] pt-sans-bold text-3xl sm:text-4xl lg:text-5xl">
              {companyName} Over {competitor}
            </h1>
          </div>

          <div className="mt-8 sm:mt-10 lg:mt-12 space-y-12 md:space-y-16">
            {/* Features */}
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`${feature.imageFirst ? 'order-0 md:order-0' : 'md:order-1 order-0 '}`}>
                  <div className={`w-full sm:max-w-sm max-w-[230px] mx-auto ${feature.imageFirst ? 'md:ml-10' : ''}`}>
                    <img className="w-full" src={feature.image} alt={feature.imageAlt} />
                  </div>
                </div>
                <div className={`${feature.imageFirst ? 'order-1 md:order-1' : 'order-1 md:order-0'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center md:items-start">
                    <div className="relative w-10 h-10 mx-auto sm:mx-0 mb-3 sm:mb-0">
                      <div className="absolute w-10 h-10 left-0 top-0 z-10">
                        <img
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src="/svg/welcomesecrighticon.svg"
                          alt=""
                        />
                        <img
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src="/svg/welcomesecrightinside.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h1 className="text-xl sm:text-2xl lg:text-3xl pt-sans-bold sm:pl-3">
                        {feature.title}
                      </h1>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-5 sm:pl-10 w-full sm:w-[90%] md:w-[80%]">
     
                      <div className='pt-sans-regular text-base sm:text-lg lg:text-xl sm:pl-5 text-center sm:text-left'  dangerouslySetInnerHTML={{ __html: feature?.description }}>

                      </div>
                   
  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonToChoose;