"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var movieSchema = new mongoose_1.default.Schema({
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
}, { collection: "movies" });
module.exports = mongoose_1.default.model("movie", movieSchema);
