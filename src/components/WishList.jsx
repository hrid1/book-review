import { getWishList } from "../utilites";
import BookListCard from "./common/BookListCard/BookListCard";
import NotFound from "./common/NotFound/NotFound";

const books = getWishList();
// console.log(books);

const WishList = () => {
  if (books.length === 0) return <NotFound name={'Listed Book'}></NotFound>
  return (
    <div>
      {books.map((book) => (
        <BookListCard key={book.bookId} book={book}></BookListCard>
      ))}
    </div>
  );
};

export default WishList;
