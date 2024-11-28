'use client'
import Image from 'next/image'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
   Income: 4000,
   Expense: 2400,
    
  },
  {
    name: 'Feb',
   Income: 3000,
   Expense: 1398,
    
  },
  {
    name: 'Mar',
   Income: 2000,
   Expense: 9800,
    
  },
  {
    name: 'Apr',
   Income: 2780,
   Expense: 3908,
  
  },
  {
    name: 'Jun',
   Income: 1890,
   Expense: 4800,
    
  },
  {
    name: 'Jul',
   Income: 2390,
   Expense: 3800,
   
  },
  {
    name: 'Aug',
   Income: 3490,
   Expense: 4300,
    
  },
  {
    name: 'Sep',
   Income: 3490,
   Expense: 4300,
   
  },
  {
    name: 'Oct',
   Income: 3490,
   Expense: 4300,
    
  },
  {
    name: 'Nov',
   Income: 4000,
   Expense: 5000,
    
  },
  {
    name: 'Dec',
   Income: 3490,
   Expense: 5300,
    
  },
];
const FinanceChart = () => {
  return (
    <div className='bg-white w-full h-full rounded-xl p-2'>
        <div className='flex justify-between items-center py-2'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src={'/moreDark.png'} alt='' width={14} height={14}/>
        </div>
 
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line   type="monotone" dataKey="Income" stroke="#FEF08A" strokeWidth={4}  activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Expense" stroke="#E9D5FF" strokeWidth={4}  />
        </LineChart>
      </ResponsiveContainer>
        
        </div>
  )
}

export default FinanceChart