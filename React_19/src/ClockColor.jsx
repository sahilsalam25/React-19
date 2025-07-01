// import { useState, useEffect } from 'react';

// function ClockColor() {
//   const [time, setTime] = useState(0);
//   const [color, setColor] = useState('green');
//   useEffect(() => {
//     setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//   }, []);

//   function handleChange(event) {
//     setColor(event.target.value);
//   }

//   return (
//     <>
//       <h3>Clock Color </h3>
//       <select onChange={handleChange}>
//         <option value={'green'}>Green</option>
//         <option value={'yellow'}>Yellow</option>
//         <option value={'red'}>Red</option>
//       </select>
//       {/* <br /> */}

//       <h2
//         style={{
//           color: color,
//         }}
//       >
//         {' '}
//         Time : {time}{' '}
//       </h2>
//     </>
//   );
// }
// export default ClockColor;

// ChatGpt Code
import { useState, useEffect } from 'react';

function ClockColor() {
  const [time, setTime] = useState('');
  const [color, setColor] = useState('green');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  function handleChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <h3>Clock Color</h3>
      <select onChange={handleChange} value={color}>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="Red">Red</option>
        <option value="orange">Orange</option>
        <option value="black">Black</option>
      </select>

      <div>
        <h2 style={{ display: 'inline' }}> Time : </h2>{' '}
        <h2
          style={{
            color: 'white',
            display: 'inline',
            border: '1px solid balck',
            borderRadius: '10px',
            backgroundColor: color,
          }}
        >
          {time}
        </h2>
      </div>
    </>
  );
}

export default ClockColor;
