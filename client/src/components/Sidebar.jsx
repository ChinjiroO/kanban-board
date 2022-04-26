import React from "react";
import { IoMdAdd } from "react-icons/io";
import BoardList from "./BoardList";

const HeaderSidebar = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <p className="font-medium text-base">Board</p>
      <button className="w-fit h-fit p-1 hover:bg-neutral-200 rounded-sm transition-all duration-200">
        <IoMdAdd />
      </button>
    </div>
  );
};

const Sidebar = ({ boards }) => {
  return (
    <div className="flex flex-col bg-[#F3F3F3] min-w-[300px] py-14 px-3 text-neutral-800">
      <HeaderSidebar />
      <div className="flex flex-col mt-2 p-2 overflow-y-scroll min-h-full">
        {boards.map((board) => (
          <BoardList board={board} key={board.id} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
