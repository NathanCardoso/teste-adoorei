<template>
  <div class="input-form">
    <label :for="inputId" class="label">{{ labelContent }}</label>
    <Field
      :type="inputType"
      :id="inputId"
      :name="inputName"
      :placeholder="inputPlaceholder"
      :rules="inputRule"
      class="input"
    />
    <ErrorMessage :name="inputName" class="error"/>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

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
    inputRule: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputId: this.inputId,
      inputName: this.inputName,
      inputType: this.inputType,
      inputPlaceholder: this.inputPlaceholder,
      inputRule: this.inputRule,
      labelContent: this.labelContent,
    };
  },
  components: {
    Field,
    ErrorMessage,
  }
};
</script>

<style lang="scss" scoped>
.input-form {
  display: flex;
  flex-direction: column;
  gap: rem(4);
	width: 100%;

  .label {
    color: $black;
  }

  .input {
    padding: rem(24) rem(14);
    border-radius: rem(4);
    border: rem(1) solid $gray_alt;
		font-size: rem(18);
    outline: none;

    &::placeholder {
      color: $black;
      font-size: rem(18);
    }

    &:hover,
    &:focus {
      border: rem(1) solid $pink;
    }
  }

	.error {
		color: red;
	}
}
</style>
