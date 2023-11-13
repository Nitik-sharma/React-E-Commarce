import React, { useState } from "react";
import Cart from "../Cart/Cart";
import logo from "../../assest/logo.png";
import "./Navbar.css";
import { logut } from "../Feature/Slice/Auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Setup";
import { signOut } from "firebase/auth";
function Navbar() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // const user = useSelector((state) => state.user.user);
  // console.log("user", user);
  // const { name, image } = user;
  // console.log("name", name);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true);
  };
  const logout = async () => {
    try {
      await auth.signOut();
      !auth.currentUser?.email && navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {/* First portion of navbar in which i make only heading  */}
      <div className="bg-black p-2 w-full flex justify-between items-center">
        <h1 className="text-white font-inter text-2xl font-bold text-center tracking-normal  leading-none ">
          Welcome All
        </h1>
        <div>
          {auth.currentUser?.email ? (
            <h1
              className="text-white font-inter text-2xl font-bold text-center tracking-normal  leading-none "
              onClick={logout}
            >
              Logout
            </h1>
          ) : (
            <Link to={"/login"}>
              <h1 className="text-white font-inter text-2xl font-bold text-center tracking-normal  leading-none ">
                Login
              </h1>
            </Link>
          )}
        </div>
      </div>
      {/* second portion of navbar in which i make logo and logout btn and two portion of watchlist and shopping bag */}
      <div className="flex justify-between  items-center gap-y-3.5">
        <img src={logo} className="h-28 " />
        <div className="flex flex-row items-center">
          {/* Heart svg and watchlist  */}
          <div className="flex justify-between items-center ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="font-inter text-base font-bold tracking-normal leading-none mr-4 text-black  svg-text">
              Watchlist
            </p>
          </div>
          {/* Shopping svg and shopping text */}
          <div
            className="flex justify-around items-center ml-4"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-400 p-1 px-2 text-sm">
                {totalAmount}
              </span>
            ) : (
              ""
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#000"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p className="font-inter text-base font-bold tracking-normal leading-none mr-4 text-black  svg-text">
              Shopping bag{" "}
            </p>
          </div>
          <div>{open && <Cart openModel={open} setOpen={setOpen} />}</div>
        </div>
      </div>
      {/* make a box in which three item 50% off and free shopping text and Different payment mthod  */}
      <div className="bg-black p-4 flex justify-between items-center  navbar-text">
        <div>
          <p className="text-white font-inter text-2xl font-bold tracking-normal leading-none">
            50%off{" "}
          </p>
        </div>
        <div>
          <p className="text-white font-inter text-2xl font-bold tracking-normal leading-none">
            Free Shopping and return{" "}
          </p>
        </div>
        <div>
          <p className="text-white font-inter text-2xl font-bold tracking-normal leading-none">
            Different payment Method{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
