<template>
	<section class="section__container">
		<h2 class="section__title">Skills</h2>

		<section class="skills__container">
			<section class="skill__section">
				<h3 class="skill__title">Languages</h3>
				<section class="skills__list">
					<Icon v-for="(s, i)  in skills.languages" size="normal" :name="s" :key="i"/>
				</section>
			</section>

			<section class="skill__section">
				<h3 class="skill__title">Frameworks</h3>
				<section class="skills__list">
					<Icon v-for="(s, i)  in skills.frameworks" size="normal" :name="s" :key="i"/>
				</section>
			</section>

			<section class="skill__section">
				<h3 class="skill__title">Tools</h3>
				<section class="skills__list">
					<Icon v-for="(s, i)  in skills.tools" size="normal" :name="s" :key="i"/>
				</section>
			</section>
		</section>
	</section>
</template>

<script>
import Icon from '../Icon.vue';

export default {
	components: {
		Icon,
		[Glide.name]: Glide,
      	[GlideSlide.name]: GlideSlide,
	},
	data: () => {
		return {
			skills: {
				languages: [
					'rust', 'python', 
					'csharp', 'cpp', 'typescript', 
					'lua', 'javascript', 'sass', 
					'html', 'mysql', 'mssql', 
					'postgres', 
				],
				frameworks: [
					'nuxt', 'flask', 'quasar', 
					'tailwind', 'bootstrap', 'dotnet',
					'vue',
				],
				tools: [
					'git', 'npm', 'node',
					'travis', 'eslint', 'heroku',
					'aws', 'docker',
				]
			}
		}
	}
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

	}
}
</style>
