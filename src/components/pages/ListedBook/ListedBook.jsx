import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBook = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="container mx-auto mt-6">
      {/* tab section */}
      <div role="tablist" className="tabs tabs-lifted">
        <Link
          onClick={() => setTab(0)}
          to={""}
          role="tab"
          className={`tab ${tab === 0 ? "tab-active" : ""}`}
        >
          Read Books
        </Link>
        <Link
          onClick={() => setTab(1)}
          to={"wishlist"}
          role="tab"
          className={`tab ${tab === 1 && "tab-active"}`}
        >
          Wishlist Books
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default ListedBook;
