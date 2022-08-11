import { useRouter } from "next/router";
import React from "react";

export default function Movie() {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div className="min-h-screen mt-[10rem] px-[5rem]">
			<div className="">
				<p className="mb-5 font-semibold text-7xl">Hello 👋 I'm Bo</p>
				<h3 className="mb-5 text-4xl">I'm a Web Developer</h3>
				<p className="w-[60%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
					alias magnam expedita aspernatur harum suscipit autem nam sequi
					minima, placeat pariatur veniam earum ullam vitae deserunt? Dolore ea
					doloremque ad.
				</p>
			</div>
		</div>
	);
}
