import React from "react";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Sidebar() {
	return (
		<div className="flex flex-col h-screen bg-[#F3F3F3] w-64 py-14 px-3 text-neutral-800 overflow-y-scroll">
			<div className="flex w-full justify-between items-center">
				<p className="font-medium text-base">Board</p>
				<button className="w-fit h-fit p-1 hover:bg-neutral-200 rounded-sm transition-all duration-200">
					<IoMdAdd />
				</button>
			</div>
			<ul className="flex flex-col mt-2 p-2">
				{Lists.map((list, i) => (
					<li key={i}>
						<div className="flex justify-between items-center w-full text-justify font-normal hover:font-medium text-base p-1 hover:bg-neutral-200 rounded-sm cursor-pointer transition-all duration-200">
							{list}
							<button className="p-1 hover:bg-neutral-300 rounded-sm transition-all duration-200">
								<HiOutlineDotsVertical />
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

const Lists = [
	"project-01",
	"portfolio-website",
	"kanban-application",
	"team-01",
	"project-01",
	"portfolio-website",
	"kanban-application",
	"team-01",
];

export default Sidebar;
