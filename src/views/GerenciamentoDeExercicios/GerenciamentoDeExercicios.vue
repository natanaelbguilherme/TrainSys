<template>
  <div class="main">
    <h1>
      <v-icon class="card-icon" size="50">mdi-weight-lifter</v-icon> Exercícios
    </h1>
    <v-form class="cad-exercicio" @submit.prevent="cadastrarExercicio">
      <v-text-field
        class="input-exercicio"
        v-model="exercicio"
        label="Exercício"
      ></v-text-field>
      <v-btn height="54" color="#0d47a1" type="submit">Novo Exercício</v-btn>
    </v-form>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Exercicio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Supino Reto</td>
        </tr>
        <tr>
          <td>Agachamento</td>
        </tr>
        <tr>
          <td>Remada</td>
        </tr>
        <tr>
          <td>Leg Press</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    exercicio: "",
  }),
  methods: {
    cadastrarExercicio() {
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

.cad-exercicio {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.input-exercicio {
  width: 70%;
}

.botao {
  height: 100px;
}
</style>
