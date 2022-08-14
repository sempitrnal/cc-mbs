/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["image.tmdb.org", "upload.wikimedia.org"],
	},
	webpackDevMiddleware: (config) => {
		// Solve compiling problem via vagrant
		config.watchOptions = {
			poll: 1000, // Check for changes every second
			aggregateTimeout: 300, // delay before rebuilding
		};
		return config;
	},
};

module.exports = nextConfig;
