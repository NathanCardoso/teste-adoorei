<template>
  <div class="title">
    <h1 class="title-content">{{ content }}</h1>
  </div>
</template>

<script>
export default {
  name: "TitleContent",
  props: {
    content: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      content: this.content,
    };
  },
};
</script>

<style lang="scss">
	.title {
		.title-content {
			font-family: "Ubuntu" ,arial,sans-serif;
			font-size: rem($titleSize);
			font-weight: bold;
			color: $black;
		}
	}
</style>
