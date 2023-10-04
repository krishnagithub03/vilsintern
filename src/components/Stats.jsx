import React,{useEffect, useState, useRef} from 'react'
import { menu } from '../assets';
import { Chart } from 'chart.js/auto';
const Stats = () => {
const options = {
  title: "My Daily Activities",
}
const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

    // const chartRef = useRef();
    // const chartInstance = useRef();
    // useEffect (()=>{
    //     if(chartInstance.current){
    //         chartInstance.current.destroy()
    //     }
    //     const myChartRef = chartRef.current.getContext('2d');

    //     chartInstance.current = new Chart(myChartRef,{
    //         type: "pie",
    //         data:{
    //             labels:["Red","Blue","Yellow"],
    //             datasets:[
    //                 {
    //                     data: [300, 50, 100],
    // backgroundColor: [
    //   'rgb(255, 99, 132)',
    //   'rgb(54, 162, 235)',
    //   'rgb(255, 205, 86)'
    // ],
    //                 }
    //             ]
    //         }
    //     })
    //     return () =>{
    //         if(chartInstance.current){
    //             chartInstance.current.destroy()
    //         }
    //     }

    // },[]);
    const [open ,setOpen] = useState(true);
  return (
  <div className={`${open ? "w-60" : "w-20" } duration-300 h-fit my-10 p-5 pt-32 bg-white shadow-md rounded-3xl fixed right-0`}>
    <img src={menu} alt="" 
        className='absolute cursor-pointer rounded-full left-3 top-9 w-8 border-2 bg-blue-500 border-none z-50'
        onClick={()=> setOpen(!open)}
    />
    {/* <div className='flex gap-x-4 items-center '>
        <img src={logo2} alt="" 
            className={`cursor-pointer duration-500 object-scale-down w-20 h-20
            ${open && "rotate-[360deg]"}`}
        />
        {/* <h1 className={`text-black origin-left font-medium text-xl duration-300 ${!open && "scale-0" }`}>Dashboard</h1> */}
    {/* </div>
    <ul className='pt-6'>
    
    </ul> */}
    <div>
        {/* <canvas ref={chartRef} style="w-300px h-200px" /> */}


    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"10%"}
      height={"40px"}
    />
    </div>
  </div> 
  )
}
export default Stats