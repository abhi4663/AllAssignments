"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionByText = exports.getQuestionById = exports.getQuestionByCategory = exports.addNewquestion = exports.getAllquestions = void 0;
var questionSchema_1 = __importDefault(require("../models/questionSchema"));
var getAllquestions = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var questions, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, questionSchema_1.default.find()];
            case 1:
                questions = _a.sent();
                res.json(questions);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400).send("Error " + err_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllquestions = getAllquestions;
var addNewquestion = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var questions, a, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                questions = new questionSchema_1.default(req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, questions.save()];
            case 2:
                a = _a.sent();
                // res.status(200).send("question is Added Successfully...");
                res.json(a);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                // res.status(400).send("Error", err.message);
                res.send(err_2.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addNewquestion = addNewquestion;
var getQuestionByCategory = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categories, questions, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                categories = new RegExp(req.params.categories, "i");
                return [4 /*yield*/, questionSchema_1.default.find({ categories: categories })];
            case 1:
                questions = _a.sent();
                res.status(200).send(questions);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(400).send("Error " + err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getQuestionByCategory = getQuestionByCategory;
var getQuestionById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var questions, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, questionSchema_1.default.findById(req.params.id)];
            case 1:
                questions = _a.sent();
                res.status(200).send(questions);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(400).send("Error " + err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getQuestionById = getQuestionById;
var getQuestionByText = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var question, questions, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                question = new RegExp(req.params.question, "i");
                return [4 /*yield*/, questionSchema_1.default.find({ question: question })];
            case 1:
                questions = _a.sent();
                res.status(200).send(questions);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(400).send("Error " + err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getQuestionByText = getQuestionByText;
