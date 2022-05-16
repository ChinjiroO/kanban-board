import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
import { LoginPage } from "./pages";

function App() {
  const [open, setOpen] = useState(false);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    function getBoards() {
      const boardsLocal = JSON.parse(localStorage.getItem("boards"));
      if (boardsLocal) {
        setBoards(boardsLocal);
      }
    }
    getBoards();
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* <Navbar onClick={handleOpen} open={open} /> */}
      <main className="flex bg-white h-full">
        {open ? <Sidebar boards={boards} /> : null}
        <Routes>
          <Route index element={<Board boards={boards[0]} />} />
          <Route path="login" element={<LoginPage />} />
          <Route path=":board_id" element={<Board boards={boards} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
