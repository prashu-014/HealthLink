import React, { useState } from 'react'

interface TabsProps {
  tabs: string[]
  content: { [key: string]: React.ReactNode }
}

const TabPanel: React.FC<TabsProps> = ({ tabs, content }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]) 

  return (
    <article className="flex flex-col ">
      <div className="bg-white">
        <div className="flex ">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white my-1 p-4 flex-1">
        {content[activeTab]}
      </div>
    </article>
  )
}

export default TabPanel
