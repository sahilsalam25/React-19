// You're doing well, Sahil! 🔥 But your current implementation has a couple of key issues that are stopping it from working as expected. Let's go through them and fix it step-by-step:

// ❌ Issues in Your Code:
// 1. You're not assigning value to the <input> elements
// So event.target.value is undefined

// check state ends up containing empty strings or invalid values

// 2. Using htmlFor inside <input> — that’s incorrect
// htmlFor should only be used on <label>, not <input>

// 3. You're only adding values but not removing when unchecked
// So once a checkbox is checked, it stays in state forever

// import { useState } from 'react';

// const Checkbox = () => {
//   const [check, setCheck] = useState([]);
//   function handleChange(event) {
//     console.log(event.target.checked);
//     if (event.target.checked) {
//       setCheck([...check, event.target.value]);
//     }
//   }
//   return (
//     <>
//       <h2>Checkbox </h2>
//       <label id="js">
//         <input type="checkbox" htmlFor="js" onChange={handleChange} />
//         JS{' '}
//       </label>
//       <br />
//       <label id="react">
//         <input type="checkbox" htmlFor="react" onChange={handleChange} />
//         React JS
//       </label>
//       <br />
//       <label id="css">
//         <input type="checkbox" htmlFor="css" onChange={handleChange} />
//         CSS{' '}
//       </label>
//       <br />
//       <label id="html">
//         <input type="checkbox" htmlFor="html" onChange={handleChange} />
//         HTML{' '}
//       </label>
//       <hr />
//       <p> {check} </p>
//     </>
//   );
// };
// export default Checkbox;

// ✅ Fixed and Clean Version:

import { useState } from 'react';

const Checkbox = () => {
  const [check, setCheck] = useState([]);

  function handleChange(event) {
    const { value, checked } = event.target;

    if (checked) {
      setCheck([...check, value]);
    } else {
      setCheck(check.filter((item) => item !== value));
    }
  }

  return (
    <>
      <h2>Checkbox</h2>

      <label htmlFor="js">
        <input type="checkbox" value="JS" id="js" onChange={handleChange} />
        JS
      </label>
      <br />

      <label htmlFor="react">
        <input
          type="checkbox"
          value="React JS"
          id="react"
          onChange={handleChange}
        />
        React JS
      </label>
      <br />

      <label htmlFor="css">
        <input type="checkbox" value="CSS" id="css" onChange={handleChange} />
        CSS
      </label>
      <br />

      <label htmlFor="html">
        <input type="checkbox" value="HTML" id="html" onChange={handleChange} />
        HTML
      </label>

      <hr />

      <h3>Selected Technologies:</h3>
      <ul>
        {check.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Checkbox;
