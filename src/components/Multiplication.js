import {useState} from 'react';

const Multiplication = ({initialValue}) => {

    const [count, setCount] = useState(initialValue ?? 0);

    const multiply = () => {
      setCount(count * count);
    };

    const divide = () => {
        setCount(count / count);
      };

  return (
    <div>
        <h1>Multiplication</h1>
        <button onClick={divide}>Divide</button>
        <span>{count}</span>
        <button onClick={multiply}>Multiply</button>
    </div>
  )
}

export default Multiplication