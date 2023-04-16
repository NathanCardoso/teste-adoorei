<template>
  <div class="dynamic-tag">
    <span :class="classTag">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "AccommodationTag",
  props: {
    text: {
      type: String,
      default: "",
      required: true,
    },
    classTag: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      text: this.text,
      classTag: this.classTag,
    };
  },
};
</script>

<style lang="scss">
.dynamic-tag {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  color: $white;
  text-transform: uppercase;

  .more-used {
		border-radius: rem(12);
		width: 150px;
		text-align: center;
		padding: rem(8);
		background: $green;
  }

  .chosen-product {
    background: $black;
  }
}
</style>
