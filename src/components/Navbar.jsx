import React, { useEffect, useState } from "react";
import { styles } from "../styles";

const Navbar = () => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let date = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();

  const time = d.getHours() + ":" + d.getMinutes();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 shadow-md ${
        scrolled ? "bg-white" : "bg-white"
      }`}
    >
      <div className='w-full flex-col justify-center items-center max-w-7xl mx-auto'>
       <p className='text-black text-[20px] cursor-pointer flex justify-center'>Writing Test 7</p>
       <p className='text-black text-[18px] cursor-pointer flex justify-center'>{date} at {time}</p>
      </div>
    </nav>
  );
};

export default Navbar;