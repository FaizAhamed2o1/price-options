import { useState } from "react";
import Links from "../Links/Links";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";

const NavBar = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
    },
    {
      id: 3,
      path: "/services",
      name: "Services",
    },
    {
      id: 4,
      path: "/contact",
      name: "Contact",
    },
    {
      id: 5,
      path: "/blog",
      name: "Blog",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative p-6">
      <div
        className={`md:hidden w-fit text-xl transition-transform duration-600 ease-in-out ${
          isOpen ? "rotate-180" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RiCloseFill /> : <RiMenu2Fill />}
      </div>

      <ul
        className={`md:flex md:space-x-10 md:static md:opacity-100 absolute px-6 bg-yellow-200 shadow-lg duration-500 ${
          isOpen ? "top-16 opacity-100" : "-top-60 opacity-0"
        }`}
      >
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
