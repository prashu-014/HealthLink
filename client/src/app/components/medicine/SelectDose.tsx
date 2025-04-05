"use client"
import React from 'react'
import { IoCloseSharp } from 'react-icons/io5';
import CapsuleQuantity from './CapsuleQuantity';
import CapsuleTiming from './CapsuleTiming';
import CapsuleDuration from './CapsuleDuration';


const SelectDose = () => {
  return (
    <div className=" border h-full text-xs rounded-md" >
        <div className="flex justify-between p-2 background-color text-white">
          <span className="font-bold">Dolo</span>
          <button><IoCloseSharp /></button>
        </div>
        <CapsuleQuantity />
        <CapsuleTiming />
        <CapsuleDuration />
      </div>
  )
}

export default SelectDose