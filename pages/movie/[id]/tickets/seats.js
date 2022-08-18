import React from "react";
import { motion } from "framer-motion";
import { Breadcrumb } from "flowbite-react";
import { useRouter } from "next/router";
import { fadeUp } from "../../../../utils";
import FormProgress from "../../../../components/FormProgress";
export default function Seats() {
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
				<div className="pt-[10rem]">
					<h1 className="text-6xl font-bold">u gay</h1>
				</div>
			</motion.div>
		</div>
	);
}

export async function getServerSideProps(context) {
	console.log(context);
	return {
		props: {},
	};
}
