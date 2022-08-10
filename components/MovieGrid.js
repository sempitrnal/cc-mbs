import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
export default function MovieGrid({ e, isUpcoming, upcoming_deets }) {
	const fadeUp = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
	};
	const slideRight = {
		initial: { x: 150, opacity: 0 },
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
			x: 150,
			opacity: 0,
			transition: {
				delay: 0.1,
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
		<motion.div
			initial="initial"
			animate="animate"
			layout
			className="w-full"
			key={e.id}
		>
			<Link href={`movies/${e.id}`}>
				<div className="movie">
					<AnimatePresence>
						{isUpcoming && (
							<motion.div
								variants={slideRight}
								className="float-right pr-3 text-white bg-red-600 text-end w-[50%] rounded-l-lg text-sm"
							>
								{upcoming_deets.release_date}
							</motion.div>
						)}
					</AnimatePresence>

					<Image
						className=""
						loading="lazy"
						layout="fill"
						quality="1"
						objectFit="cover"
						style={{
							filter: "contrast(1.3)",
							zIndex: -1,
						}}
						src={`https://image.tmdb.org/t/p/original${e.poster_path}`}
						alt=""
					></Image>
				</div>
			</Link>
			<div className="flex justify-center mt-5 text-[#333]">
				<p className="w-40 text-xl font-semibold text-center">
					{e.original_title}
				</p>
			</div>
		</motion.div>
	);
}
