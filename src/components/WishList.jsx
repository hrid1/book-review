import { getWishList } from "../utilites";
import BookListCard from "./common/BookListCard/BookListCard";

const books = getWishList();
// console.log(books);

const WishList = () => {
  return (
    <div>
      {books.map((book) => (
        <BookListCard key={book.bookId} book={book}></BookListCard>
      ))}
    </div>
  );
};

export default WishList;
