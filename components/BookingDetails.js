import Image from "next/image";
import { useStateContext } from "../context/context";
import { monthNames } from "../utils";

export default function BookingDetails({ movie, date }) {
	const { selectedCinema, selectedTime } = useStateContext();
	return (
		<div className="border rounded-xl w-[80%] mx-auto flex justify-between overflow-hidden mb-10">
			<div className="p-5">
				<h1 className="mb-3 text-sm font-semibold text-gray-500 uppercase">
					Booking Details
				</h1>
				<p className="text-xs text-gray-400">Movie</p>
				<h2 className="mb-6 text-3xl font-semibold text-[#303030]">
					{movie.title}
				</h2>

				<div className="flex flex-col h-full gap-5 md:gap-20 md:flex-row">
					<div className="">
						<p className="text-xs text-gray-400 ">Cinema</p>
						<h2 className="text-xl text-[#303030] font-bold">
							Cinema {selectedCinema}
						</h2>
					</div>
					<div className="">
						<p className="text-xs text-gray-400 ">Date</p>
						<h2 className="text-xl font-bold text-[#303030]">
							{monthNames[date.getMonth()]} {date.getDate()},{" "}
							{date.getFullYear()}
						</h2>
					</div>
					<div className="">
						<p className="text-xs text-gray-400 ">Time</p>
						<h2 className="text-xl font-bold text-[#303030]">{selectedTime}</h2>
					</div>
				</div>
			</div>
			<div className="hidden md:block relative w-[30rem] xl:h-[14rem] 2xl:h-[13rem]">
				<Image
					layout="fill"
					alt="movie"
					objectFit="cover"
					src={`${process.env.NEXT_PUBLIC_TMDB_MOVIE_IMAGE_URL}${movie.backdrop_path}`}
				/>
			</div>
		</div>
	);
}
