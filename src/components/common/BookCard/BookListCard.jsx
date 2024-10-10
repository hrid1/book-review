const BookListCard = () => {
  return (
    <>
     

      {/* card section */}
      <section className="border p-6 flex gap-8 mt-6 rounded-md">
        {/*left side -> card pic */}
        <div className="w-60 h-60 border border-red-500 py-4 bg-gray-100 rounded-md ">
          <img
            className="w-full mx-auto h-full object-contain"
            src="https://fourminutebooks.com/wp-content/uploads/2020/11/self-help-books-8.jpg.webp"
            alt=""
          />
        </div>
        {/*right side -> card info */}
        <div className=" space-y-4 w-full ">
          <h2 className="text-2xl font-bold">
            The 7 habist of highly effective peple
          </h2>
          <p className=" font-semibold">
            By: <span>Awald Hossain</span>
          </p>
          <div className="flex items-center gap-2">
            <p className="mr-2 font-bold">Tag</p>
            <span className="badge badge-md bg-green-50 text-green-500">
              NEW
            </span>
            <span className="badge badge-md bg-green-50 text-green-500">
              Self Improvment
            </span>
            <span>
              Year of Publishing: <span>3439</span>
            </span>
          </div>

          <p className=" space-x-4">
            <span>Publisher: AKM jx</span>
            <span>Page 194</span>
          </p>

          <hr />

          <div className=" space-x-4">
            <button className="p-2.5 font-medium rounded-full bg-blue-100 text-blue-500">
              Category: <span>classical</span>
            </button>
            <button className="p-2.5 font-medium rounded-full bg-yellow-100 text-yellow-500">
              Rating: <span>4.6</span>
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
