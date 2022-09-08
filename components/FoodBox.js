import Image from "next/image";

export default function FoodBox({ name, price, sizes, img }) {
	let selected = sizes ? sizes.find((e) => e.selected === true) : null;
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
								className={`px-3 mb-5 text-xs border rounded-lg  ${
									e.selected ? "bg-black text-white" : ""
								} transition duration-300 border rounded-full max-w hover:shadow-[0px_2px_2px_#4d4d4d19] `}
								key={e.size}
							>
								{e.size}
							</button>
						);
					})}
			</div>
			{price && <p className="mb-2 font-bold">₱{price}</p>}
			<button className="px-5 py-1 text-xs transition duration-300 border rounded-full max-w hover:bg-neutral-900 hover:text-white">
				Add to cart
			</button>
		</div>
	);
}
