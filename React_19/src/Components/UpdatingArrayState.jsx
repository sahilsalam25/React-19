import React, { useState } from "react";

function UpdatingArrayState() {
  const [data, setData] = useState(["sahil", "amir", "imaad"]);
  function handleChange(name) {
    data[data.length] = name;
    setData([...data]);
  }
  return (
    <>
      <h2>Updating Array State</h2>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(event) => handleChange(event.target.value)}
      />
      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </>
  );
}

export default UpdatingArrayState;
