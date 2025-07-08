import { useRef } from "react";
function InputRef() {
  const InpRef = useRef(null);
  const headingRef = useRef(null);
  const divRef = useRef(null);
  function updateRef() {
    console.log(InpRef.current.value);
    // InpRef.current.value = "";
    InpRef.current.focus();
    InpRef.current.placeholder = "Enter something...";
    InpRef.current.style.color = "green";
  }
  function handleToggle() {
    // InputRef.current.display

    if (InpRef.current.style.display !== "none") {
      InpRef.current.style.display = "none";
    } else {
      InpRef.current.style.display = "inline";
    }
    console.log("display ", InpRef.current.style.display);
  }
  function handleHeading() {
    console.log("value\n", headingRef.current);

    headingRef.current.style.color = "yellow";
    headingRef.current.style.fontSize = "45px";
  }
  const handleDiv = () => {
    console.log("value", divRef.current.value);
    divRef.current.style.color = "white";
    divRef.current.style.backgroundColor = "skyblue";
    divRef.current.style.width = "350px";
    divRef.current.style.height = "250px";
    divRef.current.style.border = "2px solid black";
    divRef.current.style.borderRadius = "10px";
    divRef.current.style.alignItem = "center";
  };
  return (
    <>
      <h2>Input Ref...</h2>
      <button onClick={handleToggle}>Toggle</button>
      <input type="text" ref={InpRef} />
      <button onClick={updateRef}>CLick</button>
      <h2 ref={headingRef}>This is Heading Two...</h2>
      <button onClick={handleHeading}>Heading</button>
      <div ref={divRef}>Hello i am div</div>
      <button onClick={handleDiv}>DivRef</button>
    </>
  );
}
export default InputRef;
