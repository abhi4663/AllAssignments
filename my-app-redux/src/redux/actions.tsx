export const ADD_NOTES = "ADD_NOTES";
export const DELETE_NOTES = "DELETE_NOTES";
export const SEARCH_NOTES = "SEARCH_NOTES";

export function addNotes(note: any) {
    return {
        type: ADD_NOTES,
        payload: note,
    };
}

export function deleteNote(note: any) {
    return {
        type: DELETE_NOTES,
        payload: note,
    };
}

export function searchNotes(note: any) {
    return {
        type: SEARCH_NOTES,
        payload: note,
    };
}