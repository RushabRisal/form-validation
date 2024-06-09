
import {react, useState} from 'react';
import {FormInput} from './components/FormInput';
import inputs from './OwnApi/Inputs'
function App() {
  // const usernameref=useRef();
  const [value,setValue]=useState({
    username:'',
    email :'',
    date:'',
    password:'',
    confirmpassword:""
  });

  const handleSubmit=(e)=>{
    e.preventDefault();
    // const data=new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()))
    console.log(value);
  }
  const onChange=(e)=>{
    setValue({...value,[e.target.name]:e.target.value})
  }
  
  return (
    <>
    <div className='flex justify-center items-center  h-dvh p-5 '>
      <form onSubmit={handleSubmit} className=' rounded-xl  backdrop-blur-sm md:backdrop:bg-none md:w-1/2  container flex flex-col  shadow-2xl p-5'>
        <h1 className='text-center text-black font-bold text-xl'>Form</h1>

          {
            inputs.map((input)=>(
              <FormInput key={input.id} {...input} value={value[input.name]} pwd={value.password} onChange={onChange}/>
            ))
          }

          
       
          <div className='flex justify-center items-center h-full '>
            <button className=' bg-slate-900 py-2 px-10 rounded-md   text-white'>Submit</button>
          </div>
      </form>
    </div>

    </>
  );
}

export default App

