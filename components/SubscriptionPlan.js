import React from "react";
import { MdCheck } from "react-icons/md";
import { motion } from "framer-motion";
export default function SubscriptionPlan({ name, price, features, index }) {
	return (
		<div
			className={`px-10 py-10 w-[16rem] rounded-[3.5rem] relative ${
				name === "DIRECTOR" ? "bg-[#2d2d2d] text-white" : "bg-[#E3E3E3]"
			}`}
		>
			<h3 className="text-3xl font-bold mb-7">{name}</h3>
			<p className="mb-12">
				<span className="mr-1 text-5xl font-extrabold">${price}</span>
				<span className="text-2xl font-semibold">/year</span>
			</p>
			<div className="mb-14">
				{features.map((e, i) => {
					return (
						<div className="flex gap-2 text-lg translate-x-1 text-start" key={i}>
							<div className="translate-y-1">
								<MdCheck />
							</div>
							<p>{e}</p>
						</div>
					);
				})}
			</div>

			<motion.button
				className={`hover:opacity-80 transition-opacity duration-300 absolute left-[50%] translate-x-[-50%] py-1.5 px-3 ${
					name === "DIRECTOR" ? "bg-white text-[#2d2d2d]" : "bg-[#2d2d2d] text-white"
				} rounded-xl  bottom-5`}
			>
				Subscribe
			</motion.button>
		</div>
	);
}
