import { useEffect, useState, type ChangeEvent } from "react";
import "./App.css";
// import { Author } from "./component/Author";
import { Book } from "./component/Book";
// import { City } from "./component/city";
import books from "./data/Books";
import type { BookType } from "./types/BookType";
// import { Value } from "./component/Value";
// import type { ValueType } from "./types/ValueType";
import { BookCreateForm } from "./component/BookCreateForm";

function App() {
  const [books, setBooks] = useState <BookType[]>([]);
  const [book, setBook] = useState <BookType>({
    name: "",
    authorName: "",
    genre: "",
    numOfPages: 0,
    price: 0,
    image: "",

  });

const handleDeleteBook = async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_URL_SERVER}/books/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    setBooks(books.filter(book => book.id !== id));
    alert("Книга удалена");
  } else {
    alert("Ошибка при удалении");
  }
};

  // const [values, setValues] = useState <ValueType>({});

  useEffect(()=>{
    const getBooks = async()=>{
      const response = await fetch(`${import.meta.env.VITE_URL_SERVER}/books`);
      const json = await response.json();
      setBooks([...json]);
    };
    getBooks();
    // const getValues = async()=>{
    //   const response = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
    //   const json = await response.json();
    //   // console.log(json);
    //   const result = json.find((cr:ValueType)=> cr.r030 === 360);
    //   console.log(result);
    //   setValues(result);
    // };
    // getValues();
  },[books.length])

  // const handleChange = (ev:ChangeEvent<HTMLInputElement>)=>{
  //   setBooks({...books, [ev.target.name]:ev.target.value})
    
  // }

  // тут я получил временную книгу(это функция пропс пропса функции по созданию временной книги)
    const handleBookCreated = (newBook: BookType) => {
    setBooks([...books, newBook]);
  };

 
  return <>

  <BookCreateForm onBookCreated = {handleBookCreated}/>   
  {/* <Author Name="Name" Surname="Surname"/>
  <City cityName="Rzeszow" countryName="Poland" year="1354" image="https://tse2.mm.bing.net/th/id/OIP.IpaLiP5a3ssd3aGMIzdcsQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3"/>
  <Book name="Project Hail Mary" authorName="Andy Weir" genre="scince fiction novel" numOfPages={476} 
    reviews={[
          { id: "1", rating: 5, comment: "Amazing book! Couldn't put it down." },
          { id: "2", rating: 5, comment: "One of the best sci-fi books I've ever read." }
        ]}
    image="https://i0.wp.com/thenerddaily.com/wp-content/uploads/2022/12/Five-Survive-by-Holly-Jackson.jpg?resize=1200%2C1922&ssl=1"
  /> */}
  {books.map((book) => {
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
            onDelete={handleDeleteBook}
        />
        );
      })}
    {/* <Value
      r030 = {values.r030}
      txt = {values.txt}
      rate = {values.rate}
      cc = {values.cc}
      exchangedate = {values.exchangedate}
      special = {values.special}
    /> */}
  </>;
}
 
export default App;
 
