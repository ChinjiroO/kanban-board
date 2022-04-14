import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="h-screen overflow-hidden">
      <Navbar onClick={handleOpen} open={open} />
      <main className="flex bg-white h-full">
        {open ? <Sidebar /> : null}
        <Board />
      </main>
    </div>
  );
}

export default App;
