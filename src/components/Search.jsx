import React from "react";
import bg from "./../images/purple-bg.svg";
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className="absolute flex justify-center mt-[-60px] flex-col px-[10px] md:px-[150px] z-50">
      <img
        src={bg}
        alt=""
        className="rounded-lg object-cover bg-indigo-950 h-[200px]"
      />

      <div className="absolute md:relative flex flex-col md:flex-row justify-center items-center mx-[9%] md:px-[9%] md:mx-[0] md:mt-[-130px] w-[80%] md:w-full">
        <div className="flex items-center bg-white shadow-lg p-3 m-3 md:w-[80%] rounded-lg w-full ">
          <IoSearchOutline className="text-[20px] text-gray-500" />
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="outline-none ml-3 bg-white text-black w-full"
          />
        </div>
        <div className="md:w-[20%] w-full">
          <button className="bg-teal-500 rounded-lg text-white justify-center p-3 md:w-[150px] w-[100%]  ">
            Shorten It!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
