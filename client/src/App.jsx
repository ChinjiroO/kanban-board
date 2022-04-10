import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div className="h-screen overflow-hidden">
			<Navbar onClick={handleOpen} open={open} />
			<main className="flex">
				{open ? <Sidebar /> : null}
				<div className="">This's body</div>
			</main>
		</div>
	);
}

export default App;
