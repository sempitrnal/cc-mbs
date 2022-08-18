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
			<FormProgress>
				<h1 className="mb-5 text-5xl font-semibold">Tickets</h1>

				<Breadcrumb className="px-5 py-3 mb-5 rounded-lg bg-gray-50 dark:bg-gray-900">
					<Breadcrumb.Item className="text-[.1rem]" href="">
						Date and time
					</Breadcrumb.Item>
					<Breadcrumb.Item>Seats</Breadcrumb.Item>
					<Breadcrumb.Item>Add-ons</Breadcrumb.Item>
					<Breadcrumb.Item>Payment</Breadcrumb.Item>
				</Breadcrumb>
			</FormProgress>
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
