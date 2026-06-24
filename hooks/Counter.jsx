import React, { useEffect, useState } from 'react'

const Counter = () => {

    // let count = 0;
    
    let [count, setCount] = useState(0);
    let [data, setData] = useState(100);
    // let [variable_name, function] = useState(initial value)
    // variable_name : state variable
    // function: function to update state_variable
    //
    //initial value:
    // 0-9: number
    // '' or "" : string
    // true or flase: boolean
    // [] : array
    // {} : js object

    /*
    UseEffect - to sow side effects when state changes
    syntax
        UseEffect(function, [dependency])

        function -> side effects to show
        dependency -> states that trigger the function

        useEffect(()=>{}, []) -> effect is seen on page load only
        useEffect(()=>{}, [a,b,c]) -> effect is seen on page load only and when a or b or c changes
        useEffect(()=>{}) -> effect is seen on page load only and when any state changes
        
    */

        useEffect(() => {
            alert("Value updated");
        }, [count, data])
    
  return (
    <div>
        
      <div className='h-[40vh] flex justify-center items-center text-4xl flex-col'>
        Count: {count}
        <button onClick={() => {
            setCount(++count)
        }} className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-5 py-2 uppercase text-white'>
            Increase
        </button>
        
        <button onClick={() => {
            setCount(0)
        }} className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-5 py-2 uppercase text-white'>
            Reset
        </button>
      </div>

      <div className='h-[40vh] flex justify-center items-center text-4xl flex-col'>
        Data: {data}
        <button onClick={() => {
            setData(data+10);
        }} className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-5 py-2 uppercase text-white'>
            Increase
        </button>
        
        <button onClick={() => {
            // setCount(--count)
            setData(data-10);
        }} className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-5 py-2 uppercase text-white'>
            Decrease
        </button>

        <button onClick={() => {
            setData(100)
        }} className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-5 py-2 uppercase text-white'>
            Reset
        </button>
      </div>
    </div>    
      
  )
}

export default Counter