import {useState} from 'react';
import "./styles/Multiplication.css";

const Multiplication = ({initialValue}) => {



  return (
    <div className='Multiplication'>
        <h1>Multiplication x 2</h1>
        <div className='container'>
        <span>{initialValue}</span>
        </div>
    </div>
  )
}

export default Multiplication