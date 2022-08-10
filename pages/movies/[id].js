import { useRouter } from "next/router";
import React from "react";

export default function Movie() {
	const router = useRouter();
	const { id } = router.query;
	return <div>hello {id}</div>;
}
