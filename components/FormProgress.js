import React from "react";

export default function FormProgress({ children }) {
	return (
		<div className="fixed right-0 bg-white dark:bg-black left-0 px-[1rem] lg:px-[5rem] top-[5rem] lg:top-[6rem] pt-6 z-20 shadow-md">
			{children}
		</div>
	);
}
