'use client'
import Image from 'next/image'
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Present: 400,
    Absent: 240,
    
  },
  {
    name: 'Tue',
    Present: 800,
    Absent: 200,
    
  },
  {
    name: 'Wed',
    Present: 700,
    Absent: 300,
   
  },
  {
    name: 'Thu',
    Present: 900,
    Absent: 100,
   
  },
  {
    name: 'Fri',
    Present:600 ,
    Absent: 400,
    
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white w-full h-full rounded-xl p-2'>
        <div className='flex justify-between items-center py-2'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src={'/moreDark.png'} alt='' width={14} height={14}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name"  axisLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Present" fill="#FEF08A" radius={[10, 10, 0, 0]} legendType="circle" />
<Bar dataKey="Absent" fill="#E9D5FF" radius={[10, 10, 0, 0]} legendType="circle" />

        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart