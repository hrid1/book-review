// import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/pages/HomePage/Homepage";
import SingleBook from "../components/pages/SingleBook/SingleBook";
import ListedBook from "../components/pages/ListedBook/ListedBook";
import Root from "../components/Root/Root";
import ReadingBook from "../components/ReadingBook";
import WishList from "../components/WishList";
import PageToRead from "../components/pages/PageToRead/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch("booksdata.json"),
      },
      {
        path: "/book/:id",
        element: <SingleBook></SingleBook>,
        loader: () => {
          return fetch("/booksdata.json");
        },

    
      },
     {
      path: "/listedbook",
      element: <ListedBook></ListedBook>,
      children: [
        {
          index: true,
          element: <ReadingBook></ReadingBook>
        },
        {
          path:"wishlist",
          element: <WishList></WishList>
        }
      ]
     },
     {
      path: '/pagetoread',
      element: <PageToRead></PageToRead>,
      loader: () => fetch('../../public/booksdata.json')
     }
    ],
  },
]);
