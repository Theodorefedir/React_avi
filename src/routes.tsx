import { createBrowserRouter } from "react-router";
import App from "./App";
import { Layout } from "./component/Layout";
import About from "./component/pages/About";
import { BookCard } from "./component/pages/BookCard";
import { SortedBooksAsc } from "./component/pages/SortedBooksASC";
import { SortedBooksDesc } from "./component/pages/SortedBooksDesc";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <App />,
        index: true,
      }, 
      {
        path: "/books",
        element: <App />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contacts",
        element: <p>Page Contacts</p>,
      },
      {
        path: "/book/:id",
        element: <BookCard/>
      },
      {
        path: "/book",
        element: <BookCard/>
      },
      {
        path: "/books/sorted/asc",
        element: <SortedBooksAsc />,
      },
      {
        path: "/books/sorted/desc",
        element: <SortedBooksDesc />,
      }
    ],
  },
]);