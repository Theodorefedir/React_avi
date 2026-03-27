import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import type { BookType } from "../../types/BookType";
import { Book } from "../Book";

export const BookCard = () => {
  const { id } = useParams(); //параметр з маршрута
  const [searchParams] = useSearchParams();
  let name = null;
  let numOfPages = null;
  if (id === undefined) {    
    name = searchParams.get("name");
    numOfPages = searchParams.get("numOfPages");
  }


  const [book, setBook] = useState<BookType>();
  useEffect(() => {
    const getBookById = async (book_id: number) => {
      const response = await fetch(
        `${import.meta.env.VITE_URL_SERVER}/books/${book_id}`,
      );
      if (response.status === 200) {
        const json = await response.json();
        console.log(json);
        setBook({ ...json });
      }
    };
    getBookById(Number(id));
    const getBookByTitle = async (book_name: string) => {
      const response = await fetch(
        `${import.meta.env.VITE_URL_SERVER}/books?name=${book_name}`,
      );
      if (response.status === 200) {
        const json = await response.json();
        console.log(json);
        setBook({ ...json[0] });
      }
    };

    //pages
    const getBookByPages = async (book_pages: number) => {
      const response = await fetch(
        `${import.meta.env.VITE_URL_SERVER}/books?numOfPages=${book_pages}`,
      );
      if (response.status === 200) {
        const json = await response.json();
        console.log(json);
        setBook({ ...json[0] });
      }
    };

    if (id !== undefined) {
      getBookById(Number(id));
    } else if (name !== null) {
      getBookByTitle(name);
    }else if(numOfPages !== null){
        getBookByPages(Number(numOfPages));
    } 
  });
  //name, authorName, genre, numOfPages, reviews, image, onDelete, id
  return (
    <Book
      id={Number(book?.id)}
      name={String(book?.name)}
      genre={String(book?.genre)}
      numOfPages={Number(book?.numOfPages)}
    //   reviews={book?.}
      reviews={[
                { id: "1", rating: 5, comment: "Amazing book! Couldn't put it down." },
                { id: "2", rating: 5, comment: "One of the best sci-fi books I've ever read." }
            ]}
      image={book?.image}
    />
  );
};

 