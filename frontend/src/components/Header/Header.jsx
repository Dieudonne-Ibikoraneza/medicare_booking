import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctor",
    display: "FInd a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header">
      Header
    </header>
  );
};

export default Header;
