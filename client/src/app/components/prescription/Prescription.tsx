"use client"

import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import TabPanel from '../tab panel/TabPanel';
import Medicine from '../medicine/Medicine';
import PresciptionPdf from '../pdfviewer/PresciptionPdf';
import Symptom from '../symptoms/Symptom';

type PrescriptionProps = {
    setIsPrescription: React.Dispatch<React.SetStateAction<boolean>>
}

const tabNames = ['Medical', 'Symptoms', 'Diagnosis', 'Instructions', 'Other']

const tabContent = {
    Medical: <Medicine />,
    Symptoms: <Symptom />,
    Diagnosis: <div>Diagnosis Content</div>,
    Instructions: <div>Instructions Content</div>,
    Other: <div>Other Content</div>,
}

const Prescription: React.FC<PrescriptionProps> = ({ setIsPrescription }) => {
    return (
        <section className='flex-1 flex flex-col'>
            <div className='flex  justify-between items-center py-2 bg-white'>
                <h2 className='text-xl font-semibold ps-4'>Prescription </h2>
                <button className='bg-red-500 p-2 rounded-s-2xl' onClick={() => setIsPrescription(false)}><IoCloseOutline className='text-xl text-white' /></button>
            </div>

            <article className='flex flex-col md:flex-row gap-1 pt-1 px-2 pb-2 flex-1 '>
                <div className='flex-1'>
                    <TabPanel tabs={tabNames} content={tabContent} />
                </div>
                <div className='bg-white flex-1'>
                    <PresciptionPdf />
                </div>
            </article>

        </section>
    )
}

export default Prescription