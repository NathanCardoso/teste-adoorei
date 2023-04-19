<template>
  <div class="button-plan">
    <button class="button" @click="submit">Trocar plano</button>
  </div>
</template>

<script>
export default {
  name: "ButtonPlan",
  methods: {
    submit() {
      this.$emit("submit");
    },
  },
};
</script>

<style lang="scss">
.button-plan {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  padding: 0 rem(24);
  background: linear-gradient(to bottom, transparent, #fff);
  height: 330px;

  .button {
    background: $white;
    border: rem(2) solid $gray;
    width: 100%;
    border-radius: rem(4);
    font-size: rem(20);
    height: 58px;
    margin-top: 80%;
    cursor: pointer;
  }
}
</style>
