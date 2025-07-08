import React, { useId } from "react";

function UseId() {
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();
  const id5 = useId();
  const id6 = useId();
  const id7 = useId();
  return (
    <div>
      <h2> UseId</h2>
      <p>Id : {id1}</p>
      <p>Id : {id2}</p>
      <p>Id : {id3}</p>
      <p>Id : {id4}</p>
      <p>Id : {id5}</p>
      <p>Id : {id6}</p>
      <p>Id : {id7}</p>
    </div>
  );
}

export default UseId;
