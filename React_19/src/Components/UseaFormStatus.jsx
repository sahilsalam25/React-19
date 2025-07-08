// import React from "react";
// import { useFormStatus } from "react-dom";

// function UseFormStatus() {
//   async function handleSubmit(event) {
//     event.preventDefault();
//     await new Promise((res) => setTimeout(res, 2000));
//     console.log("submitted");
//   }
//   function Form() {
//     const { pending } = useFormStatus();

//     return (
//       <>
//         <input type="text" placeholder="enter name" />
//         <input type="password" placeholder="Enter password" />

//         <button type="submit" disabled={pending}>
//           {pending ? "Submitting..." : "Submit"}
//         </button>
//       </>
//     );
//   }
//   return (
//     <>
//       <h2>Use Form Status</h2>
//       <form action={handleSubmit}></form>
//       <Form />
//     </>
//   );
// }

//   export default UseFormStatus;

import { useState } from "react";
function UseFormStatus() {
  const [pending, setPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setPending(true);

    await new Promise((res) => setTimeout(res, 2000)); // simulate async
    console.log("submitted");
    setPending(false);
  }

  return (
    <>
      <h2>Client Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" />
        <input type="password" placeholder="Enter password" />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default UseFormStatus;
