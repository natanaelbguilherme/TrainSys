<template>
  <div>
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="fazerLogin">
        <v-text-field v-model="email" label="E-mail"></v-text-field>

        <v-text-field v-model="password" label="Senha"></v-text-field>

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
  }),
  methods: {
    fazerLogin() {
      console.log("entrei aqui");
    },
  },
};
</script>
