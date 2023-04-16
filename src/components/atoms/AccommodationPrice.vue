<template>
  <div class="accommodation-price">
		<p class="price">{{price}}</p>
	</div>
</template>

<script>
export default {
  name: "AccommodationPrice",
	props: {
		price: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			price: this.price
		}
	}
};
</script>

<style lang="scss">
	.accommodation-price {
		display: flex;
		justify-content: center;

		.price {
			color: $pink;
			font-size: rem(24);
		}
	}
</style>
