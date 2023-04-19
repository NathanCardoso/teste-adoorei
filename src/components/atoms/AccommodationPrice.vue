<template>
  <div class="accommodation-price">
    <p class="price">
      {{ priceValue[0] }}<span class="price-number">{{ priceValue[1] }}</span
      >{{ priceValue[2] }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AccommodationPrice",
  props: {
    price: {
      type: Array,
      default: [],
      required: true,
    },
  },
  data() {
    return {
      priceValue: this.price,
    };
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
		line-height: rem(24);

    .price-number {
      font-size: rem(34);
			line-height: rem(42);
      font-weight: bold;
    }
  }
}
</style>
