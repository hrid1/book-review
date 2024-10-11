import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveToReadList, saveToWishList } from "../../../utilites";

const SingleBook = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const books = data.books;
  const book = books.find((book) => book.bookId === parseInt(id));
  // console.log(book, id);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  // handle wishlist
  const handleWishList = (book) => {
    saveToWishList(book);
  };
  // handle readlist
  const handleReadList = (book) => {
    saveToReadList(book);
  };

  return (
    <div>
      <div className="card flex flex-col md:flex-row  shadow-xl md:w-10/12 mx-auto p-4">
        <figure className="md:w-1/2 p-6 rounded-md bg-lime-50">
          <img src={image} alt="Album" className="shadow-md" />
        </figure>
        <div className=" md:w-1/2 p-6">
          <div>
            <h2 className="card-title text-4xl">{bookName}</h2>
            <p className=" font-semibold text-gray-500">By: {author}</p>
            <p className="border-y py-2">{category}</p>
            <p>Review: {review}</p>

            <div className="py-3 border-b flex gap-4 items-center">
              <span>Tag:</span>
              <div className="badge badge-primary badge-outline">
                #{tags[0]}
              </div>
              <div className="badge badge-primary badge-outline">
                #{tags[1]}
              </div>
            </div>

            <div className="space-y-2.5 mt-2.5 mb-8 md:w-2/3 ">
              <p className="flex justify-between  text-gray-500">
                Number of Pages:
                <span className="font-semibold text-black">
                  {totalPages}
                </span>{" "}
              </p>
              <p className="flex justify-between  text-gray-500">
                Publisher:{" "}
                <span className="font-semibold text-black">{publisher}</span>{" "}
              </p>
              <p className="flex justify-between  text-gray-500">
                Year of Publishing:{yearOfPublishing}
                <span className="font-semibold text-black">234</span>{" "}
              </p>
              <p className="flex justify-between  text-gray-500">
                Rating:{" "}
                <span className="font-semibold text-black">{rating}</span>{" "}
              </p>
            </div>
          </div>
          <div className="card-actions ">
            <button
            onClick={()=> handleReadList(book)}
             className="btn btn-outline">Read</button>
            <button
              onClick={() => handleWishList(book)}
              className="btn btn-secondary "
            >
              Whitelist
            </button>
          </div>
        </div>
      </div>

      {/* <h1>This is single book {id}</h1> */}
    </div>
  );
};

export default SingleBook;
