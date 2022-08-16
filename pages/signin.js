import { getProviders, signIn, getSession, csrfToken } from "next-auth/react";
import Image from "next/image";

export default function SignIn({ providers }) {
	return (
		<div className="flex items-center justify-center h-screen p-28">
			<div className="flex flex-col items-center px-20 border border-[#ffffff49] rounded-lg bg-[#171717]">
				<div className="relative w-16 h-16 p-10 mt-10 mb-6">
					<Image src="/logo.png" alt="logo" layout="fill" />
				</div>
				<div className="flex flex-col gap-5">
					<form action="" className="flex flex-col gap-5">
						<input
							className="w-[25rem] h-12 rounded-lg outline-none border-2 transition-all duration-300 focus:border-green-400	 px-5"
							type="text"
							placeholder="Email"
						/>
						<button className="bg-[#314d71] rounded-lg h-12 text-white font-semibold hover:opacity-90 transition-all duration-300 ">
							Next
						</button>
					</form>
					<div className="flex items-center gap-2 text-[#ffffff9f]">
						<div className="w-full h-[1px] bg-[#ffffff8a]"></div>
						<p>or</p>
						<div className="w-full h-[1px] bg-[#ffffff8a]"></div>
					</div>
					{Object.values(providers).map((provider) =>
						provider.name === "Google" ? (
							<div
								onClick={() => signIn(provider.id)}
								key={provider.name}
								className="flex justify-center mb-20 text-center transition-all duration-300 ease-in-out bg-white rounded-lg cursor-pointer hover:opacity-90"
							>
								<button className="flex items-center gap-3 p-2 rounded-md ">
									<div className="relative w-4 h-4 ">
										<Image
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
											layout="fill"
											alt="google_logo"
										/>
									</div>
									<p>Sign in with {provider.name}</p>
								</button>
							</div>
						) : (
							""
						)
					)}
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const { req } = context;
	const session = await getSession({ req });

	if (session) {
		return {
			redirect: { destination: "/" },
		};
	}
	const providers = await getProviders();
	console.log(providers);
	return {
		props: { providers },
	};
}
