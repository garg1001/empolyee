import React, { useState } from 'react'

function Cal1() {
    const [data, setData]=useState({
     num1:0,
     num2:0,
     res:0,
    });
    const changeHandler=(e)=>{
      setData({...data,[e.target.name]:Number(e.target.value)});
    };
    function sumClick()
    {
        setData({...data,res:data.num1 + data.num2});
    }
    function mulClick()
    {
        setData({...data,res:data.num1 * data.num2});
    }
    function divClick()
    {
        setData({...data,res:data.num1 / data.num2});
    }
    function clearClick()
    {
        setData({num1:0, num2:0,res:0});
    }
  return (
    <>
      <b>Enter First Number :</b><input type='number' name='num1' 
      onChange={changeHandler} value={data.num1}/><br/><br/>
      <b>Enter Second Number :</b><input type='number' name='num2'
      onChange={changeHandler} value={data.num2}/><br/>
      <b>Result</b>{data.res}<br/>
      <button className='btn btn-primary' onClick={sumClick}>Sum</button>
      <button className='btn btn-success m-2' onClick={mulClick}>Mul</button>
      <button className='btn btn-info' onClick={divClick}>Div</button><br/>
      <button className='btn btn-danger m-2' onClick={clearClick}>Clear All</button>
    </>
  );
}

export default Cal1
