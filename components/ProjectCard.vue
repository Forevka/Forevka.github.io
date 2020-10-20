<template>
	<section class="project__section">
		<section class="project__intro">
			<h3 class="project__title">
				{{ name }}
			</h3>
			<section class="project__skills">
                <slot/>
			</section>
		</section>
		<p class="project__text">
			{{ description }}
		</p>
		<section class="project__links">
			<a v-if="codeLink !== undefined && codeLink" :href="codeLink" target="_blank" class="project__link text__link"
				>Code</a
			>
			<a v-if="codeDemo !== undefined && codeDemo" :href="codeDemo" target="_blank" class="project__link text__link"
				>Demo</a
			>
		</section>
	</section>
</template>

<script>
export default {
	props: {
		name: String,
		description: String,
		codeLink: String,
		codeDemo: String,
	},
	components: {},
};
</script>

<style lang="scss" scoped>
.project__section {
	@include border(0 16px, $color-soft, 2px);
	height: 13rem;
	padding: 0.85rem 1rem;
	display: inline-grid;
	grid-template-rows: auto 1fr auto;
	gap: 1rem;
	grid-gap: 1rem;
	transition: all 0.15s ease-in;
}


.project__text {
	font-size: 0.85em;
	color: $color-soft;
}


.project__intro {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	.project__title {
		color: $color;
		margin: 0;
	}

	.project__skills {
		max-width: 50%;
		display: inline-flex;

		.skill__image {
			height: auto;
			width: 25px;
		}
	}
}

.project__links {
	width: 75%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-evenly;
}

.project__section:hover {
	border-color: $color-border;
}

.skill__image {
	@include svg-hover($transition, $color);
}
</style>