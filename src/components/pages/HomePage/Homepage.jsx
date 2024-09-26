import { useEffect, useState } from "react";
import BookCard from "../../common/BookCard/BookCard";
import SingleBook from "../SingleBook/SingleBook";

const Homepage = () => {
  // load data
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksdata.json")
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);

//   console.log(books.length)
  return (
    <div className=" container mx-auto mt-8">
      {/* title */}

      <div className="mx-auto text-center">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>

      {/* all books */}

      <section className="grid grid-cols-1 md:grid-cols-3 border gap-6 py-5 px-10 my-8 ">
        {/* <BookCard></BookCard> */}

        {
            // books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
        }
      </section>

      <section>
        <SingleBook></SingleBook>
      </section>
    </div>
  );
};

export default Homepage;
