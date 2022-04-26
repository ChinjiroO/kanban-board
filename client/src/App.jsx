import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";

const Boards = [
  { id: 2, name: "project_2" },
  { id: 1, name: "project 1" },
  { id: 3, name: "project_3" },
  { id: 4, name: "project_4" },
  { id: 5, name: "project_5" },
];

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="h-screen overflow-hidden">
      <Navbar onClick={handleOpen} open={open} />
      <main className="flex bg-white h-full">
        {open ? <Sidebar boards={Boards} /> : null}
        <Routes>
          <Route index element={<Board boards={Boards[0]} />} />
          <Route path=":board_id" element={<Board boards={Boards} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
