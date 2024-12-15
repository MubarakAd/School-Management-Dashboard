import Image from 'next/image'
import React from 'react'
const announcements = [
    {
      id: 1,
      title: "School Reopening Update",
      time: "9:00 AM",
      description: "The school will reopen on September 10th. Please check your emails for the updated timetable and guidelines.",
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting",
      time: "2:00 PM",
      description: "A parent-teacher meeting will be held on September 15th. All parents are encouraged to attend and discuss their child's progress.",
    },
    {
      id: 3,
      title: "Sports Day Event",
      time: "11:00 AM",
      description: "Our annual Sports Day is scheduled for October 5th. Students are requested to participate actively and cheer for their teams.",
    },
  ];
  
const Announcement = () => {
    return (
        <div className='bg-white w-full h-full px-2'>
             <div className='flex justify-between items-center py-2'>
                <h1 className='text-lg font-semibold'>Announcement</h1>
                <Image src={'/moreDark.png'} alt='' width={14} height={14}/>
            </div>
            <div className='flex flex-col gap-4 p-2'>
      {announcements.map((e, index) => (
        <div
          key={e.id}
          className={`flex flex-col gap-3 py-4 px-4 bor rounded-md   ${
            index % 2 === 0 ? ' bg-blue-100' : 'bg-purple-100'
          }`}
        >
          <div className='flex justify-between items-center'>
            <h2 className=' font-bold text-gray-700'>{e.title}</h2>
            <p className='p-1 rounded-lg bg-white text-xs text-gray-500'>{e.time}</p>
          </div>
          <p className='text-xs text-gray-600'>{e.description}</p>
        </div>
      ))}
    </div>
    
        </div>
      )
}

export default Announcement