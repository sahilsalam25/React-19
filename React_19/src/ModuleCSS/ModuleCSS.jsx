// import React from "react";
// import style from "./img.module.css";
// function ModuleCSS() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
//       <h2> ModuleCSS</h2>
//       <div className={style["div-img"]}>
//         <img
//           className={style["nature-img"]}
//           src="https://www.insidewink.com/wp-content/uploads/2020/04/Jean_Trebek_Beauty_in_Nature.jpg"
//           alt="Natures Beauty"
//         />
//       </div>
//     </div>
//   );
// }

// export default ModuleCSS;

// chat gpt

import React from "react";
import style from "./img.module.css";

function ModuleCSS() {
  return (
    <div className={style.wrapper}>
      <img
        className={style["nature-img"]}
        src="https://www.insidewink.com/wp-content/uploads/2020/04/Jean_Trebek_Beauty_in_Nature.jpg"
        alt="Nature's Beauty"
      />

      <div className={style["div-img"]}>
        <p>This is the box beside the image</p>
      </div>
    </div>
  );
}

export default ModuleCSS;
