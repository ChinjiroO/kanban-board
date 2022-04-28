import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Group from "./Group";
import { useParams } from "react-router-dom";

const removeFromGroup = (group, index) => {
  const result = Array.from(group);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToGroup = (group, index, task) => {
  const result = Array.from(group);
  result.splice(index, 0, task);
  return result;
};

const generateGroups = (bId) => {
  let splitBoardId = parseInt(bId?.split("board-")[1]);
  return groups
    .filter((g) => g.board_id === splitBoardId)
    .map((g) => g.id)
    .reduce(
      (acc, listKey) => ({
        ...acc,
        [listKey]: taskLists.filter((task) => task.group_id === listKey),
      }),
      {}
    );
};

const Board = ({ boards }) => {
  let { board_id } = useParams();
  const [tasks, setTasks] = useState(generateGroups(board_id));
  const [currentBoard, setCurrentBoard] = useState(null);
  const [groupByBoard, setGroupByBoard] = useState(null);

  useEffect(() => {
    setTasks(generateGroups(board_id));
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

    const taskCopy = { ...tasks };
    const sourceGroup = taskCopy[result.source.droppableId];

    const [removedTask, newSourceGroup] = removeFromGroup(
      sourceGroup,
      result.source.index
    );

    taskCopy[result.source.droppableId] = newSourceGroup;

    const destinationGroup = taskCopy[result.destination.droppableId];

    taskCopy[result.destination.droppableId] = addToGroup(
      destinationGroup,
      result.destination.index,
      removedTask
    );

    setTasks(taskCopy);
  }
  return (
    <div className="flex flex-col min-h-screen w-screen py-8 px-6 mr-6 md:px-12 transition-all">
      <p className="font-semibold text-2xl sm:text-3xl">{currentBoard?.name}</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-12 overflow-auto my-10">
          {groupByBoard?.map((group) => (
            <Group
              title={group.title}
              groupId={group.id}
              key={group.id}
              tasks={tasks[group.id]}
            />
          ))}
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

const taskLists = [
  { id: "1", title: "Task 001", group_id: 1 },
  {
    id: "2",
    title: "Task 002",
    group_id: 2,
  },
  {
    id: "3",
    title: "Task 003",
    group_id: 1,
  },
  { id: "4", title: "Task 004", group_id: 1 },
  {
    id: "5",
    title: "Task 005",
    group_id: 2,
  },
];
