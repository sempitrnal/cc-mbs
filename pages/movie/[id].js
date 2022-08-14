import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { CgArrowRight, CgQuote } from "react-icons/cg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { SiAppletv } from "react-icons/si";
export default function Movie({ movie }) {
	console.log(movie);
	const router = useRouter();
	return (
		<motion.div className="px-[5rem] min-h-screen flex items-center ">
			<div className="flex gap-10 py-[16rem] items-center xl:items-start">
				<div className="relative overflow-hidden rounded-xl w-[500px] h-[500px] xl:h-[700px]">
					<Image
						priority
						layout="fill"
						objectFit="cover"
						src={`${process.env.NEXT_PUBLIC_TMDB_MOVIE_IMAGE_URL}${movie.poster_path}`}
						alt={movie.title}
					/>
				</div>
				<div className="flex flex-col">
					<div className="mb-5 text-5xl font-semibold xl:text-7xl">
						{movie.title}
					</div>
					<div className="flex gap-3 mb-2 ">
						<p className="text-[#000000d3] dark:text-[#ffffffd4]  font-bold mb-8">
							{movie.runtime}m
						</p>
						{movie.genres.map((e) => {
							return (
								<p
									className="text-[#000000c1] dark:text-[#ffffffd4] "
									key={e.id}
								>
									{e.name}
								</p>
							);
						})}
					</div>
					{movie.tagline && (
						<p className="mb-10 text-4xl italic   font-[300] dark:text-[#ffffff53] text-[#00000022] w-max flex gap-3">
							<span className="text-lg">
								<FaQuoteLeft />
							</span>
							{movie.tagline}
							<span className="text-lg">
								<FaQuoteRight />
							</span>
						</p>
					)}
					<h2 className="mb-5 text-4xl font-semibold">Overview</h2>
					<p className="w-[85%] xl:w-[70%] mb-7">{movie.overview}</p>
					<hr className="mb-10" />
					<div className="flex gap-5">
						<motion.div className="mb-5">
							<motion.button
								onClick={() => {
									router.push("/tickets");
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
									className="flex items-center gap-2 px-5 py-2 text-lg bg-white rounded-md shadow-lg"
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
