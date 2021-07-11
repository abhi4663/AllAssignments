import React from "react";
import NoteItem from "./NoteItem";
import { useSelector } from "react-redux";

function NoteList() {
  let notes: any = useSelector((state) => state);
  console.log(notes);


  return (
    <div className="my-4">
      {notes.map((note: any) => {
        return <NoteItem key={notes.note} note={note} />;
      })}
    </div>
  );
}

export default NoteList;
