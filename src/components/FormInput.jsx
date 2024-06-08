import {React,useState} from 'react'

export const FormInput = ({label,onChange,id,...inputProps}) => {

  return (
    <div className='m-3 border-solid border-2 flex flex-col justify-center align-center text-white '>
        {/* <label htmlFor="useName">{label}</label> */}
        <input   className='border-solid text-black border-1 border-slate-900 p-2  bg-white ' {...inputProps} onChange={onChange}/>
    </div>
  )
}
