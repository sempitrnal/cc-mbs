import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Breadcrumb, Spinner, Tooltip } from "flowbite-react";
import { useRouter } from "next/router";
import { fadeUp } from "../../../../utils";
import FormProgress from "../../../../components/FormProgress";
import Header from "../../../../components/Head";
import "swiper/css";
import { useStateContext } from "../../../../context/context";
import { useSession } from "next-auth/react";

export default function Payment({ movie }) {
	const { data: session } = useSession();
	console.log(session);
	const router = useRouter();
	const l = router.asPath.split("/");
	let title = "Tickets | Payment";
	return (
		<div className="py-[8rem] px-[1rem] lg:px-[5rem] min-h-screen">
			<Header title={title} />
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
					<Breadcrumb.Item></Breadcrumb.Item>
					<div
						className="flex items-center text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						href=""
						onClick={() =>
							router.push(
								{
									pathname: l.slice(0, l.length - 1).join("/") + "/quantity",
								},
								undefined,
								{ scroll: false }
							)
						}
					>
						Quantity
					</div>
					<Breadcrumb.Item></Breadcrumb.Item>
					<div
						className="flex items-center text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						href=""
						onClick={() =>
							router.push(
								{
									pathname: l.slice(0, l.length - 1).join("/") + "/seats",
								},
								undefined,
								{ scroll: false }
							)
						}
					>
						Seats
					</div>
					<Breadcrumb.Item></Breadcrumb.Item>
					<div
						className="flex items-center text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						href=""
						onClick={() =>
							router.push(
								{
									pathname: l.slice(0, l.length - 1).join("/") + "/addons",
								},
								undefined,
								{ scroll: false }
							)
						}
					>
						Add-ons
					</div>

					<Breadcrumb.Item href="">Payment</Breadcrumb.Item>
				</Breadcrumb>
			</FormProgress>
			<motion.div initial="initial" animate="animate" variants={fadeUp} className="">
				<div className="p-5 mt-10 border rounded-lg w-max">
					<p className="capitalize">{session.user.name}</p>
					<p>{session.user.email}</p>
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

	return {
		props: {
			movie: data,
		},
	};
}
