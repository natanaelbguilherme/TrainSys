<template>
  <div class="main">
    <div class="cabecalho">
      <h1>
        <v-icon class="card-icon" size="50">mdi-account-multiple</v-icon> Treino
        - Maria
      </h1>
    </div>
    <h1>Hoje</h1>
    <div class="chekbox">
      <label id="exercicios">
        <input type="checkbox" id="exercicios" v-model="exercicios" /> Supino |
        30kg | 20 Repetições | 1 min de pausa
      </label>
      <label id="exercicios">
        <input type="checkbox" id="exercicios" v-model="exercicios" /> Supino |
        30kg | 20 Repetições | 1 min de pausa
      </label>
      <label id="exercicios">
        <input type="checkbox" id="exercicios" v-model="exercicios" /> Supino |
        30kg | 20 Repetições | 1 min de pausa
      </label>
    </div>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Segunda</th>
          <th class="text-left">Terça</th>
          <th class="text-left">Quarta</th>
          <th class="text-left">Quinta</th>
          <th class="text-left">Sexta</th>
          <th class="text-left">Sábado</th>
          <th class="text-left">Domingo</th>
        </tr>
      </thead>
      <tbody>
        <td></td>
      </tbody>
    </v-table>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Exercicio</th>
          <th class="text-left">Quilos</th>
          <th class="text-left">Repetições</th>
          <th class="text-left">Pausa</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>supino reto</td>
          <td>30kg</td>
          <td>20</td>
          <td>1 min</td>
        </tr>
        <tr>
          <td>supino reto</td>
          <td>30kg</td>
          <td>20</td>
          <td>1 min</td>
        </tr>
        <tr>
          <td>supino reto</td>
          <td>30kg</td>
          <td>20</td>
          <td>1 min</td>
        </tr>
        <tr>
          <td>supino reto</td>
          <td>30kg</td>
          <td>20</td>
          <td>1 min</td>
        </tr>
        <tr>
          <td>supino reto</td>
          <td>30kg</td>
          <td>20</td>
          <td>1 min</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    exercicios: [],
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

.chekbox {
  display: flex;
  flex-direction: column;
}
</style>
