<template>
  <div class="title">
    <h1 class="title-content">{{ content }} <span v-if="emphasis" class="emphasis"><br> {{emphasis}}</span></h1>
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
		}
  },
  data() {
    return {
      content: this.contentValue,
			emphasis: this.emphasis
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
			text-align: center;
			line-height: rem(36);

			.emphasis {
				color: $pink;
				text-decoration: underline;
			}
		}
	}
</style>
