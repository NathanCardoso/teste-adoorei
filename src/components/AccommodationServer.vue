<template>
	<article class="accommodation-server">
		<AccommodationNumber content="Hospedagem 1"/>
		<AccommodationPrice price="Grátis"/>
		<AccommodationDetails content="Você não paga nada para usar sem taxa de setup"/>
	</article>	
</template>

<script>
import AccommodationNumber from "./atoms/AccommodationNumber.vue"
import AccommodationPrice from "./atoms/AccommodationPrice.vue"
import AccommodationDetails from "./atoms/AccommodationDetails.vue"

export default {
	name: "AccommodationServer",
	components: {
		AccommodationNumber,
		AccommodationPrice,
		AccommodationDetails
	}
}
</script>

<style lang="scss" scoped>
	.accommodation-server {
		background: $white;
		padding: rem(30) rem(24);
	}
</style>