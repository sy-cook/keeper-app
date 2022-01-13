import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [items, setItems] = useState([]);
  
  function addItem(note) {
    const uniqueID = uuidv4();
    const noteWithID = {id: uniqueID, ...note};

    setItems((prevItems) => {
      return [...prevItems, noteWithID]
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((noteItem) => {
        return noteItem.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((noteItem) => (
        <Note 
					key={noteItem.id} 
          id={noteItem.id} 
					title={noteItem.title} 
					content={noteItem.content} 
          onChecked={deleteItem}
				/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
