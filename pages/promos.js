/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { MdCheck } from "react-icons/md";
import { motion } from "framer-motion";
import SubscriptionPlan from "../components/SubscriptionPlan";

export default function Promos() {
	const subscription = [
		{
			name: "CC+",
			price: 30,
			features: ["Exclusive Promos", "Discounts"],
		},
		{
			name: "CC SILVER",
			price: 35,
			features: ["Exclusive Promos", "Discounts", "Free snacks & Beverages"],
		},
		{
			name: "DIRECTOR",
			price: 40,
			features: [
				"CC+ & CC Silver Benefits",
				"Director's Cut Access",
				"Free access to movies every 3 months",
			],
		},
	];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="relative min-h-screen overflow-x-hidden px-[5rem] py-[8rem] "
		>
			<Head>
				<title>Cine-Cine | Promos</title>
			</Head>
			<div className="absolute top-[-8rem] left-[-8rem] 3xl:left-[-7rem] -z-10">
				<svg
					width="2260"
					height="931"
					viewBox="0 0 2260 931"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M858.5 792.5C573.3 610.9 238.667 671.5 107 724.5L20.5 888L0.5 29.5L1966.5 0C2173.17 156 2474.8 516.1 2028 708.5C1469.5 949 1215 1019.5 858.5 792.5Z"
						fill="#2D2D2D"
					/>
				</svg>
			</div>
			<div className="grid grid-cols-[700px_600px] 3xl:grid-cols-[700px_1000px] gap-[5rem] z-10 items-center justify-center mb-[15rem]">
				<div className="relative w-[620px] h-[620px] ">
					<Image src="/people.png" alt="people" layout="fill" />
				</div>
				<div className="flex flex-col text-white basis-[1000px] ">
					<h1 className="font-bold leading-[8rem] text-8xl mb-5">
						Exciting offers awaits for you!
					</h1>
					<p className="text-3xl w-[80%] font-extralight italic mb-8">
						Avail our premium membership to get exclusive promos and discounts.
					</p>
					<button className="px-16 py-3 transition duration-300 ease-in-out border border-white rounded-full hover:bg-white hover:text-black w-max">
						Subscribe
					</button>
				</div>
			</div>

			<div className="flex items-center justify-center gap-[8rem] mb-[15rem]">
				<div className="w-[50%]">
					<h2 className="mb-10 font-extrabold uppercase text-7xl">Amazing Offers</h2>
					<p className="text-3xl font-extralight leading-[2.5rem]">
						Cine-Cine values its premium members and rewards them with lots of benefits. From
						exclusive discounts to free access of numerous movies. We love our members as much as
						you love movies!
					</p>
				</div>
				<div className="relative">
					<div className="relative w-[600px] h-[600px]">
						<Image src="/cart.png" alt="cart" layout="fill" />
					</div>
					<div className="absolute w-[600px] h-[600px] bg-[#2d2d2d] rounded-full -z-10 top-0 left-0 "></div>
				</div>
			</div>
			<div className="flex items-center justify-center gap-[8rem] bg-[#2d2d2d] text-white m-[-5rem] py-16 mb-[15rem]">
				<div className="relative">
					<div className="relative w-[600px] h-[600px] z-20">
						<Image src="/hand.png" alt="cart" layout="fill" />
					</div>
					<div className="absolute w-[450px] h-[450px] bg-[#fff] rounded-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-35%]"></div>
				</div>
				<div className="w-[50%]">
					<h2 className="mb-10 font-extrabold uppercase text-7xl">bang for the buck!</h2>
					<p className="text-3xl font-extralight leading-[2.5rem]">
						Our membership plan is the most cheapest yet worth investment you could ever imagine.
						Cine-Cine makes sure that our customers receives more benefits than us.
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center">
				<h2 className="mb-10 font-extrabold uppercase text-7xl">Subscribe now</h2>
				<p className="mb-20 text-3xl font-light tracking-wide text-center w-[60%] leading-[2.5rem]">
					Subscribe now to our premium membership plan to receive huge discounts, exclusive promos,
					access to our director's club theater and many more! What are you waiting for?
				</p>
				<div className="flex justify-center gap-3 text-center">
					{subscription.map(({ name, price, features }, i) => {
						return (
							<SubscriptionPlan
								key={name}
								name={name}
								price={price}
								features={features}
								index={i}
							/>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
}
