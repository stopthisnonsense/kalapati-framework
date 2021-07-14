<template>
	<div class="gameboard">
		<div class="characters">
			<div class="character">
				<img class="character__image" src="../assets/beef-boy.png" alt="" />
				<h2 class="character__name">Beef Boy</h2>
			</div>
			<div class="character">
				<img class="character__image" src="../assets/miss-terious.png" alt="" />
				<h2 class="character__name">miss Terious</h2>
			</div>
			<div class="character">
				<img class="character__image" src="../assets/steppy.png" alt="" />
				<h2 class="character__name">Steppy</h2>
			</div>
			<div class="character">
				<img
					class="character__image"
					src="../assets/craigoretta.png"
					alt="Craigoretta"
				/>
				<h2 class="character__name">Craigoretta</h2>
			</div>
		</div>
		<div class="map">
			<img class="map__background" src="../assets/map.png" alt="" />
		</div>
		<div class="menu">
			<button class="button">INV</button>
			<button class="button">MAG</button>
			<button class="button">SKL</button>
		</div>
	</div>
</template>
<style scoped lang="scss">
	@import '../scss/mixins';
	.gameboard {
		display: grid;
		grid-template-areas:
			'characters game game game'
			'characters game game game'
			'characters game game game';
		// max-height: 100vh;
		margin: 0 auto;
		max-width: 1400px;
	}

	.characters {
		display: flex;
		flex-direction: column;
		grid-area: characters;
		background-color: var(--gray-color);
	}

	.character {
		position: relative;
		display: flex;
		flex-direction: column;
		// align-items: stretch;
		text-align: center;
		&__image {
		}
		&__name {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			color: var(--white-color);
		}
	}

	.map {
		grid-area: game;
		&__background {
			width: 100%;
			height: 100%;
		}
	}

	.menu {
		grid-area: game;
		display: flex;
		align-self: flex-end;
		align-items: center;
		// background-color: var(--gray-color);
		gap: 1rem;
		padding: 1rem;
	}

	.button {
		font-family: inherit;
		background-color: var(--black-color);
		color: var(--white-color);
		border: 0 transparent solid;
		font-size: 1rem;
	}
</style>

<script>
	export default {
		name: 'GameBoard',
		props: {},
	};
</script>
