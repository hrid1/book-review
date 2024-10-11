import React from "react";
import SingleBook from "./pages/SingleBook/SingleBook";
import BookListCard from "./common/BookListCard/BookListCard";
import { getReadList, getWishList } from "../utilites";

const ReadingBook = () => {
  const books = getReadList();
// const books= getWishList();
  console.log(books);
  return (
    <div>
      {/* <BookListCard></BookListCard> */}

      {books.map((book) => (
        <BookListCard key={book.bookId} book={book}></BookListCard>
      ))}
    </div>
  );
};

export default ReadingBook;
