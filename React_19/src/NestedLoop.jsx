import React from "react";

function NestedLoop() {
  let collegeArray = [
    {
      name: "JMI",
      website: "www.jmi.ac.in",
      address: "Delhi,Jamia Nagar",
      student: [
        {
          name: "Sahil",
          age: 25,
          class: 10,
        },
      ],
    },
    {
      name: "AMU",
      website: "www.amu.ac.in",
      address: "Aligarh,India",
      student: [
        {
          name: "Amir",
          age: 27,
          class: 12,
        },
      ],
    },
    {
      name: "Al-Falah University",
      website: "www.alfalah.ac.in",
      address: "Faridabaad,Inida",
      student: [
        {
          name: "Zakaur",
          age: 23,
          class: 11,
        },
      ],
    },
    {
      name: "IQRA",
      website: "www.iqra.ac.in",
      address: "Bengaluru,Inida",
      student: [
        {
          name: "Imaad",
          age: 5,
          class: 1,
        },
      ],
    },
  ];

  return (
    <div>
      <button
        onClick={() =>
          console.log(
            "college array data student name",
            collegeArray[0].student[0].name
          )
        }
      >
        Click to get data
      </button>
      <p>NestedLoop</p>
      {/* border: "2px solid black", */}
      {/* backgroundColor: "lightseagreen", */}
      <ul style={{ color: "black" }}>
        {collegeArray.map((collegeData, index) => (
          <div
            style={{
              color: "green",
              margin: "5px",
              padding: "5px",
            }}
          >
            <h1 style={{ color: "black" }}>College {index + 1} Data</h1>
            <li key={index}>
              College name = {collegeData.name}
              <h3 style={{ color: "black" }}>College Student's Data</h3>
              <h4 style={{ color: "red" }}>
                <ul>
                  <li>Name : {collegeData.student[0].name}</li>
                  <li>Age : {collegeData.student[0].age}</li>
                  <li>Class : {collegeData.student[0].class}</li>
                </ul>
              </h4>
              {/* <li>Name : {collegeData.[0].student[0].name}</li> */}
            </li>
            <li key={index}>College webiste = {collegeData.website}</li>
            <li key={index}>College address = {collegeData.address}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default NestedLoop;

// ChatGpt Code - 28-06-2025

// const collegeArray = [
//   {
//     name: "JMI",
//     website: "www.jmi.ac.in",
//     address: "Delhi, Jamia Nagar",
//     students: [
//       [
//         { name: "Sahil", age: 25, class: 10 },
//         { name: "Amit", age: 22, class: 12 },
//       ],
//       [{ name: "Fatima", age: 23, class: 11 }],
//     ],
//   },
//   {
//     name: "IIT Delhi",
//     website: "www.iitd.ac.in",
//     address: "Delhi, Hauz Khas",
//     students: [
//       [{ name: "Ravi", age: 21, class: 12 }],
//       [
//         { name: "Priya", age: 22, class: 11 },
//         { name: "Kabir", age: 24, class: 10 },
//       ],
//     ],
//   },
// ];

// const NestedLoop = () => {
//   return (
//     <div style={{ color: "black", fontFamily: "Arial" }}>
//       {collegeArray.map((collegeData, collegeIndex) => (
//         <div
//           key={collegeIndex}
//           style={{
//             color: "green",
//             margin: "15px 0",
//             padding: "15px",
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//           }}
//         >
//           <h2 style={{ color: "black" }}>College {collegeIndex + 1}</h2>
//           <p>
//             <strong>Name:</strong> {collegeData.name}
//           </p>
//           <p>
//             <strong>Website:</strong> {collegeData.website}
//           </p>
//           <p>
//             <strong>Address:</strong> {collegeData.address}
//           </p>

//           <h3 style={{ color: "black" }}>Student Groups:</h3>
//           {collegeData.students.map((studentGroup, groupIndex) => (
//             <div key={groupIndex} style={{ marginBottom: "10px" }}>
//               <h4 style={{ color: "blue" }}>Group {groupIndex + 1}</h4>
//               <ul style={{ paddingLeft: "20px" }}>
//                 {studentGroup.map((student, studentIndex) => (
//                   <li key={studentIndex} style={{ color: "red" }}>
//                     Name: {student.name}, Age: {student.age}, Class:{" "}
//                     {student.class}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NestedLoop;
