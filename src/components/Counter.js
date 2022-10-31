import {useState} from 'react';


const Counter = ({initialValue}) => {
    const [count, setCount] = useState(initialValue ?? 0);
    const add = () => {
      setCount(count + 1);
    };

  return (
    <div>
        <h1>
           Counter
        </h1>
        <span>{count}</span>
        <button onClick={add}>Add</button>
    </div>
  )
}

export default Counter