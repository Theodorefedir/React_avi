import type { BookType } from "../types/BookType";

export function Book({name, authorName, genre, numOfPages, reviews}:BookType){
    return <div style={{ 
            width: '300px',
            borderRadius: '8px',
            margin: '10px'
        }}>
            Book {name}, by {authorName}. Is {genre} book with {numOfPages} pages. <br />
            Reviews: <br />
            {reviews.map((review, index) => (
                //важная штука. нужно запомнить
                <div key={index}> 
                    <p>Rating: {review.rating}/5</p>
                    <p>Comment: {review.comment}</p>
                </div>
            ))}
    </div>
}