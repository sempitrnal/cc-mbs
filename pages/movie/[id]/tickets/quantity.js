import { Breadcrumb, Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FormProgress from "../../../../components/FormProgress";
import { motion } from "framer-motion";
import { fadeUp } from "../../../../utils";
import { useStateContext } from "../../../../context/context";

import BookingDetails from "../../../../components/BookingDetails";
import QuantityButtons from "../../../../components/QuantityButtons";

export default function Quantity({ movie }) {
	const [clicked, setClicked] = useState(false);
	const {
		quantity,
		total,
		selectedDate,

		setQuantity,
	} = useStateContext();
	const router = useRouter();
	const l = router.asPath.split("/");
	const nextPath = l.slice(0, l.length - 1).join("/");
	const date = new Date(selectedDate);
	useEffect(() => {
		setQuantity(0);
	}, []);
	return (
		<div className="py-[10rem] px-[1rem] lg:px-[5rem] min-h-screen">
			<FormProgress>
				<h1 className="mb-5 text-5xl font-semibold">Tickets</h1>
				<Breadcrumb className="px-5 py-3 mb-5 rounded-lg bg-gray-50 dark:bg-gray-900">
					<div
						className="flex items-center text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						href=""
						onClick={() =>
							router.push({ pathname: l.slice(0, l.length - 1).join("/") }, undefined, {
								scroll: false,
							})
						}
					>
						Date and time
					</div>
					<Breadcrumb.Item href="">Quantity</Breadcrumb.Item>
					<Breadcrumb.Item>Seats</Breadcrumb.Item>
					<Breadcrumb.Item>Add-ons</Breadcrumb.Item>
					<Breadcrumb.Item>Payment</Breadcrumb.Item>
				</Breadcrumb>
			</FormProgress>

			<motion.div initial="initial" animate="animate" variants={fadeUp} className="pt-12">
				<BookingDetails movie={movie} date={date} />
				<div className="flex items-center justify-center gap-10 mb-10">
					<div className="">
						<p className="text-xs mb-1   font-[600] text-gray-400">Ticket Price</p>
						<p className="w-20 font-semibold">₱ 290</p>
					</div>
					<div className="">
						<p className="text-xs mb-1   font-[600] text-gray-400">Total</p>
						<p className="w-20 font-semibold">₱ {total.toLocaleString()}</p>
					</div>
					<div className="flex items-end justify-center gap-5">
						<div className="">
							<p className="text-xs font-[600] mb-1 text-gray-400">Quantity</p>
							<p className="font-semibold text-center">{quantity}</p>
						</div>
						<QuantityButtons />
					</div>
				</div>
				<div className="flex justify-center w-full">
					<button
						onClick={() => {
							quantity > 0
								? (router.push(`${nextPath}/seats`),
								  setClicked(!clicked),
								  localStorage.setItem("ticketQuantity", JSON.stringify(quantity)))
								: null;
						}}
						className={`px-10 py-2 text-white transition-all w-40 h-12 text-center cursor-pointer duration-200 rounded-lg  ${
							quantity > 0
								? "cursor-pointer bg-black hover:opacity-90"
								: "cursor-default bg-neutral-500"
						}`}
					>
						{quantity > 0 && clicked ? <Spinner color="failure" /> : "Next"}
					</button>
				</div>
			</motion.div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const { query } = context;
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${query.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
	);
	const data = await response.json();
	console.log(data);
	return {
		props: {
			movie: data,
		},
	};
}
