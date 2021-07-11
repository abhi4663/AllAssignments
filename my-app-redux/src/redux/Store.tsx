import { createStore } from 'redux';
import { reducer } from './reducer';


function saveToLocalStorage(state: any) {
    try {
        const s = JSON.stringify(state);
        localStorage.setItem("notes", s);
    } catch (e) {
        console.log(e);

    }

}
function loadLocalStorage() {
    try {
        const s = localStorage.getItem("notes");
        if (s === null)
            return undefined;
        return JSON.parse(s);
    } catch (error) {
        console.log(error);
        return undefined;

    }
}
export let store = createStore(reducer, loadLocalStorage());

store.subscribe(() =>
    saveToLocalStorage(store.getState())
);