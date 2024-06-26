import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaRegCalendar, FaCaretDown, FaCaretRight, FaRegListAlt } from 'react-icons/fa';
import { SlGraduation } from "react-icons/sl";
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineArchive } from 'react-icons/md';
import { enrolled } from '../constants/dummyData';
import { Link } from 'react-router-dom';

const RightNavbar = ({ setMenuOpen, menuOpen }) => {

  const [arrowOpen, setArrowOpen] = useState(false);

  return (
    <div className={`${menuOpen ? "w-1/" : "w-[72px]"} fixed top-16 bottom-0 overflow-auto border-r-2 border-blue-100`}>
      <section className='my-2'>
        <Link to="/" className={`${menuOpen ? "px-7" : "pl-7"} flex justify-start items-center gap-8 py-2 hover:bg-slate-50 rounded-r-full mr-3`}>
          <AiFillHome className='w-5 h-5' />
          {menuOpen && (<span className='font-normal'>Home</span>)}
        </Link>
        <Link to="/calender" className={`${menuOpen ? "px-7" : "pl-7"} flex justify-start items-center gap-8 py-2 hover:bg-slate-50 rounded-r-full mr-3`}>
          <FaRegCalendar className='w-5 h-5' />
          {menuOpen && (<span className='font-normal'>Calender</span>)}
        </Link>
      </section>
      <hr />
      <section className='my-2'>
        <div className={`${menuOpen ? "px-1" : "pl-1"} flex justify-start items-center gap-8 py-2 hover:bg-slate-50 rounded-r-full mr-3`}>
          <div className='flex justify-start items-center gap-2'>
            {
              // menu not working
              arrowOpen ? <FaCaretDown onClick={() => { setArrowOpen(!arrowOpen); setMenuOpen(true); }} /> : <FaCaretRight onClick={() => { setArrowOpen(!arrowOpen); setMenuOpen(true) }} />
            }
            <SlGraduation className='w-5 h-5' />
          </div>
          {menuOpen && (<span className='font-normal'>Enrolled</span>)}
        </div>
        {
          arrowOpen && (
            <div>
              <div className={`${menuOpen ? "px-7" : "pl-7 hidden"} flex justify-start items-center gap-8 py-2 hover:bg-slate-50 rounded-r-full mr-3`}>
                <FaRegListAlt className='w-5 h-5' />
                <span className='font-normal'>To-do</span>
              </div>
              {
                menuOpen && (
                  enrolled.map((enroll, idx) => (
                    <div key={idx} className='px-5 flex justify-start items-center gap-1 hover:bg-slate-50 rounded-r-full mr-3'>
                      <img src={enroll.icon} alt="Class icon" className='w-10 h-10 rounded-full' />
                      <div className='flex-col px-5 py-2 line-clamp-none'>
                        <p className='truncate -mb-2'>{enroll.name}</p>
                        <span className='text-sm'>{enroll.section}</span>
                      </div>
                    </div>
                  ))
                )}
            </div>
          )
        }
      </section>
      <hr />
      <section className='my-2'>
        <Link to="/archived-classes" className={`${menuOpen ? "px-7" : "pl-7"} flex justify-start items-center gap-8 py-2 hover:bg-slate-50 rounded-r-full mr-3`}>
          <MdOutlineArchive className='w-5 h-5' />
          {menuOpen && (<span className='font-normal'>Archived classes</span>)}
        </Link>
        <Link to="settings" className={`${menuOpen ? "px-7" : "pl-7"} flex justify-start items-center gap-8 py-2 hover:bg-slate-50 rounded-r-full mr-3`}>
          <IoSettingsOutline className='w-5 h-5' />
          {menuOpen && (<span className='font-normal'>Settings</span>)}
        </Link>
      </section>
    </div>
  )
}

export default RightNavbar