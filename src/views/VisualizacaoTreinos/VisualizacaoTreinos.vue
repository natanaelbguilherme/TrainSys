<template>
  <div class="main">
    <div class="cabecalho">
      <h1>
        <v-icon class="card-icon" size="50">mdi-account-multiple</v-icon> Treino
        - {{ this.$route.params.name }}
      </h1>
    </div>
    <h1>Hoje</h1>
    <div class="chekbox">
      <label v-for="treino in item" :key="treino.id" id="exercicios">
        <input type="checkbox" id="exercicios" v-model="exercicios" />
        {{ treino.exercise_description }} | {{ treino.weight }} Kg |
        {{ treino.repetitions }} Repetições | {{ treino.break_time }} min de
        pausa
      </label>
    </div>

    <v-table>
      <thead>
        <tr>
          <th class="text-left"><button @click="segunda()">Segunda</button></th>
          <th class="text-left"><button @click="terca()">Terça</button></th>
          <th class="text-left"><button @click="quarta()">Quarta</button></th>
          <th class="text-left"><button @click="quinta()">Quinta</button></th>
          <th class="text-left"><button @click="sexta()">Sexta</button></th>
          <th class="text-left"><button @click="sabado()">Sábado</button></th>
          <th class="text-left"><button @click="domingo()">Domingo</button></th>
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
        <tr v-for="treino in item" :key="treino.id">
          <td>{{ treino.exercise_description }}</td>
          <td>{{ treino.weight }}</td>
          <td>{{ treino.repetitions }}</td>
          <td>{{ treino.break_time }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    item: [],
    exercicios: [],
    diaDaSemana: "segunda",
  }),

  mounted() {
    this.buscarTreino();
  },

  watch: {
    diaDaSemana() {
      this.buscarTreino();
    },

    exercicios() {
      console.log(this.exercicios);
    },
  },

  methods: {
    segunda() {
      this.diaDaSemana = "segunda";
    },
    terca() {
      this.diaDaSemana = "terca";
    },
    quarta() {
      this.diaDaSemana = "quarta";
    },
    quinta() {
      this.diaDaSemana = "quinta";
    },
    sexta() {
      this.diaDaSemana = "sexta";
    },
    sabado() {
      this.diaDaSemana = "sabado";
    },
    domingo() {
      this.diaDaSemana = "domingo";
    },

    buscarTreino() {
      const token = localStorage.getItem("usuario_token");

      console.log(this.$route.params.id);
      console.log(this.$route.params.name);

      axios({
        url: `http://localhost:3000/workouts?student_id=${this.$route.params.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearen ${token}`,
        },
      })
        .then((response) => {
          this.item = response.data.workouts;
          this.filtrarTreino();
        })
        .catch(() => {
          console.log("dados não encontrados");
        });
    },

    filtrarTreino() {
      const treino = this.diaDaSemana.toLocaleLowerCase();
      this.item = this.item.filter((data) =>
        data.day.toLocaleLowerCase().includes(treino)
      );
      console.log(this.item);
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
