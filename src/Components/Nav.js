import React from "react";
import {Link, NavLink, Navigate, useNavigate} from 'react-router-dom';

import { toast, ToastContainer } from "react-toastify";
import { getAuth } from "firebase/auth";
import app from "../firebase.init";
import useFirebase from "../useHooks/useFirebase";

const auth = getAuth(app);

const Nav = () => {
const {user, handleSignOut} = useFirebase();
// console.log("navbar user name", user.displayName);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/order">Order</NavLink>
            </li>
            
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl"> Logo </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              {
                user?.uid
                ?
               <Link to='/' > <button onClick={handleSignOut}  > Sign Out</button></Link>
                :
                <NavLink to="/login">Log in</NavLink>
              }
            </li>
            {/* <span> {user?.uid ? user?.displayName : "Current Null"} </span> */}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Nav;
