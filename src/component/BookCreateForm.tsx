import { useState } from "react";
import type { BookType } from "../types/BookType";

export function BookCreateForm({ onBookCreated }: { onBookCreated: (book: BookType) => void }){
    const [book, setBook] = useState <BookType>({
        name: "",
        authorName: "",
        genre: "",
        numOfPages: 0,
        price: 0,
        image: "",   
      }); 


    const handleClick = async () => {
        const response = await fetch(`${import.meta.env.VITE_URL_SERVER}/books`, {
            method: "POST",
            body: JSON.stringify(book),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);
        if (response.status === 201) {
        alert("Created");
        onBookCreated(book);

        setBook({
            name: "",
            authorName: "",
            genre: "",
            numOfPages: 0,
            price: 0,
            image: "",
        });
        }
    };

    return(
        <div>
            <input type="text" name="name" onChange={(ev) => {
                setBook({ ...book, name: ev.target.value });
            }} id="" />
            <input type="text" name="authorName" onChange={(ev) => {
                setBook({ ...book, authorName: ev.target.value });
            }} id="" />
            <input type="text" name="genre" onChange={(ev) => {
                setBook({ ...book, genre: ev.target.value });
            }} id="" />
            <input type="text" name="numOfPages" onChange={(ev) => {
                setBook({ ...book, numOfPages: Number(ev.target.value) });
            }} id="" />
            <input type="text" name="price" onChange={(ev) => {
                setBook({ ...book, price: Number(ev.target.value) });
            }} id="" />
            <input type="text" name="image" onChange={(ev) => {
                setBook({ ...book, image: ev.target.value });
            }} id="" />
            
            <button onClick={handleClick}>Add book</button>
        </div>
    )
}