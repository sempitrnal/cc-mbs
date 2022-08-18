import { Breadcrumb } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
	MdSchedule,
	MdChair,
	MdFastfood,
	MdPayment,
	MdCheckBox,
} from "react-icons/md";

export default function Tickets({ movie }) {
	const router = useRouter();
	console.log(router);
	return (
		<div className=" py-[12rem] px-[1rem] lg:px-[5rem] min-h-screen">
			<div className="">
				<h1 className="mb-5 text-5xl font-semibold">Tickets</h1>
				<div className="hidden xs:block">
					<Breadcrumb>
						<Breadcrumb.Item href="" icon={MdSchedule}>
							Date and time
						</Breadcrumb.Item>
						<Breadcrumb.Item icon={MdChair}>Seats</Breadcrumb.Item>
						<Breadcrumb.Item icon={MdFastfood}>Add-ons</Breadcrumb.Item>
						<Breadcrumb.Item icon={MdPayment}>Payment</Breadcrumb.Item>
					</Breadcrumb>
				</div>
			</div>
			<div className="flex justify-center"></div>
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
