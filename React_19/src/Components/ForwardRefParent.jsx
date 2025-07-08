import React from "react";
import { useRef } from "react";
import ForwardRefChild from "./ForwardRefChild";

function ForwardRefParent() {
  const inputRef = useRef(null);
  function updateInput() {
    inputRef.current.focus();
    inputRef.current.style.color = "green";
    console.log("Value :", inputRef.current.value);
  }
  return (
    <div>
      <p>Forward Ref Parent</p>
      <button onClick={updateInput}>Update Ref</button>

      <ForwardRefChild Sahil={inputRef} />
    </div>
  );
}

export default ForwardRefParent;

// const ForwardRefChild = ({ ref }) => {
//   return (
//     <>
//       <h2>ForwardRefChild</h2>
//       <input type="text" placeholder="Enter text" ref={ref} />
//     </>
//   );
// };
