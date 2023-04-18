<template>
  <div class="paragraph">
    <p class="paragraph-content">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "ParagraphContent",
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
.paragraph {
  .paragraph-content {
    font-size: rem($paragraphSize);
    line-height: rem(22);
    color: $black;
  }
}
</style>
