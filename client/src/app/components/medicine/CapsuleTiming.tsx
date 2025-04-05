import React, { useState } from "react";

const CapsuleTiming = () => {
  const timing = ["Breakfast", "Lunch", "Dinner"];
  const [selected, setSelected] = useState<{ [key: string]: string }>({});

  const handleSelect = (meal: string, time: string) => {
    setSelected((prev) => ({ ...prev, [meal]: time }));
  };

  return (
    <div className="p-2 flex flex-col gap-2 border-b">
      <h1>Timing</h1>

      <div className="flex-1 flex gap-2 ">
        {timing.map((time) => (
          <div key={time} className="flex-1 bg-white border">
            <h1 className="py-1 bg-slate-500 p-1 text-white">{time}</h1>
            <div className="flex">
              <span
                className="flex-1 p-1 border-e-2 cursor-pointer"
                onClick={() => handleSelect(time, "Before")}
                style={{
                  backgroundColor: selected[time] === "Before" ? "#e2e8f0" : "white",
                  color: "black",
                }}
              >
                Before
              </span>
              <span
                className="flex-1 p-1 cursor-pointer"
                onClick={() => handleSelect(time, "After")}
                style={{
                  backgroundColor: selected[time] === "After" ? "#e2e8f0" : "white",
                  color: "black",
                }}
              >
                After
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapsuleTiming;
