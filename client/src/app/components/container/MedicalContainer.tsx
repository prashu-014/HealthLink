"use client"

import React, { CSSProperties } from 'react'

type medicalProps = {
  headingText: string
  children: React.ReactNode
  icon:React.ReactElement
  style?:CSSProperties
}

const MedicalContainer: React.FC<medicalProps> = ({ headingText,children,icon,style }) => {
  return (
    <div className='flex flex-col gap-1'>
      <h4 className=' bg-white p-2 font-bold flex items-center gap-2'>{icon} {headingText}</h4>
      <div className='bg-white p-2 flex-1' style={style}>{children}</div>
    </div>
  )
}

export default MedicalContainer