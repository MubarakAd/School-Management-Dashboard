import UserCard from '@/components/UserCard/UserCard'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col md:flex-row py-2 px-4">
          <div className=" w-full flex lg:w-2/3  justify-between gap-4  flex-wrap">
          <UserCard type='student'/>
          <UserCard type='Teacher'/>
          <UserCard type='Parent'/>
          <UserCard type='Admin'/>
          </div>
          <div className="w-full  lg:w-1/3"></div>
          </div>
  )
}

export default page