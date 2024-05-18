import React from 'react'
import { ClassNavbar } from '../index'
import { Outlet } from 'react-router-dom'

const Class = () => {
  return (
    <div>
      <ClassNavbar />
      <Outlet />
    </div>
  )
}

export default Class