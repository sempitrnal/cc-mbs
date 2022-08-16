import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import { SessionProvider } from "next-auth/react";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import StateContext, { useStateContext } from "../context/context";
function MyApp({ Component, pageProps, router, session }) {
	return (
		<StateContext>
			<div className="overflow-x-hidden">
				<SessionProvider session={session}>
					<ThemeProvider
						disableTransitionOnChange
						storageKey="theme"
						attribute="class"
					>
						{!router.route.includes("signin") && <Nav />}
						<AnimatePresence exitBeforeEnter initial={false}>
							<Component {...pageProps} key={router.route} />
						</AnimatePresence>
						{!router.route.includes("signin") && <Footer />}
					</ThemeProvider>
				</SessionProvider>
			</div>
		</StateContext>
	);
}

export default MyApp;
