import PropsLoop from './PropsLoop';

export function LoopJSX() {
  const arr = ['sahil', 'amir', 'imaad', 'zakaur', 'abdul', 'shadab', 'anis'];
  const objData = [
    { id: 1, name: 'Sahil', city: 'Delhi' },
    { id: 2, name: 'Amir', city: 'Mumbai' },
    { id: 3, name: 'Imaad', city: 'Bengaluru' },
  ];
  return (
    <>
      <h2>Loop in JSX </h2>
      {/* <p> Name's are : </p>
    { <ol type="I">
        {arr.map((data, index) => {
          return (
            <li key={index}>
              {index+1} : {data}
            </li>
          );
        })}
        {<li>{arr[0]}</li>
        <li>{arr[2]}</li> }
       </ol>  */}
      {objData.map((item) => {
        return <PropsLoop data={item} />;
      })}

      {arr.map((arrayItem) => {
        return <PropsLoop arrayData={arrayItem} />;
      })}

    </>
  );
}
