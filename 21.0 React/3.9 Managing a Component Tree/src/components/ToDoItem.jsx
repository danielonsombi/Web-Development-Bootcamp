import React from "react";

//Affecting the state locally on the component:
// function ToDoItem(props) {
//   const [isClicked, setClicked] = useState(false);

//   function handleClick() {
//     setClicked((prevValue) => {
//       return !prevValue;
//     });
//   }

//   return (
//     <li
//       onClick={handleClick}
//       style={{ textDecoration: isClicked ? "line-through" : null }}
//     >
//       {props.todoItem}
//     </li>
//   );
// }

//If you want to delete the clicked item from the entire array
function ToDoItem(props) {
  function handleClick() {}

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.todoItem}</li>
    </div>
  );
}

export default ToDoItem;
