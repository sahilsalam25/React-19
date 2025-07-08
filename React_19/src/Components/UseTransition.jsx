import React, { useTransition } from "react";

function UseTransition() {
  const [display, startTransition] = useTransition();
  function handleClick() {
    console.log("handle Click");
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("done.");
    });
  }
  return (
    <div>
      UseTransition
      <br />
      <button disabled={display} onClick={handleClick}>
        Click
      </button>
      {display ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_%28wobbly%29.gif"
          alt="loader"
          style={{ width: "150px" }}
        />
      ) : null}
    </div>
  );
}

export default UseTransition;
