/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	experimental: {
		turbo: {
			rules: {
				'.svg': {
					loaders: ['@svgr/webpack'],
					as: '.js',
				},
			},
		},
	},
};

export default nextConfig;
