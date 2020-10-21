<template>
	<article class="main__content">
		<SectionIntro />
		<SectionSkills />
		<SectionProjects />
		<SectionTimelime />
		<SectionContact />
	</article>
</template>

<script>
import SectionTimelime from '../components/Section/SectionTimeline.vue'

export default {
	components: {
		SectionTimelime,
	}
};
</script>

<style lang="scss">
.main__content {
	margin: 0 calc(10vw + 2.5%);
	min-height: 100vh;
}
</style>
