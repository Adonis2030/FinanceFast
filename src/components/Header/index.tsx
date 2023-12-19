import React from "react";
import "./index.css";
import Logo from "../../assets/images/logo.svg";
import DownloadImg from "../../assets/images/download.svg";

const Header: React.FC = () => {
  return (
    <nav className="bg-white pt-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-6" alt="Flowbite Logo" />
          <span className="logo-txt">FinanceFast</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="/blog" className="block py-3 px-6 menu-txt">
                Blog
              </a>
            </li>
            <li>
              <a href="/company" className="block py-3 px-6 menu-txt">
                Company
              </a>
            </li>
            <li>
              <a href="/products" className="block py-3 px-6 menu-txt">
                Products
              </a>
            </li>
            <li>
              <a
                href="/download"
                className="block py-3 px-6 text-gray-900 rounded-full bg-[#D8C6FF] button-txt"
              >
                <img
                  src={DownloadImg}
                  alt="download"
                  className="float-left gap-1"
                />
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;