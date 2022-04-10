import React, { useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateNote";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes((prevState) => {
      return prevState.filter((_, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.length === 0 && <div className="list_empty">No items in list</div>}
      <div className="notes_container">
        {notes.map((noteItem, index) => {
          return (
            <Card
              title={noteItem.title}
              content={noteItem.content}
              key={index}
              index={index}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
