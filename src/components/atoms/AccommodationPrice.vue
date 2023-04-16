<template>
  <div class="accommodation-price">
		<p class="price">{{price[0]}}<span class="price-number">{{price[1]}}</span>{{price[2]}}</p>
	</div>
</template>

<script>
export default {
  name: "AccommodationPrice",
	props: {
		price: {
			type: Array,
			default: [],
			required: true
		}
	},
	data() {
		return {
			price: this.price
		}
	},
};
</script>

<style lang="scss">
	.accommodation-price {
		display: flex;
		justify-content: center;

		.price {
			color: $pink;
			font-size: rem(20);

			.price-number {
				font-size: rem(36);
				font-weight: bold;
			}
		}
	}
</style>
