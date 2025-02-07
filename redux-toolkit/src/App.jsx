import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset,incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const[amount,setAmount]=useState(0)
const count = useSelector((state)=>state.counter?.value);
console.log("count",count);
const dispatch=useDispatch();
  const handleInc=()=>{
    dispatch(increment())
  }
  const handleDec=()=>{
    dispatch(decrement())
  }
  const handlereset=()=>{
    dispatch(reset())
  }
  const addByAmount=()=>{
    dispatch(incrementByAmount(amount))
  }
  return (
    <>
    <button onClick={handleInc}>+</button>
    <h1>Count:{count}</h1>
    <button onClick={handleDec}>-</button>
    <button onClick={handlereset}>Reset</button>
    <input 
    type='number'
    value={amount}
    onChange={(e)=>setAmount(e.target.value)}
    />
    <button onClick={addByAmount}>Add by amount</button>
    </>
  )
}

export default App
