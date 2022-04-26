import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { IoMdAdd } from "react-icons/io";
// import Task from "./Task";

const NewTaskBtn = () => {
  return (
    <button className="relative flex gap-2 justify-center items-center w-full p-2 bg-zinc-100 rounded-md text-zinc-500 hover:bg-zinc-300 hover:text-zinc-700 duration-200">
      <IoMdAdd />
      New a task
    </button>
  );
};

const Group = ({ group, tasks }) => {
  return (
    <div className="flex flex-col min-w-[20rem] w-80 gap-3">
      <p className="font-semibold text-xl">{group}</p>
      <Droppable droppableId={group}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-col bg-zinc-100 h-fit w-full rounded-md p-4 gap-2"
          >
            {/* {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))} */}
          </div>
        )}
      </Droppable>
      <NewTaskBtn />
    </div>
  );
};

export default Group;
