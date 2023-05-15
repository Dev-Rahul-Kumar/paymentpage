import React from "react";
import "./style/navbar.css";
import ads from "./image/EDYODAlogo.jpg";

export default function Navbar() {
  return (
    <>
      <nav className="content">
        <div className="nav">
          <div className="left">
            <img className="img" src={ads}  alt="ads" />
            <div className="dropdown">
              <button className="dropbtn">
                Course
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn">
                Program
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Program 1</a>
                <a href="#">Program 2</a>
                <a href="#">program 3</a>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="search">
              <input type="search" name="search" id="search" />
            </div>
            <div className="login">
             <li><a href="/">Log in</a></li> 
            </div>

            <button className="btn">JOIN NOW</button>
          </div>
        </div>
      </nav>
    </>
  );
}
