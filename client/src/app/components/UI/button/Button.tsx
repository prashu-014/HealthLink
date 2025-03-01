import React from 'react'

interface ButtonType{
    buttonName : string,
    style:string
    type:any,disabled:boolean
}

const Button:React.FC<ButtonType> = ({buttonName,style,type,disabled}) => {
  return (
    <button className={`${style}`} type={type} disabled={disabled}>
          {buttonName}
    </button>
  )
}

export default Button