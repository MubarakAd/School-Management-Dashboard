'use client'
import Image from 'next/image'
import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    Total: '100',
    count: 31.47,
    fill: 'white',
  },
  {
    Boys: '25-29',
    count: 26.69,

    fill: '#FEF08A',
  },
  {
    Girls: '30-34',
    count: 15.69,
    fill: '#E9D5FF',
  },
  
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CountChart = () => {
  return (
    <div className='bg-white w-full h-full rounded-xl p-2'>
        <div className='flex justify-between items-center py-2'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src={'/moreDark.png'} alt='' width={14} height={14}/>
        </div>
        <div className=" relative w-full h-[75%]">
        <Image 
    src={'/maleFemale.png'} 
    alt='' 
    width={40} 
    height={40} 
    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' 
  />
  <ResponsiveContainer>
    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
      <RadialBar
        background
        dataKey="count"
      />
     
    </RadialBarChart>
  </ResponsiveContainer>
</div>

        <div className='flex justify-center gap-16 items-center'>
            <div className='flex flex-col gap-1'>
                <div className='h-[20px] w-[20px] rounded-full bg-purple-200'></div>
                <span className='font-bold'>1234</span>
                <span className='text-xs text-gray-400'>Girls [53%]</span>
            </div>
            <div className='flex flex-col gap-`1'>
                <div className='h-[20px] w-[20px] rounded-full bg-yellow-200'></div>
                <span className='font-bold'>1234</span>
                <span className='text-xs text-gray-400'>Boys[ 57%]</span>
            </div>

        </div>
    </div>
  )
}

export default CountChart