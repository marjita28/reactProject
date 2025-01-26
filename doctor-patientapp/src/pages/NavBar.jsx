import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.admin_logo} alt="logo" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink>
          <li>Home</li>
        </NavLink>
        <NavLink>
          <li>All Doctors</li>
        </NavLink>
        <NavLink>
          <li>About</li>
        </NavLink>
        <NavLink>
          <li>Contact</li>
        </NavLink>
      </ul>
      <div>
        <button>Create Account</button>
      </div>
    </div>
  );
};

export default NavBar;
