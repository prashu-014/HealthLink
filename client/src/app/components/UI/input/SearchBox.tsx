import React from 'react'

interface searchName{
  placeholder : string
}

const SearchBox:React.FC<searchName> = ({placeholder}) => {
  return (
   <input type='text' className='w-full p-2 border rounded-md' placeholder={placeholder} />
  )
}

export default SearchBox