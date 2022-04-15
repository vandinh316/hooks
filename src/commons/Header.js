import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const menu = document.querySelector(".nav__list");
    const burger = document.querySelector(".burger");

    const openMenu = function () {
      burger.classList.toggle("burger--active");
      menu.classList.toggle("nav__list--active");
    };
    burger.addEventListener("click", openMenu, false);
  });
  return (
    <header className="site-header">
      <div className="contaner">
        <nav className="nav">
          <div className="burger">
            <div className="burger__patty"></div>
          </div>

          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                Demo1
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo2">
                Tour
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo3">
                Reviews
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo4">
                Accordion
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo5">
                Menu
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo6">
                Tabs
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo7">
                Slider
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo8">
                Generate
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo9">
                Color
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo10">
                Todo
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo11">
                Navbar
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo12">
                Context
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/demo14">
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
