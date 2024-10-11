const BookListCard = ({ book }) => {
  console.log(book);

  const {
    bookId,
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

  return (
    <>
      {/* card section */}
      <section className="border p-6 flex gap-8 mt-6 rounded-md">
        {/*left side -> card pic */}
        <div className="w-60 h-60 border border-red-500 py-4 bg-gray-100 rounded-md ">
          <img
            className="w-full mx-auto h-full object-contain"
            src={image}
            alt=""
          />
        </div>
        {/*right side -> card info */}
        <div className=" space-y-4 w-full ">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p className=" font-semibold">
            By: <span>{author}</span>
          </p>
          <div className="flex items-center gap-2">
            <p className="mr-2 font-bold">Tag</p>
            <span className="badge badge-md bg-green-50 text-green-500">
              {tags[0]}
            </span>
            <span className="badge badge-md bg-green-50 text-green-500">
              {tags[1]}
            </span>
            <span>
              Year of Publishing: <span>{yearOfPublishing}</span>
            </span>
          </div>

          <p className=" space-x-4">
            <span>Publisher: {publisher}</span>
            <span>Page: {totalPages}</span>
          </p>

          <hr />

          <div className=" space-x-4">
            <button className="p-2.5 font-medium rounded-full bg-blue-100 text-blue-500">
              Category: <span>{category}</span>
            </button>
            <button className="p-2.5 font-medium rounded-full bg-yellow-100 text-yellow-500">
              Rating: <span>{rating}</span>
            </button>

            <button className="p-2.5 font-medium rounded-full bg-green-500 text-white">
              View Details
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookListCard;
