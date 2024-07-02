import React, { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const image = document.getElementById("heroImg");
const handleClick = () => {
  window.location.reload();
  setTimeout(() => {
    image.style.display = "none";
  }, 1500);
};

const NavLinks = [
  {
    name: "Home",
    link: "/",
    id: "1",
  },
  {
    name: "Bikes",
    link: "/#bike",
    id: "2",
  },
  {
    name: "Booking",
    link: "/booking",
    id: "3",
  },
  {
    name: "About",
    link: "/#about",
    id: "4",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="p-2 shadow-lg bg-white dark:bg-neutral-950 dark:text-white duration-200 scroll-smooth">
      <div className="container p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold">Rented Bikes</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-7">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    className="p-2 
                    hover:border-b-2 hover:text-primary 
                    transition-colors 
                    duration-500 text-lg 
                    font-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <div
                className="items-center py-4"
                id="toggle"
                onClick={handleClick}
              >
                {theme === "dark" ? (
                  <BiSolidSun
                    onClick={() => {
                      setTheme("light");
                    }}
                    className="text-2xl"
                  />
                ) : (
                  <BiSolidMoon
                    onClick={() => {
                      setTheme("dark");
                    }}
                    className="text-2xl"
                  />
                )}
              </div>
            </ul>
          </div>
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              size={30}
              className="cursor-pointer transition-all duration-700 lg:hidden"
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              size={30}
              className="cursor-pointer transition-all duration-700 lg:hidden"
            />
          )}
        </div>
      </div>
      <ResponsiveMenu
        theme={theme}
        setTheme={setTheme}
        showMenu={showMenu}
        toggleMenu={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
