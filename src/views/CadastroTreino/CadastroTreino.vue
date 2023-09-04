<template>
  <Menu></Menu>
  <div class="main">
    <h1>
      <v-icon class="card-icon" size="50">mdi-account</v-icon>Treino -
      {{ this.$route.params.name }}
    </h1>
    <form class="cad-treino" @submit.prevent="cadastrarTreino">
      <label id="select" for="select">Exercicio</label>
      <select v-model="exercicio" class="select" id="select">
        <option v-for="item in itemExercicio" :key="item.id" :value="item.id">
          {{ item.description }}
        </option>
      </select>

      <div class="form-element">
        <v-text-field
          type="number"
          :error-messages="this.errors.repeticoes"
          v-model="repeticoes"
          label="Número de Repetições"
        ></v-text-field>
        <v-text-field
          type="number"
          :error-messages="this.errors.quilo"
          v-model="quilo"
          label="Quilos"
        ></v-text-field>
        <v-text-field
          type="number"
          :error-messages="this.errors.pausa"
          v-model="pausa"
          label="Pausa em Minutos"
        ></v-text-field>
      </div>
      <v-select
        :error-messages="this.errors.dia"
        v-model="dia"
        :items="itensSemana"
        label="Dia da Semana"
      ></v-select>
      <v-text-field v-model="obs" label="Observações"></v-text-field>
    </form>

    <div style="display: flex; gap: 20px; justify-content: flex-end">
      <v-btn @click="pagalunos" color="#FFF" type="submit">Cancelar</v-btn>
      <v-btn @click="cadastrarTreino" color="#0d47a1" type="submit"
        >Cadastrar</v-btn
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as yup from "yup";
import { captureErrorYup } from "../../utils/captureErrorYup";

import Menu from "../../components/Menu";

export default {
  components: {
    Menu,
  },

  data: () => ({
    exercicio: "",
    repeticoes: "",
    quilo: "",
    pausa: "",
    dia: "",
    obs: "",

    errors: [],

    itemExercicio: [],

    itensSemana: [
      {
        title: "Segunda-feria",
        value: "segunda",
      },
      {
        title: "Terça-feria",
        value: "terca",
      },
      {
        title: "Quarta-feria",
        value: "quarta",
      },
      {
        title: "Quinta-feria",
        value: "quinta",
      },
      {
        title: "Sexta-feria",
        value: "sexta",
      },
      {
        title: "Sábado",
        value: "sabado",
      },
      {
        title: "Domingo",
        value: "domingo",
      },
    ],
  }),

  mounted() {
    console.log(this.$route);
    this.buscarExercicios();
  },

  methods: {
    buscarExercicios() {
      axios({
        url: "http://localhost:3000/exercises",
        method: "GET",
      })
        .then((response) => {
          this.itemExercicio = response.data;
          //console.log(this.itemExercicio);
        })
        .catch(() => {
          console.log("dados não encontrados");
        });
    },

    cadastrarTreino() {
      console.log("entrei aqui");
      try {
        const schema = yup.object().shape({
          exercicio: yup.string().required("exercicio é obrigatório"),
          repeticoes: yup
            .string()
            .required("numero de repetiçoes é obrigatório"),
          quilo: yup.string().required("o peso é obrigatorio"),
          pausa: yup.string().required("a pausa é obrigatoria"),
          dia: yup.string().required("o dia da semana é obrigatorio"),
          obs: yup.string(),
        });

        schema.validateSync(
          {
            exercicio: this.exercicio,
            repeticoes: this.repeticoes,
            quilo: this.quilo,
            pausa: this.pausa,
            dia: this.dia,
            obs: this.obs,
          },
          { abortEarly: false }
        );

        axios({
          url: "http://localhost:3000/workouts",
          method: "POST",
          data: {
            student_id: this.$route.params.id,
            exercise_id: this.exercicio,
            repetitions: this.repeticoes,
            weight: this.quilo,
            break_time: this.pausa,
            day: this.dia,
            observations: this.obs,
          },
        })
          .then(() => {
            alert("Treino Cadastrado com sucesso");
            this.$router.push("/listagem/alunos");
          })
          .catch((error) => {
            if (error.response?.data?.message) {
              alert(error.response.data.message);
            } else {
              alert("Houve uma falha ao tentar cadastrar");
            }
          });
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          console.log(error);
          // capturar os errors do yup
          this.errors = captureErrorYup(error);
        }
      }
    },

    pagalunos() {
      this.$router.push("/listagem/alunos");
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

.select {
  width: 100%;
  height: 60px;
  background-color: rgb(243, 243, 242);
  margin-bottom: 20px;
  padding-left: 20px;
  border-bottom: 1px solid rgb(180, 178, 178);
  color: rgb(136, 136, 136);
}
</style>
