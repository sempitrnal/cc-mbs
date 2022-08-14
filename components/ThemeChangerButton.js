import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
export default function ThemeChangerButton() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const scaleUp = {
		initial: {
			scale: 0.5,
		},
		animate: {
			scale: 1,
		},
	};

	useEffect(() => {
		setMounted(true);
	}, []);
	const renderThemeChanger = () => {
		if (!mounted) return null;
		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<motion.div
					initial={{ scale: 0.5 }}
					animate={{ scale: 1 }}
					className="px-2 py-2 text-yellow-300 rounded-lg cursor-pointer bg-slate-900 hover:bg-slate-800 "
					onClick={() => {
						setTheme("light");
						localStorage.setItem("theme", "light");
					}}
				>
					<FiSun />
				</motion.div>
			);
		} else {
			return (
				<motion.div
					variants={scaleUp}
					initial="initial"
					animate="animate"
					className="px-2 py-2 text-blue-900 rounded-lg cursor-pointer bg-slate-300 hover:bg-slate-400"
					onClick={() => {
						setTheme("dark");
						localStorage.setItem("theme", "dark");
					}}
				>
					<FiMoon />
				</motion.div>
			);
		}
	};
	return <div className="">{renderThemeChanger()}</div>;
}
