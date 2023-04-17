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
            inputId="email"
            inputName="userEmail"
            inputType="email"
            inputPlaceholder="Seu e-mail"
            labelContent="E-mail"
            inputRule="validateEmail"
          />
          <InputForm
            inputId="password"
            inputName="userPassword"
            inputType="password"
            inputPlaceholder="Sua senha"
            labelContent="Senha"
						inputRule="validatePassword"
          />
          <ResetPassword />
        </div>
        <div class="form-button">
          <ButtonForm buttonName="Fazer Login" />
        </div>
      </Form>
    </div>
  </section>
</template>

<script>
import TitleContent from "./atoms/TitleContent.vue";
import ParagraphContent from "./atoms/ParagraphContent.vue";
import InputForm from "./atoms/InputForm.vue";
import ResetPassword from "./atoms/ResetPassword.vue";
import ButtonForm from "./atoms/ButtonForm.vue";
import { Form } from "vee-validate";

export default {
  name: "UserLogin",
  components: {
    TitleContent,
    ParagraphContent,
    InputForm,
    ResetPassword,
    ButtonForm,
    Form,
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
  padding: rem(30);
  background: $white;
  border-radius: rem(4);
  border: rem(1) solid $gray_alt_1;

  .form-login {
    .form-header {
      display: flex;
      flex-direction: column;
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
		width: auto
	} 

	@media screen and (max-width: 479px) {
		width: auto;
	}
}
</style>
