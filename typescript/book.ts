export type book = {
  author: authorDetails | string;
  isbn: string;
  title: string;
  price: number;
  rating: number;
};

type authorDetails = {
  name: string;
  age: number;
};
