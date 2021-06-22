<template>
	<header class="header">
		<nav class="nav">
			<TextLink
				link="https://github.com/Forevka"
				content="GitHub"
				:target="true"
				class="nav__item"
			/>
			<TextLink link="/articles" content="Blog" class="nav__item"/>
			<TextLink link="/" content="Resume" class="nav__item" />
		</nav>
	</header>
</template>

<script>
import TextLink from "~/components/TextLink.vue";

export default {
	components: {
		TextLink,
	},
};
</script>

<style lang="scss" scoped>
.header {
	margin-bottom: 1rem;
	width: 100%;

	.nav {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding: 0.5rem 0.25rem;
		width: inherit;

		.nav__item {
			padding: 0.1rem 0.25rem;
			text-decoration: none;
			font-size: 1.05em;
		}
	}
}
</style>
