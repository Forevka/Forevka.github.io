<template>
	<section class="section__container">
		<h2 class="section__title contact__title">Reach Out!</h2>
		<section class="contact__links">
			<a href="https://github.com/Forevka" class="social__link">
				<SVGGithub class="social__image" />
			</a>
			<a href="+380666123545" class="social__link">
				<SVGWhatsapp class="social__image" />
			</a>
			<a href="mailto:zebestforevka@gmail.com" class="social__link">
				<SVGMail class="social__image" />
			</a>
		</section>
	</section>
</template>

<script>
import SVGGithub from "@/assets/images/svg/github.svg";
import SVGWhatsapp from "@/assets/images/svg/whatsapp.svg";
import SVGMail from "@/assets/images/svg/email.svg";

export default {
	components: {
		SVGGithub,
		SVGWhatsapp,
		SVGMail,
	},
};
</script>

<style lang="scss" scoped>
.contact__title {
	text-align: center;
}

.contact__links {
	@include grid-layout(1rem, 3, 50px, 1fr);
	margin-top: 1.5rem;
	place-items: center;

	.social__image {
		height: auto;
		transition: $transition;
		width: 60px;

		&:hover {
			transform: scale(1.1);
		}
	}
}
</style>
