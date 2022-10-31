import {useState} from 'react';


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