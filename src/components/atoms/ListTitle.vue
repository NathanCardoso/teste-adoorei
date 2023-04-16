<template>
  <div class="list-title">
    <h3 class="title">
      {{ titleContent }} <span v-if="serverCountry" class="server-country">{{ serverCountry }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "ListTitle",
  props: {
    titleContent: {
      type: String,
      default: "",
      required: true,
    },
    serverCountry: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      titleContent: this.titleContent,
      serverCountry: this.serverCountry,
    };
  },
};
</script>

<style lang="scss" scoped>
	.list-title {
		.title {
			color: $gray;
			font-size: rem(18);
			font-weight: bold;

			.server-country {
				text-decoration: underline;
			}
		}
	}
</style>
