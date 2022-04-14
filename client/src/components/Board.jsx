import React from "react";

import { IoMdAdd } from "react-icons/io";

function Board() {
  return (
    <div className="flex flex-col min-h-screen w-screen py-8 px-6 mr-6 md:px-12 transition-all overflow-auto">
      <p className="font-semibold text-2xl sm:text-3xl">project-01</p>
      <div className="flex gap-12">
        {Groups.map((group, index) => (
          <div
            key={index}
            className="flex flex-col min-w-[20rem] w-80 gap-3 mt-8"
          >
            <p className="font-semibold text-xl">{group.title}</p>
            <ul className="flex flex-col bg-zinc-100 w-full rounded-md p-4 gap-2">
              {group.tasks.map((task, index) => (
                <li key={index}>
                  <div className="flex flex-col w-full h-fit bg-white border border-gray-200 p-4 rounded-md">
                    <p>{task.title}</p>
                    <div className="flex flex-row gap-2">
                      {task.tags.map((task, index) => (
                        <p key={index} className="rounded-md p-1 bg-gray-100">
                          {task}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="flex gap-2 justify-center items-center w-full p-2 bg-zinc-100 rounded-md text-zinc-500 hover:bg-zinc-300 hover:text-zinc-700 duration-200">
              <IoMdAdd />
              New a task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;

const Groups = [
  {
    title: "On going",
    tasks: [
      { title: "comp: fix sidebar state.", tags: ["idea", "component"] },
      { title: "task: 2", tags: ["UX/UI"] },
      { title: "something u need to do.", tags: ["UX/UI"] },
    ],
  },
  {
    title: "In progress",
    tasks: [],
  },
  {
    title: "Done",
    tasks: [{ title: "test: done", tags: ["back-end"] }],
  },
];
