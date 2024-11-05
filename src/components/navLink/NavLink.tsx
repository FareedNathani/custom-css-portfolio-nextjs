import Link from "next/link";
import React from "react";
import { NavLinkProps } from "../../../type/componentsTypes";

// Define and export navbarLinks array
export const navbarLinks = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/services", title: "Services" },
  { path: "/contact", title: "Contact" },
];

const NavLink: React.FC<NavLinkProps> = ({ href, title, isFooter }) => {
  return (
    <Link
      href={href}
      className={`navbar-link ${isFooter ? "footer-nav-item" : ""}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
