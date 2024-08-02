import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SideBar.css";
import { FaPlus } from "react-icons/fa";
import CreateNote from "./CreateNote";
import Content from "./Content";
export default function SideBar() {
  const [showModel, setShowModel] = useState(false);
  const [notes, setNotes] = useState([]);
  const [index, setIndex] = useState(null);
  const [displayNotes, setDisplayNotes] = useState(null);
  const closeModel = () => setShowModel(false);

  const addNotes = (data, ind) => {
    const oldNote=[...notes];
    const newNote=oldNote[ind];
    newNote.notes=[...newNote.notes,data];
    oldNote[ind]=newNote
    setNotes(oldNote);
  };

  const handleClick = (note, ind) => {
    setDisplayNotes(note);
    setIndex(ind);
  };

  useEffect(() => {
     const fetchData = async () => {
      try {
        const response = await axios.get('/');
        console.log("API Response:", response.data);
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="sidebar">
        <div className="heading_css">
          <h2 className="heading">Pocket Notes</h2>
        </div>
        <div className="note_list">
          {Array.isArray(notes)  &&
            notes?.map((note,ind) => {
              return (
                <div className="note_name" onClick={() => handleClick(note,ind)}>
                  <div>
                    <div
                      className="note_avatar"
                      style={{ backgroundColor: note.color }}
                    >
                      {note.initials}
                    </div>
                  </div>
                  <div className="note_title">{note.name}</div>
                </div>
              );
            })}
        </div>
        <div className="add_icon" onClick={() => setShowModel(true)}>
          <div className="add_icon_style">
            <FaPlus />
          </div>
        </div>
        {showModel && <CreateNote closeModel={closeModel}></CreateNote>}
      </div>
      <Content
        displayNotes={displayNotes}
        index={index}
        addNotes={addNotes}
      ></Content>
    </div>
  );
}
