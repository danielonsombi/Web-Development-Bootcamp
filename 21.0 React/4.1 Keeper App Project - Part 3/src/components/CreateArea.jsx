import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
