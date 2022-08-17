import React from "react";

export default function Tickets({ movie }) {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="flex">
				<h2>cinema 1</h2>
				<h2>cinema 2</h2>
				<h2>cinema 3</h2>
				<h2>cinema 4</h2>
			</div>
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
