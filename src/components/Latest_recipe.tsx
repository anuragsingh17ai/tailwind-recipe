import React from 'react';
import stew from '../img/stew.jpg'
import noodles from '../img/noodles.jpg'
import curry  from '../img/curry.jpg'

function Latest_recipe() {
  return (
    <div >

        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
        <div className='mt-8 grid lg:grid-cols-3 gap-10 '>

          <div className='card'>
            <img src={stew} alt='stew' className='w-full h-32 sm:h-48 object-cover'/>
            <div className='m-4'>
            <span className='font-bold'>5 Bean Chilli Stew </span>
            <span className='block text-gray-500 text-sm'>Reciepe by Mario</span>
            </div>
            <div className='badge'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>25 min</span>
            </div>
          </div>

          <div className='card'>
            <img src={noodles} alt='noodles' className='w-full h-32 sm:h-48 object-cover'/>
            <div className='m-4'>
            <span className='font-bold'>Veg Noodles </span>
            <span className='block text-gray-500 text-sm'>Reciepe by Mario</span>
            </div>
            <div className='badge'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>25 min</span>
            </div>
          </div>

          <div className='card'>
            <img src={curry} alt='curry' className='w-full h-32 sm:h-48 object-cover'/>
            <div className='m-4 '>
            <span className='font-bold'>Curry </span>
            <span className='block text-gray-500 text-sm'>Reciepe by Mario</span>
            </div>
            <div className='badge'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>25 min</span>
            </div>
          </div>

        </div>

        </div>
  )
}

export default Latest_recipe