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
    <nav>
      <div className="md:hidden  text-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RiCloseFill /> : <RiMenu2Fill />}
      </div>

      <ul className="md:flex md:space-x-10">
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
