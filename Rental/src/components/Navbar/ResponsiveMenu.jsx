import React from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";
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
    name: "Booking",
    link: "/booking",
    id: "2",
  },
];

const ResponsiveMenu = ({ theme, setTheme, showMenu }) => {
  return (
    <div>
      <div
        className={`${
          showMenu ? "left-0" : "left-full"
        } fixed top-0 z-50 bg-white dark:bg-black 
        h-full w-[65%] md:hidden rounded-r-xl shadow-md
        flex-col justify-between px-8 space-y-6 py-4 
         transition-all duration-1000`}
      >
        <div className="card">
          {/* h */}
          <div className="flex items-center justify-start gap-3">
            <div>
              <h1 className="text-4xl font-bold text-primary py-10 text-center">
                Rented Bikes
              </h1>
              <hr className="text-black dark:text-white pb-10 w-full" />
            </div>
          </div>

          <nav>
            <ul className="flex-col gap-7">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    onClick={() =>
                      document
                        .getElementById(`{${data.id}}`)
                        .classList.add("closed")
                    }
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
                className="items-center py-4 flex "
                id="toggle"
                onClick={handleClick}
              >
                {theme === "dark" ? (
                  <div
                    className="flex space-x-6 font-semibold text-lg mx-2"
                    onClick={() => {
                      setTheme("light");
                    }}
                  >
                    <label htmlFor="sun"> Light Mode</label>
                    <BiSolidSun className="text-2xl" name="sun" />
                  </div>
                ) : (
                  <div
                    className="flex space-x-6 font-semibold text-lg mx-2"
                    onClick={() => {
                      setTheme("dark");
                    }}
                  >
                    <label htmlFor="moon"> Dark Mode</label>
                    <BiSolidMoon className="text-2xl" name="moon" />
                  </div>
                )}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
