import { useEffect, useState } from "react";
import BookCard from "../../common/BookCard/BookCard";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../../common/Loader/Loader";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  // //load data -1
  // const data = useLoaderData();

  // load data - 2

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/booksdata.json")
      .then((res) => res.json())
      .then((data) =>
        setTimeout(() => {
          setData(data);
          setLoading(false);
        }, 2000)
      );
    
  }, []);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className=" container mx-auto mt-8">
          {/* title */}

          <div className="mx-auto text-center">
            <h1 className="text-3xl font-bold">Books</h1>
          </div>

          {/* all books */}

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border gap-6 py-5 px-10 my-8 ">
            {/* <BookCard></BookCard> */}

            {data.books?.map((book) => (
              <BookCard key={book.bookId} book={book}></BookCard>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default Homepage;
