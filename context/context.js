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
	const [selectedCinema, setSelectedCinema] = useState();
	const [selectedTime, setSelectedTime] = useState();
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
				setSelectedCinema,
				selectedCinema,
				selectedTime,
				setSelectedTime,
			}}
		>
			{children}
		</CineContext.Provider>
	);
}

export const useStateContext = () => useContext(CineContext);
