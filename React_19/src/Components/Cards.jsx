import React, { useState } from "react";
import ProfilePic from "./SAHIL_SALAM_PIC.jpg"; // ✅ same folder, so just ./
import "../css/Card.css";

function Cards() {
  const [tog, setTog] = useState(true);
  const firstImage = {
    border: "1px solid black",
    borderRadius: "5px",
    width: "130px",
    height: "220px",
    backgroundColor: "lightgray",
    margin: "10px",

    textAlign: "center",
  };
  return (
    <>
      <h2>Cards</h2>
      <div id="div-image">
        <img
          className="nature"
          src="https://www.insidewink.com/wp-content/uploads/2020/04/Jean_Trebek_Beauty_in_Nature.jpg"
          alt="Natures Beauty"
        />
      </div>
      <button onClick={() => setTog(!tog)}>Toggle</button>

      <div
        style={{
          display: tog ? "flex" : "block",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignContent: "space-between",
          marginTop: tog ? "0px" : "15px",
          marginBottom: tog ? "0px" : "25px",
          color: tog ? "yellow" : "skyblue",
          padding: "5px",
        }}
      >
        <div style={firstImage}>
          <img src={ProfilePic} alt="Profile pic" width={"100px"} />
          <h4>Sahil</h4>
          <p>Web Developer</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            width: "130px",
            height: "220px",
            backgroundColor: "lightgray",
            margin: "10px",

            textAlign: "center",
          }}
        >
          <img src={ProfilePic} alt="Profile pic" width={"100px"} />
          <h4>Sahil Salam</h4>
          <p>Developer</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            width: "130px",
            height: "220px",
            backgroundColor: "lightgray",
            margin: "10px",

            textAlign: "center",
          }}
        >
          <img src={ProfilePic} alt="Profile pic" width={"100px"} />
          <h4>Sahil Salam</h4>
          <p>Developer</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            width: "130px",
            height: "220px",
            backgroundColor: "lightgray",
            margin: "10px",

            textAlign: "center",
          }}
        >
          <img src={ProfilePic} alt="Profile pic" width={"100px"} />
          <h4>Sah</h4>
          <p>Developer</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            width: "130px",
            height: "220px",
            backgroundColor: "lightgray",
            // margin: "1px",

            textAlign: "center",
          }}
        >
          <img src={ProfilePic} alt="Profile pic" width={"100px"} />
          <h4>Sahil Salam</h4>
          <p>Developer</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            width: "130px",
            height: "220px",
            backgroundColor: "lightgray",
            // margin: "1px",

            textAlign: "center",
          }}
        >
          <img src={ProfilePic} alt="Profile pic" width={"100px"} />
          <h4>Sahil Salam</h4>
          <p>Developer</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            width: "130px",
            height: "220px",
            backgroundColor: "lightgray",
            // margin: "1px",

            textAlign: "center",
          }}
        >
          <img src={ProfilePic} alt="Profile pic" width={"100px"} />
          <h4>Sahil Salam</h4>
          <p>Developer</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            width: "130px",
            height: "220px",
            backgroundColor: "lightgray",
            // margin: "1px",

            textAlign: "center",
          }}
        >
          <img
            src={ProfilePic}
            alt="Profile pic"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
              paddingTop: "8px",
            }}
          />
          <h4>Sahil Salam</h4>
          <p>Developer</p>
        </div>
      </div>
    </>
  );
}

export default Cards;

// 01-07-2025 ChatGpt Code
// import React from "react";
// import ProfilePic from "./SAHIL_SALAM_PIC.jpg"; // adjust path if needed

// function Cards() {
//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-evenly",
//     alignContent: "space-between",
//     margin: "2px",
//     padding: "5px",
//   };

//   const cardStyle = {
//     border: "1px solid #ccc",
//     padding: "10px",
//     margin: "10px",
//     width: "200px",
//     textAlign: "center",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//   };

//   const imageStyle = {
//     width: "100px",
//     height: "100px",
//     objectFit: "cover",

//   };

//   return (
//     <div style={containerStyle}>
//       {/* Repeat this block for more cards */}
//       <div style={cardStyle}>
//         <img src={ProfilePic} alt="Profile pic" style={imageStyle} />
//         <h4>Sahil Salam</h4>
//         <p>Developer</p>
//       </div>

//       {/* Example duplicate for demo */}
//       <div style={cardStyle}>
//         <img src={ProfilePic} alt="Profile pic" style={imageStyle} />
//         <h4>John Doe</h4>
//         <p>Designer</p>
//       </div>
//     </div>
//   );
// }

// export default Cards;
