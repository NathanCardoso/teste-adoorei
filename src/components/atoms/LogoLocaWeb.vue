<template>
	<div class="logo">
		<img class="logo-image" src="../../assets/image/locaweb.svg" alt="Logo - LocaWeb">
	</div>
</template>

<script>
export default {
	name: "LogoLocaWeb",
}
</script>

<style lang="scss" scoped>
	.logo {
		width: 200px;

		.logo-image {
			display: block;
			max-width: 100%;
			object-fit: contain;
		}
	}	
</style>