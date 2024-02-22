

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
						value: "www.revisionboost.com",
					},
				],
				permanent: true,
				destination: "https://revisionboost.com",
			},
		];
	},
};

module.exports = nextConfig;