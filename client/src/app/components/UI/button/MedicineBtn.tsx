import { usePresciptionStore } from '@/app/store/usePresciptionStore';
import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

type MedicineBtnProps = {
    medicineName: string;
    type?: string;
    medicineId?: number;
    closeBtn?: boolean;
    backgroundColor?: 'green' | 'red' | 'default';
    handleClick ?: (e:React.MouseEvent<HTMLHeadingElement, MouseEvent>,id:number | null)=>  void
};

type StyleMap = Record<string, { button: string; closeButton: string }>;

const MedicineBtn: React.FC<MedicineBtnProps> = ({ medicineName, type, closeBtn,medicineId, backgroundColor = 'default' ,handleClick}) => {

    const {removeMedicine} = usePresciptionStore()

    const styleMap: StyleMap = {
        green: {
            button: 'bg-green-800 text-white',
            closeButton: 'bg-green-900',
        },
        red: {
            button: 'bg-red-800 text-white',
            closeButton: 'bg-red-900',
        },
        default: {
            button: 'bg-white text-black border',
            closeButton: 'bg-green-900',
        },
    };

    const { button: buttonStyles, closeButton: closeButtonStyles } = styleMap[backgroundColor] || styleMap.default;

    return (
        <div
            className={`border inline-flex place-items-center py-1.5 px-2 gap-3 rounded-full cursor-pointer ${buttonStyles}`} 
        >
            {type && <span className='text-[10px] rounded-full'>{type}</span>}
            <h4 className='text-sm font-bold' onClick={(e) => handleClick && handleClick(e, medicineId || null)}>{medicineName}</h4>
            {closeBtn && (
                <button className={`${closeButtonStyles} rounded-full`}>
                    <IoCloseSharp className='p-1'   onClick={() => medicineId && removeMedicine(medicineId)}/>
                </button>
            )}
        </div>
    );
};

export default MedicineBtn;
