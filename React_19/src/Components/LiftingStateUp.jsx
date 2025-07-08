import React, { useState } from "react";

function LiftingStateUp() {
  const [data, setData] = useState("");
  return (
    <div>
      <h3>Lifting State Up</h3>
      <ChildOne setData={setData} />
      <hr />
      <ChildTwo data={data} />
    </div>
  );
}

// ChildOne receives setData to update parent state
function ChildOne({ setData }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter text"
        onChange={(event) => setData(event.target.value)}
      />
    </>
  );
}
// ChildTwo receives data to display
function ChildTwo({ data }) {
  return <>Input Data :{data}</>;
}
export default LiftingStateUp;
