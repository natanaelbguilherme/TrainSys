<template>
  <div class="container">
    <v-form class="form-login" @submit.prevent="fazerLogin">
      <v-text-field v-model="email" label="E-mail"></v-text-field>
      <span v-if="erroEmail">{{ erroEmail }}</span>

      <v-text-field v-model="password" label="Senha"></v-text-field>
      <span v-if="erroSenha">{{ erroSenha }}</span>

      <v-btn type="submit" block class="mt-2">Entrar</v-btn>
    </v-form>
    <span class="cadastro">
      Ainda não tem conta?<router-link to="/usuario/novo"
        >Cadastre-se</router-link
      >
    </span>
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
  margin: 100px auto;
}

.form-login {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.cadastro {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 8px;
}
</style>
