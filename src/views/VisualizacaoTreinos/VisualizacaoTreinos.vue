<template>
  <Menu></Menu>
  <div class="main">
    <div class="cabecalho">
      <h1>
        <v-icon class="card-icon" size="50">mdi-account-multiple</v-icon> Ficha
        de treino - {{ this.$route.params.name }}
      </h1>
    </div>
    <h1>Treino do dia - {{ this.diaFixo.toUpperCase() }}</h1>

    <v-checkbox
      v-for="treino in itemDia"
      :key="treino.id"
      v-model="idTreino"
      :label="[
        treino.exercise_description,
        ' | ',
        treino.weight,
        ' Kg | ',
        treino.repetitions,
        ' repetições | ',
        treino.break_time,
        ' min de pausa',
      ]"
      :value="treino.id"
    ></v-checkbox>

    <div>
      <h2>Treinos da Semana</h2>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              <button @click="segunda()">Segunda</button>
            </th>
            <th class="text-left"><button @click="terca()">Terça</button></th>
            <th class="text-left"><button @click="quarta()">Quarta</button></th>
            <th class="text-left"><button @click="quinta()">Quinta</button></th>
            <th class="text-left"><button @click="sexta()">Sexta</button></th>
            <th class="text-left"><button @click="sabado()">Sábado</button></th>
            <th class="text-left">
              <button @click="domingo()">Domingo</button>
            </th>
          </tr>
        </thead>
      </v-table>
    </div>

    <v-table class="tabelaTreino">
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

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const token = localStorage.getItem("usuario_token");

import Menu from "../../components/Menu";

export default {
  components: {
    Menu,
  },

  data: () => ({
    item: [],
    itemDia: [],
    exercicios: [],
    diaDaSemana: "",
    diaFixo: "",

    idTreino: "",
  }),

  mounted() {
    const diaDaSemana = format(new Date(), "eee", { locale: ptBR });
    this.diaDaSemana = this.removerAcentos(diaDaSemana);

    this.diaFixo = format(new Date(), "eee", { locale: ptBR });

    this.buscarTreino();
    this.buscarTreinoDia();
  },

  watch: {
    idTreino() {
      this.exercicioConcluido();
      this.exercicios = [...this.exercicios, this.idTreino];
    },

    diaDaSemana() {
      this.buscarTreino();
    },
  },

  methods: {
    removerAcentos(info) {
      return info.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    },

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
    },

    buscarTreinoDia() {
      axios({
        url: `http://localhost:3000/workouts?student_id=${this.$route.params.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearen ${token}`,
        },
      })
        .then((response) => {
          this.itemDia = response.data.workouts;
          this.filtrarTreinoDia();
        })
        .catch(() => {
          console.log("dados não encontrados");
        });
    },

    filtrarTreinoDia() {
      const treinoDia = this.diaDaSemana.toLocaleLowerCase();
      this.itemDia = this.itemDia.filter((data) =>
        data.day.toLocaleLowerCase().includes(treinoDia)
      );
    },

    exercicioConcluido() {
      axios({
        url: "http://localhost:3000/workouts/check",
        method: "POST",
        data: {
          workout_id: this.idTreino,
          student_id: this.$route.params.id,
          day_of_week: this.diaFixo,
        },
        headers: {
          Authorization: `Bearen ${token}`,
        },
      })
        .then(() => {
          console.log("exercicio conluido");
        })
        .catch(() => {});
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

.tabelaTreino {
  border: 1px solid black;
}

.treinoDia {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}
</style>
