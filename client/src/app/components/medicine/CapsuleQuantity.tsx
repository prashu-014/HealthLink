import React, { useState } from "react";

const CapsuleQuantity = () => {
  const capsuleQty = ["1/3", "1/2", "3/4", "1", "2", "3"];
  const [active, setActive] = useState("");

  const handleActive = (value: string) => {
    setActive(value);
  };
  return (
    <div className="flex items-center gap-2 p-2  border-b">
        <h1 className="flex-1">Capsule</h1>
      {capsuleQty.map((capsule) => (
        <span
          className={`${capsule === active ?'background-color text-white' :'bg-white'} w-8 h-8 rounded-full flex place-items-center justify-center font-semibold  shadow-sm cursor-pointer shadow-slate-400`}
          key={capsule} onClick={() => handleActive(capsule)}
        >
          {capsule}
        </span>
      ))}
    </div>
  );
};

export default CapsuleQuantity;
