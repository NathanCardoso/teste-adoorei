<template>
  <section class="form">
    <div class="container">
      <Form @submit="onSubmit" class="form-login">
        <div class="form-header">
          <TitleContent contentValue="Entre na sua conta" />
          <ParagraphContent
            content="Para acessar sua conta informe seu e-mail e senha"
          />
        </div>
        <div class="form-input">
          <InputForm
            inputId="user-name"
            inputName="name"
            inputType="text"
            inputPlaceholder="Seu usuário"
            labelContent="Usuário"
            @inputValue="receiveInputValue"
          />
          <InputForm
            inputId="user-password"
            inputName="password"
            inputType="password"
            inputPlaceholder="Sua senha"
            labelContent="Senha"
            inputRule="validatePassword"
            @inputValue="receiveInputValue"
          />
          <ResetPassword />
        </div>
        <div class="form-button">
          <ButtonForm buttonName="Fazer Login" />
        </div>
      </Form>
    </div>
  </section>
  <AlertStatus
    typeAlert="error"
    mensageAlert="Usuário ou senha inválido."
    v-show="loginError"
  />
</template>

<script>
import TitleContent from "./atoms/TitleContent.vue";
import ParagraphContent from "./atoms/ParagraphContent.vue";
import InputForm from "./atoms/InputForm.vue";
import ResetPassword from "./atoms/ResetPassword.vue";
import ButtonForm from "./atoms/ButtonForm.vue";
import { Form } from "vee-validate";
import AlertStatus from "./organisms/AlertStatus.vue";

export default {
  name: "UserLogin",
  data() {
    return {
      receiveInput: {},
      loginError: false,
    };
  },
  components: {
    TitleContent,
    ParagraphContent,
    InputForm,
    ResetPassword,
    ButtonForm,
    Form,
    AlertStatus,
  },
  methods: {
    receiveInputValue({ name, value }) {
      this.receiveInput[name] = value;
    },
    async onSubmit() {
      try {
        await this.$store.dispatch("userLogin", this.receiveInput);
        this.$router.push("/account");
      } catch (error) {
        console.error(error);
        this.loginError = true;

        setTimeout(() => {
          this.loginError = false;
        }, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 570px;
  padding: rem(30) rem(32);
  background: $white;
  border-radius: rem(4);
  border: rem(1) solid $gray_alt_1;

  .form-login {
    .form-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(10);
    }

    .form-input {
      margin-top: rem(20);
      display: flex;
      flex-direction: column;
      gap: rem(20);
    }

    .form-button {
      margin-top: rem(24);
    }
  }

  @media screen and (max-width: 767px) {
    width: auto;
  }

  @media screen and (max-width: 479px) {
    width: auto;
  }
}
</style>
