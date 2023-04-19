<template>
  <div class="error">
    <div class="error-content">
      <h1>Erro 404</h1>
      <p>Página não encontrada</p>
      <router-link to="/" class="home">Ir para Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-self: center;
  height: 100vh;

  .error-content {
    margin: 0 auto;
    max-width: rem(800);
    text-align: center;
    max-height: rem(200);
    align-self: center;
    margin-top: rem(-200);

    h1 {
      font-weight: bold;
      font-size: rem(80);
      color: $pink;
    }
    p {
      margin-top: rem(20);
      font-size: rem(24);
    }
    .home {
      display: block;
      margin-top: rem(20);
      color: $pink;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 479px) {
    .error-content {
      h1 {
        font-size: rem(40);
      }
      p {
        font-size: rem(18);
      }
    }
  }
}
</style>
