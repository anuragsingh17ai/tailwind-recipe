import React, { useState } from 'react'
import Menu from './Menu'

function Navbar() {
  const [showMenu,SetShowMenu]=useState<boolean>(false);
  return (
    <div className='md:flex md:justify-end'>
        <div className='text-right' >

        <div className='flex justify-between items-center'>
          <h1 className='font-bold uppercase p-4 border-b border-gray-200 '>
          <a href='/' className='hover:text-gray-700 block'>Food Ninja</a>
          </h1>
          <button onClick={()=>
           { SetShowMenu(!showMenu);}
          }>
            <div className='px-4 cursor-pointer' id='burger' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </div>
          </button>
        </div>
        {showMenu && <Menu/>}
      </div>
    </div>
  )
}

export default Navbar