import React from 'react';

const Testimonials = () => {
  return (
    <>
      <div className='flex h-full w-full flex-col gap-3 bg-white pt-20'>
        <div className='flex w-full flex-row justify-between px-10 xs:flex-col xs:items-center xs:justify-center'>
          <div className='flex w-full flex-col xs:mb-5 xs:items-center xs:justify-center'>
            <h1 className='text-nowrap bg-gradient-to-b from-black/[0.6] via-black to-black bg-clip-text font-Fira text-transparent 2xl:text-6xl lg:text-5xl sm:text-4xl'>
              Our Testimonials
            </h1>
            <h3 className='mt-2 max-w-[70%] font-FiraLight text-xl sm:text-sm xs:text-center'>
              Don&apos;t worry about the numbers! Read below and learn how
              Krosspost.ai has worked wonders with our customers&apos; exclusive
              success stories.
            </h3>
          </div>

          <div className='flex w-full flex-col items-end gap-4 xs:items-center xs:justify-center'>
            <div className='flex h-[90px] w-[300px] flex-row items-center justify-center rounded-lg border-2 border-black/[0.4] sm:w-[200px]'>
              <h1 className='text-nowrap font-Fira text-xl text-[#9C2400] sm:text-sm'>
                FEATURED AT:
              </h1>
              <img
                src='/images/gitex.png'
                className='h-[70px] object-contain px-4 sm:h-[40px]'
                alt=''
              />
            </div>
            <div className='flex items-center justify-center'>
              <a
                href='https://www.producthunt.com/posts/krosspost-ai?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-krosspost&#0045;ai'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=861429&theme=light&t=1739252361890'
                  alt='Krosspost&#0046;ai - Your&#0032;one&#0045;stop&#0032;solution&#0032;to&#0032;Social&#0032;Media&#0032;&#0038;&#0032;Messages&#0032;Automation | Product Hunt'
                  style={{ width: '250px', height: '54px' }}
                  width='250'
                  height='54'
                />
              </a>
            </div>
          </div>
        </div>

        <div className='flex h-full w-full flex-col'>
          <div className='grid h-full min-h-[700px] w-full grid-cols-3 gap-10 px-5 py-10 lg:grid-cols-2 sm:grid-cols-1'>
            <div className='row-span-2 flex flex-col justify-evenly gap-5 border border-black/[0.3] bg-white px-5 py-5 shadow-sm'>
              <img src='/images/Neadom.png' alt='' />
              <h1 className='mt-5 font-FiraThin text-xl'>
                I&apos;ve worked with Anubhav and his team at{' '}
                <strong>Consult Anubhav</strong> for the past three years on
                Draftsy, a College Fantasy Sports project.
              </h1>
              <h1 className='mt-5 font-FiraMono text-xl'>
                Neadom Tucker
                <p className='font-FiraThin text-lg text-black/[0.7]'>
                  Co-Founder, CIO, Draftsy Fantasy Sports
                </p>
              </h1>
            </div>
            <div className='flex flex-col justify-between gap-3 border border-black/[0.3] bg-white px-5 py-5 shadow-sm'>
              <h1 className='max-h-[95%] text-ellipsis font-FiraThin text-xl'>
                I worked with <b>Anubhav</b> for the version 1 of frontend of
                one of my products (frontend) and it was a good experience
                <b> working with him and his team</b>. One thing that stood out
                was the ownership he operates with and he instills the same to
                this team.
              </h1>
              <div className='flex items-center justify-start gap-5'>
                <img
                  src='/images/Arpit.jpg'
                  className='h-[70px] border object-contain'
                  alt=''
                />
                <div className='flex flex-col'>
                  <h1 className='text-md font-FiraMono'>Arpit Bhayani</h1>
                  <p className='text-md font-FiraThin text-black/[0.7]'>
                    Staff Software Engineer, Google Previously Unacademy,
                    Amazon, Practo, and D. E. Shaw
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between gap-3 border border-black/[0.3] bg-white px-5 py-5 shadow-sm'>
              <h1 className='max-h-[95%] text-ellipsis font-FiraThin text-xl'>
                I had the pleasure of{' '}
                <b>working with Anubhav on a blockchain</b>
                project and can confidently recommend him as a{' '}
                <b>developer on EVM </b>
                (Ethereum Virtual Machine) compatible blockchains like Polygon.
              </h1>
              <div className='flex items-center justify-start gap-5'>
                <img
                  src='/images/Fabrice.png'
                  className='h-[70px] object-contain'
                  alt=''
                />
                <div className='flex flex-col'>
                  <h1 className='text-md font-FiraMono'>Fabrice Goulven</h1>
                  <p className='text-md font-FiraThin text-black/[0.7]'>
                    Owner, Innovabilis
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between gap-3 border border-black/[0.3] bg-white px-5 py-5 shadow-sm'>
              <h1 className='max-h-[95%] text-ellipsis font-FiraThin text-xl'>
                First <b>META</b> project done and with the{' '}
                <strong>help of Anubhav</strong> and his team everything went
                fast in time and delivery as agreed.
              </h1>
              <div className='flex items-center justify-start gap-5'>
                <img
                  src='/images/Brian.jpg'
                  className='h-[70px] object-contain'
                  alt=''
                />
                <div className='flex flex-col'>
                  <h1 className='text-md font-FiraMono'>Brian Alves Madsen</h1>
                  <p className='text-md font-FiraThin text-black/[0.7]'>
                    Director Cars2Click International
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between gap-3 border border-black/[0.3] bg-white px-5 py-5 shadow-sm'>
              <h1 className='max-h-[95%] text-ellipsis font-FiraThin text-xl'>
                Whether it&apos;s figuring out <b> Web 3 use cases</b> or
                tinkering with AI, <b>Anubhav has been a patient mentor</b> and
                a rare solutions architect.
              </h1>
              <div className='flex items-center justify-start gap-5'>
                <img
                  src='/images/shubhanshu.jpg'
                  className='h-[70px] object-contain'
                  alt=''
                />
                <div className='flex flex-col'>
                  <h1 className='text-md font-FiraMono'>Shubranshu Jha</h1>
                  <p className='text-md font-FiraThin text-black/[0.7]'>
                    Venture Builder
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='grid h-full w-full grid-cols-3 gap-10 bg-gradient-to-b from-white to-[#C1E6FF] px-5 py-10 pb-20 lg:grid-cols-2 sm:grid-cols-1'>
            <div className='flex flex-col justify-between gap-3 border border-black/[0.3] bg-white px-5 py-5 shadow-sm'>
              <h1 className='max-h-[95%] text-ellipsis font-FiraThin text-xl'>
                Anubhav demonstrated his <b>technological</b> savviness
                countless times by <b>mastering the current tools</b> & tech in
                the area of <b>DevOps</b>.
              </h1>
              <div className='flex items-center justify-start gap-5'>
                <img
                  src='/images/zoltan.png'
                  className='h-[70px] object-contain'
                  alt=''
                />
                <div className='flex flex-col'>
                  <h1 className='text-md font-FiraMono'>Zoltan Janota</h1>
                  <p className='text-md font-FiraThin text-black/[0.7]'>
                    Senior SRE, United Nations (DevOps, Data Engineer)
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between gap-3 border border-black/[0.3] bg-white px-5 py-5 shadow-sm'>
              <h1 className='max-h-[95%] text-ellipsis font-FiraThin text-xl'>
                Anubhav has <b>excellent subject know-how</b>, delivers projects
                on time, and doesn&apos;t <b>compromise quality</b>.
              </h1>
              <div className='flex items-center justify-start gap-5'>
                <img
                  src='/images/samyak.jpg'
                  className='h-[70px] object-contain'
                  alt=''
                />
                <div className='flex flex-col'>
                  <h1 className='text-md font-FiraMono'>Samyak Kothari</h1>
                  <p className='text-md font-FiraThin text-black/[0.7]'>
                    Associate Director of Strategy at Liminal
                  </p>
                </div>
              </div>
            </div>

            <div className='row-span-2 flex flex-col justify-evenly gap-5 border border-black/[0.3] bg-white px-5 py-5 shadow-sm'>
              <img src='/images/chandan.png' alt='' />
              <h1 className='mt-5 font-FiraThin text-xl'>
                I had the pleasure of consulting with Anubhav Chaturvedi on
                several innovative projects, including <b>krosspost.ai</b>,
                <b> easedata.ai</b>, and <b> gpt2docx.com</b>. his ability to
                translate input into strategic improvements.
              </h1>
              <h1 className='mt-5 font-FiraMono text-xl'>
                Chandan Prasad
                <p className='font-FiraThin text-lg text-black/[0.7]'>
                  Empowering Healthcare Entrepreneurs, ex-Head, Operations
                  SUBHAG® HealthTech
                </p>
              </h1>
            </div>

            <div className='flex flex-col justify-between gap-3 border border-black/[0.3] bg-white px-5 py-5 shadow-sm'>
              <h1 className='max-h-[95%] text-ellipsis font-FiraThin text-xl'>
                The team was dedicated to understand my specific requirements in
                <b> multiple interim meetings</b>. <b>Thank you Anubhav</b> for
                your outstanding services.
              </h1>
              <div className='flex items-center justify-start gap-5'>
                <img
                  src='/images/gour.jpeg'
                  className='h-[70px] object-contain'
                  alt=''
                />
                <div className='flex flex-col'>
                  <h1 className='text-md font-FiraMono'>Gour Saha</h1>
                  <p className='text-md font-FiraThin text-black/[0.7]'>
                    Professor at Jaipuria Institute of Management, Indore
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between gap-3 border border-black/[0.3] bg-white px-5 py-5 shadow-sm'>
              <h1 className='max-h-[95%] text-ellipsis font-FiraThin text-xl'>
                Anubhav helped <b> build and document</b> the steps to build one
                click provision tool for <b>Oracle Cloud Infrastructure</b> in
                Linux and Windows operating System.
              </h1>
              <div className='flex items-center justify-start gap-5'>
                <img
                  src='/images/pradeep.png'
                  className='h-[70px] object-contain'
                  alt=''
                />
                <div className='flex flex-col'>
                  <h1 className='text-md font-FiraMono'>Pradip Pandey</h1>
                  <p className='text-md font-FiraThin text-black/[0.7]'>
                    Chief Software Architecture (VP) at Oracle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
