import { motion } from "framer-motion";
import Link from "next/link";

export default function hello() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ delay: 0.3 }}
			className="h-screen p-32"
		>
			<h1>Hello World</h1>
			<Link href={"/"}>sadm</Link>
		</motion.div>
	);
}
