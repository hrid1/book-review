import { useState } from "react";
import { deleteFromWishList, getWishList } from "../utilites";
import BookListCard from "./common/BookListCard/BookListCard";
import NotFound from "./common/NotFound/NotFound";

const WishList = () => {
  // const books = getWishList();
  const [books, setBooks] = useState(getWishList());

  const handleDelete = (id) => {
    deleteFromWishList(id);
    setBooks(getWishList());
  };

  if (books.length === 0) return <NotFound name={"Listed Book"}></NotFound>;
  return (
    <div>
      {books.map((book) => (
        <BookListCard
          key={book.bookId}
          book={book}
          handleDelete={handleDelete}
        ></BookListCard>
      ))}
    </div>
  );
};

export default WishList;
