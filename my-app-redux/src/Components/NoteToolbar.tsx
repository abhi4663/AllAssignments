import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes, searchNotes } from "../redux/actions";



function NoteInput() {
    let [name, setName] = useState("");
    let data: any = (localStorage.getItem('notes'));
    let s: any = JSON.parse(data);


    let searchedData: any = [];
    let dispatch = useDispatch();
    function searched() {
        for (let i = 0; i < s.length; i++) {
            if (s[i].name === name) {
                searchedData.push(s[i]);
            }
        }
    }
    return (
        <div>
            <div className="row m-2">

                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />

                <button
                    onClick={() => {
                        dispatch(
                            addNotes({
                                name: name,
                            })
                        );
                        setName('');
                    }}
                    className="btn btn-primary m-2"
                >
                    Add
        </button>

                <button className="btn btn-primary mx-2" onClick={() => {
                    searched();
                    dispatch(
                        searchNotes({
                            searchedData: searchedData

                        })
                    );

                }}>Search</button>

            </div>
        </div>
    );
}

export default NoteInput;
