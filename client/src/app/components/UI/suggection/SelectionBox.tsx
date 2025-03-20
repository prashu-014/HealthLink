"use client"

import React from 'react'
import MedicineBtn from '../button/MedicineBtn'

const SelectionBox = () => {
    return (
        <div className='border rounded-md my-2 p-2 flex gap-2 flex-wrap'>
            <MedicineBtn medicineName='D Rise 60k' type='CAP' closeBtn={true} backgroundColor='green' />
        </div>
    )
}

export default SelectionBox