<template>
    <component :class="`skill__image ${size}`" :is="svg[name]"/>
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
import SVGlua from "@/assets/images/svg/lua.svg";
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
    props: {
        size: String,
        name: String,
    },
    components: {
		SVGlua,
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
    data: () => {
        return {
            svg: {
                'rust': SVGrust, 
                'python': SVGPython, 
                'csharp': SVGcsharp, 
                'cpp': SVGcpp, 
                'typescript': SVGtypescript, 
                'lua': SVGlua, 
                'javascript': SVGJavascript, 
                'sass': SVGSass, 
                'html': SVGHTML, 
                'mysql': SVGmysql, 
                'mssql': SVGmssql, 
                'postgres': SVGpostgres, 
                'nuxt': SVGNuxt, 
                'flask': SVGFlask, 
                'quasar': SVGQuasar, 
                'tailwind': SVGTailwind, 
                'bootstrap': SVGBootstrap, 
                'dotnet': SVGdotnet,
                'vue': SVGVue,
                'git':SVGGit, 
                'npm': SVGNPM, 
                'node': SVGNode,
                'travis': SVGTravis, 
                'eslint': SVGEslint, 
                'heroku': SVGHeroku,
                'aws': SVGaws, 
                'docker': SVGdocker,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.skill__image {
	@include svg-hover($transition, $color);
	fill: $color-skill;
	height: auto;
	
	&.normal {
		width: 35px;
	}

	&.small {
		width: 25px;
	}
}
</style>
