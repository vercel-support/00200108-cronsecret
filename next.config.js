

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: false,

	async redirects() {
		return [
			{
				source: "/",
				has: [
					{
						type: "host",
						value: "www.cronsecret.vercel.app",
					},
				],
				permanent: true,
				destination: "https://cronsecret.vercel.app",
			},
		];
	},
};

module.exports = nextConfig;