import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      //   required: true,
    },
    Year: {
      type: String,
      //   required: true,
    },
    Rated: {
      type: String,
      //   required: true,
    },
    imdbID: {
      type: String,
      //   required: true,
    },
    Poster: {
      type: String,
      // required: true,
    },
    Actors: {
      type: String,
      // require: true,
    },
    Awards: {
      type: String,
      // require: true,
    },
    Country: {
      type: String,
      // require: true,
    },
    Language: {
      type: String,
      // require: true,
    },
    BoxOffice: {
      type: String,
      // require: true,
    },
  },
  { collection: "movies" }
);

export = mongoose.model("movie", movieSchema);
