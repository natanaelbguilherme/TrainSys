<template>
  <Menu></Menu>
  <div class="main">
    <div class="cabecalho">
      <div>
        <h1>
          <v-icon class="card-icon" size="50">mdi-account-multiple</v-icon>
          Alunos
        </h1>
      </div>

      <div>
        <v-btn color="#009688" type="submit" @click="novoAluno"
          >Novo Aluno</v-btn
        >
      </div>
    </div>
    <v-form class="cad-exercicio" @submit.prevent="cadastrarExercicio">
      <v-text-field
        class="input-exercicio"
        v-model="alunoPesquisa"
        label="Pesquisar Aluno"
      ></v-text-field>
    </v-form>

    <div class="tabela">
      <v-table>
        <thead>
          <tr>
            <th width="60%" class="text-left">Alunos</th>
            <th class="text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="aluno in alunos" :key="aluno.id">
            <td>{{ aluno.name }}</td>
            <td>
              <v-btn
                @click="() => montarTreino(aluno.id, aluno.name)"
                class="mr-2"
                height="20"
                color="#4527A0"
                type="submit"
                >Montar Treino</v-btn
              >
              <v-btn
                @click="() => verTreino(aluno.id, aluno.name)"
                height="20"
                color="#E65100"
                type="submit"
                >Ver</v-btn
              >
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Menu from "../../components/Menu";

export default {
  components: {
    Menu,
  },

  data: () => ({
    alunos: [],
    alunoPesquisa: "",
  }),

  mounted() {
    this.buscarAlunos();
  },

  watch: {
    alunoPesquisa() {
      if (this.alunoPesquisa === "") {
        this.buscarAlunos();
      } else {
        this.filtrarAlunos();
      }
    },
  },

  methods: {
    montarTreino(id, name) {
      this.$router.push({ name: "CadastroTreino", params: { id, name } });
    },

    verTreino(id, name) {
      this.$router.push({ name: "VisualizacaoTreinos", params: { id, name } });
    },

    filtrarAlunos() {
      const pesquisa = this.alunoPesquisa.toLowerCase();
      this.alunos = this.alunos.filter((aluno) =>
        aluno.name.toLowerCase().includes(pesquisa)
      );
    },

    buscarAlunos() {
      console.log("entrei aqui");

      axios({
        url: "http://localhost:3000/students",
        method: "GET",
      })
        .then((response) => {
          this.alunos = response.data.students;
          console.log(this.alunos);
        })
        .catch(() => {
          console.log("dados não encontrados");
        });
    },
    novoAluno() {
      this.$router.push("/aluno/novo");
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
  justify-content: space-between;
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

@media (max-width: 800px) {
  .main {
    margin: 10px auto;
  }

  .cabecalho {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  .cad-exercicio {
    display: flex;
    max-width: 80%;
    margin: auto;
  }

  .tabela {
    width: 80%;
    margin: auto;
  }
}

@media (max-width: 650px) {
  .main {
    margin: 10px auto;
  }

  .cabecalho {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  .cad-exercicio {
    display: flex;
    max-width: 80%;
    margin: auto;
  }

  .tabela {
    width: 80%;
    margin: auto;
  }
}
</style>
