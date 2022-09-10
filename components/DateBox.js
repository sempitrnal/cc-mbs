import React from "react";
import { useStateContext } from "../context/context";
import { dayNames, monthNames } from "../utils";
import { motion } from "framer-motion";
export default function DateBox({ date, cinema }) {
	const { setSelectedDate, setSelectedCinema, selectedDate, selectedCinema, setIsDateClicked } =
		useStateContext();

	return (
		<motion.div
			layout
			onClick={() => {
				setSelectedDate(date);
				setSelectedCinema(cinema);
				setIsDateClicked(true);
				localStorage.setItem("selectedDate", JSON.stringify(date));
				localStorage.setItem("selectedCinema", JSON.stringify(cinema));
			}}
			className={`flex flex-col items-center justify-center px-6 py-2 transition duration-300 bg-gray-200  cursor-pointer rounded-3xl ${
				selectedDate === date && selectedCinema === cinema
					? "bg-red-600  text-white hover:bg-red-600  "
					: "text-black  hover:bg-gray-300 "
			} `}
		>
			<motion.h3 layout className="text-lg font-medium uppercase ">
				{monthNames[date.getMonth()].slice(0, 3)}
			</motion.h3>
			<motion.p layout className="text-2xl font-extrabold">
				{date.getDate()}
			</motion.p>
			<motion.p layout>{dayNames[date.getDay()].slice(0, 3)}</motion.p>
		</motion.div>
	);
}
