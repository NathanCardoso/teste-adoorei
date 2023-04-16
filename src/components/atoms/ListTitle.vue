<template>
  <div class="accommodation-title">
    <h3 class="title">
      {{ titleContent }} <span v-if="serverCountry" class="server-country">{{ serverCountry }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "AccommodationTitle",
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
	.accommodation-title {
		.title {
			color: $black;
			font-size: rem(20);

			.server-country {
				text-decoration: underline;
			}
		}
	}
</style>
