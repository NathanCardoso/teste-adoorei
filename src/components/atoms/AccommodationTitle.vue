<template>
  <div class="accommodation-title">
    <h3 class="title">
      {{ titleValue }}
      <span v-if="countryServer" class="server-country">{{
        countryServer
      }}</span>
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
      titleValue: this.titleContent,
      countryServer: this.serverCountry,
    };
  },
};
</script>

<style lang="scss" scoped>
.accommodation-title {
  .title {
    color: $gray;
    font-size: rem(22);

    .server-country {
      text-decoration: underline;
    }
  }
}
</style>
