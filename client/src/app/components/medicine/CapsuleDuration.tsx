import React, { useState } from 'react';

const CapsuleDuration = () => {
  const durationDose = ["1d", "2d", "4d", "5d", "1w", "2w", "15d", "3w", "4w", "1m", "2m", "3m", "6m", "1y"];
  const specialInstructions = ["SOS", "Till Required", "To Continue", "Start"];

  const [selected, setSelected] = useState<string>("");

  return (
    <div className='p-2 flex flex-col gap-1'>
      <h1>Duration</h1>

      <div className='grid grid-cols-5'>
        {durationDose.map((duration) => (
          <span
            key={duration}
            onClick={() => setSelected(duration)}
            className='flex-1 bg-slate-50 border border-collapse p-1 text-slate-500 cursor-pointer hover:bg-slate-200 hover:text-black'
            style={{
              backgroundColor: selected === duration ? '#3b82f6' : undefined,
              color: selected === duration ? 'white' : undefined
            }}
          >
            {duration}
          </span>
        ))}
      </div>

      <div className='flex gap-5 py-1 px-1'>
        {specialInstructions.map((dose) => (
          <div key={dose} className='flex items-center gap-1'>
            <input
              type="radio"
              name="specialInstruction"
              value={dose}
              checked={selected === dose}
              onChange={() => setSelected(dose)}
            />
            <label>{dose}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapsuleDuration;
