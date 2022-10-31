import {useState} from 'react';
import "./styles/Multiplication.css";

const Multiplication = ({initialValue}) => {

    const [number, setNumber] = useState(initialValue ?? 0);
    const [count, setCount] = useState(number);
   

    const multiply = () => {
        setCount(number * 2);
    };


  return (
    <div className='Multiplication'>
        <h1>Multiplication x 2</h1>
        <div className='container'>
            <div>
               <input type="number" value={number} onChange={event => setNumber(event.target.value)}/>
               <span>X 2</span>
            </div>
            <div>
               <span>{count}</span>
               <button onClick={multiply}>Multiply</button>
            </div>
        </div>
    </div>
  )
}

export default Multiplication