import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Head from "next/head";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import MovieHeader from "../components/MovieHeader";
import MovieGrid from "../components/MovieGrid";
import { useState } from "react";
import { fadeUp, movieGridTabs } from "../utils";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import Header from "../components/Head";
function MovieList({
	top3,
	top10,
	movieDetailsTop3,
	movieDetailsTop10,
	videos,
	upcoming,
	upcoming_details,
}) {
	const [movieGrid, setMovieGrid] = useState(0);
	const toggleMovieTab = (e) => {
		setMovieGrid(e);
	};
	let title = "Cine-Cine";
	let desc =
		"Cine-Cine is a cinema theater located in Toledo City, Cebu. The place comes with great seats, great service, clean and big movie screens. Get to experience the movies coming to life with our 4k Ultra HD screens with comfortable chairs! What are you waiting for? Visit us!";
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="overflow-hidden"
		>
			<Header title={title} content={desc} />
			<Swiper
				loop
				grabCursor
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				speed={1000}
				modules={[Pagination, Autoplay]}
				pagination={{ clickable: true }}
			>
				{top3.map((e) => {
					const details = movieDetailsTop3.find((d) => e.id === d.id);
					return (
						<SwiperSlide key={e.id}>
							<MovieHeader e={e} deets={details} />
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="movie-grid-tabs-wrapper">
				{movieGridTabs.map((e, i) => {
					return (
						<div
							key={i}
							className={`movie-grid-tabs ${movieGrid !== i ? "inactive-movie-grid-tab " : ""}`}
							onClick={() => toggleMovieTab(i)}
						>
							<p
								className={`movie-grid-tab-text ${
									movieGrid === i ? "text-white dark:text-black" : ""
								}`}
							>
								{e.tab}
							</p>
							<AnimatePresence>
								{movieGrid === i ? (
									<motion.div layoutId="bg" className="movie-grid-tab-bg"></motion.div>
								) : (
									""
								)}
							</AnimatePresence>
						</div>
					);
				})}
			</div>

			<motion.div className="movie-grid">
				<AnimatePresence initial={false}>
					{movieGrid === 0 &&
						top10.map((e) => {
							return <MovieGrid key={e.id} e={e} />;
						})}
					{movieGrid === 1 &&
						upcoming.map((e) => {
							return (
								<MovieGrid
									key={e.id}
									upcoming_deets={upcoming_details.find((d) => e.id === d.id)}
									isUpcoming={true}
									e={e}
								/>
							);
						})}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	);
}
export default MovieList;

export async function getServerSideProps() {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
	);
	const data = await response.json();

	const moviedeets = await Promise.all(
		data.results.map(async (e) => {
			try {
				const response2 = await fetch(
					`https://api.themoviedb.org/3/movie/${e.id}?api_key=${process.env.TMDB_API_KEY}`
				);
				const data2 = await response2.json();
				return data2;
			} catch (e) {
				console.log(e);
			}
		})
	);
	const movievideos = await Promise.all(
		data.results.map(async (e) => {
			try {
				const response2 = await fetch(
					`https://api.themoviedb.org/3/movie/${e.id}/videos?api_key=${process.env.TMDB_API_KEY}`
				);
				const data2 = await response2.json();
				return data2;
			} catch (e) {
				console.log(e);
			}
		})
	);

	const upcoming_response = await fetch(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&page=1`
	);
	const upcoming_data = await upcoming_response.json();
	console.log(upcoming_data);
	const upcoming_deets = await Promise.all(
		upcoming_data.results.map(async (e) => {
			try {
				const response2 = await fetch(
					`https://api.themoviedb.org/3/movie/${e.id}?api_key=${process.env.TMDB_API_KEY}`
				);
				const data2 = await response2.json();
				return data2;
			} catch (e) {}
		})
	);

	return {
		props: {
			top3: data.results.slice(0, 3),
			top10: data.results.slice(0, 10),
			movieDetailsTop3: moviedeets.slice(0, 3),
			movieDetailsTop10: moviedeets.slice(0, 10),
			videos: movievideos,
			upcoming: upcoming_data.results.slice(0, 10),
			upcoming_details: upcoming_deets.slice(0, 10),
		},
	};
}
