import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Homepage from "./components/pages/HomePage/Homepage.jsx";
import SingleBook from "./components/pages/SingleBook/SingleBook.jsx";
import ListedBook from "./components/pages/ListedBook/ListedBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/book/:id",
        element: <SingleBook></SingleBook>,
        loader: async ({ params }) => {
          return fetch(`./booksdata.json`);
        },
      },
      {
        path: "/listedbook",
        element: <ListedBook></ListedBook>
        
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
