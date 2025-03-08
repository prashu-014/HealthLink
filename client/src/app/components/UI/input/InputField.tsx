import React from 'react'



interface InputFieldProps {
  type: string;
  label: string;
  name: string;
  register: any;
  error: any,
}

const InputField: React.FC<InputFieldProps> = ({ type, label, name, register ,error}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        {...register(name, name === "age" ? { valueAsNumber: true } : {})}
        type={type}
        className={`w-full border p-2 rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`} 
        placeholder={`Enter your ${label.toLowerCase()}`}
        min={type === 'date' ? new Date().toISOString().split("T")[0] : undefined} 
        {...(type === 'time' && { min: new Date().toTimeString().slice(0, 5) })}/>
    </div>
  )
}

export default InputField