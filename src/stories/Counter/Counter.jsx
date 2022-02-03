import { useState } from "react";
import "./counter.css";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ label, onClick, ...rest }) => (
  <button onClick={onClick}>{label}</button>
);

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(count - count);
  };
  return (
    <div>
      <Header text={count} />
      <br></br>
      <Button onClick={decreaseCount} label="-" />
      <Button onClick={resetCount} label="Reset" />
      <Button onClick={increaseCount} label="+" />
    </div>
  );
};

export default Counter;
