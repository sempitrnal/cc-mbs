import React from "react";
import { motion } from "framer-motion";
import { Breadcrumb } from "flowbite-react";
import { useRouter } from "next/router";
import { fadeUp } from "../../../../utils";
import FormProgress from "../../../../components/FormProgress";
import Image from "next/image";
export default function Seats({ movie }) {
	const router = useRouter();
	const l = router.asPath.split("/");

	return (
		<div className=" py-[8rem] px-[1rem] lg:px-[5rem] min-h-screen ">
			<div className="fixed right-0 bg-white left-0 px-[5rem] top-24 pt-6 z-20 shadow-md">
				<FormProgress>
					<h1 className="mb-5 text-5xl font-semibold">Tickets</h1>
					<Breadcrumb className="px-5 py-3 mb-5 rounded-lg bg-gray-50 dark:bg-gray-900">
						<div
							className="flex items-center text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
							href=""
							onClick={() =>
								router.push(
									{ pathname: l.slice(0, l.length - 1).join("/") },
									undefined,
									{ scroll: false }
								)
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
						<Breadcrumb.Item href="">Seats</Breadcrumb.Item>
						<Breadcrumb.Item>Add-ons</Breadcrumb.Item>
						<Breadcrumb.Item>Payment</Breadcrumb.Item>
					</Breadcrumb>
				</FormProgress>
			</div>
			<motion.div
				initial="initial"
				animate="animate"
				variants={fadeUp}
				className=""
			>
				<h1 className="text-3xl font-bold pt-[10rem]">Select Seats</h1>
				<div className="flex items-center justify-center">
					<div className=" w-[50rem] h-[30rem] bg-neutral-100 rounded-md flex flex-col items-center relative">
						<div className="absolute top-0">
							<div className="w-[25rem] h-[4rem] relative">
								<Image src="/SeatScreen.png" layout="fill" alt="SeatScreen" />
							</div>
						</div>
						<p className="z-10 mt-10 font-semibold uppercase">Screen</p>
					</div>
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
