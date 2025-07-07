import React from "react";
import styled from "styled-components";

function StyleComponent() {
  // ✅ 1. Preferred — styled-components uses template literals (CSS syntax):
  const Heading = styled.h1`
    color: whitesmoke;
    width: 250px;
    height: 145px;
    background-color: black;
    border: 2px solid yellow;
    border-radius: 5px;
    box-shadow: 2px 2px 3px red;
  `;

  // ✅ Want that object-style? Use Emotion:
  const StyleBtn = styled.button({
    color: "white",
    backgroundColor: "black",
    width: "120px",
    height: "40px",
    border: "2px solid yellow",
    borderRadius: "5px",
    boxShadow: "2px 2px 3px red",
    cursor: "pointer",
  });

  return (
    <>
      <div>StyleComponent</div>
      <Heading>Hello this is Styled Component...</Heading>
      <StyleBtn onClick={() => console.log("style button clicked")}>
        Style Button
      </StyleBtn>
    </>
  );
}

export default StyleComponent;
