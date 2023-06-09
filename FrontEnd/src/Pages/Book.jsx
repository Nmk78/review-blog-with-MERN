import React from "react";
import girl_reading_a_book from "../assets/girl-reading-book.svg";

const Book = ({ books }) => {
  console.log(books)
  return (
    <>
      <div className="w-full flex justify-around grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-3">
        {books &&
          books.map((book) => {
            return (
              <a
                href={`/review/${book._id}`}
                key={book._id}
                className="flex flex-col justify-center items-center "
              >
                <div
                  className="
                  border-b-4
                  w-44
                  h-60
                  m-3
                  bg-sky-950
                  text-white 
                  p-2 md:p-4
                  rounded-r-2xl
                  rounded-l-md
                  flex
                  flex-col
                  justify-around
                  mb-1
                "
                >
                  <div className=" font-bold ">
                    <p className="font-bold text-green-500 mr-1 border-b-4">
                      Title:
                    </p>
                    {book.title}
                  </div>
                  <div className="text-center self-end">
                    <p className="font-bold underline text-yellow-500">
                      Author
                    </p>{" "}
                    {book.author}
                  </div>
                </div>
              </a>
            );
          })}
      </div>

      {books && books.length === 0 && (
        <div className="flex flex-col justify-center items-center h-full m-5">
          <a href="/create" className="flex flex-col justify-center items-center " >
            <img src={girl_reading_a_book} alt="" />
            <p className="underline mx-auto italic text-orange-500 font-bold text-3xl ">
              Create a new review?
            </p>
          </a>
        </div>
      )}
    </>
  );
};

export default Book;
