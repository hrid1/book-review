import { useState } from "react";
import BookCard from "../../common/BookCard/BookCard";
import { useLoaderData } from "react-router-dom";

const Homepage = () => {
  const [wishList, setWishList] = useState([]);

  // load data
  const data = useLoaderData();

  return (
    <>
      <div className=" container mx-auto mt-8">
        {/* title */}

        <div className="mx-auto text-center">
          <h1 className="text-3xl font-bold">Books</h1>
        </div>

        {/* all books */}

        <section className="grid grid-cols-1 md:grid-cols-3 border gap-6 py-5 px-10 my-8 ">
          {/* <BookCard></BookCard> */}

          {data.books.map((book) => (
            <BookCard
              key={book.bookId}
              book={book}
              setWishList={setWishList}
            ></BookCard>
          ))}
        </section>
      </div>
    </>
  );
};

export default Homepage;
