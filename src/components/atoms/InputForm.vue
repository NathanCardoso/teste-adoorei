<template>
  <div class="input-form">
    <label :for="idInput" class="label">{{ contentLabel }}</label>
    <Field
      :type="typeInput"
      :id="idInput"
      :name="nameInput"
      :placeholder="placeholderInput"
      :rules="ruleInput"
      v-model="dataModel"
      :maxlength="maxLengthInput"
      class="input"
    />
    <ErrorMessage :name="inputName" class="error" />
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
    inputMaxLength: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      typeInput: this.inputType,
      idInput: this.inputId,
      nameInput: this.inputName,
      placeholderInput: this.inputPlaceholder,
      ruleInput: this.inputRule,
      maxLengthInput: this.inputMaxLength,
      contentLabel: this.labelContent,
      dataModel: "",
    };
  },
  components: {
    Field,
    ErrorMessage,
  },
  watch: {
    dataModel() {
      const inputMensage = {
        name: this.nameInput,
        value: this.dataModel,
      };
      this.$emit("inputValue", inputMensage);
    },
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
