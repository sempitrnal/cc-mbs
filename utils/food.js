import { nanoid } from "nanoid";
export const food = [
	{
		id: nanoid(),
		name: "Popcorn",
		sizes: [
			{ size: "Sm", price: 50, selected: false },
			{ size: "Md", price: 80, selected: true },
			{ size: "Bucket", price: 120, selected: false },
		],
		img: "/food/popcorn.png",
	},
	{ id: nanoid(), name: "Hamburger", price: 45, img: "/food/bacon-burger.jpg" },
	{
		id: nanoid(),
		name: "Chicken Pita",
		price: 55,
		img: "/food/pita-stuffed-with-chicken-peppers.jpg",
	},
	{ id: nanoid(), name: "Hotdog Sandwich", price: 35, img: "/food/hot-dog.jpg" },
];

export const drinks = [
	{
		id: nanoid(),
		name: "Smoothie",
		sizes: [
			{ size: "Sm", price: 30, selected: false },
			{ size: "Md", price: 50, selected: true },
			{ size: "Lg", price: 69, selected: false },
		],
		img: "/food/milkshake.jpg",
	},
	{
		id: nanoid(),
		name: "Soda",
		sizes: [
			{ size: "Sm", price: 40, selected: false },
			{ size: "Md", price: 60, selected: true },
			{ size: "Lg", price: 100, selected: false },
		],
		img: "/food/soda.jpg",
	},
	{
		id: nanoid(),
		name: "Juice",
		sizes: [
			{ size: "Sm", price: 30, selected: false },
			{ size: "Md", price: 50, selected: true },
			{ size: "Lg", price: 69, selected: false },
		],
		img: "/food/soda.jpg",
	},
	{
		id: nanoid(),
		name: "Coffee",
		sizes: [
			{ size: "Sm", price: 20, selected: false },
			{ size: "Md", price: 40, selected: true },
			{ size: "Lg", price: 50, selected: false },
		],
		img: "/food/coffee.jpg",
	},
];
