import React, { useState } from "react";
import axios from "axios";
import "./Content.css";
import { MdLock } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { MdSend } from "react-icons/md";

export default function Content({ displayNotes, index, addNotes }) {
  const [inputFeild, setInputFeild] = useState("");
  const handleClick = async () => {
    axios
      .patch(`/${displayNotes._id}`, {
        notes: [...displayNotes.notes, inputFeild],
      })
      .then((response) => {
        console.log(response.data);
        addNotes(inputFeild, index);
        setInputFeild("");
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      {displayNotes === null ? (
        <div className="content">
          <img
            className="img"
            src="https://s3-alpha-sig.figma.com/img/f2b5/d356/00b6d4748cd536df01bd2b4fecc1d821?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dC2CFsWcG1FD4Dj6myDhh1wYZ3DkGPgwr3eYnS~BMHqWzp6USqKwuWfluqV4njDmwg1Y3twcHvdXr-ebj21pJ-zWs~ZkAXQmyLD3znuAk0bZBsFHsPIPJ09E4H6JVtAeOsBTf3zhdkRyvdcjcsUvSsbq9hUBrOKL5da-dHVrOvfWOiMWwcoBPTwhTvG8c19tQM-59Kry4JOrk2pq3S0~nvPouAWmhFR4RjUjNZv4fElatgXZw0rEzfBb1NJhNyHetjaHdoAvcj-Lurv2oSHUNM~oslo74VkCB-N9gq5zfexyo2aBubfee5HoKGkoNHgAASrZgPtg-ihNmuSM5JUraw__"
            alt="note_img"
          />
          <h1 className="desc_heading">Pocket Notes</h1>
          <div>
            Send and receive messages without keeping your phone online.
          </div>
          <div>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </div>
          <div className="last_line">
            <div className="lock_icon">
              <MdLock />
            </div>
            <div> end-to-end encrypted</div>
          </div>
        </div>
      ) : (
        <div className="saved_notes">
          <div className="header">
            <div className="note_header">
              <div className="note_avatar">{displayNotes.initials}</div>
              <div className="note_title note_padding">{displayNotes.name}</div>
            </div>
          </div>
          <div className="notes">
            {displayNotes.notes.length > 0 &&
              displayNotes.notes.map((note) => {
                return (
                  <div className="note_content">
                    <div>{note}</div>
                    <div className="time">
                      9 March 2023 <GoDotFill /> 10:10 AM
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="text_section">
            <div className="text_box">
              <div className="placeholder_top">
                <textarea
                  onChange={(e) => setInputFeild(e.target.value)}
                  value={inputFeild}
                  className="input"
                  placeholder="Enter your text here................."
                ></textarea>
              </div>
              <div className="send_icon">
                <MdSend onClick={handleClick} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
