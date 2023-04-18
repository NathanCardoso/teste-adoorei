<template>
  <div class="help-action">
    <ParagraphContent content="Caso tenha alguma dúvida," />
    <router-link :to="link" class="help">visite nossa central de ajuda.</router-link>
  </div>
</template>

<script>
import ParagraphContent from "../atoms/ParagraphContent.vue";

export default {
  name: "HelpCenter",
	props: {
		link: {
			type: String,
			default: "/",
			required: true
		}
	},
	data() {
		return {
			link: this.link
		}
	},
  components: {
    ParagraphContent,
  },
};
</script>

<style lang="scss" scoped>
	.help-action {
		display: flex;
		flex-wrap: wrap;
		gap: 1ch;

		.help {
			text-decoration: underline;
			font-size: rem(18);
			color: $black
		}
	}
</style>
