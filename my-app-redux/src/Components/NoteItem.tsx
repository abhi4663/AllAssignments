import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../redux/actions";



function NoteItem({ note }: any) {
  const [notes, setNotes] = useState(false);
  const [name, setName] = useState(note.name);
  let dispatch = useDispatch();

  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div className="col">
          {notes ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}

            />
          ) : (
            <h4> {note.name}</h4>
          )}
        </div>

        <button
          className="btn btn-danger m-2"
          onClick={() => dispatch(deleteNote(note.name))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
