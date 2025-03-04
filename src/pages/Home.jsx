import React from "react";
import { createContext, useState, useEffect } from "react";
import BookDetails from "../components/BookDetails";
import { useNavigate } from 'react-router-dom';
import RatingComponent from './../components/RatingComponent';

const Home = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // Load JSON Data
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleClick = (index) => {
    console.log("handle click called");
    navigate('/bookdetails', { state: { book: books[index] } });
  };

  books.map((book) => {
    console.log(book.bookName);
    console.log(book.author);
  });

  return (
    <div>

<div className="carousel w-full pt-0 bg-[#bbd5d6]">
  <div id="item1" className="carousel-item w-full">
    <div className="banner-content-part lg:banner-content-part-lg"> 
    <h1 className="banner-content-first-title lg:text-2xl">Unlock a World of Stories</h1>
    <h2 className="banner-content-second-title lg:text-xl">Find your Next favorite Book at </h2>
    <h2 className="banner-content-third-title lg:text-2xl">Kishore Book House</h2>
    <button className='banner-content-btn'>Buy book</button>
    </div>
    <img src="/banner2.jpg" className="banner-img-part lg:banner-img-part-lg xl:banner-img-part-xl" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <div className="banner-content-part lg:banner-content-part-lg"> 
    <h1 className="banner-content-first-title lg:text-2xl">Unlock a World of Stories</h1>
    <h2 className="banner-content-second-title lg:text-xl">Find your Next favorite Book at </h2>
    <h2 className="banner-content-third-title lg:text-2xl">Kishore Book House</h2>
    <button className='banner-content-btn'>Buy book</button>
    </div>
    <img src="/banner1.jpg" className="banner-img-part lg:banner-img-part-lg xl:banner-img-part-xl" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <div className="banner-content-part lg:banner-content-part-lg"> 
    <h1 className="banner-content-first-title lg:text-2xl">Unlock a World of Stories</h1>
    <h2 className="banner-content-second-title lg:text-xl">Find your Next favorite Book at </h2>
    <h2 className="banner-content-third-title lg:text-2xl">Kishore Book House</h2>
    <button className='banner-content-btn'>Buy book</button>
    </div>
    <img src="/banner2.jpg" className="banner-img-part lg:banner-img-part-lg xl:banner-img-part-xl" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
</div>

      <div className="text-center py-8">
        <h1 className="text-4xl font-bold">Book List</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 m-10">
        {books.map((item, index) => {
          return (
            <div key={index}>
              <div className="card mt-10 bg-base-100 w-96 shadow-xl md:w-80 lg:w-[350px] xl:w-96">
                <figure>
                  <img
                    className="w-[250px] h-[120px]"
                    src={item.image}
                    alt="Books"
                  />
                </figure>
                <div className="card-body items-center text-center px-1">
                  <h2 className="card-title"> {item.bookName} </h2>
                  <h3 className=""> By <span className="text-blue-400"> {item.author} </span></h3>
                  <div className="flex justify-between items-center mb-3">
                  <div className="badge badge-info p-3 text-white">{item.category}</div>
                  <div className="ml-5"> <RatingComponent rating={item.rating} /> </div>
                  
                  </div>
                
                  <div className="card-actions">
                    {item.tags.map((tItem, tIndex) => {
                      return (
                        <div className="badge badge-outline p-3"> {tItem}</div>
                      );
                    })}
                  </div>
                  <div className="justify-center card-actions my-4">
                    <button
                      onClick={() => handleClick(index)}
                      className="w-[120px] h-[40px] text-white text-center rounded-md bg-blue-600"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
