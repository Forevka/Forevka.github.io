<template>
	<section class="intro">
		<section class="intro__image">
			<img
				class="intro__image"
				src="~/assets/images/avatar.jpeg"
				alt="Picture of _____"
			/>
		</section>

		<section class="intro__text">
			<h1 class="intro__title">Hey ~ I'm _____ 🤙</h1>
			<section class="intro__body">
				<p class="intro__text">
					Test
					<TextLink
						link="https://github.com/Forevka"
						content="LINK TEST"
						:target="true"
					/>, i love programming
				</p>
				<p class="intro__text">Something about me</p>
			</section>
		</section>
	</section>
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
.intro {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
}

.intro__image {
	@include border(3.5rem 3.5rem);
	height: auto;
	margin-left: 1rem;
	max-width: 100%;
	width: 25rem;
}

.intro__text {
	max-width: 100%;
	width: 30rem;

	.intro__title {
		color: $color;
		font-size: 2em;
		margin-bottom: 0;
	}

	.intro__body {
		margin-top: 0.25rem;
		max-width: 100%;

		.intro__text {
			color: $color-soft;
			margin-bottom: 2vh;
			margin-top: 2vh;
		}
	}
}
</style>
