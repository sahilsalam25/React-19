import { useState } from 'react';

// import {useState} from 'React';

const State = () => {
  // let fruit = 'Apple';
  const [fruit, setFruit] = useState('Apple');
  const [togFruit, setToggleFruit] = useState('Lemon');
  const [count,setCount]=useState(0);
  // let count=5;
  function updateFruit() {
    //     Your code has a major issue: you're calling the useState inside a function (updateFruit), which violates React Hooks rules.

    // ❌ Problem:
    // Hooks like useState must be called at the top level of your functional component—not inside any functions, conditionals, or loops.

    // const [fruit, setFruit] = useState('Apple');

    // alert(`new fruit : ${fruit}`);
    setFruit('Orange');
  }
  const ToggleFruit = () => {
    setToggleFruit((prevfruit) => (prevfruit == 'Lemon' ?'Amrood': 'Lemon'));
  };
  return (
    <>
      <h2>State in React </h2>
      <button onClick={()=>setCount(count+1)}>Count value = {count}</button>
      
      <button onClick={updateFruit}>Update fruits : {fruit} </button>
      <button onClick={ToggleFruit}>Toggle fruits : {togFruit} </button>
    </>
  );
};
export default State;
