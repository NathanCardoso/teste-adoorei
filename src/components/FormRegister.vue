<template>
  <section class="form">
    <div class="container">
      <Form @submit="onSubmit" class="form-login">
        <div class="form-header">
          <TitleContent contentValue="Dados pessoais" />
          <ParagraphContent
            content="informe seus dados pessoais para acesso à sua conta"
          />
        </div>
        <div class="form-input">
          <InputForm
            inputId="name"
            inputName="name"
            inputType="text"
            inputPlaceholder="Informe seu nome completo"
            labelContent="Nome completo"
          />
          <InputForm
            inputId="phone"
            inputName="userPhone"
            inputType="text"
            inputPlaceholder="(99) 99999-0000"
            labelContent="Celular"
          />
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
          <div class="confirm-password">
            <InputForm
              inputId="password"
              inputName="userPassword"
              inputType="password"
              inputPlaceholder="Sua senha"
              labelContent="Confirme sua senha"
              inputRule="validatePassword"
            />
            <InputAlert text="No mínimo 8 caracteres" />
          </div>
        </div>
        <div class="form-site">
          <TitleContent contentValue="Dados do seu site" />
          <InputForm
            inputId="name"
            inputName="name"
            inputType="text"
            inputPlaceholder="Meu site"
            labelContent="Nome do seu site"
          />
          <InputAlert text="Exatamente igual o título do seu site" />
        </div>
        <ParagraphContent
          content="Ao concluir com o seu cadastro você concorda com nossos termos de uso e politicas de privacidade."
        />
        <div class="form-button">
          <ButtonForm buttonName="Criar conta" />
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
import InputAlert from "../components/atoms/InputAlert.vue";

export default {
  name: "UserLogin",
  components: {
    TitleContent,
    ParagraphContent,
    InputForm,
    ResetPassword,
    ButtonForm,
    Form,
    InputAlert,
  },
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
      align-items: flex-start;
      gap: rem(10);
    }

    .form-input {
      margin: rem(20) 0 rem(20);
      display: flex;
      flex-direction: column;
      gap: rem(20);

			.confirm-password {
				display: flex;
				flex-direction: column;
				gap: rem(8);
			}
    }

    .form-site {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(10);
      width: 100%;
      padding: rem(20) 0;
      border-top: rem(1) solid $gray_alt_1;
      border-bottom: rem(1) solid $gray_alt_1;
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
