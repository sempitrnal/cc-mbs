/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"image.tmdb.org",
			"upload.wikimedia.org",
			"lh3.googleusercontent.com",
			"platform-lookaside.fbsbx.com",
		],
	},
};

module.exports = nextConfig;
