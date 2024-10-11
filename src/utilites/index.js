import toast from "react-hot-toast";

export const getWishList = () => {
  let wishList = [];
  const storedBOoks = localStorage.getItem("wishList");
  if (storedBOoks) {
    wishList = JSON.parse(wishList);
  }
  return wishList;
};

// save
export const saveStoreBook = (book) => {
  let wishList = getWishList();
  const isExist = wishList.find((b) => b.id === book.id);
  if (isExist) {
    return toast.error("Already In Wishlist");
  }

  wishList.push(book);
  localStorage.setItem("wishList", JSON.stringify(wishList));
  toast.success("Blog Bookmarkd Successfully!");
};

// delete
export const deleteBook = (id) => {
  let wishList = getWishList();
  const remaining = wishList.filter((b) => b.id !== id);
  localStorage.setItem("wishList", JSON.stringify(remaining));
  toast.success("Book is removed from Wishlist");
};
