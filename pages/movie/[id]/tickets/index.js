import { Breadcrumb } from "flowbite-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import DateBox from "../../../../components/DateBox";
import { useStateContext } from "../../../../context/context";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css";
import { fadeUp } from "../../../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Tickets({ movie }) {
	const { availDates } = useStateContext();
	const cinemas = [1, 2, 3];

	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={fadeUp}
			exit="exit"
			className=" py-[12rem] px-[1rem] lg:px-[5rem] min-h-screen"
		>
			<div className="">
				<h1 className="mb-5 text-5xl font-semibold">Tickets</h1>

				<Breadcrumb className="px-5 py-3 bg-gray-50 dark:bg-gray-900">
					<Breadcrumb.Item className="text-[.1rem]" href="">
						Date and time
					</Breadcrumb.Item>
					<Breadcrumb.Item>Seats</Breadcrumb.Item>
					<Breadcrumb.Item>Add-ons</Breadcrumb.Item>
					<Breadcrumb.Item>Payment</Breadcrumb.Item>
				</Breadcrumb>
			</div>
			{cinemas.map((e, i) => {
				return (
					<div className="" key={i}>
						<h2 className="pt-10 pb-5 text-3xl font-semibold">Cinema {e}</h2>
						<div className=" w-[85%] lg:w-[70%] md:px-10 py-5  border rounded-xl border-[#33333339]">
							<Swiper width="100" spaceBetween={15}>
								{availDates.map(({ date, time }, i) => {
									return (
										<SwiperSlide key={i} className="">
											<DateBox date={date} />
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
					</div>
				);
			})}
		</motion.div>
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
