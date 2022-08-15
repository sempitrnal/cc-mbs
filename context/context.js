import { createContext, useContext, useState } from "react";

const CineContext = createContext();

export default function StateContext({ children }) {
	const [loginPopOpen, setLoginPopOpen] = useState(false);

	return (
		<CineContext.Provider
			value={{
				loginPopOpen,
				setLoginPopOpen,
			}}
		>
			{children}
		</CineContext.Provider>
	);
}

export const useStateContext = () => useContext(CineContext);
