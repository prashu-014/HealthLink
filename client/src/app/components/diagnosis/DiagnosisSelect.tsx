"use client"

import React from 'react'
import MedicineBtn from '../UI/button/MedicineBtn'
import { usePresciptionStore } from '@/app/store/usePresciptionStore'

const DiagnosisSelect = () => {
    const {selectedDiagnosis,removeDiagnosis} = usePresciptionStore()
  return (
    <div>
      {selectedDiagnosis.map((symptom) => (
            <MedicineBtn
              medicineName={symptom.name}
              closeBtn={true}
              backgroundColor="green"
              key={symptom.id}
              onClose={() => removeDiagnosis(symptom.id)}
            />
          ))}
      </div>
  )
}

export default DiagnosisSelect