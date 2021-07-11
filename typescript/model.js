"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var books = [app_1.book1, app_1.book2, app_1.book3, app_1.book4, app_1.book5];
var values = books.map(function (book) {
    return book;
});
console.log(values);
