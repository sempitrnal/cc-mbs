import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Breadcrumb, Spinner, Tooltip } from "flowbite-react";
import { useRouter } from "next/router";
import { fadeUp } from "../../../../utils";
import FormProgress from "../../../../components/FormProgress";
import Header from "../../../../components/Head";
import { Swiper, SwiperSlide } from "swiper/react";
import { food } from "../../../../utils/food";
import { drinks } from "../../../../utils/food";
import { FiShoppingCart } from "react-icons/fi";
import FoodBox from "../../../../components/FoodBox";
import "swiper/css";
import DrinkBox from "../../../../components/DrinkBox";
export default function Seats() {
	const router = useRouter();
	const l = router.asPath.split("/");
	let title = "Tickets | Addons";
	const [foodz, setFood] = useState(food);
	const [bev, setBev] = useState(drinks);
	return (
		<div className=" py-[8rem] px-[1rem] lg:px-[5rem] min-h-screen ">
			<Header title={title} />
			<FormProgress>
				<h1 className="mb-5 text-5xl font-semibold">Tickets</h1>
				<Breadcrumb className="px-5 py-3 mb-5 rounded-lg bg-gray-50 dark:bg-gray-900">
					<div
						className="flex items-center text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						href=""
						onClick={() =>
							router.push({ pathname: l.slice(0, l.length - 1).join("/") }, undefined, {
								scroll: false,
							})
						}
					>
						Date and time
					</div>
					<Breadcrumb.Item></Breadcrumb.Item>
					<div
						className="flex items-center text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						href=""
						onClick={() =>
							router.push(
								{
									pathname: l.slice(0, l.length - 1).join("/") + "/quantity",
								},
								undefined,
								{ scroll: false }
							)
						}
					>
						Quantity
					</div>
					<Breadcrumb.Item></Breadcrumb.Item>
					<div
						className="flex items-center text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						href=""
						onClick={() =>
							router.push(
								{
									pathname: l.slice(0, l.length - 1).join("/") + "/seats",
								},
								undefined,
								{ scroll: false }
							)
						}
					>
						Seats
					</div>

					<Breadcrumb.Item href="">Add-ons</Breadcrumb.Item>
					<Breadcrumb.Item>Payment</Breadcrumb.Item>
				</Breadcrumb>
			</FormProgress>

			<motion.div
				initial="initial"
				animate="animate"
				variants={fadeUp}
				className="flex items-center gap-14"
			>
				<div className=" basis-[3500px]">
					<h2 className="mb-1 text-3xl">Snacks</h2>
					<div className="w-[100%] h-[2px] bg-neutral-800 mb-10"></div>
					<Swiper width="150" spaceBetween={50} className="mb-10">
						{foodz.map((e) => {
							return (
								<SwiperSlide key={e.id}>
									<FoodBox
										foodz={foodz}
										id={e.id}
										setFood={setFood}
										name={e.name}
										price={e.price ? e.price : null}
										sizes={e.sizes ? e.sizes : null}
										img={e.img}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
					<h2 className="mb-1 text-3xl">Beverages</h2>
					<div className="w-[100%] h-[2px] bg-neutral-800 mb-10"></div>
					<Swiper width="150" spaceBetween={50}>
						{bev.map((e) => {
							return (
								<SwiperSlide key={e.id}>
									<DrinkBox
										id={e.id}
										bev={bev}
										setBev={setBev}
										name={e.name}
										price={e.price ? e.price : null}
										sizes={e.sizes ? e.sizes : null}
										img={e.img}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<div className="w-full h-[80vh] bg-neutral-800 rounded-[3rem] flex justify-center relative">
					<div className="absolute p-8 text-3xl bg-white border rounded-full -top-10">
						<FiShoppingCart />
					</div>

					<h2 className="text-2xl font-semibold text-white uppercase mt-28">Order Summary</h2>
				</div>
			</motion.div>
		</div>
	);
}
