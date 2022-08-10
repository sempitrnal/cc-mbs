import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className=" w-full bg-[#161616] flex   mt-[5rem] py-[3rem] px-[3rem] gap-[3rem] lg:gap-[10rem] justify-center flex-col lg:flex-row">
			<div className="flex flex-col text-white ">
				<div className="w-[100px] h-[100px] relative">
					<Image layout="fill" src="/logo.png" alt="logo" />
				</div>
				<p>
					Cine-Cine is a cinema theater located in Toledo City, Cebu. The place
					comes with great seats, great service, clean and big movie screens.
					Get to experience the movies coming to life with our 4k Ultra HD
					screens with comfortable chairs! What are you waiting for? Visit us!
				</p>
			</div>
			<div className="flex flex-col lg:justify-center w-full lg:flex-row  gap-[5rem] text-white">
				<div className="flex flex-col gap-3">
					<h3 className="text-2xl font-extrabold uppercase">links</h3>
					<Link href={"/"}>Home</Link>
					<Link href={"/"}>Movies</Link>
					<Link href={"/"}>Schedule</Link>
					<Link href={"/"}>Promos</Link>
				</div>
				<div className="flex flex-col gap-3">
					<h3 className="text-2xl font-extrabold uppercase">need help?</h3>
					<Link href={"/"}>Contact Us</Link>
					<Link href={"/"}>Terms of Service</Link>
					<Link href={"/"}>Privacy Policy</Link>
					<Link href={"/"}>Cookie Policy</Link>
				</div>
				<div className="flex flex-col gap-3">
					<h3 className="text-2xl font-extrabold uppercase">connect</h3>
					<Link href={"/"}>Twitter</Link>
					<Link href={"/"}>Facebook</Link>
					<Link href={"/"}>Gmail</Link>
				</div>
			</div>
		</div>
	);
}
