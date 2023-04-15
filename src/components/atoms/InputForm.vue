<template>
  <div class="input-form">
    <label :for="inputId" class="label">{{ labelContent }}</label>
    <input
      :type="inputType"
      :id="inputId"
      :name="inputName"
      :placeholder="inputPlaceholder"
			class="input"
    />
  </div>
</template>

<script>
export default {
  name: "InputForm",
  props: {
    labelContent: {
      type: String,
      default: "",
      required: true,
    },
    inputId: {
      type: String,
      default: "",
      required: true,
    },
    inputType: {
      type: String,
      default: "",
      required: true,
    },
    inputName: {
      type: String,
      default: "",
      required: true,
    },
    inputPlaceholder: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      inputId: this.inputId,
			inputName: this.inputName,
			inputType: this.inputType,
			inputPlaceholder: this.inputPlaceholder,
			labelContent: this.labelContent
    };
  },
};
</script>

<style lang="scss" scoped>
.input-form {
	display: flex;
	flex-direction: column;

	.label {
		color: $gray;
	}

	.input {
		padding: rem(15) rem(10);
		border-radius: rem(4);
		border: rem(1) solid $gray_alt;

		&::placeholder {
			color: $black;
			font-size: rem(16); 
		}
	}
}
</style>
