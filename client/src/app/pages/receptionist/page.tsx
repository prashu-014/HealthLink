"use client"

import React, { useState } from 'react'

import PatientTable from '@/app/components/UI/table/PatientTable';


const tabs = [
  { id: 'Queue', label: 'Queue', content:<PatientTable />, count: '2' },
  { id: 'appointments', label: 'Appointments', content: 'Appointments Content', count: '1' },
  { id: 'No Show', label: 'No Show', content: 'Reports Content', count: '0' },
];

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className='h-full'>
      <div className="flex border-b-2 justify-between items-center ">
        <div className='flex'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`min-w-40 p-4 flex items-center ${activeTab === tab.id ? 'bg-slate-200  ' : ''}`}
            >
              <span className='text-2xl mr-2 background-color px-[10px] rounded-full text-white text-balance'>{tab.count}</span>
              {tab.label}
            </button>
          ))}
        </div>


        <input type="text" className='border p-2 outline-none h-2/3 mr-4' placeholder='Search Record' />


      </div>
      <div className=" p-3  rounded h-full">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>

  )
}

export default Dashboard