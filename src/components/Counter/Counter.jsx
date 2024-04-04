import  { useState, useEffect } from "react";
import "./Counter.scss";

function Counter(props) {
  const { primarytext, secondarytext } = props;
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);

  return (
    <>
      <h4>Count: {count}</h4>
      <button className="Primary" onClick={add}>
        <h5>{primarytext}</h5>
      </button>
      <button className="Secondary" onClick={subtract}>
        <h5>{secondarytext}</h5>
      </button>
      <p>useEffect: {calculation}</p>
      <Component1 />
    </>
  );
}

function Component1() {
  const [user] = useState("Charan");

  return (
    <>
      <h6>{`Hello ${user}`}</h6>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h6>Component 2</h6>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h6>Component 3</h6>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h6>Component 4</h6>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h6>Component 5</h6>
      <h6>{`Hello ${user} `}</h6>
    </>
  );
}

export default Counter;
