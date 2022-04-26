import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Group from "./Group";
import { useParams } from "react-router-dom";

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const Board = ({ boards }) => {
  let { board_id } = useParams();
  const [task, setTask] = useState(tasks);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [groupByBoard, setGroupByBoard] = useState(null);

  useEffect(() => {
    let splitBoardId = parseInt(board_id?.split("board-")[1]);
    function getBoardByUrl(url) {
      if (url) {
        return boards.find((board) => board.id === url);
      }
      return boards;
    }
    setCurrentBoard(getBoardByUrl(splitBoardId));
    function getGroupsByBoard(boardId) {
      return groups.filter((g) => g.board_id === boardId);
    }
    setGroupByBoard(getGroupsByBoard(splitBoardId));
  }, [boards, board_id]);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const taskCopy = { ...task };
    const sourceList = taskCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    taskCopy[result.source.droppableId] = newSourceList;
    const destinationList = taskCopy[result.destination.droppableId];
    taskCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setTask(taskCopy);
  }
  return (
    <div className="flex flex-col min-h-screen w-screen py-8 px-6 mr-6 md:px-12 transition-all overflow-y-auto">
      <p className="font-semibold text-2xl sm:text-3xl">{currentBoard?.name}</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-12 overflow-auto my-10">
          {groupByBoard?.map((group) => {
            return <Group group={group.title} key={group.id} tasks={task} />;
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;

const groups = [
  {
    id: 1,
    title: "On going",
    board_id: 1,
  },
  {
    id: 2,
    title: "In progress",
    board_id: 1,
  },
  {
    id: 3,
    title: "Done",
    board_id: 1,
  },
  {
    id: 4,
    title: "test",
    board_id: 4,
  },
];

const tasks = [
  { id: 1, title: "Commodo id et id aliquip elit amet cillum.", group_id: 1 },
  {
    id: 2,
    title: "Lorem Lorem reprehenderit occaecat ea sunt sint.",
    group_id: 2,
  },
  {
    id: 3,
    title:
      "Labore enim consequat nostrud aliqua voluptate amet excepteur sint qui deserunt ipsum ullamco minim.",
    group_id: 1,
  },
  { id: 4, title: "Adipisicing in do velit ea.", group_id: 1 },
  {
    id: 5,
    title: "Sint consectetur exercitation proident dolor excepteur qui.",
    group_id: 2,
  },
];
