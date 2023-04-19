<template>
  <div class="title">
    <h1 class="title-content">
      {{ contentTitle }}
      <span v-if="contentEmphasis" class="emphasis"
        ><br />
        {{ contentEmphasis }}</span
      >
    </h1>
  </div>
</template>

<script>
export default {
  name: "TitleContent",
  props: {
    contentValue: {
      type: String,
      default: "",
      required: true,
    },
    emphasis: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      contentTitle: this.contentValue,
      contentEmphasis: this.emphasis,
    };
  },
};
</script>

<style lang="scss">
.title {
  .title-content {
    // font-family: "Sora";
    font-size: rem($titleSize);
    font-weight: bold;
    color: $black;
    line-height: rem(36);

    .emphasis {
      color: $pink;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 479px) {
    .title-content {
      line-height: rem(30);
    }
  }
}
</style>
