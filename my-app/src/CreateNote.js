import React, { useState } from "react";
import axios from "axios";
import "./CreateNote.css";

export default function CreateNote({ closeModel }) {
  const [noteName, setNoteName] = useState("");
  const [color, setColor] = useState("");
  const handleSubmit = () => {
    const name = noteName;
    const arr = name.split(" ");
    const initials =
      arr.length > 1
        ? arr[0][0].toUpperCase() + arr[1][0].toUpperCase()
        : name[0].toUpperCase() + name[1].toUpperCase;

        const data={
            name:noteName,
            initials:initials,
            color:color,
            notes:[]
        }
        axios
	.post('/', data)
	.then(response => {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});
  };
  return (
    <>
      <div className="model_wrapper" onClick={closeModel}></div>
      <div className="model_container">
        <div className="mdl_heading">CreateNewGroup</div>
        <form >
          <div className="grp_input">
            <label htmlFor="grpname">Group Name</label>
            <input
              value={noteName}
              onChange={(e) => setNoteName(e.target.value)}
              className="input_grp"
              type="text"
              id="grpname"
              placeholder="Enter group name"
            ></input>
          </div>
          <div className="colors_section">
            <div className="color_label">Choose color</div>
            <div className="colors">
              <div
                className="circle color1"
                onClick={() => setColor("#b38bfa")}
              ></div>
              <div
                className="circle color2"
                onClick={() => setColor("#b38bfa")}
              ></div>
              <div
                className="circle color3"
                onClick={() => setColor("#ff79f2")}
              ></div>
              <div
                className="circle color4"
                onClick={() => setColor("#43e6fc")}
              ></div>
              <div
                className="circle color5"
                onClick={() => setColor("#0047ff")}
              ></div>
              <div
                className="circle color6"
                onClick={() => setColor("#6691ff")}
              ></div>
            </div>
          </div>
          <div className="btn_position">
            <button className="btn" onClick={handleSubmit} type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
