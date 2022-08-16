import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn({ providers }) {
	return (
		<div className="flex items-center justify-center h-screen p-28">
			{Object.values(providers).map((provider) =>
				provider.name === "Google" ? (
					<div key={provider.name} className="">
						<button
							onClick={() => signIn(provider.id)}
							className="flex items-center gap-3 p-2 rounded-md shadow-[0px_3px_5px_#00000017]"
						>
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
	);
}

export async function getServerSideProps(context) {
	const providers = await getProviders();
	console.log(providers);
	return {
		props: { providers },
	};
}
