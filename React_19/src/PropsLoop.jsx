function PropsLoop({ data, arrayData }) {
  return (
    <>
      {/* <h2>PropsLoop </h2> */}
      {/* {
        <ul>
          {data.map((item, index) => (
            <>
              <li key={index}>
                {index + 1} : {item.name}
              </li>
              <li>{item.city}</li>
            </>
          ))}
        </ul>
      } */}
      {data && (
        <div style={{
          color:'green',
          backgroundColor:'blanchedalmond',
          border:'2px solid black',
          padding:'1rem',
          margin:'1rem',
          borderRadius:'1rem',

        }}>
        <p>
          Name : <span style={{
            color:'black',
            fontSize:'1rem',
            

          }}>{data.name} &nbsp; &nbsp; Id : {data.id} &nbsp;
          &nbsp; City : {data.city}</span>
        </p>
        </div>
      )}
      {arrayData && <h3>Name : {arrayData}</h3>}
    </>
  );
}
export default PropsLoop;
