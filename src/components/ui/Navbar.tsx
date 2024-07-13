import { useAppSelector } from "@/redux/hooks";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
const Navbar = () => {
  const { products } = useAppSelector((state) => state.cart);
  const totalPrice = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-secondary-orange font-bold"
              : "text-black font-bold lg:text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-secondary-orange font-bold"
              : "text-black font-bold lg:text-white"
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <Link
          className="text-black font-bold lg:text-white hover:cursor-pointer"
          to="category"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Category
        </Link>
      </li>
      <li>
        <Link
          className="text-black font-bold lg:text-white hover:cursor-pointer"
          to="gallery"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Gallery
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed bg-black top-0 max-w-screen-2xl mx-auto z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            {navLinks}
          </ul>
        </div>
        <a className="pl-3 text-xl oleo-script-regular text-white">
          Forest<span className="text-secondary-orange">At</span>Home
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none flex items-center">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {products.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {products.length} Items
                </span>
                <span className="text-info">
                  Subtotal: ${totalPrice.toFixed(2)}
                </span>
                <div className="card-actions">
                  <NavLink
                    to="/checkout"
                    className="btn btn-primary border-none bg-primary-green btn-block hover:bg-hover hover:text-black"
                  >
                    View cart
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
