import React from 'react'

const PatientHeader = () => {
  return (
    <div className='background-header text-white p-3 flex gap-2 items-center'>
        <span className='w-10 h-10 bg-white rounded-full block'></span>
        <div className='text-sm'>
            <span className='font-bold'>Prashant</span> <br />
            <span>Male,35y</span>
        </div>
    </div>
  )
}

export default PatientHeader