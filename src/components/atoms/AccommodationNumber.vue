<template>
  <div class="accommodation-number">
    <h2 class="accommodation-title">{{ value }}</h2>
  </div>
</template>

<script>
export default {
  name: "AccommodationNumber",
  props: {
    content: {
      type: String,
      default: "",
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
.accommodation-number {
  .accommodation-title {
    font-size: rem(26);
		line-height: rem(32);
    color: $gray_alt;
    text-align: center;
    font-weight: bold;
  }
}
</style>
