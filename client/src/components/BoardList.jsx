import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";

const DotsButton = ({ clicked }) => (
  <button
    type="button"
    className="h-full p-1 opacity-0 focus:opacity-100 hover:opacity-100 hover:bg-neutral-300 focus:bg-neutral-300 rounded-sm transition-all duration-200"
    id="menu-button"
    aria-expanded="true"
    aria-haspopup="true"
    onClick={clicked}
  >
    <HiOutlineDotsVertical />
  </button>
);

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const Dropdown = ({ elRef, clicked }) => {
  return (
    <div
      className="z-10 absolute w-auto right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      ref={elRef}
      onClick={clicked}
    >
      <div className="py-1">
        <button className="text-gray-700 text-left w-full hover:bg-neutral-300 block px-4 py-2 text-sm">
          Rename
        </button>
        <button className="text-gray-700 text-left w-full hover:bg-neutral-300 block px-4 py-2 text-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

const BoardList = ({ board }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const handleOpen = () => {
    setVisible(!visible);
  };
  useOnClickOutside(ref, () => setVisible(false));

  return (
    <div className="flex justify-between items-center">
      <Link to={`/board-${board.id}`} className="w-full">
        <div className="font-normal hover:font-medium text-base p-1 hover:bg-neutral-200 rounded-sm cursor-pointer transition-all duration-200">
          {board.name}
        </div>
      </Link>
      <div className="relative inline-block text-left h-full">
        <DotsButton clicked={handleOpen} />
        {visible ? <Dropdown elRef={ref} clicked={handleOpen} /> : null}
      </div>
    </div>
  );
};

export default BoardList;
