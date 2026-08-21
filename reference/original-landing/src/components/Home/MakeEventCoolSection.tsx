import React from "react";
import { ExternalLink } from "lucide-react";
import ThreeDCardDemo from "../ThreeDCardDemo";

function MakeEventCoolSection() {
  return (
    <div
      id="faq-section"
      className="bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%] px-4 sm:px-8 md:px-12 lg:px-20 py-10 lg:py-20 mt-10"
    >
      <div className="flex flex-col justify-center items-center relative mb-12">
        <h1 className="pt-sans-bold text-black text-3xl md:text-5xl lg:text-6xl text-center">
          <i>how does</i>
        </h1>
        <div className="relative inline-block">
          <h1 className="pt-sans-bold text-[#13D960] text-4xl md:text-6xl lg:text-7xl text-center relative">
            whatsease make events cool?
          </h1>
          <div className="absolute top-[-20px] md:top-[-30px] lg:top-[-50px] sm:right-[-30px] md:right-[-60px] lg:right-[-100px] w-[40px] md:w-[60px] lg:w-[90px]">
            <img className="lg:block hidden" src="/svg/coolEvent.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12 mt-10 lg:mt-20 relative">
        {/* First grid item - Book tickets */}
        <div className="md:col-span-1 lg:col-span-7">
          <ThreeDCardDemo>
            <div
              className="bg-[#04B851] relative rounded-3xl lg:rounded-4xl p-6 lg:p-8 pb-0"
              style={{ paddingBottom: "0" }}
            >
              <div className="absolute top-0 right-2">
                <img
                  src="/svg/arrowCool.svg"
                  alt=""
                  className="w-8 md:w-auto"
                />
              </div>

              <div className="relative">
                <div className="text-white">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold pt-sans-bold">
                    book your tickets...
                    <br />
                    smoooooothly!
                  </h1>
                </div>

                <div className="mt-4"></div>
                <div className="flex flex-row gap-x-1 md:gap-x-2 overflow-hidden">
                  {Array.from({ length: 8 }).map((_, id) => (
                    <div
                      key={id + "" + new Date()}
                      className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] relative"
                    >
                      <img
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        src="/svg/rightCool1.svg"
                        alt=""
                      />
                      <img
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        src="/svg/rightCool2.svg"
                        alt=""
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <p className="mt-5 pt-sans-bold text-lg md:text-xl lg:text-2xl text-white font-pt-sans">
                      Provide seamless indoor navigation, integrated payments,
                      and versatile event support for smooth customer
                      experiences.
                    </p>
                    <div className="min-h-[200px] md:min-h-[300px] relative left-0 md:left-[40px]">
                      <div className="w-full md:w-[250px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-end">
                        <div className="absolute right-0 md:right-[-50px] top-[-30px] md:top-[-50px]">
                          <img
                            src="/svg/Powerby.svg"
                            alt=""
                            className="w-16 md:w-auto"
                          />
                        </div>
                        <h1 className="text-white pt-sans-bold text-3xl md:text-4xl lg:text-5xl">
                          <i>powered by</i>
                        </h1>
                        <h1 className="text-white pt-sans-bold text-3xl md:text-4xl lg:text-5xl">
                          <i>whatsapp</i>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end md:mt-0 mt-4">
                    <img
                      className="w-full md:w-[490px]"
                      src="/svg/whatsEaseCool1.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </ThreeDCardDemo>
        </div>

        {/* Second grid item - Have a question */}
        <div className="md:col-span-1 lg:col-span-5 h-full">
          <ThreeDCardDemo>
            <div className="h-full overflow-hidden bg-[#04B851] rounded-3xl lg:rounded-4xl shadow-2xl relative p-6 lg:p-8">
              <div className="absolute top-0 right-2">
                <img
                  src="/svg/arrowCool.svg"
                  alt=""
                  className="w-8 md:w-auto"
                />
              </div>

              <div>
                <div className="text-white">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold pt-sans-bold">
                    have a question?
                    <br />
                    get quick answers.
                  </h1>
                </div>

                <div className="mt-4"></div>
                <div className="flex flex-row gap-x-1 md:gap-x-2 overflow-hidden">
                  {Array.from({ length: 8 }).map((_, id) => (
                    <div
                      key={id + "" + new Date()}
                      className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] relative"
                    >
                      <img
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        src="/svg/rightCool1.svg"
                        alt=""
                      />
                      <img
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        src="/svg/rightCool2.svg"
                        alt=""
                      />
                    </div>
                  ))}
                </div>
                <div className="text-lg md:text-xl lg:text-2xl mt-5 pt-sans-bold text-white">
                  <p>
                    powered by whatsapp, give instantaneous answers and queries,
                    right from your own chatbot with a simple Hi!
                  </p>
                </div>
              </div>
              <div className="md:absolute bottom-0 overflow-hidden">
                <img src="/svg/quePeople.svg" alt="" className="w-full" />
              </div>
            </div>
          </ThreeDCardDemo>
        </div>

        {/* Third grid item - Stay in touch */}
        <div className="md:col-span-1 lg:col-span-5">
          <ThreeDCardDemo>
            <div className="min-h-[100px] bg-[#04B851] rounded-3xl lg:rounded-4xl shadow-2xl relative px-2 pt-6 lg:pt-8 pb-5">
              <div className="absolute top-0 right-2">
                <img
                  src="/svg/arrowCool.svg"
                  alt=""
                  className="w-8 md:w-auto"
                />
              </div>
              <div>
                <div>
                  <div className="flex flex-row gap-x-1 items-end">
                    <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] relative">
                      <img
                        className="w-[30px] md:w-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        src="/svg/wplogo.svg"
                        alt=""
                      />
                      <img
                        className="w-[22px] md:w-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        src="/svg/wplogoinside.svg"
                        alt=""
                      />
                      <img
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        src="/svg/wplogoinside2.svg"
                        alt=""
                      />
                    </div>
                    <div className="w-full md:w-[270px] overflow-hidden bg-[#04B851] rounded-md">
                      <div className="bg-white rounded-md">
                        <div className="p-2">
                          <img
                            className="rounded-md w-full object-cover"
                            src="/svg/sale.svg"
                            alt=""
                          />
                        </div>
                        <div className="p-2 pt-0 text-black">
                          <p className="pt-sans-bold mt-2 text-sm md:text-md leading-1">
                            Valentine's Day Sale Alert! 💝
                          </p>
                          <p className="pt-sans-normal mt-2 text-sm md:text-md">
                            <span className="pt-sans-bold"> Dear Ananya, </span>{" "}
                            this is an exclusive announcement!
                          </p>
                          <p className="mt-2 text-sm md:text-md">
                            From{" "}
                            <span className="pt-sans-bold">
                              {" "}
                              8th till 15th February{" "}
                            </span>{" "}
                            , Enjoy special discounts{" "}
                            <span className="pt-sans-bold"> up to 75% </span> on
                            a wide range of gifts and make your{" "}
                            <span className="pt-sans-bold">
                              {" "}
                              loved ones feel special{" "}
                            </span>
                            😊🥰.
                          </p>
                          <p className="mt-3 pt-sans-normal text-sm md:text-md">
                            RSVP FROM HERE TO VISIT—We will be waiting for your
                            response! 🚀
                          </p>
                        </div>
                      </div>
                      <div className="h-[10px] bg-[#04B851]"></div>
                      <div className="bg-[#04B851] overflow-hidden">
                        <div className="flex flex-row justify-center bg-white items-center text-blue-400 gap-x-2 py-2 rounded-md text-sm md:text-base">
                          <ExternalLink size={16} />
                          RSVP for the invite!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mt-2 justify-end">
                  <div className="flex items-end gap-x-2">
                    <div>
                      <img
                        src="/svg/wpfileinside.svg"
                        alt=""
                        className="w-8 md:w-auto"
                      />
                    </div>
                    <div>
                      <img
                        src="/svg/usermsgicon.svg"
                        alt=""
                        className="w-8 md:w-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="px-2">
                  <div className="px-2 md:px-[40px] pt-3">
                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl pt-sans-bold">
                      stay in touch with your attendees. 24x7, 365!
                    </h1>
                    <div className="flex flex-row gap-x-1 md:gap-x-2 mt-3 overflow-hidden">
                      {Array.from({ length: 8 }).map((_, id) => (
                        <div
                          key={id + "" + new Date()}
                          className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] relative"
                        >
                          <img
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            src="/svg/rightCool1.svg"
                            alt=""
                          />
                          <img
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            src="/svg/rightCool2.svg"
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-lg md:text-xl pt-sans-bold mt-3 text-white">
                      Provide seamless indoor navigation, integrated payments,
                      and versatile event support for smooth customer
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ThreeDCardDemo>
        </div>

        {/* Fourth grid item - Dive into analytics */}
        <div className="md:col-span-1 lg:col-span-7">
          <ThreeDCardDemo>
            <div className="h-full bg-[#04B851] rounded-3xl lg:rounded-4xl shadow-2xl relative p-6 lg:p-8">
              <div className="md:absolute  top-0 right-2">
                <img
                  src="/svg/arrowCool.svg"
                  alt=""
                  className="w-8 md:w-auto"
                />
              </div>
              <div className="md:absolute bottom-0">
                <img className="w-full" src="/svg/diveInto.svg" alt="" />
              </div>
              <div className="text-white">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold pt-sans-bold">
                  dive into your event's <br />
                  analytics, with just a click!
                </h1>
              </div>
              <div className="mt-4"></div>
              <div className="flex flex-row gap-x-1 md:gap-x-2 overflow-hidden">
                {Array.from({ length: 8 }).map((_, id) => (
                  <div
                    key={id + "" + new Date()}
                    className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] relative"
                  >
                    <img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src="/svg/rightCool1.svg"
                      alt=""
                    />
                    <img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src="/svg/rightCool2.svg"
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <p className="text-lg md:text-xl lg:text-2xl pt-sans-bold mt-5 text-white">
                Provide seamless indoor navigation,
                <br className="hidden md:block" /> integrated payments, and
                versatile event <br className="hidden md:block" />
                support for smooth customer experiences.
              </p>
            </div>
          </ThreeDCardDemo>
        </div>
      </div>
    </div>
  );
}

export default MakeEventCoolSection;
