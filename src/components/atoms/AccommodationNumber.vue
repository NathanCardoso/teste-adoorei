<template>
  <div class="accommodation-number">
    <h2 class="accommodation-title">{{ content }}</h2>
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
      content: this.content,
    };
  },
};
</script>

<style lang="scss" scoped>
.accommodation-number {
  .accommodation-title {
    font-size: rem(28);
    color: $gray;
    text-align: center;
		font-weight: bold;
  }
}
</style>
