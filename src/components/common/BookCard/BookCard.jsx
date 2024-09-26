import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
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

  console.log(bookName);
  return (
    <Link to={`book/${bookId}`} className="card bg-base-200 h-[540px] shadow-xl p-5 ">
      <figure className="py-6 bg-gray-100  rounded-xl">
        <img src={image} alt="Shoes" className="w-44" />
      </figure>
      <div className="card-body p-0 mt-4 space-y-1">
        <div className="space-x-4 text-green-500 ">
          <div className="badge badge-outline p-2.5 bg-green-50 border-none">
            {tags[0]}
          </div>
          <div className="badge badge-outline p-2.5  bg-green-50 border-none">
            {tags[1]}
          </div>
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>

        <div className="card-actions justify-between border-t border-dashed py-2 ">
          <p className="">{category}</p>
          <p className="text-right flex justify-end items-center gap-2">{rating}
          <FaRegStar />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
