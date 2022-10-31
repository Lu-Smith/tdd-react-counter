import {useState} from 'react';

const Multiplication = ({initialValue}) => {

    const [count, setCount] = useState(initialValue ?? 0);

    const multiply = () => {
      setCount(count * count);
    };

  return (
    <div>
        <h1>Multiplication</h1>
        <span>{count}</span>
        <button onClick={multiply}>Multiply</button>
    </div>
  )
}

export default Multiplication