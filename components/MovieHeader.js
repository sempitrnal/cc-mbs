import Image from "next/image";

import MovieHeaderDetails from "./MovieHeaderDetails";
function MovieHeader({ e, deets }) {
	return (
		<div className="">
			<div className="h-[550px] xl:h-[750px] w-screen overflow-y-hidden">
				<MovieHeaderDetails e={e} deets={deets} />
				<div className="h-full bg-gradient-to-b from-[#26262677] to-[#000000f7] relative">
					<Image
						quality="100"
						priority
						className="object-top lg:object-center"
						layout="fill"
						objectFit="cover"
						style={{
							filter: "contrast(1.3)",
							zIndex: -1,
						}}
						src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default MovieHeader;
