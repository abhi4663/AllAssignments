import { ADD_NOTES, DELETE_NOTES, SEARCH_NOTES } from "./actions";
import { notes, searchedNotes } from "./states";

export let reducer = (state: any = notes, action: any) => {
    let newNotes, searchedNotes;
    switch (action.type) {
        case ADD_NOTES:
            newNotes = [...state];
            newNotes.push(action.payload);
            return newNotes;
        case DELETE_NOTES:
            newNotes = [...state];
            newNotes = newNotes.filter((note) => note.name !== action.payload);
            return newNotes;
        case SEARCH_NOTES:
            searchedNotes = [...state];
            searchedNotes = action.payload;
            return searchedNotes;
    }
    return state;
};
