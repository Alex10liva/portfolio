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
  const [activeLink, setActiveLink] = useState(null);

  const handleScroll = () => {
    const sectionOffsets = links.map((link) => {
      const section = document.getElementById(link.route);
      return {
        id: link.route,
        offsetTop: section.offsetTop,
        offsetBottom: section.offsetTop + section.clientHeight,
      };
    });

    const scrollY = window.scrollY;

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      const { id, offsetTop, offsetBottom } = sectionOffsets[i];

      if (scrollY >= offsetTop && scrollY < offsetBottom) {
        setActiveLink(id);
        break;
      }
    }
  };

  const [navbarColor, setNavbarColor] = useState(false);

  const changeColorNavbar = () => {
    if (window.scrollY > 90) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", changeColorNavbar);
    handleScroll(); // Llama a handleScroll para establecer el estado inicial.
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("scroll", changeColorNavbar);
    };
  }, []);

  return (
    <header>
      <nav className="mobile" style={{ display: "none" }}>
        <button
          onClick={() => {
            alert("btn pressed");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M4 18L20 18" stroke="#efefef80" />
            <path d="M4 12L20 12" stroke="#efefef80" />
            <path d="M4 6L20 6" stroke="#efefef80" />
          </svg>
        </button>
      </nav>
      <nav className={navbarColor ? "navbar-scroll" : ""}>
        <ul>
          {links.map((link) => (
            <li key={link.route}>
              <Link
                to={link.route}
                smooth={true}
                duration={500}
                href={link.route}
                className={link.route === activeLink ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
