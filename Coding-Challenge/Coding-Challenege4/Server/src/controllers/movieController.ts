import Movie from "../models/movieSchema";
import fetch from "node-fetch";
//const omdb = new (require("omdbapi"))("cd39ad7");

export const getMovies = async (req: any, res: any) => {
  try {
    let result = await fetch(
      `http://www.omdbapi.com/?s=${req.params.text}&apikey=cd39ad7`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let movies = await result.json();
    // console.log(movies);
    // if (movies) {
    //   await movies.save();
    //   res.status(200).send(movies);
    // } else {
    //   res.status(404).json("not found");
    // }
    movies.Search.forEach(async (movie: any) => {
      let newMovie = new Movie(movie);
      let check = await Movie.findOne({ imdbID: movie.imdbID });
      if (!check) {
        newMovie.save();
      }
    });
    res.status(200).send(movies.Search);
  } catch (err: any) {
    res.send(err.message);
  }
};

export const getMoviesById = async (req: any, res: any) => {
  // try {
  //   const search = await Movie.find({ imdbID: req.params.imdbID });
  //   console.log("cccccc", search);
  //   res.status(200).json(search);
  // } catch (err: any) {
  //   res.send(err.message);
  // }
  try {
    // const search = await find({ imdbID: req.params.imdbID });
    let result = await fetch(
      `http://www.omdbapi.com/?i=${req.params.imdbID}&apikey=cd39ad7`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let movies = await result.json();
    // res.status(200).send(movies);

    console.log(movies);
    if (movies) {
      console.log("heloo");

      await movies.save();
      res.status(200).send(movies);
    } else {
      res.status(404).json("not found");
    }
  } catch (err: any) {
    res.send(err.message);
  }
};

export const getAllMovies = async (req: any, res: any) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err: any) {
    res.send(err.message);
  }
};
