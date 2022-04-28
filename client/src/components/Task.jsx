import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="flex flex-col w-full h-fit bg-white border border-gray-200 p-4 rounded-md"
          >
            <p>{task.title}</p>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Task;
