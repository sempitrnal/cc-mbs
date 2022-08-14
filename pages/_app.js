import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps, router }) {
	return (
		<div className="overflow-hidden">
			<ThemeProvider
				disableTransitionOnChange
				storageKey="theme"
				attribute="class"
			>
				<Nav />
				<AnimatePresence exitBeforeEnter initial={false}>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default MyApp;
