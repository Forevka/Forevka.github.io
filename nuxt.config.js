export default {
	/*
	 ** Nuxt rendering mode
	 ** See https://nuxtjs.org/api/configuration-mode
	 */
	mode: "universal",
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: "static",
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		title: "Forevka's Portfolios",
		meta: [{
				charset: "utf-8"
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || "",
			},
		],
		link: [{
			rel: "icon",
			type: "image/x-icon",
			href: "/favicon.ico"
		}],
	},
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [
		'@/plugins/vue-glide.js'
	],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		//"@nuxtjs/eslint-module",
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: ["@nuxtjs/style-resources", "nuxt-svg-loader"],
	styleResources: {
		scss: ["assets/scss/_mixins.scss", "assets/scss/base.scss"],
	},
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {
		loaders: {
			file: {
				esModule: false
			}
		}
	},
	render: {
		resourceHints: false
	}
};