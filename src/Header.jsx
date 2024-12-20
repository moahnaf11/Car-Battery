import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [who, setWho] = useState(false);
  const [news, setNews] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleWho = () => {
    setWho(!who);
  };

  const toggleNews = () => {
    setNews(!news);
  };

  return (
    <>
      <header className="hidden md:flex bg-green-400 px-3 min-h-16 gap-4">
        <Link to="/" className="font-bold font-custom flex items-center">
          Car Batteries
        </Link>
        <nav className="flex justify-center flex-1">
          <ul className="flex justify-center gap-6">
            <li className="relative group z-10 font-custom font-bold flex items-center rounded-md p-2">
              Who We Are
              <span className="h-1 bg-black bottom-1 scale-x-0 group-hover:scale-x-100 left-0 right-0 origin-left transition-transform duration-300 ease-out absolute"></span>
              <div className="absolute z-0 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out left-0 top-full min-w-[200px] flex flex-col bg-white shadow-lg">
                <div className="hover:bg-purple-700 p-2 font-custom font-bold hover:text-white">
                  About Us
                </div>
                <div className="hover:bg-purple-700 p-2 font-custom font-bold hover:text-white">
                  Warranty
                </div>
                <div className="hover:bg-purple-700 p-2 font-custom font-bold hover:text-white">
                  Battery Brands
                </div>
              </div>
            </li>
            <li className="flex relative group items-center font-custom font-bold rounded-md p-2 ">
              <Link to="/shop">Shop</Link>
              <span className="h-1 bg-black bottom-1 scale-x-0 group-hover:scale-x-100 left-0 right-0 origin-left transition-transform duration-300 ease-out absolute"></span>
            </li>
            <li className="relative group font-custom font-bold flex items-center rounded-md p-2">
              News
              <span className="h-1 bg-black bottom-1 scale-x-0 group-hover:scale-x-100 left-0 right-0 origin-left transition-transform duration-300 ease-out absolute"></span>
              <div className="absolute z-10 left-0 top-full min-w-[200px] flex flex-col bg-white shadow-lg origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out">
                <div className="hover:bg-purple-700 font-custom font-bold p-2 hover:text-white">
                  Updates
                </div>
                <div className="hover:bg-purple-700 font-custom font-bold p-2 hover:text-white">
                  Events
                </div>
                <div className="hover:bg-purple-700 font-custom font-bold p-2 hover:text-white">
                  Useful Tips
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <header className="bg-green-400 md:hidden px-3 min-h-16 gap-4 flex justify-between items-center relative">
        <Link to="/" className="font-bold font-custom flex items-center">
          Car Batteries
        </Link>
        <svg
          className="size-8"
          onClick={toggleNav}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill="#000000"
              fill-rule="evenodd"
              d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
            ></path>{" "}
          </g>
        </svg>
        <nav
          className={`absolute top-full z-10 w-full bg-white p-2 left-0 transition-all duration-300 ease-out ${
            isNavOpen
              ? "opacity-100 translate-x-0"
              : "-translate-x-full opacity-0"
          }`}
        >
          <ul>
            <li className="p-2 h-min">
              <div className="flex font-custom font-bold justify-between">
                Who We Are
                <svg
                  className="size-5 inline-block ml-auto"
                  onClick={toggleWho}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 12H20M12 4V20"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className={`${who ? "scale-y-100 opacity-100 max-h-96" : "scale-y-0 opacity-0 max-h-0"} origin-top flex flex-col transition-all duration-300 ease-out`}>
                <div className="hover:bg-purple-700 font-custom font-bold p-2 hover:text-white">
                  About Us
                </div>
                <div className="hover:bg-purple-700 font-custom font-bold p-2 hover:text-white">
                  Warranty
                </div>
                <div className="hover:bg-purple-700 font-custom font-bold p-2 hover:text-white">
                  Battery Brands
                </div>
              </div>
            </li>
            <li className="p-2 font-custom font-bold">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="p-2">
              <div className="flex font-custom font-bold justify-between">
                News
                <svg
                  className="size-5"
                  onClick={toggleNews}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 12H20M12 4V20"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className={`${news ? "scale-y-100 opacity-100 max-h-96" : "scale-y-0 opacity-0 max-h-0"} origin-top flex flex-col transition-all duration-300 ease-out`}>
                <div className="hover:bg-purple-700 font-custom font-bold p-2 hover:text-white">
                  Updates
                </div>
                <div className="hover:bg-purple-700 font-custom font-bold p-2 hover:text-white">
                  Events
                </div>
                <div className="hover:bg-purple-700 font-custom font-bold p-2 hover:text-white">
                  Useful Tips
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export { Header };
