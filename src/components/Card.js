import React from "react";
import "./card.css";
import DeleteIcon from "@mui/icons-material/Delete";
const TodoList = ({ title, content, index, onDelete }) => {
  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
      <p className="card__content">{content}</p>
      <div className="card_icon" onClick={() => onDelete(index)}>
        <DeleteIcon className="card_icon_style" />
      </div>
    </div>
  );
};

export default TodoList;
