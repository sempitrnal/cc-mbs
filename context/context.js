import { createContext, useContext, useEffect, useState } from "react";
import { avail_days } from "../utils";

const CineContext = createContext();

export default function StateContext({ children }) {
	const [loginPopOpen, setLoginPopOpen] = useState(false);
	const [selectedMovieId, setSelectedMovieId] = useState();
	const [availDates, setAvailDates] = useState(avail_days(new Date().getDate()));
	const [selectedDate, setSelectedDate] = useState();
	const [selectedCinema, setSelectedCinema] = useState();
	const [selectedTime, setSelectedTime] = useState();
	const [selectedSeats, setSelectedSeats] = useState();
	const [isDateClicked, setIsDateClicked] = useState(false);
	const [quantity, setQuantity] = useState(0);
	const [cart, setCart] = useState([]);
	const [order, setOrder] = useState();
	useEffect(() => {
		setSelectedDate(JSON.parse(localStorage.getItem("selectedDate")));
		setSelectedCinema(JSON.parse(localStorage.getItem("selectedCinema")));
		setSelectedTime(JSON.parse(localStorage.getItem("selectedTime")));
		setQuantity(JSON.parse(localStorage.getItem("ticketQuantity")));
		setCart(JSON.parse(localStorage.getItem("cart")));
	}, []);

	const increaseQuantity = () => {
		setQuantity((prev) => prev + 1);
	};
	const decreaseQuantity = () => {
		setQuantity((prev) => (prev < 1 ? 0 : prev - 1));
	};
	const total = 290 * quantity;
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
				isDateClicked,
				setIsDateClicked,
				quantity,
				setQuantity,
				increaseQuantity,
				decreaseQuantity,
				total,
				selectedSeats,
				setSelectedSeats,
				cart,
				setCart,
				order,
				setOrder,
			}}
		>
			{children}
		</CineContext.Provider>
	);
}

export const useStateContext = () => useContext(CineContext);
