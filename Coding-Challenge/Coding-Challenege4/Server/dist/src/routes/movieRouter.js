"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRouter = void 0;
var express_1 = __importDefault(require("express"));
var movieController_1 = require("../controllers/movieController");
exports.movieRouter = express_1.default.Router();
exports.movieRouter.get("/containing/:text", movieController_1.getMovies);
exports.movieRouter.get("/containing/id/:imdbID", movieController_1.getMoviesById);
exports.movieRouter.get("/", movieController_1.getAllMovies);
