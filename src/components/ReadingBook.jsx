import { useState } from "react";
import { deleteFromReadList, getReadList } from "../utilites";
import BookListCard from "./common/BookListCard/BookListCard";
import NotFound from "./common/NotFound/NotFound";

const ReadingBook = () => {
  let books = getReadList();

  const [nbook, setBook] = useState(books);
  const handleDelete = (id) => {
    console.log(id);
    deleteFromReadList(id);
    setBook(getReadList());
  };

  if (books.length < 1) return <NotFound name={"Reading Book"}></NotFound>;
  return (
    <div>
      {/* <BookListCard></BookListCard> */}

      {nbook.map((book) => (
        <BookListCard
          key={book.bookId}
          book={book}
          handleDelete={handleDelete}
        ></BookListCard>
      ))}
    </div>
  );
};

export default ReadingBook;
