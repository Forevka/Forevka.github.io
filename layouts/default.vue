<template>
	<main class="default__main">
		<BaseHeader />
		<Nuxt />
		<footer class="footer">
			<p class="footer__text">
				Made by
				<TextLink
					link="https://github.com/Forevka"
					content="Forevka"
					:target="true"
				/>
			</p>
		</footer>
	</main>
</template>

<script>
import BaseHeader from "~/components/BaseHeader.vue";

export default {
	components: {
		BaseHeader,
	},
};
</script>

<style lang="scss">
.footer {
	padding: 0.25rem 0.5rem;
	width: 100%;

	.footer__text {
		color: $color-soft;
		text-align: right;
		padding-right: 5rem;
	}
}

body {
	background-color: $background-color;
}
</style>
