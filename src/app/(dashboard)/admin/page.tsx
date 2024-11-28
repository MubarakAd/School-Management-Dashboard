import Announcement from '@/components/Announcement/Announcement'
import AttendanceChart from '@/components/AttendanceChart/AttendanceChart'
import EventCalendar from '@/components/EventCalendar/EventCalendar'
import Events from '@/components/Events/Events'
import FinanceChart from '@/components/FinanceChart/FinanceChart'
import UserCard from '@/components/UserCard/UserCard'
import CountChart from '@/components/countChart/countChart'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row gap-4 py-2 px-4">
          <div className=" w-full  lg:w-2/3">
          <div className='flex justify-between gap-4 flex-wrap pb-8'>
          <UserCard type='student'/>
          <UserCard type='Teacher'/>
          <UserCard type='Parent'/>
          <UserCard type='Admin'/>
          </div>
          <div className='flex flex-col lg:flex-row gap-4'>
            <div className='w-full lg:w-1/3 h-[450px] ' >
            <CountChart />
            </div>
            <div className='w-full lg:w-2/3 h-[450px] ' >
            <AttendanceChart/>
            {/* <CountChart /> */}
            </div>
          </div>
          <div className='w-full h-[500px] pt-8'>
          <FinanceChart/>
          </div>
          </div>
          
          
          <div className="w-full  lg:w-1/3">
           <div className='flex flex-col gap-8'>
            <div>
            <EventCalendar/>
            <Events/>
            </div>
            <Announcement/>
            
           </div>
          </div>
          </div>
          
          </>
  )
}

export default page