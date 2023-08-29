<template>
  <div class="container">
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="fazerLogin">
        <v-text-field v-model="email" label="E-mail"></v-text-field>
        <span v-if="erroEmail">{{ erroEmail }}</span>

        <v-text-field v-model="password" label="Senha"></v-text-field>
        <span v-if="erroSenha">{{ erroSenha }}</span>

        <v-btn type="submit" block class="mt-2">Entrar</v-btn>
      </v-form>
      <p>
        Ainda não tem conta?<router-link to="/usuario/novo"
          >Cadastre-se</router-link
        >
      </p>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",

    erroEmail: "",
    erroSenha: "",
  }),
  methods: {
    fazerLogin() {
      console.log("entrei aqui");

      this.erroEmail = "";
      this.erroSenha = "";

      if (this.email === "") this.erroEmail = "Digite o email";
      if (this.password === "") this.erroSenha = "Digite a senha";

      if (this.erroEmail === "" && this.erroSenha === "") {
        this.$router.push("/deashboard");
      }
    },
  },
};
</script>

<style>
.container {
  margin-top: 100px;
}
</style>
