import React from 'react'
import { PieChart, Pie, Label, Tooltip } from 'recharts';


const Content = () => {
  const data = [
        { name: 'Correct', students: 700 , fill: "#40A8C4"},
        // { name: 'Not Correct', students: 100 , fill: "#BCDBDF"},
        { name: 'Wrong', students: 200 , fill: "#235784"},
    ];
  // const scores =[
  //   {name: "Focus Management", fill:  "#40A8C4", content: "Focus Score: Focus score refers to the ability of an individual to concentrate and direct their attention towards a specific task or information.", per: 600},
  //   {name: "Time Management", fill:  "#40A8C4", content: "Time Management: Time management is the practice of planning, organizing, and allocating time to tasks and activities in a way that maximizes productivity and efficiency. ",per: 200},
  //   {name: "Critical Management", fill: "#40A8C4", content: "Critical thinking is the process of analyzing, evaluating, and interpreting information or situations in a logical and systematic manner.",per: 200},
  // ];
  // const customLabelRendering = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  //   const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  //   return (
  //     <Label
  //       value={percent.toFixed(2)}
  //       position="inside"
  //       x={x}
  //       y={y}
  //       fill="black"
  //       textAnchor="middle"
  //     />
  //   );
  // }
  return (
    <div>
    <div className='max-w-screen-md mx-3 p-10 mt-10'>
      Your Answer:
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
    <div className='my-4 mx-4'>
      <h1 className='text-black font-bold my-2'>Management Score:</h1>
        <div className='gap-y-4 z-10'>
        <PieChart width={70} height={70}>
            <Pie data={data} dataKey="students" outerRadius={30} 
            innerRadius={20} fill={data} nameKey="name"
            />
            {/* <Label value="283" position="inside" className='text-black '/> */}
            <Tooltip/>
        </PieChart>
        <PieChart width={70} height={70}>
            <Pie data={data} dataKey="students" outerRadius={30} innerRadius={20} fill={data} nameKey="name"/>
            <Tooltip/>
        </PieChart>
        <PieChart width={70} height={70}>
            <Pie data={data} dataKey="students" outerRadius={30} innerRadius={20} fill={data} nameKey="name"/>
            <Tooltip/>
        </PieChart>
        </div>

    </div>
    </div>
  )
}

export default Content
