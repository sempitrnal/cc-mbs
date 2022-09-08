import { Breadcrumb } from "flowbite-react";
import DateBox from "../../../../components/DateBox";
import { useStateContext } from "../../../../context/context";
import { AnimatePresence, motion } from "framer-motion";
import "@splidejs/react-splide/css";
import { fadeUp } from "../../../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import FormProgress from "../../../../components/FormProgress";
import { useEffect } from "react";
import Header from "../../../../components/Head";
export default function Tickets({ movie }) {
	const {
		availDates,
		selectedCinema,
		selectedDate,
		setSelectedDate,
		setSelectedCinema,
		selectedTime,
		setSelectedTime,
		isDateClicked,
	} = useStateContext();
	const cinemas = [1, 2, 3];
	const router = useRouter();
	useEffect(() => {
		setSelectedDate("");
		setSelectedCinema("");
	}, []);
	let title = `Tickets | Date and Time`;
	return (
		<div className=" py-[8rem] px-[1rem] lg:px-[5rem] min-h-screen">
			<Header title={title} />
			<FormProgress>
				<h1 className="mb-5 text-5xl font-semibold">Tickets</h1>

				<Breadcrumb className="px-5 py-3 mb-5 rounded-lg bg-gray-50 dark:bg-gray-900">
					<Breadcrumb.Item className="text-[.1rem]" href="">
						Date and time
					</Breadcrumb.Item>
					<Breadcrumb.Item>Quantity</Breadcrumb.Item>
					<Breadcrumb.Item>Seats</Breadcrumb.Item>
					<Breadcrumb.Item>Add-ons</Breadcrumb.Item>
					<Breadcrumb.Item>Payment</Breadcrumb.Item>
				</Breadcrumb>
			</FormProgress>

			<motion.div initial="initial" animate="animate" variants={fadeUp} className="gap-32 lg:flex">
				<motion.div layout className="transition-all duration-300 basis-[850px] 3xl:basis-[1200px]">
					{cinemas.map((e, i) => {
						return (
							<motion.div layout className="pt-10" key={i}>
								<motion.h2 layout className="pb-5 text-3xl font-semibold">
									Cinema {e}
								</motion.h2>
								<motion.div
									layout
									className="  md:px-10 py-5  border dark:border-[#ffffff57] rounded-xl border-[#33333339]"
								>
									<Swiper width="100" spaceBetween={15}>
										{availDates.map(({ date, time }, i) => {
											return (
												<SwiperSlide key={i} className="">
													<DateBox cinema={e} date={date} />
												</SwiperSlide>
											);
										})}
									</Swiper>
								</motion.div>
								<AnimatePresence>
									{selectedDate && selectedCinema === e && isDateClicked && (
										<motion.div
											layout
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className="flex gap-3 mt-10"
										>
											{availDates[0].time.map((e, i) => {
												return (
													<motion.div
														layout
														onClick={() => {
															setSelectedTime(e);
															localStorage.setItem("selectedTime", JSON.stringify(e));
															router.push(`/movie/${movie.id}/tickets/quantity`, undefined, {
																scroll: false,
															});
														}}
														className="flex flex-col items-center overflow-hidden transition-all duration-300 border rounded-lg cursor-pointer w-max hover:shadow-md dark:border-red-600"
														key={i}
													>
														<p className="w-full px-20 py-1 font-bold text-white bg-red-600 ">
															{e}
														</p>
														<p className="py-2 ">2D</p>
													</motion.div>
												);
											})}
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
					<div className=""></div>
				</motion.div>
				<div className="hidden pt-10 lg:block basis-64">
					<p className="mb-5 text-2xl font-semibold">{movie.original_title}</p>
					<div className="relative w-[300px] h-[400px] overflow-hidden rounded-lg mb-5">
						<Image
							className=""
							layout="fill"
							quality="1"
							objectFit="cover"
							style={{
								filter: "contrast(1.3)",
								zIndex: -1,
							}}
							src={`${process.env.NEXT_PUBLIC_TMDB_MOVIE_IMAGE_URL}${movie.poster_path}`}
							alt=""
						></Image>
					</div>
					<p className="flex justify-center gap-2 text-xl italic text-center text-gray-300">
						<span className="text-sm">
							<FaQuoteLeft />
						</span>
						{movie.tagline}
					</p>
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
