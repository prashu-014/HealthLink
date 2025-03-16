"use client"
import React from 'react'

export const PatientCard = () => {
  return (
    <div className=' text-color  p-3 flex  justify-between items-center hover:bg-white hover:text-black'>
      <div className='flex gap-2 '>
        <span className='bg-zinc-300 h-10 w-10 block rounded-md'></span>
        <div className='flex flex-col'>
          <span>Prashant</span>
          <span className='text-xs '>M, 35y</span>
        </div>
      </div>
      <div className='flex flex-col text-sm'>
        <span>walk-in</span>
        <span className='text-red-600'>1h 17m</span>
      </div>

    </div>
  )
}
