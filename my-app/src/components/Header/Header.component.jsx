import React, {useEffect, useRef} from "react";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";


import Logo from '../../Asset/—Pngtree—yellow play button_854581.png'

import './Header.styles.scss'


const headerNav = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Movies",
      path: "/movie",
    },
    {
      display: "Series",
      path: "/tv",
    },
  ];


const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef();
  
    const active = headerNav.findIndex((e) => e.path === pathname);
  return (
    <>
      <div ref={headerRef} className="header">
        <div className="header_wrap container">
          <div className="logo">
            <img src={Logo} alt="" />
            <Link to="/">MovieSA</Link>
          </div>
          <ul className="header_nav">
            {headerNav.map((e, i) => (
              <li key={i} className={`${i === active ? "active" : ""}`}>
                <Link to={e.path}>{e.display}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
