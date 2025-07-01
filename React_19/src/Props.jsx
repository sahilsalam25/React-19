import { useEffect } from 'react';

// 🔸Child Component (with destructuring):

function Props({ naam, age, objectValue }) {
  useEffect(() => {
    // alert() only accepts one argument, and it ignores all others.
    // alert(naam, age);
    // alert(`Name: ${naam}, Age: ${age}`);
    // alert(objectValue.email);
  }, []);

  return (
    <>
      <h2>This is Props (Destructuring)</h2>
      <p>Name: {naam}</p>
      <p>Age: {age}</p>
      <h2>objData </h2>
      <ul>
        <li>Name - {objectValue.name}</li>
        <li>Email -{objectValue.email} </li>
        <li>Mob - {objectValue.mob} </li>
      </ul>
      <DemoProps />
    </>
  );
}

// 🔍 How it works:
// naam={name} is passed as a prop.

// { naam } destructures the props object to pull out naam directly.

// You can now use naam without props. prefix.

// ✅ Example 2: Without Destructuring
// 🔸Child Component (no destructuring):

// function Props(props) {
//   return (
//     <>
//       <h2>This is Props (Without Destructuring)</h2>
//       <p>Name: {props.naam}</p>
//       <p>Age: {props.age}</p>
//     </>
//   );
// }
// 🔍 How it works:
// All props are received in the props object.

// You access each prop using props.propName (e.g., props.naam).

function DemoProps() {
  let arr = [1, 2, 3, 4, 5];
  return (
    <>
      <h3>Here i defined all data </h3>
      <ChildProps arrayValue={arr} />
    </>
  );
}

// without
// function ChildProps(propData){
// with
function ChildProps({ arrayValue }) {
  return (
    <>
      <h3>Here i receive all data </h3>
      {/* <p> Array Value : {propData.arrayValue}</p> */}
      <p> Array Value : {arrayValue}</p>
      {/* Version 1: Curly Braces — need return */}
      {arrayValue.map((data, index) => {
        return <h2 key={index}>{data} </h2>;
      })}

      {/* 🟢 Version 2: Parentheses — auto-return */}
      {arrayValue.map((data, index) => (
        <h2 key={index}>Value: {data}</h2>
      ))}

      {/* This is also an arrow function, but with shorthand return syntax using parentheses () instead of braces {}. */}
      {/* ✅ Real-World JSX Example: */}

      {[1, 2, 3].map((num) => (
        <p key={num}>{num}</p>
      ))}
      <DefaultProp name="Sahil" age={25} />
      <DefaultProp age={25} />
    </>
  );
}

function DefaultProp({ name = 'User' }) {
  return (
    <>
      <h2>Default props</h2>
      <h3>Hi, {name} </h3>
      
    </>
  );
}
export default Props;
