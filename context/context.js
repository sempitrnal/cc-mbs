import { createContext, useContext, useState } from "react";

const CineContext = createContext();

export default function StateContext({ children }) {
	const [loginPopOpen, setLoginPopOpen] = useState(false);
	const [selectedMovieId, setSelectedMovieId] = useState();
	return (
		<CineContext.Provider
			value={{
				loginPopOpen,
				setLoginPopOpen,
				selectedMovieId,
				setSelectedMovieId,
			}}
		>
			{children}
		</CineContext.Provider>
	);
}

export const useStateContext = () => useContext(CineContext);
