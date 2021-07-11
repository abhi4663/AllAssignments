import { MovieContext } from "../reducer/useContext";
import { useContext, useEffect, useState } from "react";
import { ServiceManager } from "../services/service-layer";
import { Link } from "react-router-dom";
import './style.css';
import { Card } from 'react-bootstrap';
import Pagination from "@material-ui/lab/Pagination";
import {
    Box,
    CssBaseline,
    Typography,
    CardContent,
    Grid,
    Container,
} from "@material-ui/core";


const service = new ServiceManager();

function Movies(props: any) {
    const [page, setPage] = useState(1);
    const { state, dispatch } = useContext(MovieContext);
    useEffect(() => {
        service.getAllMovies(dispatch);
    }, [page])
    const movie = state.movies.map((movie: any, index: any) => {
        return (
            <>
                <div>
                    <Card style={{ width: '18rem' }} className="box">
                        <Card.Img className="box-image" src={movie.Poster} title={movie.Title} />
                        <Card.Body className="box-body">
                            <Card.Text>
                                <Link to={`${movie.Title}`}> <h4>{movie.Title}</h4></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </>
        )
    })
    return (
        <div >
            {movie}
            <Box py={3} display="flex" justifyContent="center">
                <Pagination
                    count={10}
                    color="secondary"
                    variant="outlined"
                    defaultPage={3}

                    onChange={(e, value) => setPage(value)}
                />
            </Box>
        </div>
    )
}

export default Movies;
