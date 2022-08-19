import { getProviders, signIn, getSession, csrfToken } from "next-auth/react";
import Image from "next/image";
import { MdFacebook } from "react-icons/md";

export default function SignIn({ providers }) {
	return (
		<div className="flex flex-col items-center justify-center h-screen p-28">
			{Object.values(providers).map((provider) =>
				provider.name === "Google" ? (
					<div
						onClick={() => signIn(provider.id)}
						key={provider.name}
						className="flex justify-center text-center transition-all duration-300 ease-in-out bg-white border rounded-lg cursor-pointer hover:opacity-90 w-[15rem] mb-3  hover:shadow-md"
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
					<div
						onClick={() => signIn("facebook")}
						className="flex items-center justify-center py-3 px-4 rounded-md transition duration-300 gap-2 cursor-pointer hover:bg-[#3a559fd9] bg-[#3A559F] w-[15rem]"
					>
						<div className="text-xl text-white ">
							<MdFacebook />
						</div>
						<p className="text-sm text-white">Continue with Facebook</p>
					</div>
				)
			)}
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
