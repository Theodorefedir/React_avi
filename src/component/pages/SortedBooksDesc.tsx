import { useEffect, useState } from "react";
import type { BookType } from "../../types/BookType";
import { Book } from "../Book";

export const SortedBooksDesc = ()=>{
    const [books, setBooks] = useState<BookType[]>([]);
    useEffect(() => {
        const getBooks = async () => {
            const response = await fetch(`${import.meta.env.VITE_URL_SERVER}/books`);
            const json = await response.json();
            setBooks([...json]);
        };
        getBooks();
    }, []);
    const sortedBooks = [...books].sort((a, b) => b.numOfPages - a.numOfPages);
    return(
        <div>
            {sortedBooks.map((book) => {
            return ( 
                <Book
                    key={book.id}
                    id={book.id}
                    name={book.name}
                    price={book.price}
                    numOfPages={book.numOfPages}
                    reviews={[
                        { id: "1", rating: 5, comment: "Amazing book! Couldn't put it down." },
                        { id: "2", rating: 5, comment: "One of the best sci-fi books I've ever read." }
                    ]}
                    image={book.image}
                />
            );
          })}
    </div>
)
}