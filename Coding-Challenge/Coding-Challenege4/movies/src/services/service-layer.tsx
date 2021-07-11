import axios from "axios";

export class ServiceManager {
    getAllMovies = async (dispatch: any) => {
        await axios
            .get(`http://localhost:8000/api/movies`)
            .then(response => {
                console.log(response.data);
                dispatch({ type: "MOVIES_LIST", movieList: response.data });
            })
            .catch(err => {
                console.log(err.message);
            });
    };
    searchTitle = async (dispatch: any, text: any) => {
        await axios
            .get(`http://localhost:8000/api/movies/containing/${text}`)
            .then(response => {
                console.log(response.data);
                dispatch({ type: "MOVIES_LIST", movieList: response.data });
            })
            .catch(err => {
                console.log(err.message);
            });
    };
}