<template>
  <div class="main">
    <h1><v-icon class="card-icon" size="50">mdi-account</v-icon>Novo Aluno</h1>
    <v-form class="cad-aluno" @submit.prevent="cadastrarAluno">
      <v-text-field v-model="nome" label="Nome Completo"></v-text-field>
      <v-text-field v-model="email" label="E-mail"></v-text-field>
      <v-text-field v-model="telefone" label="Telefone"></v-text-field>
      <v-text-field
        v-model="data_nascimento"
        label="Data de Nascimento"
      ></v-text-field>
      <v-text-field v-model="cep" label="Cep"></v-text-field>
      <v-text-field v-model="endereco" label="Endereço"></v-text-field>
      <v-select v-model="estado" :items="itens" label="Estado"></v-select>
      <v-text-field v-model="bairro" label="Bairro"></v-text-field>
      <v-text-field v-model="cidade" label="Cidade"></v-text-field>
      <v-text-field v-model="complemento" label="Complemento"></v-text-field>
    </v-form>
    <div style="display: flex; gap: 20px; justify-content: flex-end">
      <v-btn color="#FFF" type="submit">Voltar</v-btn>
      <v-btn color="#0d47a1" type="submit">Cadastrar</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    nome: "",
    email: "",
    telefone: "",
    data_nascimento: "",
    cep: "",
    endereco: "",
    estado: "",
    bairro: "",
    cidade: "",
    complemento: "",

    itens: ["ce", "sp"],
  }),
  methods: {
    cadastrarAluno() {
      console.log("entrei aqui");
    },
  },
};
</script>

<style>
.main {
  margin: 100px auto;
  max-width: 800px;
}

.main h1 {
  display: flex;
  align-items: center;
}

.cad-aluno {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}

.cad-aluno .v-text-field {
  width: 40%;
}
</style>
