import React, { useEffect, useRef, useState } from "react";
import Logo from "./../images/logo.svg";
import { IoReorderFourSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleNumber = () => {
    setOpen(!isOpen);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const navFull = () => {
    return (
      <>
        <ul className="gap-6 md:gap-8 md:flex ml-10 ">
          <li className="hover:font-bold cursor-pointer">Features</li>
          <li className="hover:font-bold cursor-pointer">Pricing</li>
          <li className="hover:font-bold cursor-pointer">Resources</li>
        </ul>
      </>
    );
  };

  const navHalf = () => {
    return (
      <>
        <ul className="sm:flex m-4">
          <li className="hover:font-bold cursor-pointer">Login</li>
        </ul>
        <button className="bg-teal-500 rounded-full text-white flex items-center justify-center p-3 w-28 ml-4 ">
          Sign Up
        </button>
      </>
    );
  };

  return (
    <section className="header bg-white ">
      <div className="flex justify-between md:mx-20 p-8 items-center text-gray-500">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="" className="m-4" />
          <div className="hidden md:flex">{navFull()}</div>
        </div>

        <div className="hidden md:flex items-center ">{navHalf()}</div>

        <div className="flex flex-col md:hidden" ref={menuRef}>
          <button
            onClick={toggleNumber}
            className="transition transform text-[30px] ml-[225px] "
          >
            {isOpen ? <IoReorderFourSharp /> : <IoReorderFourSharp />}
          </button>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="bg-indigo-950 text-white divide-y flex flex-col items-center border rounded-lg w-[250px] absolute top-20 z-40"
            >
              <>
                <ul className="text-center">
                  <li className="p-4">Features</li>
                  <li className="p-4">Pricing</li>
                  <li className="p-4">Resources</li>
                </ul>
              </>
              <>
                <ul className="text-center">
                  <li className="p-4">Login</li>
                  <li className="p-3">
                    <button className="bg-teal-500 rounded-full text-white w-[200px] p-3">
                      Sign Up
                    </button>
                  </li>
                </ul>
              </>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
