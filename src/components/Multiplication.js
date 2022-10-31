import {useState} from 'react';
import "./styles/Multiplication.css";

const Multiplication = ({initialValue}) => {



  return (
    <div className='Multiplication'>
        <h1>Multiplication x 2</h1>
        <div className='container'>
            <div>
               <input type="number" value={initialValue ?? 0}/>
               <span>X 2</span>
            </div>
            <div>
               <span>{initialValue ?? 0}</span> 
            </div>
        </div>
    </div>
  )
}

export default Multiplication