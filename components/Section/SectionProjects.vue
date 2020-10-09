<template>
	<section class="section__container">
		<h2 class="section__title">Projects</h2>
		<article class="projects__container">
			<project-card v-for="p in projects" :key="p.name"
				:name="p.name" 
				:description="p.description" 
				:codeLink="p.codeLink" 
				:codeDemo="p.codeDemo">
					<Icon v-for="(s, i)  in p.skills" size="small" :name="s" :key="i"/>
			</project-card>
		</article>
	</section>
</template>

<script>
import Icon from '../Icon.vue';
import ProjectCard from "~/components/ProjectCard.vue";

export default {
	data: () => {
		return {
			projects: [
				{
					name: 'test', 
					description: 'qweqwe', 
					codeLink: 'qqq', 
					codeDemo: 'qqqq',
					skills: [
						'python'
					]
				},{
					name: 'test2', 
					description: 'qweqwe2', 
					codeLink: 'qqq2', 
					codeDemo: 'qqqq2',
					skills: [
						'rust'
					]
				}
			]
		}
	},
	components: {
		ProjectCard,
		Icon,
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
