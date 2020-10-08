<template>
	<section class="section__container">
		<h2 class="section__title">Skills</h2>

		<section class="skills__container">
			<section class="skill__section">
				<h3 class="skill__title">Languages</h3>
				<section class="skills__list">
					<SVGPython class="skill__image" />
					<SVGJavascript class="skill__image" />
					<SVGHTML class="skill__image" />
					<SVGCSS class="skill__image" />
					<SVGSass class="skill__image" />
					<SVGcpp class="skill__image" />
					<SVGcsharp class="skill__image" />
					<SVGmysql class="skill__image" />
					<SVGmssql class="skill__image" />
					<SVGpostgres class="skill__image" />
					<SVGrust class="skill__image" />
					<SVGtypescript class="skill__image" />
				</section>
			</section>

			<section class="skill__section">
				<h3 class="skill__title">Frameworks</h3>
				<section class="skills__list">
					<SVGVue class="skill__image" />
					<SVGNuxt class="skill__image" />
					<SVGQuasar class="skill__image" />
					<SVGFlask class="skill__image" />
					<SVGTailwind class="skill__image" />
					<SVGBootstrap class="skill__image" />
					<SVGdotnet class="skill__image" />
				</section>
			</section>

			<section class="skill__section">
				<h3 class="skill__title">Tools</h3>
				<section class="skills__list">
					<SVGGit class="skill__image" />
					<SVGNode class="skill__image" />
					<SVGNPM class="skill__image" />
					<SVGTravis class="skill__image" />
					<SVGEslint class="skill__image" />
					<SVGHeroku class="skill__image" />
					<SVGaws class="skill__image" />
					<SVGdocker class="skill__image" />
				</section>
			</section>
		</section>
	</section>
</template>

<script>
import SVGPython from "@/assets/images/svg/python.svg";
import SVGNuxt from "@/assets/images/svg/nuxt-dot-js.svg";
import SVGSass from "@/assets/images/svg/sass.svg";
import SVGFlask from "@/assets/images/svg/flask.svg";
import SVGJavascript from "@/assets/images/svg/javascript.svg";
import SVGHTML from "@/assets/images/svg/html5.svg";
import SVGCSS from "@/assets/images/svg/css3.svg";
import SVGmysql from "@/assets/images/svg/mysql.svg";
import SVGVue from "@/assets/images/svg/vue-dot-js.svg";
import SVGQuasar from "@/assets/images/svg/quasar.svg";
import SVGTailwind from "@/assets/images/svg/tailwindcss.svg";
import SVGBootstrap from "@/assets/images/svg/bootstrap.svg";
import SVGGit from "@/assets/images/svg/git.svg";
import SVGNode from "@/assets/images/svg/node-dot-js.svg";
import SVGNPM from "@/assets/images/svg/npm.svg";
import SVGTravis from "@/assets/images/svg/travisci.svg";
import SVGEslint from "@/assets/images/svg/eslint.svg";
import SVGHeroku from "@/assets/images/svg/heroku.svg";

import SVGaws from "@/assets/images/svg/aws.svg";
import SVGcpp from "@/assets/images/svg/cpp.svg";
import SVGcsharp from "@/assets/images/svg/csharp.svg";
import SVGdocker from "@/assets/images/svg/docker.svg";
import SVGdotnet from "@/assets/images/svg/dotnet.svg";
import SVGmssql from "@/assets/images/svg/mssql.svg";
import SVGpostgres from "@/assets/images/svg/postgres.svg";
import SVGrust from "@/assets/images/svg/rust.svg";
import SVGtypescript from "@/assets/images/svg/typescript.svg";

export default {
	components: {
		SVGtypescript,
		SVGrust,
		SVGmssql,
		SVGpostgres,
		SVGdotnet,
		SVGdocker,
		SVGcsharp,
		SVGcpp,
		SVGaws,
		SVGPython,
		SVGNuxt,
		SVGSass,
		SVGFlask,
		SVGJavascript,
		SVGHTML,
		SVGCSS,
		SVGmysql,
		SVGVue,
		SVGQuasar,
		SVGTailwind,
		SVGBootstrap,
		SVGGit,
		SVGNode,
		SVGNPM,
		SVGTravis,
		SVGEslint,
		SVGHeroku,
	},
};
</script>

<style lang="scss">
.skills__container {
	@include grid-layout(1.75rem, auto-fit, 300px, 1fr);
}

.skill__section {
	margin-bottom: 1.5rem;

	.skill__title {
		color: $color;
		font-style: italic;
		margin-bottom: 0.45rem;
		margin-top: 1rem;
	}

	.skills__list {
		@include grid-layout(0.75rem, auto-fill, 40px, 1fr);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		place-items: center;

		.skill__image {
			@include svg-hover($transition, $color);
			fill: $color-skill;
			height: auto;
			width: 35px;
		}
	}
}
</style>
