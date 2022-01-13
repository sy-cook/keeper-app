import React, { useState } from "react";


function CreateArea(props) {

	const initialValues = {
		title: "",
		content: ""
	};

	const [values, setValues] = useState(initialValues);

	
	function handleInputChange(event) {
			const { name, value } = event.target;
			setValues({
				...values,
				[name]: value
			});
	};

	function handleClick(event) {
		props.onAdd(values);
		setValues(initialValues);
		event.preventDefault();
	}

  return (
    <div>
      <form onSubmit={handleClick}>
        <input onChange={handleInputChange} name="title" placeholder="Title" value={values.title} />
        <textarea onChange={handleInputChange} name="content" placeholder="Take a note..." rows="3" value={values.content} />
        <button type="submit">
					Add
				</button>
      </form>
    </div>
  );
}

export default CreateArea;
