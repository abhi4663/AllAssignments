import express from "express";
import {
  getAllMovies,
  getMovies,
  getMoviesById,
} from "../controllers/movieController";

export const movieRouter = express.Router();

movieRouter.get("/containing/:text", getMovies);

movieRouter.get("/containing/id/:imdbID", getMoviesById);

movieRouter.get("/", getAllMovies);
