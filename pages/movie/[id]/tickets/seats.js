import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Breadcrumb, Tooltip } from "flowbite-react";
import { useRouter } from "next/router";
import { fadeUp } from "../../../../utils";
import FormProgress from "../../../../components/FormProgress";
import Image from "next/image";
import { MdChairAlt } from "react-icons/md";
import { useStateContext } from "../../../../context/context";
export default function Seats() {
	const router = useRouter();
	const l = router.asPath.split("/");
	const seatsObj = [];
	const letters = [, "A", "B", "C", "D", "E", "F", "G"];
	var x = 0;
	for (var i = 1; i < letters.length; i++) {
		seatsObj.push({ letter: letters[i], mgaSeats: [] });
	}

	for (var i = 0; i < 7; i++) {
		x = i == 1 || i == 2 || i == 4 || i == 5 ? 11 : 7;
		for (var j = 0; j < x; j++) {
			seatsObj[i].mgaSeats.push({
				seat: letters[i + 1] + (j + 1),
				selected: false,
			});
		}
	}
	const [seats, setSeats] = useState(seatsObj);
	const [selectedMore, setSelectedMore] = useState(false);
	const { quantity, selectedSeats, setSelectedSeats } = useStateContext();

	useEffect(() => {
		let s = seats.map((e) => e.mgaSeats.filter((e) => e.selected === true));
		setSelectedSeats(s.flat());
	}, [seats]);

	return (
		<div className=" py-[8rem] px-[1rem] lg:px-[5rem] min-h-screen ">
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
					<Breadcrumb.Item href="">Seats</Breadcrumb.Item>
					<Breadcrumb.Item>Add-ons</Breadcrumb.Item>
					<Breadcrumb.Item>Payment</Breadcrumb.Item>
				</Breadcrumb>
			</FormProgress>

			<motion.div initial="initial" animate="animate" variants={fadeUp} className="">
				<AnimatePresence>
					{selectedMore && (
						<motion.div
							onClick={() => setSelectedMore(!selectedMore)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="backdrop fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-[#00000053]"
						>
							<motion.div
								onClick={(e) => e.stopPropagation()}
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0, opacity: 0 }}
								className="w-[40rem] h-[15rem] bg-white rounded-2xl flex justify-center items-center  flex-col  "
							>
								<h1 className="text-2xl text-[#3c3c3c] mb-2">
									You already selected {quantity} seats!
								</h1>
								<div className="flex gap-2 mb-7">
									Seats:
									{selectedSeats.map((e) => (
										<p className="font-semibold" key={e.seat}>
											{e.seat}
										</p>
									))}
								</div>
								<button
									onClick={(e) => {
										setSelectedMore(!selectedMore);
									}}
									className="px-5 py-1 font-semibold text-white transition-opacity duration-300 bg-black rounded-lg w-max hover:opacity-70"
								>
									OK
								</button>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
				<h1 className="my-10 text-3xl font-bold">
					Select {quantity} {quantity > 1 ? "seats" : "seat"}
				</h1>
				<div className="flex items-center justify-center">
					<div className=" w-[60rem] h-[40rem] bg-neutral-100 rounded-md flex flex-col items-center relative">
						<div className="absolute left-8	 flex flex-col font-bold opacity-30 gap-7 top-[12rem]">
							{letters.map((e, i) => {
								return i > 0 ? (
									<div className="" key={e}>
										{e}
									</div>
								) : (
									""
								);
							})}
						</div>
						<div className="absolute right-8	 flex flex-col font-bold opacity-30 gap-7 top-[12rem]">
							{letters.map((e, i) => {
								return i > 0 ? (
									<div className="" key={e}>
										{e}
									</div>
								) : (
									""
								);
							})}
						</div>
						<div className="absolute flex flex-col items-center w-full top-10">
							<div className="w-[25rem] h-[4rem] relative mb-20 flex justify-center">
								<Image src="/SeatScreen.png" layout="fill" alt="SeatScreen" />
							</div>

							<div className="flex items-center justify-center w-full">
								<div className={``}>
									{seats.map((e, i) => {
										//
										return (
											<div key={e.letter} className={`flex justify-center gap-3 mb-3 w-full`}>
												{e.mgaSeats.map(({ seat, selected }, i) => {
													return (
														<div
															key={i}
															className={`${
																seat === "B2" ||
																seat === "B9" ||
																seat === "C2" ||
																seat === "C9" ||
																seat === "E2" ||
																seat === "E9" ||
																seat === "F2" ||
																seat === "F9"
																	? "mr-10"
																	: ""
															}`}
														>
															<Tooltip content={seat} className="bg-red-500 ">
																<div
																	onClick={() => {
																		let selected;
																		let newObj;
																		let seatObjIndex;

																		setSeats((prevSeats) => {
																			prevSeats.map((seats) => {
																				seats.mgaSeats.find((finddis) => finddis.seat === seat)
																					? (selected = seats)
																					: null;
																			});

																			seatObjIndex = selected.mgaSeats.findIndex(
																				(e) => e.seat === seat
																			);
																			selected = seats.findIndex((e) => e === selected);
																			if (
																				selectedSeats.length < quantity ||
																				(selectedSeats.length === quantity &&
																					selectedSeats.find(
																						(e) =>
																							e.seat ===
																							prevSeats[selected].mgaSeats[seatObjIndex].seat
																					))
																			) {
																				newObj = {
																					...prevSeats[selected],
																					mgaSeats: [
																						...prevSeats[selected].mgaSeats.slice(0, seatObjIndex),
																						Object.assign(
																							{},
																							{ ...prevSeats[selected].mgaSeats[seatObjIndex] },
																							{
																								...prevSeats[selected].mgaSeats[seatObjIndex],
																								selected:
																									!prevSeats[selected].mgaSeats[seatObjIndex]
																										.selected,
																							}
																						),
																						...prevSeats[selected].mgaSeats.slice(seatObjIndex + 1),
																					],
																				};
																			} else {
																				setSelectedMore(true);
																				newObj = newObj = {
																					...prevSeats[selected],
																				};
																			}

																			return prevSeats.map((e) => {
																				if (e.letter === newObj.letter) {
																					return newObj;
																				}
																				return e;
																			});
																		});

																		console.log(newObj);
																	}}
																	className={`flex items-center justify-center w-10 h-10 transition duration-300 rounded-lg cursor-pointer ${
																		selected ? "bg-[#e23a3a] text-white" : " bg-neutral-300"
																	}  hover:opacity-90 `}
																>
																	<div className="text-xl">
																		<MdChairAlt />
																	</div>
																</div>
															</Tooltip>
														</div>
													);
												})}
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<p className="z-10 mt-16 font-semibold uppercase">Screen</p>
					</div>
				</div>
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
