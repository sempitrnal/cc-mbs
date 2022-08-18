import { createContext, useContext, useState } from "react";
import { avail_days } from "../utils";

const CineContext = createContext();

export default function StateContext({ children }) {
	const [loginPopOpen, setLoginPopOpen] = useState(false);
	const [selectedMovieId, setSelectedMovieId] = useState();
	const [availDates, setAvailDates] = useState(
		avail_days(new Date().getDate())
	);
	const [selectedDate, setSelectedDate] = useState();
	return (
		<CineContext.Provider
			value={{
				loginPopOpen,
				setLoginPopOpen,
				selectedMovieId,
				setSelectedMovieId,
				availDates,
				selectedDate,
				setSelectedDate,
			}}
		>
			{children}
		</CineContext.Provider>
	);
}

export const useStateContext = () => useContext(CineContext);
