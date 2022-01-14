import React, { useState } from "react";


function CreateArea(props) {
	const initialValues = {
		title: "",
		content: ""
	};

	const [note, setNote] = useState(initialValues);
	
	function handleInputChange(event) {
		const { name, value } = event.target;
		setNote(prevNote => { 
			return {
				...prevNote,
				[name]: value
			};
		});
	};

	function submitNote(event) {
		props.onAdd(note);
		setNote(initialValues);
		event.preventDefault();
	}

  return (
    <div>
      <form className="create-note">
        <input onChange={handleInputChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleInputChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>
					Add
				</button>
      </form>
    </div>
  );
}

export default CreateArea;
