<template>
  <Menu></Menu>
  <div class="main">
    <h1 class="cabecalho">
      <v-icon class="card-icon" size="50">mdi-weight-lifter</v-icon> Exercícios
    </h1>
    <v-form class="cad-exercicio" @submit.prevent="cadastrarExercicio">
      <v-text-field
        :error-messages="this.errors.exercicio"
        class="input-exercicio"
        v-model="exercicio"
        label="Exercício"
        placeholder="Novo Exercício"
      ></v-text-field>
      <v-btn class="botao" height="54" color="#0d47a1" type="submit"
        >Cadastrar Exercício</v-btn
      >
    </v-form>

    <div class="tabela">
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
    page: 1,
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

.cabecalho {
  display: flex;
  justify-content: flex-start;
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
}

@media (max-width: 650px) {
  .main {
    margin: 10px auto;
  }

  .cabecalho {
    display: flex;
    justify-content: center;
  }

  .cad-exercicio {
    display: flex;
    flex-direction: column;
  }

  .input-exercicio {
    width: 100%;
  }

  .botao {
    margin-top: -30px;
    margin-bottom: 20px;
    height: 100%;
    width: 100%;
  }
}
</style>
