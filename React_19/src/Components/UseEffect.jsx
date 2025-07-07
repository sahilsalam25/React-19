import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  function test() {
    console.log("test function called...");
  }
  function testTwo() {
    console.log("testTwo...");
  }

  useEffect(() => {
    test();
    testTwo();
  }, [count, countTwo]);

  return (
    <div>
      <h2> UseEffect</h2>
      <button onClick={() => setCount(count + 1)}>Update Count </button> {count}
      <br />
      <button onClick={() => setCountTwo(countTwo + 2)}>
        Update Count Two{" "}
      </button>{" "}
      {countTwo}
      <Mounting />
      <UnMounting count={count} countTwo={countTwo} />
    </div>
  );
}
function Mounting() {
  useEffect(() => {
    console.log("Mounting....");
  }, []);
  return (
    <>
      <h2>Mounting...</h2>
    </>
  );
}
export function UnMounting({ count, countTwo }) {
  const [display, setDisplay] = useState("true");
  function Unmounting() {
    console.log("Unmounting is start...");
  }

  useEffect(() => {
    Unmounting();
  }, [display]);
  return (
    <>
      <h2>UnMounting...</h2>
      Count {count} CountTwo {countTwo}
      <br />
      {display ? <h2>UnMounting start.....</h2> : null}
      <button onClick={() => setDisplay(!display)}>Toggle-Unmounting</button>
    </>
  );
}
