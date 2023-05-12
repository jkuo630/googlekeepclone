import React, { useState } from "react";

function CreateArea(props) {
  //New state that represents each note
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //When the form detects a change it runs this function
  function handleChange(event) {
    //Deconstructs the event to a name and value
    const { name, value } = event.target;

    //Set note area as what is being typed
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  //Pushes the note to app.jsx
  //Prevents the website from refreshing each time a button is clicked
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
