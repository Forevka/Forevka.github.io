<template>
	<section id="timeline-content" class="section__container">
		<h2 class="section__title">Life Line</h2>

		<ul class="timeline">
			<li class="event" v-for="(event, index) in events" :key="index">
				<div class="date">
					<span>{{ event.date }}</span>
				</div>
				<div class="description">
					<h3>{{ event.title }}</h3>
					<p>{{ event.description }}</p>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	data: () => {
		return {
			events: [
				{
					date: "11 April 2000",
					title: "Hello World!",
					description: "My birthday",
				},
				{
					date: "2013 - 2014",
					title: "First try",
					description: "My first programms written on Pascal in school",
				},
				{
					date: "2015",
					title: "I realized that i wan't to be a game developer!",
					description:
						"Creating my first games on Game Maker script language. You can see it on forevka.itch.io",
				},
				{
					date: "2017 - 2021",
					title: "I am a student and freelancer",
					description:
						'I started studying at "Computer Knowledge" faculty of Institute of Enterprise and Advanced Technologies that part of Lviv Polytechnic National University. Also I was started freelancing using python and C#',
				},
				{
					date: "9 April 2019 till now",
					title: "First job",
					description:
						"Became part of a wonderful team from the DevCom company as a backend developer",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.section__title {
	text-align: center;
	font-size: 2.4em;
	letter-spacing: 1.5px;
}

p {
	font-weight: 300;
}

strong {
	font-weight: 600;
}

#timeline-content {
	margin-top: 50px;
	text-align: center;
}
/* Timeline */
.timeline {
	border-left: 4px solid #d65d0e;
	border-bottom-right-radius: 4px;
	border-top-right-radius: 4px;
	background: rgba(255, 255, 255, 0.03);
	color: rgba(255, 255, 255, 0.8);
	font-family: "Chivo", sans-serif;
	margin: 50px auto;
	letter-spacing: 0.5px;
	position: relative;
	line-height: 1.4em;
	font-size: 1.03em;
	padding: 2rem;
	padding-left: 50px;
	list-style: none;
	text-align: left;
	font-weight: 100;
	max-width: 60%;
	@media (max-width: 1024px) {
		max-width: 80%;
	}

	@media (max-width: 768px) {
		max-width: 95%;
	}

	h1 {
		font-family: "Saira", sans-serif;
		letter-spacing: 1.5px;
		font-weight: 100;
		font-size: 1.4em;
	}

	h2,
	h3 {
		font-family: "Saira", sans-serif;
		letter-spacing: 1.5px;
		font-weight: 400;
		font-size: 1.4em;
	}

	.event {
		display: flex;
		align-items: left;
		justify-content: left;
		flex-direction: column;
		border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
		padding-bottom: 25px;
		margin-bottom: 2rem;
		position: relative;
	}

	.event:last-of-type {
		padding-bottom: 0;
		margin-bottom: 0;
		border: none;
	}

	.event:before,
	.event:after {
		position: absolute;
		display: block;
		top: 0;
	}

	.event:after {
		box-shadow: 0 0 0 4px #d65d0e;
		left: -57.85px;
		background: #313534;
		border-radius: 50%;
		height: 11px;
		width: 11px;
		content: "";
		top: 5px;
	}
}
</style>
