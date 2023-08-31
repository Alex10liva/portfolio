"use client";

import "./navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const links = [
  {
    label: "Inicio",
    route: "inicio",
  },
  {
    label: "Sobre mí",
    route: "sobre-mi",
  },
  {
    label: "Tecnologías",
    route: "tecnologias",
  },
  {
    label: "Proyectos",
    route: "proyectos",
  },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState(0);
  const [navbarColor, setNavbarColor] = useState(false);

  const changeActvieLink = (index) => {
    setActiveLink(index);
  };

  const changeColorNavbar = () => {
    if (window.scrollY > 90) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColorNavbar);
  }

  return (
    <header>
      <nav className={navbarColor ? "navbar-scroll" : ""}>
        <ul>
          {links.map((link, index) => (
            <li key={link.route}>
              {index === activeLink ? (
                <Link
                  to={link.route}
                  smooth={true}
                  duration={500}
                  href={link.route}
                  className="active"
                  onClick={() => changeActvieLink(index)}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  to={link.route}
                  smooth={true}
                  duration={500}
                  href={link.route}
                  onClick={() => changeActvieLink(index)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
