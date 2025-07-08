import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    console.log("value", event.target.value);
    const user = document.getElementById("name").value;
    const password = document.querySelector("#password").value;
    console.log(`user id : ${user} and password is : ${password}`);
  }
  const handleSubmitRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log(`user id Ref: ${user}\t and password Ref: ${password}`);
  };
  return (
    <div>
      <h3> Uncontrolled Component</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" id="name"></input> <br />
        <input
          type="password"
          placeholder="Enter password"
          id="password"
        />{" "}
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Uncontrolled Component with Ref</h2>
      <form onSubmit={handleSubmitRef}>
        <input ref={userRef} type="text" placeholder="Enter Name" />
        <input ref={passwordRef} type="password" placeholder="Enter password" />
        <button>Submit Ref</button>
      </form>
    </div>
  );
};

export default UncontrolledComponent;
