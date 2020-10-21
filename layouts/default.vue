<template>
	<main class="default__main">
		<BaseHeader />
		
		<div id="particle-container">
			<div class="particle" v-for="i in bgParticleCount" :key="i"/>
		</div>

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
	data: () => {
		return {
			bgParticleCount: 30,
		}
	}
};
</script>

<style lang="scss">
.particle-container {
	z-index: -2;
}
.particle {
	z-index: -2;
	position: absolute;
 	border-radius: 50%;
}

@for $i from 1 through 30 {
	@keyframes particle-animation-#{$i} {
		100% {
			transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		}
	}
	
	.particle:nth-child(#{$i}){
		animation: particle-animation-#{$i} 60s infinite;
		$size: random(5) + 5 + px;
		opacity: random(100)/100;
		height: $size;
		width: $size;
		animation-delay: -$i * .2s;
		transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		background: hsl(random(360), 70%, 50%);
	}
}

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
