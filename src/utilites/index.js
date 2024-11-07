import { useContext } from "react";
import toast from "react-hot-toast";


export const getWishList = () => {
  let wishList = [];
  const storedBooks = localStorage.getItem("wishList");
  if (storedBooks) {
    wishList = JSON.parse(storedBooks);
  }
  return wishList;
};

// save to wishlist
export const saveToWishList = (book) => {
  let wishList = getWishList();
  const isExist = wishList.find((b) => b.bookId === book.bookId);
  if (isExist) {
    return toast.error("Already In Wishlist");
  }
  //  checking in readlist
  const readList = getReadList();
  const isRead = readList.find((b) => b.bookId === book.bookId);
  if (isRead) {
    return toast.error("This Book already Compleate.");
  }

  wishList.push(book);
  localStorage.setItem("wishList", JSON.stringify(wishList));
  toast.success("Blog Bookmarkd Successfully!");
};

export const getReadList = () => {
  let readbooks = [];
  const storedBooks = localStorage.getItem("readList");
  if (storedBooks) {
    readbooks = JSON.parse(storedBooks);
  }
  return readbooks;
};

// save readlist
export const saveToReadList = (book) => {
  let readbooks = getReadList();
  const isExist = readbooks.find((b) => b.bookId === book.bookId);

  if (isExist) {
    return toast.error("Already in Reading List");
  }

  readbooks.push(book);
  localStorage.setItem("readList", JSON.stringify(readbooks));
  toast.success("Book Added on ReadList");
};
// // delete
// export const deleteBook = (id) => {
//   let wishList = getWishList();
//   const remaining = wishList.filter((b) => b.id !== id);
//   localStorage.setItem("wishList", JSON.stringify(remaining));
//   toast.success("Book is removed from Wishlist");
// };

// ------------------For Read List----------------
export const deleteFromReadList = (id) => {
  let readList = getReadList();
  const remaining = readList.filter((b) => b.bookId !== id);
  localStorage.setItem("readList", JSON.stringify(remaining));
  toast.success("Book is removed from Readlist");
};

export const deleteFromWishList = (id) => {
  let wishList = getWishList();
  const remaining = wishList.filter((b) => b.bookId !== id);
  localStorage.setItem("wishList", JSON.stringify(remaining));
  toast.success("Book remove from WishList");
};
