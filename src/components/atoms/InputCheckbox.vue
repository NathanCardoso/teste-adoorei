<template>
  <label class="custom-checkbox">
    <input type="checkbox" v-model="check"/>
    <span class="checkmark"></span>
    <span class="label-text"></span>
  </label>
</template>

<script>

export default {
  name: "InputCheckbox",
	data() {
		return {
			check: false
		}
	},
	watch: {
    check() {
      const checkValue = this.check
      this.$emit("checkValue", checkValue);
    },
	}
};
</script>

<style lang="scss">
.custom-checkbox {
  position: relative;
  padding-left: rem(32);
  margin-bottom: rem(12);
  cursor: pointer;
  user-select: none;
  border-radius: rem(20);

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 15px;
    border-radius: rem(4);
    border: rem(1) solid $pink;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  input[type="checkbox"]:checked ~ .checkmark {
    background-color: #fff;
    border: rem(1) solid $pink;

    &:after {
      display: block;
    }
  }

  .checkmark:after {
    left: rem(4);
    top: rem(2);
    width: 4px;
    height: 8px;
    border: solid $pink;
    border-width: 0 rem(3) rem(3) 0;
    transform: rotate(45deg);
  }
}
</style>
