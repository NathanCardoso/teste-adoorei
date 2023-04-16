<template>
	<article class="accommodation-server">

		<AccommodationNumber content="Hospedagem 1"/>
		<AccommodationPrice price="Grátis"/>
		<AccommodationDetails content="Você não paga nada para usar"/>
		<AccommodationDetails content="sem taxa de setup"/>
		<ParagraphContent content="Ideal para quem está começando."/>
		<ButtonForm buttonName="Escolher esse plano"/>
	</article>	
</template>

<script>
import AccommodationNumber from "./atoms/AccommodationNumber.vue"
import AccommodationPrice from "./atoms/AccommodationPrice.vue"
import AccommodationDetails from "./atoms/AccommodationDetails.vue"
import ParagraphContent from "./atoms/ParagraphContent.vue"
import ButtonForm from "./atoms/ButtonForm.vue"

export default {
	name: "AccommodationServer",
	components: {
		AccommodationNumber,
		AccommodationPrice,
		AccommodationDetails,
		ParagraphContent,
		ButtonForm
	}
}
</script>

<style lang="scss" scoped>
	.accommodation-server {
		background: $white;
		padding: rem(30) rem(24);
		border-radius: rem(4);
		display: flex;
		flex-direction: column;
		gap: rem(20);
	}
</style>