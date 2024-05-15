import React from "react";
import LogoNakoa from "../assets/Logo-Nakoa.png";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    // <div className="flex bg-gray-200  backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-100 justify-between items-center p-3">
    <div
      className={
        location.pathname === "/"
          ? "flex bg-gray-200  backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-100 justify-between items-center p-3"
          : "flex bg-gray-200  justify-between items-center p-3"
      }
    >
      <div className={ location.pathname === "/" ? "text-white text-3xl" : "text-black text-3xl" }>
        <h1>
          <Link to={"/"}>NAKAO</Link>
        </h1>
      </div>
      <ul className={ location.pathname === "/" ? "flex gap-3 items-center text-white" : "flex gap-3 items-center text-black" }>
        <li>
          <Link to={"/products"}>Drinks</Link>
        </li>
        <li>
          <Link to={"/products"}>Food</Link>
        </li>
        <button className="border-2 rounded-full p-1.5">
          <FiShoppingBag />
        </button>
        <button className="border-2 rounded-full p-1.5">
          <FiSearch />
        </button>
      </ul>
    </div>
  );
}
