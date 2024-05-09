import { RiMenuLine } from "@remixicon/react";
import { useState } from "react";

const Header = () => {
  const navLinks = ["Home", "Models", "Beyond The car"];
  const [dropdownState, setDropdownState] = useState(false);

  return (
    <div className="flex p-5 text-white justify-between md:justify-normal items-center absolute top-0 w-full z-50">
      <div className="hidden md:block md:flex flex-1 gap-4">
        {navLinks.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </div>
      <span classNamae="text-4xl font-bold">Logo</span>
      <div className="flex-1 text-right hidden md:block">
        <button className="bg-white bg-opacity-30 px-4 py-2 rounded-xl shadow-sm">
          Contact Us
        </button>
      </div>
      <div className="md:hidden">
        <RiMenuLine onClick={() => setDropdownState(!dropdownState)} />
      </div>
      {dropdownState && (
        <div className="fixed w-full h-screen z-30 top-14 right-0 bg-white text-zinc-800 gap-5 px-10 py-6 flex flex-col justify-around">
          <div className="flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </div>
          <button className="bg-gray-500 text-white bg-opacity-30 px-4 py-2 rounded-xl shadow-sm">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
