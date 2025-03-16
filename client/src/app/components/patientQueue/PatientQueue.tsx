"use client"

import React from 'react'
import { PatientCard } from '../card/PatientCard'
import '@/app/pages/doctor/doctor.scss'

const PatientQueue = () => {
  return (
    <div className='flex-1 flex flex-col pb-3'>
      <span className='text-center bg-white border-b border-zinc-300 py-1'>Live Queue(1)</span>
      <div className=' overflow-y-auto scrollbar-custom'>
        <PatientCard />  
      </div>
    </div>
  )
}

export default PatientQueue
