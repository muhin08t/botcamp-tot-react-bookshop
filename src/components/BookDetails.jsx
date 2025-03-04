import React from "react";
import { useLocation } from "react-router-dom";
import RatingComponent from './RatingComponent';

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state || {};
  console.log(book);

  const handleClick = (info) => {
    const msg =
      book.bookId +
      ", " +
      book.bookName +
      " has been successfully added to " +
      info;
    alert(msg);
  };

  return (
    <div className="flex justify-center my-10 mx-5">
      <div className="">
        <div className="mt-12 mx-5 w-52 md:w-72 lg:w-80 xl:w-96 rounded">
          <img src={book.image} />
        </div>
      </div>
      <div className="ml-5 flex flex-col">
        <h2 className="font-semibold">{book.bookName}</h2>
        <h3 className="pt-2">
          {" "}
          by <span className="text-blue-400"> {book.author} </span>{" "}
        </h3>
        <h3 className="pt-2 font-semibold">
          Category: <span className="text-blue-400"> {book.category} </span>
        </h3>
        <div className="pt-2 flex items-center gap-2">
          <span className="font-semibold">Rating: </span> <RatingComponent rating={book.rating} />
        </div>
        <h3 className="pt-2 max-w-96">
          {" "}
          <span className="font-bold">Review: </span>{" "}
          <span className="">{book.review}</span>{" "}
        </h3>
        <div className="pt-2">
          {" "}
          <span className="font-bold">Tags: </span>
          {book.tags.map((tItem, tIndex) => {
            return (
              <div key={tIndex} className="badge badge-outline mx-2 p-3 mb-2">
                {" "}
                {tItem}
              </div>
            );
          })}
        </div>

        <div className="flex pt-4">
          <div className="flex flex-col">
            <p>Book length</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>

            <p className="font-semibold">{book.totalPages} pages</p>
          </div>

          <div className="flex flex-col ml-4">
            <p>Publising year</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>

            <p className="font-semibold">{book.yearOfPublishing}</p>
          </div>
          <div className="flex flex-col ml-3">
            <p>Publishers</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>

            <p className="font-semibold">{book.publisher}</p>
          </div>
        </div>

        <div className="flex pt-8">
          <button
            onClick={() => handleClick("WishList")}
            className="w-[120px] h-[40px] text-white text-center rounded-md bg-green-600"
          >
            Wish to Read
          </button>

          <button
            onClick={() => handleClick("Cart")}
            className="w-[120px] h-[40px] text-white text-center rounded-md bg-blue-600 ml-5"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
