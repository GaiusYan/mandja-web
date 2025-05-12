import { NavbarAuth } from '@/components/home/navbar-auth'
import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <NavbarAuth/>
      <div className='flex flex-col bg-gray-50'>
        {children}
      </div>
    </div>
  )
}

export default layout
