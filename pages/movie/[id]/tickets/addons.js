/* eslint-disable react/no-unescaped-entities */
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
import { FiArrowRight, FiMinus, FiPlus, FiShoppingCart, FiTrash } from "react-icons/fi";
import FoodBox from "../../../../components/FoodBox";
import "swiper/css";
import { useStateContext } from "../../../../context/context";
import { nanoid } from "nanoid";
export default function Addons({ movie }) {
	const router = useRouter();
	const l = router.asPath.split("/");
	let title = "Tickets | Addons";
	const [foodz, setFood] = useState(food);
	const [bev, setBev] = useState(drinks);
	const { setCart, cart } = useStateContext();
	const [cartTotal, setCartTotal] = useState([0]);
	const [letsGo, setLetsGo] = useState(false);
	const [proceed, setProceed] = useState(false);
	useEffect(() => {
		setCartTotal(
			cart.map((e) => {
				return e.size ? e.size.price * e.quantity : e.quantity * e.price;
			})
		);
	}, [cart]);

	const getTotal = (arr) => {
		arr.push(0);
		return arr.reduce((a, b) => a + b);
	};

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
										setLetsGo={setLetsGo}
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
								<SwiperSlide key={nanoid()}>
									<FoodBox
										setLetsGo={setLetsGo}
										id={e.id}
										foodz={bev}
										setFood={setBev}
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
				<motion.div
					layout
					className="w-full min-w-max h-[80vh] bg-neutral-800 rounded-[3rem] flex flex-col items-center relative"
				>
					<div className="absolute p-8 text-3xl bg-white border rounded-full -top-10">
						<FiShoppingCart />
					</div>
					<h2 className="mb-5 text-2xl font-semibold text-center text-white uppercase mt-28">
						Order Summary
					</h2>
					<motion.div layout className="w-[95%] px-5 h-[50%] overflow-y-scroll  cart">
						{cart.map((e, i) => {
							return (
								<motion.div
									layout
									initial={{ y: -20 }}
									animate={{ y: 0 }}
									className="flex items-center justify-between mb-5 text-white "
									key={e.id}
								>
									<div className="">
										<p className="font-semibold">{e.item} </p>
										<p className="mt-1 text-xs text-neutral-400">
											Price
											<span className="font-bold text-white "> ₱ {e.price}</span>{" "}
										</p>
										<p className="mt-1 text-xs text-neutral-400">
											Quantity <span className="font-bold text-white">{e.quantity}</span>{" "}
										</p>
										{i > 0 && (
											<div className="flex justify-center mt-2 rounded-md w-max">
												<div
													onClick={() => {
														setCart((prev) => {
															return prev.map((p) => {
																return p.id === e.id ? { ...p, quantity: (p.quantity += 1) } : p;
															});
														});
													}}
													className="px-1 py-0.5 text-black transition-opacity duration-100 bg-white border-r rounded-tl-sm rounded-bl-sm hover:opacity-80 "
												>
													<FiPlus />
												</div>
												<div
													onClick={() => {
														let newObj;
														setCart((prev) => {
															newObj = prev.map((p) => {
																return p.id === e.id && p.quantity > 1
																	? { ...p, quantity: (p.quantity -= 1) }
																	: p.id === e.id && p.quantity === 1
																	? {}
																	: p;
															});

															return newObj.filter((e) => Object.keys(e).length != 0);
														});
														console.log(newObj);
													}}
													className="px-1 py-0.5 text-center text-black transition-opacity duration-100 bg-white border-r hover:opacity-80"
												>
													<FiMinus />
												</div>
												<div
													onClick={() => {
														let newObj;
														setCart((prev) => {
															newObj = prev.map((p) => {
																return p.id === e.id ? {} : p;
															});
															return newObj.filter((e) => Object.keys(e).length != 0);
														});
													}}
													className="px-1 py-0.5 text-red-600 transition duration-100 bg-white rounded-tr-sm rounded-br-sm hover:bg-red-600 hover:text-white "
												>
													<FiTrash />
												</div>
											</div>
										)}
									</div>
									<div className="">
										<p className="text-[.7rem] text-neutral-300">Subtotal</p>
										<p className="font-semibold">
											₱ {parseFloat(e.quantity * e.price).toLocaleString()}
										</p>
									</div>
								</motion.div>
							);
						})}
						<AnimatePresence initial={false}>
							{cart.length <= 1 && (
								<motion.div
									initial={{ y: -20, opacity: 0 }}
									animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
									className="flex absolute bottom-44 left-12 w-[70%] items-center justify-center h-[50%] text-center text-xs text-[#ffffffa1]"
								>
									Don't you wanna eat some delicious snacks and drinks while you watch the movie?
									:-)
								</motion.div>
							)}
						</AnimatePresence>
						{letsGo && (
							<motion.div
								animate={{ y: 100, opacity: 0, scale: 1.5, transition: { duration: 1 } }}
								exit={{ y: 100, opacity: 0, transition: { duration: 0.4 } }}
								className="flex absolute bottom-44 left-12 z-20   w-[70%] items-center justify-center h-[50%] text-center text-xs text-[#ffffffa1]"
							>
								YEAHHHHHHHHHHH!
							</motion.div>
						)}
					</motion.div>
					<div className="mt-10 flex justify-between text-white w-[50%]">
						<p>Total</p>
						<p className="font-semibold">₱ {parseFloat(getTotal(cartTotal)).toLocaleString()}</p>
					</div>
					<button
						onClick={() => {
							setProceed(true);
							router.push(`/movie/${movie.id}/tickets/payment`, undefined, {
								scroll: false,
							});
						}}
						className={`py-2 transition-opacity duration-300 bg-white rounded-lg mt-7 w-max ${
							proceed ? "" : "hover:opacity-80"
						}`}
					>
						{proceed ? (
							<div className="flex items-center justify-center gap-2 px-5">
								<p>Loading</p> <Spinner size="sm" color="failure" />
							</div>
						) : (
							<div className="flex items-center justify-center gap-2 px-5 ">
								Proceed <FiArrowRight />
							</div>
						)}
					</button>
				</motion.div>
			</motion.div>
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
