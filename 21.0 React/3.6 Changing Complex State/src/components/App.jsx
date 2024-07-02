import React, { useState } from "react";

//Trial which works without using objects.
// function App() {
//   const [fName, setFName] = useState("");
//   const [lName, setLName] = useState("");

//   function handleOnChange(event) {
//     if (event.target.name == "fName") {
//       if (event.target.value) {
//         setFName(event.target.value);
//       }
//     }

//     if (event.target.name == "lName") {
//       if (event.target.value) {
//         setLName(event.target.value);
//       }
//     }
//   }
//   return (
//     <div className="container">
//       <h1>Hello {fName + " " + lName}</h1>
//       <form>
//         <input
//           name="fName"
//           onChange={handleOnChange}
//           placeholder="First Name"
//           value={fName}
//         />
//         <input name="lName" onChange={handleOnChange} placeholder="Last Name" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

////Expressive code illustrating what happens:
// function App() {
//   const [fullName, setFullName] = useState({
//     fName: "",
//     lName: "",
//   });

//   function handleChange(event) {
//     const newValue = event.target.value;
//     const inputName = event.target.name;

//     setFullName((prevValue) => {
//       if (inputName === "fName") {
//         return {
//           fName: newValue,
//           lName: prevValue.lName,
//         };
//       } else if (input === "lName") {
//         return {
//           fName: prevValue.fName,
//           lName: newValue,
//         };
//       }
//     });
//   }

//   return (
//     <div className="Container">
//       <h1>
//         {" "}
//         Hello {fullName.fName} {fullName.lName}
//       </h1>

//       <form>
//         <input
//           name="fName"
//           onChange={handleChange}
//           placeholder="First Name"
//           value={fullName.fName}
//         />
//         <input
//           name="lName"
//           onChange={handleChange}
//           placeholder="Last Name"
//           value={fullName.lName}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

//Simpified using destructuring:
function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="Container">
      <h1>
        {" "}
        Hello {fullName.fName} {fullName.lName}
      </h1>

      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
