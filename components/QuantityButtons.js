import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useStateContext } from "../context/context";

export default function QuantityButtons() {
	const { decreaseQuantity, increaseQuantity, quantity } = useStateContext();
	return (
		<div className="flex h-max">
			<div
				className={`text-sm border p-1 border-t border-b border-l  rounded-tl-md rounded-bl-md  ${
					quantity === 0
						? "text-gray-400  "
						: "hover:bg-gray-100 transition duration-300"
				}`}
				onClick={() => decreaseQuantity()}
			>
				<FaMinus />
			</div>{" "}
			<div
				className="p-1 text-sm transition duration-300 border-t border-b border-r rounded-tr-md rounded-br-md hover:bg-gray-100 "
				onClick={() => increaseQuantity()}
			>
				<FaPlus />
			</div>
		</div>
	);
}
