import Image from 'next/image'
import React from 'react'
const event = [
    {
      id: 1,
      title: "Tech Conference 2024",
      description: "Join industry leaders and experts to discuss the latest trends and innovations in technology.",
      date: "2024-12-05",
    },
    {
      id: 2,
      title: "Annual Hackathon",
      description: "Participate in our 48-hour hackathon and showcase your coding skills. Exciting prizes await!",
      date: "2024-12-10",
    },
    {
      id: 3,
      title: "Design Workshop",
      description: "A hands-on workshop focusing on modern design principles and tools for web and mobile applications.",
      date: "2024-12-15",
    },
  ];
  
  
const Events = () => {
  return (
    <div className='bg-white w-full h-full px-2'>
         <div className='flex justify-between items-center py-2'>
            <h1 className='text-lg font-semibold'>Events</h1>
            <Image src={'/moreDark.png'} alt='' width={14} height={14}/>
        </div>
        <div className='flex flex-col gap-4 p-2'>
  {event.map((e, index) => (
    <div
      key={e.id}
      className={`flex flex-col gap-3 py-4 px-4 border-4 rounded-md border-gray-100  ${
        index % 2 === 0 ? 'border-t-8 border-t-blue-200' : 'border-t-8 border-t-purple-200'
      }`}
    >
      <div className='flex justify-between items-center'>
        <h2 className='erfont-semibold text-gray-700'>{e.title}</h2>
        <p className='text-xs text-gray-500'>{e.date}</p>
      </div>
      <p className='text-sm text-gray-600'>{e.description}</p>
    </div>
  ))}
</div>

    </div>
  )
}

export default Events