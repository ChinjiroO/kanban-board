import React from "react";
import { RiArrowDownSLine, RiCloseLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

function Navbar({ onClick, open }) {
  return (
    <nav className="flex justify-between items-center w-screen h-14 px-4 py-2 shadow-lg bg-white border border-b-gray-200 text-neutral-800 font-medium">
      {/* left */}
      <div className="flex gap-4 items-center">
        {/* menu button not show on md screen */}
        <button
          className="flex items-center justify-center hover:bg-neutral-300 rounded-sm transition-all duration-200"
          onClick={onClick}
        >
          {/* menu-btn. */}
          {open ? (
            <RiCloseLine className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>
        <img
          src={`https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80`}
          alt="profile_image"
          className="h-8 w-8 object-cover rounded-md"
        />
        <p className="uppercase">kanban</p>
      </div>
      {/* right */}
      <div className="flex gap-4 items-center">
        <p className="hidden md:flex">Techin's board</p>
        <img
          src={`https://i.pravatar.cc/300`}
          alt="profile_image"
          className="h-8 w-8 object-cover rounded-full"
        />
        {/* dropdown-menu. */}
        <button className="flex items-center justify-center hover:bg-neutral-300 rounded-sm transition-all duration-200">
          <RiArrowDownSLine className="text-2xl" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
