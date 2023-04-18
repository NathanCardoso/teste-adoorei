<template>
  <button class="button-form" @click="submit">{{ nameButton }}</button>
</template>

<script>
export default {
  name: "ButtonForm",
  props: {
    buttonName: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      nameButton: this.buttonName,
    };
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
  },
};
</script>

<style lang="scss">
.button-form {
  border: none;
  border-radius: rem(4);
  background: $pink;
  color: $white;
  width: 100%;
  padding: rem(20) 0;
  text-align: center;
  text-transform: uppercase;
  font-size: rem(16);
  cursor: pointer;

  &.disabled {
    background: $gray_alt_1;
    color: $gray;
    cursor: not-allowed;
  }
}
</style>
