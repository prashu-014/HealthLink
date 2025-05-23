import React from 'react';
import { LuUserRoundSearch } from "react-icons/lu";
interface InputValue {
    name: string;
    openModal : ()=> void
}

const CustomHeader: React.FC<InputValue> = ({ name, openModal }) => {
    return (
        <div className="flex items-center justify-between background-header py-3 px-6"  >
            <h1 className="text-center text-2xl font-bold text-white">{name}</h1>
            <button  className="py-2 px-2 rounded-md bg-white" onClick={openModal} > <LuUserRoundSearch className='text-xl' /></button>
        </div>
    );
};

export default CustomHeader;
