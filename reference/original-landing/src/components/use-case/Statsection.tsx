import React from "react";

function Statsection() {
  return (
    <div>
      <div className="lg:px-20 md:px-12 sm:px-6 px-3 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          <div className="w-full max-w-[300px] text-center">
            <div className="sm:w-[120px] w-[70px] sm:h-[120px] h-[70px] mx-auto">
              <img
                className="w-full h-full object-fill"
                src="/svg/all/stat1.svg"
                alt=""
              />
            </div>
            <h1 className="md:text-3xl text-xl pt-sans-bold">3+ Hours Daily</h1>
            <p className="sm:text-lg text-md pt-sans-regular sm:mt-5 mt-2">
              Users spend 3+ hours daily on WhatsApp, making it ideal for
              re-engagement.
            </p>
          </div>

          <div className="w-full max-w-[300px] text-center">
            <div className="sm:w-[120px] w-[70px] sm:h-[120px] h-[70px] mx-auto">
              <img
                className="w-full h-full object-fill"
                src="/svg/all/stat2.svg"
                alt=""
              />
            </div>
            <h1 className="md:text-3xl text-xl pt-sans-bold">20+ Checks a Day</h1>
            <p className="md:text-lg text-md pt-sans-regular sm:mt-5 mt-2">
              Opened more than 20 times a day, your messages won’t get missed.
            </p>
          </div>

          <div className="w-full max-w-[300px] text-center">
            <div className="sm:w-[120px] sm:h-[120px] w-[70px] h-[70px] mx-auto">
              <img
                className="w-full h-full object-fill"
                src="/svg/all/stat3.svg"
                alt=""
              />
            </div>
            <h1 className="md:text-3xl text-xl pt-sans-bold">98% Open Rate</h1>
            <p className="md:text-lg text-md pt-sans-regular sm:mt-5 mt-2">
              WhatsApp achieves up to 98% open rates — far higher than email.
            </p>
          </div>

          <div className="w-full max-w-[300px] text-center">
            <div className="sm:w-[120px] sm:h-[120px] w-[70px] h-[70px] mx-auto">
              <img
                className="w-full h-full object-fill"
                src="/svg/all/stat4.svg"
                alt=""
              />
            </div>
            <h1 className="md:text-3xl  text-xl pt-sans-bold">In-Chat Reminders</h1>
            <p className="md:text-lg text-md pt-sans-regular sm:mt-5 mt-2">
              Natural, chat-based nudges boost cart recovery rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statsection;
