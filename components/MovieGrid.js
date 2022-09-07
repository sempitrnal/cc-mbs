import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";

export default function MovieGrid({ e, isUpcoming, upcoming_deets }) {
	const [clicked, setClicked] = useState(false);
	const router = useRouter();
	const fadeUp = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
	};
	const slideRight = {
		initial: { x: 20, opacity: 0 },
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.1,
				type: "spring",
				damping: 20,
				stiffness: 80,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				type: "spring",
				damping: 20,
				stiffness: 80,
			},
		},
	};
	const stagger = {
		animate: {
			transition: {
				staggerChildren: 0.3,
			},
		},
	};
	return (
		<motion.div layout className="w-full rounded-lg" key={e.id}>
			<div
				onClick={() => {
					router.push(`movie/${e.id}`, undefined, { scroll: false });
					setClicked(!clicked);
				}}
			>
				<div className="overflow-hidden rounded-xl ">
					<motion.div
						layout
						className={`movie hover:scale-105  ${
							clicked ? "opacity-30 hover:opacity-30" : ""
						} `}
					>
						{clicked && (
							<div
								className={` absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] `}
							>
								<Spinner size="xl" color="failure" />
							</div>
						)}
						<AnimatePresence>
							{isUpcoming && (
								<motion.div
									variants={slideRight}
									className={`float-right px-3 text-white bg-red-600 text-end  rounded-l-lg text-[.7rem]`}
								>
									{upcoming_deets.release_date}
								</motion.div>
							)}
						</AnimatePresence>
						<Image
							loading="lazy"
							className=""
							layout="fill"
							quality="1"
							objectFit="cover"
							style={{
								filter: "contrast(1.3)",
								zIndex: -1,
							}}
							src={`${process.env.NEXT_PUBLIC_TMDB_MOVIE_IMAGE_URL}${e.poster_path}`}
							alt=""
						></Image>
					</motion.div>
				</div>
			</div>
			<div className="flex justify-center mt-5 text-[#333]">
				<p className="w-40 text-xl font-semibold text-center transition duration-200 ease-in-out dark:text-white">
					{e.original_title}
				</p>
			</div>
		</motion.div>
	);
}
