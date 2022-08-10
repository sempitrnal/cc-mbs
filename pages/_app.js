import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import { useEffect } from "react";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps, router }) {
	return (
		<div className="overflow-hidden">
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default MyApp;
