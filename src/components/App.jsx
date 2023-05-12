import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //Creating a new state that is an array of notes
  const [notes, setNotes] = useState([]);

  //Function that adds new notes to the state
  function addNote(note) {
    //Arrow function that takes in the previous notes and adds the new one
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  //Filter functions can take in up to 3 parameters
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  //The map function loops through each note in the array, and then the arrow function is performed on each item
  //The arrow function turns each item into the standard note format with its corresponding title and content
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
