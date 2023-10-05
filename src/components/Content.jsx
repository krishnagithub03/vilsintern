import React from 'react'
import { PieChart, Pie, Label, Tooltip } from 'recharts';
import {styles} from "../styles"

const Content = () => {
  const data1 = [
        { name: 'Scored', students: 700 , fill: "#0280D4"},
        { name: 'No Score', students: 200 , fill: "#95D4FE"},
    ];
  const data2 = [
        { name: 'Scored', students: 400 , fill: "#02BC63"},
        { name: 'No Score', students: 600 , fill: "#94E1BC"},
    ];
  const data3 = [
        { name: 'Scored', students: 800 , fill: "#EB5757"},
        { name: 'No Score', students: 200 , fill: "#FFA9A9"},
    ];

  return (
    <div>
    <div className={`mx-3 p-10 mt-12 ${!open ? "w-3/4" : "w-7/12"} ${styles.SmallSubText}duration-500`}>
    <span className='font-bold flex py-1'>Your Answer:</span>
The most challenging software for me is specifically to be specifically Telluride is Figma.
Yeah. Figma and Adobe Illustrator, which is, uh they are quite nuance and constraints and, uh spill small, small things that needs to be learned up. Yeah. This question, it almost took months to a entire software of the Adobe Illustrator.
The most challenging software for me is <span className='bg-red-400 p-1'>specifically</span>  to be specifically Telluride is Figma.
Yeah. Figma and Adobe Illustrator, which is, uh they are quite nuance and all the
constraints and, uh spill small, small things that needs to be learned up. Yeah. This question,
it almost took three to four months to complete a entire <span className='bg-blue-400 p-1'>software</span> of the Adobe Illustrator.
The most challenging software for me is specifically to be specifically Telluride is Figma.
Yeah. Figma and <span className='bg-yellow-400 p-1'>Adobe Illustrator</span>, which is, uh they are quite nuance and all the
constraints and, uh spill small, small things that needs to be learned up.
    <ul className='flex justify-center pt-10 gap-x-2'>
        <span className='w-9 h-4 bg-red-400 px-2'></span> <li>Grammatical Error</li>
        <span className='w-9 h-4 bg-blue-400 px-2'></span> <li>Spelling Error</li>
        <span className='w-9 h-4 bg-yellow-400 px-2'></span> <li>Vocabulary Error</li>
    </ul>
    </div>
    <hr className='shadow-sm'/>
    <div className='my-4 mx-4 px-7'>
      <h1 className='text-black font-bold my-2'>Management Score:</h1>
        <div className='gap-y-4 z-10 flex flex-col'>
        <div className='flex flex-row'>
        <PieChart width={70} height={70}>
            <Pie data={data1} dataKey="students" outerRadius={30} 
            innerRadius={20} fill={data1} nameKey="name"
            />
            {/* <Label value="283" position="inside" className='text-black '/> */}
            <Tooltip/>
        </PieChart>
        <span className='w-96 p-2'><strong className='font-bold'>Focus Score:</strong> Focus score refers to the ability of an individual to concentrate and direct their attention towards a specific task or information.</span>
        </div>
        <div className='flex flex-row'>
        <PieChart width={70} height={70}>
            <Pie data={data2} dataKey="students" outerRadius={30} 
            innerRadius={20} fill={data2} nameKey="name"
            />
            {/* <Label value="283" position="inside" className='text-black '/> */}
            <Tooltip/>
        Score: 59%
        </PieChart>
        <span className='w-96 p-2'><strong className='font-bold'>Time Management:</strong> Time management is the practice of planning, organizing, and allocating time to tasks and activities in a way that maximizes productivity and efficiency. </span>
        </div>
        <div className='flex flex-row'>
        <PieChart width={70} height={70}>
            <Pie data={data3} dataKey="students" outerRadius={30} 
            innerRadius={20} fill={data3} nameKey="name"
            />
            <Tooltip/>
        Score: 59%
        </PieChart>
        <span className='w-96 p-2'><strong className='font-bold'>Critical Thinking: </strong>Critical thinking is the process of analyzing, evaluating, and interpreting information or situations in a logical and systematic manner.</span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Content
