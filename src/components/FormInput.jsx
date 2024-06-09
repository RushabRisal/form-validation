import {React,useState} from 'react'

export const FormInput = (props) => {
  const [focused,setFocused]=useState(false);
  const {label,errorMessege,onChange,id,pwd,...inputProps}=props;
  const handleFocus=(e)=>{
    setFocused(true);
  }
  return (
    <div className='m-3  flex flex-col justify-center align-center text-white '>
        {/* <label htmlFor="useName">{label}</label> */}
        <input   className=' text-black border-2 p-2 bg-transparent' {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}
        onFocus={()=>{
          inputProps.name==="confirmpassword" && setFocused(true) 
        }}
        />
        <span className='text-black text-red-600   text-wrap '>{errorMessege}</span>
    </div>
  )
}
