<template>
  <div class="accommodation-paragraph">
    <p class="paragraph-content">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "AccommodationParagraph",
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
.accommodation-paragraph {
  .paragraph-content {
    font-size: rem($paragraphSize);
    line-height: rem(22);
    color: $gray_alt;
  }
}
</style>
