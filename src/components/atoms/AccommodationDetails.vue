<template>
  <div class="accommodation-details">
    <p class="details">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "AccommodationDetails",
  props: {
    content: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      value: this.content,
    };
  },
};
</script>

<style lang="scss" scoped>
.accommodation-details {
  display: flex;
  justify-content: center;

  .details {
    color: $gray_alt;
    font-size: rem(14);
    line-height: rem(18);
    text-align: center;
		font-weight: 400;
  }
}
</style>
