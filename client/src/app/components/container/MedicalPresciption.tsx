import React from 'react'

type eventProps ={
  handlePrescription : ()=> void  
}

const MedicalPresciption:React.FC<eventProps> = ({handlePrescription}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <h2 className='text-center text-zinc-500 text-xl'>Start consult to <br /> create a presciption</h2>
        <button className='py-2 w-fit px-3 text-sm background-color rounded-md text-white' onClick={handlePrescription}>Start Consult</button>
    </div>
  )
}

export default MedicalPresciption