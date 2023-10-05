import React,{useEffect, useState, useRef} from 'react'
import { menu } from '../assets';
import { logo2 } from '../assets';
import { PieChart, Pie } from 'recharts';

const Stats = () => {
  const data = [
        { name: 'Correct', students: 700 , fill: "#40A8C4"},
        { name: 'Not Correct', students: 100 , fill: "#BCDBDF"},
        { name: 'Wrong', students: 200 , fill: "#235784"},
    ];
  const rectangleBox = (data)=>{
      return(
        <div width={10} height={10} className={data}>
        </div>
      )
    }
    const [open ,setOpen] = useState(true);
  return (
  <div className={`${open ? "w-72" : "w-12" } duration-300 h-fit my-10 p-2 pt-24 bg-white shadow-md rounded-3xl fixed right-0`}>
    <img src={menu} alt="" 
        className='absolute cursor-pointer rounded-full left-3 top-9 w-8 border-2 bg-blue-500 border-none z-50'
        onClick={()=> setOpen(!open)}
    />
      <h1 className={`text-black bg-bgres origin-left font-bold text-sm flex justify-center items-center text-center duration-300 ${!open && "scale-0" }`}>Result
        </h1>
    <div className='flex gap-x-4 items-center '>
        {/* <img src={logo2} alt="" 
            className={`cursor-pointer duration-500 object-scale-down w-20 h-20
            ${open && "rotate-[360deg]"}`}
        /> */}
        {/* <h1 className={`text-black origin-left font-medium text-xl flex justify-center items-center text-center duration-300 ${!open && "scale-0" }`}>Result
        </h1> */}
        </div>
      <div className='flex flex-col my-2 gap-y-4 object-scale-dow'>
        <h1 className='text-black font-semibold'>Results:</h1>
        <h5 className='text-black font-semibold'>Score: 75%</h5>
        <PieChart width={200} height={200}>
            <Pie data={data} dataKey="students" outerRadius={50} fill={data} label={data} nameKey="name"/>
        </PieChart>
    </div>
    <div>
      <ul className='flex gap-7'>
        <li className='w-4 h-2 bg-black text-xs '>Correct</li>
        <li className='w-4 h-2 bg-blue-700 text-xs'>Wrong</li>
        <li className='w-4 h-2 bg-blue-200'></li>
      </ul>
    </div>
  </div> 
  )
}
export default Stats