import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes";
import CreateArea from "./CreateArea";
// import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState([]);
  
  function addNote(note) {
    // const uniqueID = uuidv4();
    // const noteWithID = {id: uniqueID, ...note};

    setNotes((prevNotes) => {
      return [...prevNotes, note]
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note 
					key={index} 
          id={index} 
					title={noteItem.title} 
					content={noteItem.content} 
          onDelete={deleteNote}
				/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
