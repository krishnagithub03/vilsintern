import React,{useEffect, useState, useRef} from 'react'
import { next } from '../assets';
import { PieChart, Pie, Tooltip } from 'recharts';

const Stats = () => {
  const data = [
        { name: 'Correct Answer', students: 700 , fill: "#40A8C4"},
        { name: 'Not Answered', students: 100 , fill: "#BCDBDF"},
        { name: 'Wrong Answer', students: 200 , fill: "#235784"},
    ];

     const table = [
    { analysis: 'Correct Answers', value: 23 },
    { analysis: 'Wrong Answers', value: 1 },
    { analysis: 'Unanswered', value: 1 },
    { analysis: 'Skipped', value: 0 },
    { analysis: 'Out of Time', value: 0 },
    { analysis: 'Time Used', value: '2:30' },
  ];
    const [open ,setOpen] = useState(true);
  return (
  <div className={`${open ? "w-4/12" : "w-12" } duration-300 h-fit my-10 p-2 pt-24 bg-white shadow-md rounded-3xl fixed right-0`}>
    <img src={next} alt="" 
        className={`absolute cursor-pointer rounded-full left-3 top-9 w-8 border-2 bg-blue-500 border-none z-50 ${!open && "rotate-180"}`}
        onClick={()=> setOpen(!open)}
    />
      <h1 className={`text-black bg-bgres origin-left font-bold text-sm flex py-2 justify-center items-center text-center z-10 duration-300 ${!open && "scale-0" }`}>Result
        </h1>
    {/* <div className='flex gap-x-4 items-center '> */}
        {/* <img src={logo2} alt="" 
            className={`cursor-pointer duration-500 object-scale-down w-20 h-20
            ${open && "rotate-[360deg]"}`}
        /> */}
        {/* <h1 className={`text-black origin-left font-medium text-xl flex justify-center items-center text-center duration-300 ${!open && "scale-0" }`}>Result
        </h1> */}
        {/* </div> */}
      <div className={`flex flex-col my-2 gap-y-0 object-scale-dow ${!open && "hidden"} origin-right duration-200`}>
        <h1 className='text-black font-semibold mx-2'>Results:</h1>
        <h5 className='text-black font-semibold mx-2'>Score: 70%</h5>
      </div>
      <div className={`flex flex-row ${!open && "hidden"} origin-right duration-200`}>
        <PieChart width={350} height={300}>
            <Pie data={data} dataKey="students" outerRadius={120} fill={data} label={data} nameKey="name"/>
            <Tooltip/>
        </PieChart>
      <ul className='flex flex-col justify-center pt-10 gap-x-2'>
        <span className='w-9 h-4 bg-[#40A8C4] px-2'></span> <li>Correct Answers</li>
        <span className='w-9 h-4 bg-[#BCDBDF] px-2'></span> <li>Not Answred</li>
        <span className='w-9 h-4 bg-[#235784] px-2'></span> <li>Wrong Answers</li>
    </ul>
    </div>
    <hr className='shadow-sm'/>
  <div className={`${!open && "hidden"} origin-right duration-200`}>
   <table className="table table-bordered analysis-table">
      <thead>
        <tr>
          <th>Analysis</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {table.map((row) => (
          <tr key={row.analysis}>
            <td className='text-center p-1'>{row.analysis}</td>
            <td className='text-center'>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
};
export default Stats