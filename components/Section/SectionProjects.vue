<template>
	<section class="section__container">
		<h2 class="section__title">Projects</h2>
		<article class="projects__container">
			<project-card 
				:name="'test'" 
				:description="'lorem'" 
				:codeLink="'qwe'" 
				:codeDemo="'qwww'">
					<SVGPython class="skill__image" />
			</project-card>
			<project-card :name="'test'" :description="'lorem'" :codeLink="'qwe'" />
		</article>
	</section>
</template>

<script>
import SVGPython from "@/assets/images/svg/python.svg";
import ProjectCard from "~/components/ProjectCard.vue";

export default {
	components: {
		ProjectCard,
		SVGPython,
	},
};
</script>

<style lang="scss" scoped>
.projects__container {
	@include grid-layout(1.25rem, auto-fill, 15rem, 1fr);
	margin-top: 1rem;
	padding: 0.25rem 0.5rem;
}

</style>
