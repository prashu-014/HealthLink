"use client"

import MedicalContainer from '@/app/components/container/MedicalContainer'
import MedicalHistory from '@/app/components/container/MedicalHistory'
import MedicalPresciption from '@/app/components/container/MedicalPresciption'
import PatientHeader from '@/app/components/header/PatientHeader'
import { CiMedicalClipboard } from "react-icons/ci";
import { PiPrescription } from "react-icons/pi";

import React from 'react'

const DoctorDashboard = () => {

  const prescriptionStyle: React.CSSProperties = {
    display: 'flex',
    placeItems: "center",
    justifyContent: "center",
    height: '100%'
  }

  return (
    <>
      <PatientHeader />
      <section className='grid grid-cols-1 md:grid-cols-2 gap-2 p-2 bg-zinc-200'>
        <MedicalContainer headingText="Medical History" children={<MedicalHistory />} icon={<CiMedicalClipboard className='text-xl' />} />
        <MedicalContainer headingText="No prescription Yet" children={<MedicalPresciption />} icon={<PiPrescription className='text-xl' />} style={prescriptionStyle} />
      </section>
    </>
  )
}

export default DoctorDashboard
