import React from "react";
import { dayNames, monthNames } from "../utils";

export default function DateBox({ date }) {
	return (
		<div className="flex flex-col items-center justify-center px-6 py-2 transition duration-300 bg-gray-200 border cursor-pointer rounded-3xl hover:bg-gray-300">
			<h3 className="text-lg font-medium uppercase ">
				{monthNames[date.getMonth()].slice(0, 3)}
			</h3>
			<p className="text-2xl font-extrabold">{date.getDate()}</p>
			<p>{dayNames[date.getDay()].slice(0, 3)}</p>
		</div>
	);
}
