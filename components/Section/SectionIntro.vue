<template>
	<section class="intro">
		<section class="intro__card">
			<horizontal-flip-card/>
		</section>

		<section class="intro__image">
			<!--<h1 class="intro__title">Hey ~ I'm _____ 🤙</h1>
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
			</section>-->
			<img
				class="intro__image"
				src="https://i.ibb.co/XJpdwRY/39318277-1768083899977061-3214925407811796992-n.jpg"
				alt="Picture of me"
			/>
		</section>
	</section>
</template>

<script>
import HorizontalFlipCard from '../Card/HorizontalFlipCard.vue';
import TextLink from "~/components/TextLink.vue";

export default {
	components: {
		TextLink,
		HorizontalFlipCard,
	},
};
</script>

<style lang="scss" scoped>
.intro {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
}

.intro__image {
	margin-top: 0.5rem;
	@include border(3.5rem 3.5rem);
	height: auto;
	max-width: 100%;
	width: 20rem;
}

.intro__card {
	.intro__title {
		color: $color;
		font-size: 2em;
		margin-bottom: 0;
	}

	.intro__body {
		margin-top: 0.25rem;
		max-width: 100%;

		.intro__card {
			color: $color-soft;
			margin-bottom: 2vh;
			margin-top: 2vh;
		}
	}
}
</style>
