
import { getReadList } from "../utilites";
import BookListCard from "./common/BookListCard/BookListCard";
import NotFound from "./common/NotFound/NotFound";

const ReadingBook = () => {
  const books = getReadList();
  // const books= getWishList();
  console.log(books);

  if (books.length < 1) return <NotFound name={"Reading Book"}></NotFound>;
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
