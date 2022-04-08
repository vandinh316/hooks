import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import "./Demo11.scss";
const Demo11 = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContanerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleNav = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContanerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContanerRef.current.style.height = 0;
    }
  }, [showLinks]);
  return (
    <div className="demo11">
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button
              className={`nav-toggle ${showLinks && "active"}`}
              onClick={toggleNav}
            >
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContanerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Demo11;
