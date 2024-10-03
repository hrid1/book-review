import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/book.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedbook">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pages">Pages to Read</NavLink>
      </li>
    </>
  );

  return (
    <div className="md:mx-6 sticky top-0 border-b py-2">
      <div className="navbar">
        <div className="navbar-start  absolut">
          {/* Dropdown for mobile */}
          <div className="dropdown z-50 ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold ">
            <img className="w-6 h-6 mt-1" src={logo} alt="Book Vibe Logo" />
            Book Vibe
          </a>
        </div>

        {/* Navbar for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        
        <div className="navbar-end gap-3.5">
          <a className="btn">Sign In</a>
          <a className="btn">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
