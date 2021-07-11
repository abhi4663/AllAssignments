import React, { useReducer } from "react";
import { Reducer } from "./useReducer";

const initialState = {
    movies: [],
    selectedMovie: {}
}


export const MovieContext = React.createContext<any>({});

export const MovieProvider = (props: any) => {
    const [state, dispatch] = useReducer(Reducer, initialState, () => {
        return initialState;


    });
    console.log(state);

    return (
        <MovieContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MovieContext.Provider>
    );
};
