import React, { useState, useTransition } from "react";
function UseTransitionGpt() {
  const [showImage, setShowImage] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    console.log("handle Click");

    startTransition(() => {
      // simulate async work (non-blocking)
      setTimeout(() => {
        setShowImage(true); // update UI after delay
      }, 4000);
    });
  }
  return (
    <div>
      Use Transition Gpt
      <div>
        <div>
          <h2>useTransition Example</h2>
          <button disabled={isPending} onClick={handleClick}>
            Click
          </button>

          {isPending && (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_%28wobbly%29.gif"
              alt="loader"
              style={{ width: "150px" }}
            />
          )}

          {showImage && <p>✅ Content Loaded!</p>}
        </div>
      </div>
    </div>
  );
}

export default UseTransitionGpt;
