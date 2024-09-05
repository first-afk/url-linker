import React from "react";
import image from "./../images/illustration.svg";
import "./Intro.css";

function Intro() {
  return (
    <section className="centered h-[700px] md:h-[500px] relative">
      <div className="flex flex-wrap-reverse justify-center md:grid md:grid-cols-2 md:mx-[120px] items-center">
        <div className="md:ml-[150px] text-center md:text-left">
          <h1 className="font-bold text-[60px] text-black leading-none text-pretty">
            More than just shorter links
          </h1>
          <h4 className="mt-4 text-balanced">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </h4>

          <button className="bg-teal-500 rounded-full text-white justify-center p-3 w-[200px] mt-8">
            Get started
          </button>
        </div>

        <div className="">
          <img src={image} alt="" className="image w-[400px] md:w-[600px]" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
