import React from 'react'

type Props = {
    label: string;
    type:string
};

const InputField:React.FC<Props> = ({label,type}) => {
  return (
    <div className='py-2'>
        <label htmlFor="">{label}</label> <br />
        <input type={type} className='w-full border p-1' />
    </div>
  )
}

export default InputField