import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { MENUITEM as menuItem } from "../constant/Index";

const Header = () => {
  return (
    <section className="grid">
      <header>
        <nav className="px-1 sm:px-4 py-2.5 h-14">
          <div className=" flex flex-wrap justify-between mx-auto">
            <Logo />
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-6 mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium ">
                {menuItem.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.to}
                      className={(isActive) => {
                        return (
                          "block px-7 py-2 text-white rounded-md text-base" +
                          (isActive
                            ? "block px-7 py-2 text-white  hover:bg-gray-800 rounded-md text-base "
                            : "after:bg-gray-800")
                        );
                      }}
                    >
                      {item.linkName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Header;
