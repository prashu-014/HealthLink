"use client"

import React from 'react'

interface searchName{
  placeholder : string
  handleFocus?: (event: React.MouseEvent<HTMLInputElement>) => void;
  handleSearch?: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBox:React.FC<searchName> = ({placeholder,handleFocus,handleSearch}) => {
  return (
   <input type='text' className='w-full p-2 border rounded-md' placeholder={placeholder} onClick={handleFocus} onChange={handleSearch} />
  )
}

export default SearchBox