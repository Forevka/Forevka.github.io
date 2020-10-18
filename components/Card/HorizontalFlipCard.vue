<template>
<div class="card">
	<div class="card-back">
		<div class="line-numbers">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
			<div>7</div>
			<div>8</div>
			<div>9</div>
		</div>
		<code>
			<span class="variable">let </span>
			<span class="function">aboutMe</span>
			<span class="operator"> = </span>
			<span>{</span>
			<div class="indent"> 
				<span class="property">name</span><span class="operator">: </span>
				<span class="string">'Bohdan Lushchyk'</span><span>,</span>
			</div>
			<div class="indent"> 
				<span class="property">title</span><span class="operator">: </span>
				<span class="string">'Fullstack Developer'</span><span>,</span>
			</div>
			<div class="indent"> 
				<span class="property">contact</span><span class="operator">: </span>
				<span>{</span>
				<div class="indent"> 
					<span class="property">email</span><span class="operator">: </span>
					<span class="string"><a href="mailto:zebestforevka@gmail.com" class="nostyle">'zebestforevka@gmail.com'</a></span><span>,</span>	
				</div>
				<div class="indent">
					<span class="property">website</span><span class="operator">: </span>
					<span class="string">'forevka.github.io'</span><span>,</span>		
				</div>
				<span>}</span><span>,</span>
			</div>
			<div class="indent"> 
				<span class="property">description</span><span class="operator">: </span>
				<span class="string">'Creating and learning'</span>
				<div class="indent"><div class="indent"><div class="indent"><span> + </span><span class="string">'something new everyday ✨'</span></div></div></div>
			</div>
		<span>}</span>
		</code>
	</div>
	<div class="card-front">
		<div class="line-numbers">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
			<div>7</div>
			<div>8</div>
			<div>9</div>
		</div>
		<code>
            <span class="variable">this</span><span>.</span><span class="method">addEventListener</span><span>(</span><span class="string">'mouseover'</span><span>, </span>
			<span class="function">() => </span>
			<span>{</span>
			<div class="indent">
				<span class="variable">this</span><span>.</span><span class="property">flipCard</span>
				<span> = </span>
				<span class="boolean">true</span><span>;</span>
			</div>
			<span>});</span>
		</code>
	</div>
</div>
</template>

<style lang="scss" scoped>
$blue: #29b6f6;
$green: #9ccc65;
$purple: #BA68C8;
$yellow: #FDD835;
$orange: #f57c00;
$red: #ef5350;
$cyan: #4dd0e1;
$pink: #E91E63;
$black-dark: #101010;
$black-light: #2c3e50;
$bg1: #E91E63;
$bg2: #9C27B0;
$white: rgb(233, 199, 199);

$monospace: Consolas, "Lucida Console",  monospace;

*,
*::before,
*::after {
	font-family: "Lucida Console", Monaco, monospace;
	font-size: 14px;
	@media (max-width: 500px) { 
		width: 20rem;
	    font-size: 12px;
	}
}

@media (max-width: 500px) { 
    code {
        position: relative;
        left: 5px; //because i don't display numbers
    }
}

.card {
	position: relative;
    width: 27rem;
	height: 11.5rem;
	@media (max-width: 500px) { 
		width: 20rem;
	    height: 9rem;
	}
	perspective: 150rem;
	
	.nostyle {
		color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
	}
	
	&-front,
	&-back {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		border-radius: 5px;
		box-shadow: 0 1.5rem 4rem rgba(black, 0.4);
		transition: 0.9s cubic-bezier(.25,.8,.25,1);
		//transform-origin: left center;
		backface-visibility: hidden;
		overflow: hidden;
		&:before,
		&:after {
			position: absolute;
		}
		/*&:before {
			top: -40px;
			right: -40px;
			content: '';
			width: 80px;
			height: 80px;
			background-color: rgba(white,0.08);
			transform: rotate(45deg);
			z-index: 1;
		}
		&:after {
			content: '+';
			top: 0;
			right: 10px;
			font-size: 24px;
			transform: rotate(45deg);
			z-index: 2;
		}*/
	}
	&-front {
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg, $black-dark, $black-light);
		&:after {
			color: darken($black-light,6%);
		}
	}
	&-back {
		background: linear-gradient(-45deg, $black-dark, $black-light);
		transform: rotateX(180deg);
		&:after {
			color: darken($black-light,15%);
		}
	}
	
	
	&:hover &-front {
		transform: rotateX(-180deg);
	}
	&:hover &-back {
		transform: rotateX(0deg);
		//z-index: 2 !important;
	}
	.line-numbers {
		@extend code;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		//width: 20px;
		height: 100%;
		margin: 0;
		padding: 0 10px;
		background-color: rgba(white,0.03);
		font-size: 13px;
        @media (max-width: 500px) { 
            display: none;
        }
		//line-height: 2.15;
		> div {
			padding: 2.5px 0; 
			opacity: 0.15;
		}
	}
	code {
		color: $white;
	}
	.indent {
		padding-left: 30px;
	}
	.operator {
		color: $cyan;
	}
	.string {
		color: $green;
	}
	.variable {
		color: $purple;
	}
	.property {
		color: $red;
	}
	.method {
		color: $blue;
	}
	.function {
		color: $yellow;
	}
	.boolean {
		color: $cyan;
	}
}


</style>