import React from "react";
import records from "../images/records.svg";
import recognition from "../images/recognition.svg";
import customizable from "../images/customizable.svg";

function New() {
  return (
    <section className="bg-violet-100">
      <div className="">
        <div className="flex flex-col justify-center items-center text-center pt-[230px]">
          <h1 className="font-bold text-[40px] text-black leading-none">
            Advanced Statistics
          </h1>
          <h4 className="mt-4 text-pretty">
            Track how your links are performing across the web with our advanced
            Statistics dashboard.
          </h4>
        </div>
        <div className="hr flex flex-wrap justify-center">
          <div className="md:mx-10 pt-20 z-50">
            <div className="circle w-[80px] h-[80px] bg-indigo-950 rounded-full z-50 absolute mt-[-35px] md:mx-10 mx-[160px] flex justify-center items-center">
              <img src={recognition} alt="" />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left p-5 box md:w-[350px] w-[400px] h-[280px] bg-slate-50 rounded-lg shadow-lg">
              <h2 className="font-bold text-black text-[25px] mt-10">
                Brand Recognition
              </h2>
              <p className="mt-5">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instill confidence in
                your content
              </p>
            </div>
          </div>
          <span className="md:w-[600px] w-2 md:h-2 h-[800px] bg-teal-500 mt-[230px] absolute"></span>

          <div className="mx-10 md:pt-[120px] pt-20 z-50">
            <div className="circle w-[80px] h-[80px] bg-indigo-950 rounded-full z-50 absolute mt-[-35px] md:mx-10 mx-[160px] flex justify-center items-center">
              <img src={records} alt="" />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left p-5 box md:w-[350px] w-[400px] h-[280px] bg-slate-50 rounded-lg shadow-lg">
              <h2 className="font-bold text-black text-[25px] mt-10">
                Detailed Records
              </h2>
              <p className="mt-5">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>

          <div className="mx-10 md:pt-40 pt-20 z-50">
            <div className="circle w-[80px] h-[80px] bg-indigo-950 rounded-full z-50 absolute mt-[-35px] md:mx-10 mx-[160px] flex justify-center items-center">
              <img src={customizable} alt="" />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left p-5 box md:w-[350px] w-[400px] h-[280px] bg-slate-50 rounded-lg shadow-lg">
              <h2 className="font-bold text-black text-[25px] mt-10">
                Fully Customiizable
              </h2>
              <p className="mt-5">
                Improve brand awareness and content discoverabilty through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default New;
