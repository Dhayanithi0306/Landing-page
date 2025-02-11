import { useState } from "react";
import logo from "../assets/logo.webp";
import { RiMenu3Fill, RiCloseLine } from "@remixicon/react";

const LINKS = [
  { name: "Home", href: "#homey" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#portfolio" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b-2 bg-white text-black" >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
          <img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLw9sFfGsoJyxkRljXNAUm9eX_cU4ZGn_fA&s" 
  width={190} 
  height={15} 
  alt="VastuSpaze" 
/>

          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl  pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
            <a key={index} href={link.href} className="uppercase  text-sm font-medium">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute bg-black w-full py-5 px-4 mt-2 border-b-4`}
      >
        {LINKS.map((link, index) => (
          <a key={index} href={link.href} className="uppercase text-white bg-black text-lg font-medium block py-2 tracking-wide">
            {link.name}
          </a>
        ))}
      </div>
      
    </nav>
  );
};

export default Navbar;
