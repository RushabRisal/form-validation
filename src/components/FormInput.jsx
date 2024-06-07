import {React,useState} from 'react'

export const FormInput = (props) => {

  return (
    <div className='m-3 border-solid border-2 flex flex-col justify-center align-center text-white '>
        {/* <label htmlFor="useName">UserName</label> */}
        <input type="text" id='useName' className='border-solid border-1 border-slate-900 p-2  bg-white ' ref={props.refer} placeholder={props.placeholder}/>
    </div>
  )
}
