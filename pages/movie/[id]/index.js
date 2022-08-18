import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { CgArrowRight, CgQuote } from "react-icons/cg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { SiAppletv } from "react-icons/si";
import { fadeUp } from "../../../utils";
export default function Movie({ movie }) {
	console.log(movie);
	const router = useRouter();
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={fadeUp}
			className="flex items-center min-h-screen "
		>
			<div className="flex flex-col lg:grid lg:grid-cols-2 lg:mr-5 py-[8rem] lg:py-[12rem] items-center place-items-center">
				<div className="relative overflow-hidden rounded-xl w-[250px] h-[350px] lg:w-[350px] lg:h-[450px] xl:w-[500px] xl:h-[600px] transition-all duration-300">
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
				<div className="flex flex-col items-center lg:items-start">
					<div className="mt-10 mb-5 text-2xl font-semibold text-center md:text-5xl lg:text-start xl:text-7xl lg:mt-0">
						{movie.title}
					</div>
					<div className="flex w-[75%] lg:w-full lg:justify-start justify-center gap-3 mb-2 lg:gap-3">
						<p className="text-[#000000d3] dark:text-[#ffffffd4]  font-bold mb-8">
							{movie.runtime}m
						</p>
						{movie.genres.map((e) => {
							return (
								<p
									className="text-[#000000c1] dark:text-[#ffffffd4] text-center break-words "
									key={e.id}
								>
									{e.name}
								</p>
							);
						})}
					</div>
					{movie.tagline && (
						<p className="w-[95%] mb-10 text-2xl xl:text-4xl italic break-words  font-[300] dark:text-[#ffffff53] text-[#00000022] flex gap-3 justify-center lg:justify-start">
							<span className="text-lg">
								<FaQuoteLeft />
							</span>
							{movie.tagline}
							<span className="hidden text-lg lg:block">
								<FaQuoteRight />
							</span>
						</p>
					)}
					<h2 className="mb-5 text-4xl font-semibold">Overview</h2>
					<p className="w-[95%] xl:w-[70%] mb-7">{movie.overview}</p>
					<hr className="mb-10" />
					<div className="flex gap-5">
						<motion.div className="mb-5">
							<motion.button
								onClick={() => {
									router.push(
										{
											pathname: `${movie.id}/tickets`,
										},
										undefined,
										{ scroll: false }
									);
								}}
								whileHover={{ x: 5 }}
								transition={{ duration: 0.5 }}
								className="flex items-center gap-3 px-5 py-2 text-lg text-white bg-black rounded-md dark:text-black dark:bg-white"
							>
								Buy Tickets{" "}
								<span className="text-2xl">
									<CgArrowRight />
								</span>
							</motion.button>
						</motion.div>
						{movie.homepage.includes("netflix") && (
							<a href={movie.homepage} target="__blank" rel="noreferrer">
								<motion.button
									whileHover={{ x: 5 }}
									transition={{ duration: 0.5 }}
									className="flex items-center gap-3 px-5 py-2 text-lg bg-white rounded-md shadow-lg"
								>
									<p className="">Available on</p>
									<Image
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
										width="55"
										height="15"
										alt="netflix"
									/>
								</motion.button>
							</a>
						)}
						{movie.homepage.includes("apple") && (
							<a href={movie.homepage} target="__blank" rel="noreferrer">
								<motion.button
									whileHover={{ x: 5 }}
									transition={{ duration: 0.5 }}
									className="flex items-center gap-2 px-5 py-2 text-lg bg-white rounded-md shadow-lg dark:text-black"
								>
									<p className="">Available on</p>
									<div className="text-2xl">
										<SiAppletv />
									</div>
								</motion.button>
							</a>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export async function getServerSideProps(context) {
	console.log(context.query);
	const { params } = context;
	const { id } = params;
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
	);
	const data = await response.json();

	return {
		props: {
			movie: data,
		},
	};
}
