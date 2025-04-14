"use client";
import React, { useState } from "react";
import InstructionSuggectionList from "./InstructionSuggectionList";
import { usePresciptionStore } from "@/app/store/usePresciptionStore";
import InstructionSelected from "./InstructionSelected";

const Instruction = () => {
  const [isInstruction, setIsInstruction] = useState("");
  const { addInstruction } = usePresciptionStore();

  const instruction = [
    { id: 1, instruction: "Low fat in diet" },
    { id: 2, instruction: "Low Salt in diet" },
    { id: 3, instruction: "Diet 1600 Kcal for Diabetes" },
    { id: 4, instruction: "Walk briskly for 40 minutes every day" },
  ];

  const handleInstruction = () => {
    if (isInstruction.length <= 5) return;

    addInstruction(isInstruction);
    setIsInstruction("");
  };

  const handleSuggestionClick = (name: string) => {
    addInstruction(name);
  };

  return (
    <div className="flex flex-col gap-1 h-full">
      <div className="flex border rounded-lg">
        <input
          type="text"
          className="flex-1 p-2 focus:outline-none"
          placeholder="Search instruction"
          onChange={(e) => setIsInstruction(e.target.value)}
          value={isInstruction}
        />
        <button
          className={`${
            isInstruction.length > 4 ? "background-color" : "bg-slate-400"
          } font-bold px-4 text-white`}
          onClick={handleInstruction}
          disabled={isInstruction.length < 5}
        >
          ADD
        </button>
      </div>

      <InstructionSelected />

      <InstructionSuggectionList
        instruction={instruction}
        handlerClick={handleSuggestionClick}
      />
    </div>
  );
};

export default Instruction;
