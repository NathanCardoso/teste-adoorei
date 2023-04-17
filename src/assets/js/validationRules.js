import { defineRule, validate } from "vee-validate";

const validateEmail = (value) => {
  if (!value) return "O campo e-mail é obrigatório.";

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) return "Digite um e-mail valido.";

  return true;
};

const validatePassword = (value) => {
  if (!value) return "O campo senha é obrigatório.";
  if (value.length < 8) return "No mínimo 8 caracteres.";

  return true;
};

const confirmedPassword = (value, [target], ctx) => {
  if (value !== ctx.form[target]) return "As senhas devem ser iguais";

  return true;
};

const validateFullName = (value) => {
  if (!value) return "O campo nome completo é obrigatório.";

  const regex = /.*\s.*/;
  if (!regex.test(value)) return "Digite seu nome completo.";

  return true;
};

const validatePhone = (value) => {
  if (!value) return "O campo celular é obrigatório.";

  const regex = /^(?:\d{2}\s?)?(?:\d{5}|\d{4})-?\d{4}$/;
  if (!regex.test(value)) return "Digite um numero de telefone válido.";

  return true;
};

const validateSiteName = (value) => {
  if (!value) return "O campo nome do seu site completo é obrigatório.";

  const regex = /^[a-zA-Z ]*$/;
  if (!regex.test(value)) return "Digite o nome do seu site.";

  return true;
};

export default function setupValidators() {
  defineRule("validateEmail", validateEmail);
  defineRule("validatePassword", validatePassword);
  defineRule("validateFullName", validateFullName);
  defineRule("validatePhone", validatePhone);
  defineRule("validateSiteName", validateSiteName);
	defineRule("confirmedPassword", confirmedPassword)
}
