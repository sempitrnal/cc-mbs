import React from "react";
import Head from "next/head";
export default function Header({ title, content }) {
	return (
		<div className="">
			<Head>
				<title>{title}</title>
				<meta name="description" content={content} />
			</Head>
		</div>
	);
}
