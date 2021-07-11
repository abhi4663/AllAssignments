import { book1, book2, book3, book4, book5 } from './app';
const books: any = [book1, book2, book3, book4, book5];

let values = books.map((book: any) => {
  return book;
});

console.log(values);
