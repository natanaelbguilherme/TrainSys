<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent="cadastrarUsuario">
      <v-text-field v-model="nomeCompleto" label="Nome Completo"></v-text-field>
      <v-text-field v-model="email" label="E-mail"></v-text-field>
      <v-text-field v-model="password" label="Senha"></v-text-field>
      <v-text-field
        v-model="passwordConfirm"
        label="Confirme Sua Senha"
      ></v-text-field>

      <v-radio-group v-model="plano">
        <v-radio value="bronze">Bronze</v-radio>
        <v-radio value="prata">Prata</v-radio>
        <v-radio value="ouro">Ouro</v-radio>
      </v-radio-group>

      <v-btn type="submit" block class="mt-2">Cadastrar</v-btn>
    </v-form>
    <p></p>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      nomeCompleto: "",
      email: "",
      password: "",
      passwordConfirm: "",
      plano: "prata",
    };
  },

  methods: {
    cadastrarUsuario() {
      console.log("cadastrou");
    },
  },
};
</script>
