import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import ThemeChangerButton from "./ThemeChangerButton";
import { useStateContext } from "../context/context";
import { useSession, signIn, signOut } from "next-auth/react";
import { Tooltip } from "flowbite-react";
import { MdFacebook } from "react-icons/md";
export default function Nav() {
	const { data: session } = useSession();
	const router = useRouter();
	const { loginPopOpen, setLoginPopOpen } = useStateContext();
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const [scrollY, setScrollY] = useState(0);
	const loginPop = {
		initial: {
			x: session ? 60 : 120,
			y: session ? -35 : -55,
			opacity: 0,
			scale: 0,
			transition: {
				duration: 0.1,
				type: "spring",
				damping: 20,
				stiffness: 140,
			},
		},
		animate: {
			x: 0,
			y: 0,
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.1,
				type: "spring",
				damping: 20,
				stiffness: 100,
			},
		},
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`flex  items-center fixed text-white top-0 py-2 left-0 right-0 z-50 px-[1rem] lg:px-[5rem]   transition-colors duration-300  ease-in-out ${
				scrollY > 500 ? "text-white bg-[#000000]" : ""
			} justify-between ${
				router.route !== "/" && router.route !== "/promos" ? "bg-black" : ""
			}`}
		>
			<div
				className={`fixed overflow-hidden lg:hidden left-0 right-0 bg-black -z-10 bottom-[35rem] transition-all duration-300 ease-in-out ${
					menuIsOpen ? "top-[0%]" : "top-[50%]"
				}`}
			></div>
			<div className="flex items-center gap-16">
				<div className="cursor-pointer ">
					<Link href={"/"} scroll={false}>
						<div className="w-[70px] h-[70px] relative">
							<Image layout="fill" src={"/logo.png"} alt="logo" />
						</div>
					</Link>
				</div>
				<div
					id="linkz"
					className={` fixed flex-col gap-16 leading-[5rem] text-center items-center left-0 right-0 top-20 lg:flex-row lg:flex lg:static bg-black  transition-[bottom] duration-300  overflow-hidden lg:bg-transparent  ${
						menuIsOpen ? "bottom-[0%] " : "bottom-[100%]"
					}`}
				>
					<div className="cursor-pointer ">
						<Link href={"/"} scroll={false}>
							<p>Home </p>
						</Link>
					</div>
					<div className="cursor-pointer ">
						<Link href={"/"} scroll={false}>
							<p>Movies</p>
						</Link>
					</div>
					<div className="cursor-pointer ">
						<Link href={"/hello"} scroll={false}>
							<p>Schedule</p>
						</Link>
					</div>
					<div className="cursor-pointer ">
						<Link href={"/promos"} scroll={false}>
							<p>Promos</p>
						</Link>
					</div>
				</div>
			</div>

			{/* <form action="" className="hidden lg:block ">
				<div className="relative w-full h-full">
					<input
						type="text"
						className="h-7 w-[15rem] py-1 pl-3 pr-7 rounded-xl text-black"
					/>
					<div className="absolute text-black top-1.5 right-2">
						<AiOutlineSearch />
					</div>
				</div>
			</form> */}

			<div className="items-center hidden gap-10 lg:flex">
				{/* <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
				<div className="">John Doe</div> */}
				<div className="relative">
					{session ? (
						<div
							className="flex gap-2 transition duration-300 cursor-pointer hover:opacity-80"
							onClick={() => setLoginPopOpen(!loginPopOpen)}
						>
							<div className="relative w-6 h-6 rounded-[50%] overflow-hidden ">
								<Image
									src={session.user.image}
									layout="fill"
									alt="user_image"
								/>
							</div>
							<p>{session.user.name.split(" ")[0]}</p>
						</div>
					) : (
						<p
							className="transition duration-300 cursor-pointer hover:opacity-80 "
							onClick={() => setLoginPopOpen(!loginPopOpen)}
						>
							Login
						</p>
					)}
					<AnimatePresence>
						{loginPopOpen && (
							<motion.div
								onMouseLeave={() => {
									setTimeout(() => {
										setLoginPopOpen(false);
									}, 700);
								}}
								initial="initial"
								animate="animate"
								exit="initial"
								variants={loginPop}
								className={`loginpop absolute shadow-md ${
									session ? "left-[-6rem]" : "left-[-15rem] "
								} flex flex-col justify-center px-3 py-3 bg-white rounded-lg`}
							>
								{session ? (
									<div
										onClick={() => signOut()}
										className="flex items-center justify-center py-1 px-2 rounded-md transition duration-300 gap-2 cursor-pointer hover:bg-[#00000012]"
									>
										<p className="text-sm text-black">Sign out</p>
									</div>
								) : (
									<div className="">
										<div
											onClick={() => signIn("google")}
											className="flex items-center justify-start  py-3 px-4 shadow-md rounded-md transition duration-300 gap-2 cursor-pointer hover:bg-[#00000006] mb-2"
										>
											<div className="relative w-4 h-4 ">
												<Image
													src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
													layout="fill"
													alt="google_logo"
												/>
											</div>
											<p className="text-sm text-black">Sign in with Google</p>
										</div>
										<div
											onClick={() => signIn("facebook")}
											className="flex items-center justify-center py-3 px-4 rounded-md transition duration-300 gap-2 cursor-pointer hover:bg-[#3a559fd9] bg-[#3A559F]"
										>
											<div className="text-xl ">
												<MdFacebook />
											</div>
											<p className="text-sm text-white">
												Continue with Facebook
											</p>
										</div>
									</div>
								)}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<Tooltip content="Toggle theme mode" arrow={false}>
					<ThemeChangerButton />
				</Tooltip>
			</div>
			<div className="flex gap-3 text-3xl cursor-pointer lg:hidden">
				<div className="text-sm">
					<Tooltip content="Toggle theme mode" arrow={false}>
						<ThemeChangerButton />
					</Tooltip>
				</div>
				<div className="" onClick={() => setMenuIsOpen(!menuIsOpen)}>
					{!menuIsOpen && (
						<motion.div
							initial={{ scale: 0.3 }}
							animate={{ scale: 1 }}
							className=""
						>
							<HiMenuAlt3 />
						</motion.div>
					)}
					{menuIsOpen && (
						<motion.div
							initial={{ scale: 0.3 }}
							animate={{ scale: 1 }}
							className=""
						>
							<CgClose />
						</motion.div>
					)}
				</div>
			</div>
		</nav>
	);
}
