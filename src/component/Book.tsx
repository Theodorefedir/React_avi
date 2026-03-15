import "./Book.css";
import style from "./Book.module.css";
import type { BookType } from "../types/BookType";
import { useState } from "react";

type BookProps = BookType & {
    onDelete?: (id: number) => void;
}

// я не могу хранить функцию как пропс вместе с парметрами книги в буктайп, потому создал BookProps который принимает BookType и функцию

export function Book({name, authorName, genre, numOfPages, reviews, image, onDelete, id}:BookProps){
    const[counter, setCounter] = useState<number>(0);
    const handleDelete = () => {
        if (onDelete && id) {
            onDelete(id);
        }
    };
    return <div className="card" style={{ 
            width: '300px',
            borderRadius: '8px',
            margin: '10px'
        }}> 
           <p>{counter}</p> 
            Book {name}, by {authorName}. Is {genre} book with {numOfPages} pages. <br />
            Reviews: <br />
            
            {reviews ? reviews.map((review, index) => (
                //важная штука. нужно запомнить
                <div key={index} className = {style.review}> 
                    <p>Rating: {review.rating}/5</p>
                    <p>Comment: {review.comment}</p>
                </div>
            )): ""}
            <div className="book-image">
                {image ? <img src={`images/${image}`} alt={name} /> : null}
            </div>
            <button onClick={()=>{
                setCounter((count)=>count+1);
            }}>
                like
            </button>
            <button 
                disabled={counter == 0}
                onClick={()=>{
                setCounter((count)=>count-1);
            }}>
                Dislike
            </button>

            {onDelete && id && (
                <button onClick={handleDelete}>
                    delete
                </button>
            )}

            {/* <button onClick={()=>{
                onDelete(id);
            }}>
                delete
            </button> */}
 
    </div>
}