<template>
  <div>
    <label :for="inputId">{{ labelContent }}</label>
    <input
      :type="inputType"
      :id="inputId"
      :name="inputName"
      :placeholder="inputPlaceholder"
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
</style>
