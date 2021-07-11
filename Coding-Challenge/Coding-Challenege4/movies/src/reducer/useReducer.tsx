export const Reducer = (state: any, action: any): any => {
    switch (action.type) {
        case "MOVIES_LIST":
            return {
                ...state,
                movies: action.movieList,
            };
        case "MOVIE_SEARCH":
            return {
                ...state,
                movies: action.movieList,
            };
    }
}