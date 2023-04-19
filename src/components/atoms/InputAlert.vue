<template>
  <span class="input-alert">{{ textContent }}</span>
</template>

<script>
export default {
  name: "InputAlert",
  props: {
    text: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      textContent: this.text,
    };
  },
};
</script>

<style lang="scss">
.input-alert {
  font-size: rem(14);
  color: $gray;
  display: inline-block;
  width: 100%;
}
</style>
