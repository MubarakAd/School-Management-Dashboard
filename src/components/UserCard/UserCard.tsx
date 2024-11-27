import Image from 'next/image'
import React from 'react'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className=' min-w-[130px] flex flex-1 flex-col gap-2 p-2 rounded-2xl odd:bg-purple-200 even:bg-yellow-200'>
        <div className='flex justify-between items-center'>
            <span className='text-xs p-[2px] rounded-md bg-white text-green-400'>2024/14</span>
            <Image src={'/more.png'} alt={''} width={14} height={14}/>
        </div>
        <span>1123</span>
        <span className='text-xs text-gray-500'>{type}s</span>
    </div>
  )
}

export default UserCard