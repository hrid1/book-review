import React from "react";

const SingleBook = () => {
  return (
    <div>
      <div className="card flex flex-col md:flex-row bg-green-400 shadow-xl md:w-10/12 mx-auto p-4">
        <figure className="md:w-1/2 p-6 rounded-md bg-base-200 ">
          <img
            src="https://fourminutebooks.com/wp-content/uploads/2020/11/self-help-books-7.jpg.webp"
            alt="Album"
            className=""
          />
        </figure>
        <div className="bg-red-100 md:w-1/2 p-6">
          <div>
            <h2 className="card-title">The Subtle art of Not Giving Fuska</h2>
            <p>By: Aw Howldad</p>
            <p className="border-y py-2">Fiction</p>
            <p>Review: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit sequi impedit quisquam modi voluptatem iusto vitae libero eum voluptatum sunt? Qui assumenda quos asperiores quas, cumque maxime tempora laborum temporibus ipsam unde sunt dicta nesciunt recusandae, dolorum veniam eius repellendus mollitia dolores praesentium doloribus! Aliquid molestias beatae cumque molestiae error.</p>

            <div className="py-3 border-b">
                <span>Tag:</span>
            </div>

            <div className="space-y-2.5 mb-8 w-2/3">
                <p className="flex justify-between  text-gray-500">Number of Pages: <span className="font-semibold text-black">234</span> </p>
                <p className="flex justify-between  text-gray-500">Publisher: <span className="font-semibold text-black">234</span> </p>
                <p className="flex justify-between  text-gray-500">Year of Publishing: <span className="font-semibold text-black">234</span> </p>
                <p className="flex justify-between  text-gray-500">Rating: <span className="font-semibold text-black">234</span> </p>
            </div>
          </div>
          <div className="card-actions ">
            <button className="btn btn-primary">Listen</button>
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
