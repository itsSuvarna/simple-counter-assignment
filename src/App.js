import React, {useState}from 'react';
import './App.css';


const App=()=>{
  const[counter,setCounter]=useState(0);

  const incre=()=>{
    const newCounter=counter+1
    setCounter(newCounter)
  }
  const decre=()=>{
    const newCounter=counter-1
    setCounter(newCounter)
  }

  

 


  return(
   <div className='app-container'>
     <div className='display-container'>
      <div className='temp-display' >{counter}</div>
      <div className='btn-container'>
        <button className='btn' onClick={incre}>+</button>
        <button className='btn2' onClick={decre}>-</button>

      </div>
     </div>
   </div>
  );
}
export default App