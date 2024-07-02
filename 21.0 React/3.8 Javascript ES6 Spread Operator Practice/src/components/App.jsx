import React, { useState } from "react";

function App() {
  const [InputText, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setText(value);
  }

  function handleClick(event) {
    setItems((prevItems) => {
      return [...prevItems, InputText];
    });

    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          name="item"
          value={InputText}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.length > 0 ? (
            items.map((listItem, index) => <li>{listItem}</li>)
          ) : (
            <li>A Item</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
