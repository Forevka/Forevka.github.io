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
				src="https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/39318277_1768083899977061_3214925407811796992_n.jpg?_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Qs8Z1P9utTQAX82RXJK&_nc_tp=24&oh=ab130610f35d5d6ce9889040c9b16021&oe=5FB71514"
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
