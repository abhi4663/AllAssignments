"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRouter = void 0;
var express_1 = __importDefault(require("express"));
var noteController_1 = require("../controllers/noteController");
exports.noteRouter = express_1.default.Router();
exports.noteRouter.get("/", noteController_1.getNotes).post("/", noteController_1.addNewNote);
exports.noteRouter
    .get("/:id", noteController_1.getNoteById)
    .delete("/:id", noteController_1.deleteNote)
    .put("/:id", noteController_1.updateNote);
//noteRouter.post("/", addNewNote);
//noteRouter.delete("/:id", deleteNote);
//noteRouter.put("/:id", updateNote);
exports.noteRouter.get("/note/:title", noteController_1.searchNote);
