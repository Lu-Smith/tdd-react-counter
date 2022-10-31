import {useState} from 'react';
import "./styles/Counter.css";


const Counter = ({initialValue}) => {
    const [count, setCount] = useState(initialValue ?? 0);

    const add = () => {
      setCount((prevCount) => prevCount + 1);
    };

    const remove = () => {
        setCount((prevCount) => {
            const result = prevCount - 1;
            if(result < 0) {
                return 0;
            }
            return result;
        });
      };

  return (
    <div className='Counter'>
        <h1>
           Counter
        </h1>
        <div className='container'>
        <button onClick={remove}>Remove</button>
        <span>{count}</span>
        <button onClick={add}>Add</button>
        </div>
        
    </div>
  )
}

export default Counter