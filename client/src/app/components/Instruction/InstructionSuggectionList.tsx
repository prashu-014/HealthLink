"use client";
import React from "react";

interface instructionProps {
  id: number;
  instruction: string;
}

interface instruction {
  instruction: instructionProps[];
  handlerClick: (name:string) => void;
}

const InstructionSuggectionList: React.FC<instruction> = ({
  instruction,
  handlerClick,
}) => {
  return (
    <div className="border flex gap-2 p-2 flex-wrap rounded-lg">
      {instruction.map((instru) => (
        <span
          key={instru.id}
          className="border block px-3 py-1 rounded-full text-nowrap hover:cursor-pointer hover:bg-slate-200"
          onClick={()=>handlerClick(instru.instruction)}
        >
          {instru.instruction}
        </span>
      ))}
    </div>
  );
};

export default InstructionSuggectionList;
