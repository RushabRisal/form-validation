
import {react, useState} from 'react';
import {FormInput} from './components/FormInput';

function App() {
  // const usernameref=useRef();
  const [value,setValue]=useState({
    username:'',
    email :'',
    date:'',
    password:'',
    confirmpassword:""
  });
  const inputs=
    [
    {
        "id":1,
         name:"username",
         type:"text",
         placeholder:"username",
         label:"username",
         errorMessege:"Username should be 3-16 charater and shouldn't contain special charater",
         pattern:"^[A-Za-z0-9]{3,16}$",
         required:true  
    },
    {
        "id":2,
         name:"email",
         type:"email",
         placeholder:"email",
         label:"email",
         
         errorMessege:"Email must be valid",
         required:true  
    },
    {
        "id":3,
         name:"date",
         type:"date",
         placeholder:"Date",
         label:"date"
        
    },
    {
        "id":4,
         name:"password",
         type:"password",
         placeholder:"password",
         label:"password",
         errorMessege:"password should be 6-16 character with at leact 1 uppercase, 1 number and 1 special character",
         pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$",
         required:true  
    },
    {
        id:5,
         name:"confirmpassword",
         type:"password",
         placeholder:"Confirm password",
         label:"password",
         errorMessege:"password didn't match",
         pattern: value.password,
         required:true  
    }

]

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
      <form onSubmit={handleSubmit} className=' rounded-xl  backdrop-blur-sm md:backdrop:bg-none md:w-1/2  container flex flex-col  shadow-2xl p-5 '>
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

