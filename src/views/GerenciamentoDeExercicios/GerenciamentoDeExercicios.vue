<template>
  <div class="main">
    <h1>
      <v-icon class="card-icon" size="50">mdi-weight-lifter</v-icon> Exercícios
    </h1>
    <v-form class="cad-exercicio" @submit.prevent="cadastrarExercicio">
      <v-text-field
        :error-messages="this.errors.exercicio"
        class="input-exercicio"
        v-model="exercicio"
        label="Exercício"
        placeholder="Nome do Exercício"
      ></v-text-field>
      <v-btn height="54" color="#0d47a1" type="submit"
        >Cadastrar Exercício</v-btn
      >
    </v-form>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Exercicio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="exercicio in data" :key="exercicio.id">
          <td>{{ exercicio.description }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import axios from "axios";
import * as yup from "yup";
import { captureErrorYup } from "../../utils/captureErrorYup";

export default {
  data: () => ({
    exercicio: "",
    data: [],

    errors: [],
  }),

  mounted() {
    this.carregaExercicios();
  },

  watch: {
    data() {
      this.carregaExercicios();
    },
  },

  methods: {
    carregaExercicios() {
      axios({
        url: "http://localhost:3000/exercises",
        method: "GET",
      })
        .then((response) => {
          this.data = response.data;
        })
        .catch(() => {
          alert("Exercícios não encontrados");
        });
    },

    cadastrarExercicio() {
      console.log("entrei aqui");
      try {
        const schema = yup.object().shape({
          exercicio: yup.string().required("exercicio é obrigatório"),
        });

        schema.validateSync(
          {
            exercicio: this.exercicio,
          },
          { abortEarly: false }
        );

        axios({
          url: "http://localhost:3000/exercises",
          method: "POST",
          data: {
            description: this.exercicio,
          },
        })
          .then(() => {
            console.log("Cadastrado com sucesso");
            this.errors = [];
            this.exercicio = "";
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
