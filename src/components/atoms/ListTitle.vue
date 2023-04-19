<template>
  <div class="list-title">
    <h3 class="title">
      {{ contentTitle }}
      <span v-if="countryServer" class="server-country">{{
        countryServer
      }}</span>
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
      contentTitle: this.titleContent,
      countryServer: this.serverCountry,
    };
  },
};
</script>

<style lang="scss" scoped>
.list-title {
  .title {
    color: $gray_alt;
    font-size: rem(18);
    font-weight: bold;

    .server-country {
      text-decoration: underline;
    }
  }
}
</style>
