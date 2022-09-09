import { nanoid } from "nanoid";
import Image from "next/image";
import { useState } from "react";
import { useStateContext } from "../context/context";

export default function FoodBox({ name, price, sizes, img, setFood, id, foodz }) {
	let selected = sizes ? sizes.find((e) => e.selected === true) : null;
	let foodIndex = foodz ? foodz.findIndex((e) => e.id === id) : null;
	const { cart, setCart } = useStateContext();

	return (
		<div className="flex flex-col items-center justify-center translate-x-10">
			<div className={`relative ${name === "Popcorn" ? "w-[8rem]" : "w-[10rem]"} h-[8rem] mb-3 `}>
				<Image src={img} alt={name} layout="fill" objectFit="cover" />
			</div>
			<p className="mb-1 font-semibold">{name}</p>
			{sizes && <p className="mb-2 font-bold">₱{selected.price}</p>}
			<div className="flex gap-3">
				{sizes &&
					sizes.map((e) => {
						return (
							<button
								onClick={() => {
									let objProps;
									let newObj;
									let newFood;
									setFood((prev) => {
										objProps =
											e === selected
												? foodz[foodIndex].sizes
												: foodz[foodIndex].sizes.map((size) => {
														return size === selected
															? { ...size, selected: false }
															: size === e
															? { ...size, selected: true }
															: size;
												  });
										newObj = { ...prev[foodIndex], sizes: objProps };
										newFood = foodz.map((food) => {
											return food.id === newObj.id ? newObj : food;
										});
										return newFood;
									});
								}}
								className={`p-3 mb-5 text-xs  rounded-lg  ${
									e.selected ? "bg-black text-white" : "border"
								} transition duration-300  rounded-md max-w hover:shadow-[0px_2px_2px_#4d4d4d19] `}
								key={e.size}
							>
								{e.size}
							</button>
						);
					})}
			</div>
			{price && <p className="mb-2 font-bold">₱{price}</p>}
			<button
				onClick={() => {
					let item = {
						id: nanoid(),
						item: name,
						price: price,
						quantity: 1,
						total: price * 1,
					};
					let nylon;
					setCart((prev) => {
						nylon = [...prev, item];
						return nylon;
					});
					console.log(nylon);
				}}
				className="px-5 py-1 text-xs transition duration-300 border rounded-full max-w hover:bg-neutral-900 hover:text-white"
			>
				Add to cart
			</button>
		</div>
	);
}
