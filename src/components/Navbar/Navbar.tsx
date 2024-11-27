import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='hidden  md:flex justify-center items-center gap-2 px-2 py-[2px]  border border-gray-300 rounded-lg bg-white'>
    <Image src={'/search.png'} width={14} height={14} alt='search icon'/>
    <input className='outline-none border-none focus:ring-0' placeholder='search...' type="text"/>
</div>

        <div className='w-full  flex justify-end items-center gap-4'>
            <div className='bg-white p-1 rounded-full'>
                <Image src={'/message.png'} alt={''} width={19} height={19}/>
            </div>
            <div className='bg-white p-1 rounded-full'>
                <Image src={'/announcement.png'} alt={''} width={19} height={19}/>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs'>John Doe</span>
                <span className='text-[10px] text-gray-500 text-right'>Admin</span>
            </div>
            
                <Image className='rounded-full  cursor-pointer' src={'/avatar.png'} alt={''} height={30} width={30}/>
        </div>
    </div>
  )
}

export default Navbar