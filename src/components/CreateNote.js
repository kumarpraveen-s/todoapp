import React, { useState } from "react";
import "./createarea.css";
import AddIcon from "@mui/icons-material/Add";
const CreateArea = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [value, setValue] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      setValue(true);
    } else {
      onAdd({ title, content });
      setTitle("");
      setContent("");
      setValue(false);
    }
  };

  return (
    <div className="createarea">
      <form className="createarea__form">
        <input
          type="text"
          className="createarea__input"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="content"
          value={content}
          rows="3"
          placeholder="Take a note..."
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="createarea-btn" onClick={handleSubmit}>
          <AddIcon className="createarea__icon" />
        </button>
        {value && <div className="warning">*All fields are important</div>}
      </form>
    </div>
  );
};

export default CreateArea;
