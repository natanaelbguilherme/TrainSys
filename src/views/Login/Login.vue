<template>
  <div class="container">
    <v-form class="form-login" @submit.prevent="fazerLogin">
      <v-text-field
        :error-messages="erroEmail"
        v-model="email"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        :error-messages="erroSenha"
        v-model="password"
        label="Senha"
      ></v-text-field>

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
import axios from "axios";

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
        axios({
          url: "http://localhost:3000/sessions",
          method: "POST",
          data: {
            email: this.email,
            password: this.password,
          },
          // headers: {
          //   Authorization: `Bearen ${token}`
          // }
        })
          .then((response) => {
            localStorage.setItem("usuario_token", response.data.token);
            localStorage.setItem("nome_usuario", response.data.name);
            console.log(response.data.token);
            console.log(response.data.name);

            this.$router.push("/deashboard");
            console.log("logado");
          })
          .catch(() => {
            alert("erro ao logar");
            this.$router.push("/usuario/novo");
            console.log("erro ao logar");
          });
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
