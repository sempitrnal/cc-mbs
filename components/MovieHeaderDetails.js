import genre from "../utils";
export default function MovieHeaderDetails({ e, deets }) {
	return (
		<div className="absolute flex flex-col bottom-[50px] transition-all duration-300 delay-300 px-[1rem] md:spx-[3rem] lg:px-[5.5rem] ">
			<h4 className="z-10 text-white text-center xs:text-start  text-[2rem] lg:text-[3rem] font-semibold mb-5">
				{e.original_title}
			</h4>
			<div className="flex flex-wrap items-center justify-center gap-5 mb-10 xs:justify-start">
				<p className="z-10 p-1 px-2 text-xs text-black bg-white rounded-md">
					{deets.runtime} min
				</p>
				{e.genre_ids.map((e) => {
					return (
						<p className="z-10 text-white" key={e}>
							{genre(e)}
						</p>
					);
				})}
			</div>
			<p className="hidden md:block z-10  w-[80%] leading-7 text-[#ffffffa9]">
				{e.overview}
			</p>
		</div>
	);
}
