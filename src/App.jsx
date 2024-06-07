
import {react, useRef, useState} from 'react';
import {FormInput} from './components/FormInput'
function App() {
  const usernameref=useRef();

  console.log(usernameref);
  return (
    <div className='flex justify-center items-center p-4  h-dvh  '>
      <form className=' rounded-xl opacity-67 bg-slate-300  md:w-96 container h-96 flex flex-col  shadow-2xl  p-5'>
        <h1 className='text-center text-black font-bold text-xl'>Form</h1>
          <FormInput placeholder={"Username"} refer={usernameref}/>
          <FormInput placeholder={"Email"} refer={usernameref}/>
          <FormInput placeholder={"Age"}/>
          <FormInput placeholder={"Password"}/>
          <div className='flex justify-center items-center h-full '>
            <button className=' bg-slate-900 py-2 px-10 rounded-md   text-white'>Submit</button>
          </div>
      </form>
    </div>
  );
}

export default App
