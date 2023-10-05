import React, { useState } from 'react'
import {menu, dashboard, talk, bot, test, book, report, settings, premium, logo,logo2, user, course, resume} from "../assets"
const SideBar = () => {
    const [open ,setOpen] = useState(true);
    const menuTable = [
        { title : "Dashboard", src : dashboard },
        { title : "1 on 1 mentor", src : talk},
        { title : "Mock Interview", src : bot},
        { title : "Practice Test", src : test},
        { title : "Communication", src : book},
        { title : "Reports", src : report},
        { title : "Settings", src : settings},
        { title : "Premium", src : premium},
        { title : "Resume", src : resume},
        { title : "Course", src : course},
        { title : "Username", src : user, gap: true},
    ];
  return (
  <div className={`${open ? "w-60" : "w-20" } duration-300 h-fit p-5 pt-8 bg-white shadow-md relative rounded-3xl`}>
    <img src={menu} alt="" 
        className='absolute cursor-pointer rounded-full -right-3 top-9 w-8 border-2 bg-blue-500 border-none z-50'
        onClick={()=> setOpen(!open)}
    />
    <div className='flex gap-x-4 items-center '>
        <img src={logo2} alt="" 
            className={`cursor-pointer duration-500 object-scale-down w-20 h-20
            ${open && "rotate-[360deg]"}`}
        />
        {/* <h1 className={`text-black origin-left font-medium text-xl duration-300 ${!open && "scale-0" }`}>Dashboard</h1> */}
    </div>
    <ul className='pt-6'>
        {menuTable.map((menu, index) =>(
            <li key={index} className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-tableshade rounded-2xl ${menu.gap ? "mt-9" : "mt-0"}`}>
            <img src={menu.src} alt="" />
                <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
            </li>
        ))}
    </ul>
  </div>
  )
}

export default SideBar
