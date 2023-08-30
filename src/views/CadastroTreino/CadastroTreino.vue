<template>
  <div class="main">
    <h1><v-icon class="card-icon" size="50">mdi-account</v-icon>Treino</h1>
    <form class="cad-treino" @submit.prevent="cadastrarTreino">
      <v-select v-model="exercicio" :items="itens" label="Exercicio"></v-select>
      <div class="form-element">
        <v-text-field
          v-model="repeticoes"
          label="Número de Repetições"
        ></v-text-field>
        <v-text-field v-model="quilo" label="Quilos"></v-text-field>
        <v-text-field v-model="pausa" label="Pausa em Minutos"></v-text-field>
      </div>
      <v-select
        v-model="diaSemana"
        :items="itensSemana"
        label="Dia da Semana"
      ></v-select>
      <v-text-field v-model="obs" label="Observações"></v-text-field>
    </form>

    <div style="display: flex; gap: 20px; justify-content: flex-end">
      <v-btn color="#FFF" type="submit">Cancelar</v-btn>
      <v-btn color="#0d47a1" type="submit">Cadastrar</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    exercicio: "",
    repeticoes: "",
    quilo: "",
    pausa: "",
    diaSemana: "",
    obs: "",

    itens: ["supino", "agachamento"],
    itensSemana: [
      "Segunda-feria",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
      "Domingo",
    ],
  }),
  methods: {
    cadastrarTreino() {
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

.cad-treino {
  margin-top: 20px;
}

.form-element {
  display: flex;
  gap: 10px;
}
</style>
