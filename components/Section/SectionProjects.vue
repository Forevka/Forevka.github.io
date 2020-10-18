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
					name: 'Social Network', 
					description: 'Image board like 2ch/4ch', 
					codeLink: 'https://github.com/OneZeroZeroOneOne/SocialNetwork', 
					codeDemo: 'http://194.99.21.140/',
					skills: [
						'csharp', 'dotnet', 'postgres', 'vue',
					]
				},{
					name: 'Opposite forces', 
					description: 'Custom map for WarCraft III game', 
					codeLink: 'https://github.com/Forevka/OppositeForcesWC3Map', 
					codeDemo: null,
					skills: [
						'typescript', 'lua',
					]
				},{
					name: 'Aiogram plugins', 
					description: 'Plugin system for telegram bot framework', 
					codeLink: 'https://github.com/Forevka/AiogramPluginSystem', 
					codeDemo: null,
					skills: [
						'python',
					]
				},{
					name: 'IrinaBot WebUI', 
					description: 'Simple web ui to make game hosting more easier', 
					codeLink: 'https://newirinabot.github.io/games', 
					codeDemo: 'https://newirinabot.github.io/games',
					skills: [
						'typescript', 'vue', 'javascript', 'node',
					]
				},{
					name: 'Doom game', 
					description: 'Reimplementation of doom from 80s', 
					codeLink: 'https://github.com/Forevka/Doom', 
					codeDemo: null,
					skills: [
						'rust', 'cpp',
					]
				},{
					name: 'Game maker network framework', 
					description: 'Framework where server written on C# and linked to GM with C++', 
					codeLink: 'https://github.com/Forevka/GMNetworkFramework', 
					codeDemo: null,
					skills: [
						'csharp', 'cpp',
					]
				},{
					name: 'Image to mosaic', 
					description: 'Simple transfer image to mosaic from smaller images', 
					codeLink: 'https://github.com/Forevka/ScientWorkMosaic', 
					codeDemo: null,
					skills: [
						'python',
					]
				},{
					name: 'PyOrm', 
					description: 'Bad try to make myself orm for postgres in python', 
					codeLink: 'https://github.com/Forevka/PyOrm', 
					codeDemo: null,
					skills: [
						'python',
					]
				},{
					name: 'Graph algorithms', 
					description: 'Implementation of wide known algorithms for pathfinding on graph', 
					codeLink: 'https://github.com/Forevka/Graphs', 
					codeDemo: null,
					skills: [
						'python',
					]
				},{
					name: 'Minesweeper with autosolving', 
					description: 'Implementation of minesweeper game from 00s and algorithm for solving theyself', 
					codeLink: 'https://github.com/Forevka/MinesweeperNET', 
					codeDemo: null,
					skills: [
						'csharp', 'dotnet',
					]
				},{
					name: 'Snake game', 
					description: 'Snake with AI that use pathfinding based on graphs', 
					codeLink: 'https://github.com/Forevka/SnakeAI', 
					codeDemo: null,
					skills: [
						'python',
					]
				},{
					name: 'FileShareBot', 
					description: 'Telegram bot for file sharing', 
					codeLink: 'https://github.com/Forevka/FileShareBot', 
					codeDemo: null,
					skills: [
						'python', 'postgres',
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
