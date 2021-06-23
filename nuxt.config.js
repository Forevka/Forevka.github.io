import getRoutes from './utils/getRoutes';
import transform from './utils/sectionize';

export default {
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
		{ src: '~/plugins/uikit', ssr: false },
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
		'@nuxtjs/tailwindcss'
		// Doc: https://github.com/nuxt-community/eslint-module
		//"@nuxtjs/eslint-module",
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		"@nuxtjs/style-resources",
		"nuxt-svg-loader",
		'@nuxt/content',
	],
	hooks: {
		'content:file:beforeInsert': (document) => {
			if (document.extension === '.md') {
				const { text } = require('reading-time')(document.text)

				document.readingTime = text
			}
		}
	},
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
		},
		extend(config) {
			config.module.rules.push({
				test: /\.md$/,
				loader: 'raw-loader'
			})
		}
	},
	render: {
		resourceHints: false
	},
	content: {
		markdown: {
			prism: {
				theme: false,
			},
			remarkPlugins: ['remark-sectionize']
		}
	},
	generate: {
		async ready() {
			const { $content } = require('@nuxt/content')
			const files = await $content().only(['slug']).fetch()
			console.log(files)
		}
	},
};
