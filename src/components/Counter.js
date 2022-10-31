import {useState} from 'react';


const Counter = ({initialValue}) => {
    const [count, setCount] = useState(initialValue ?? 0);

    const add = () => {
      setCount((prevCount)=>prevCount + 1);
    };

    const remove = () => {
        setCount((prevCount)=>prevCount - 1);
      };

  return (
    <div>
        <h1>
           Counter
        </h1>
        <span>{count}</span>
        <button onClick={add}>Add</button>
        <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Counter