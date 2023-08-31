<template>
  <div class="main">
    <div class="bem-vindo">
      <h1>Bem vindo, {{ nome }}</h1>
    </div>
    <div class="card-main">
      <v-card class="card" outlined>
        <div class="card-info">
          <h2>{{ item.amount_students }} Alunos</h2>
          <v-btn @click="adicionaAluno" class="botao"> Adicionar </v-btn>
        </div>
        <v-icon class="card-icon" size="100">mdi-account-multiple</v-icon>
      </v-card>

      <v-card class="card" outlined>
        <div class="card-info">
          <h2>{{ item.amount_exercises }} Exercicios</h2>
          <v-btn @click="adicionaExercicio" class="botao"> Adicionar </v-btn>
        </div>
        <v-icon class="card-icon" size="90">mdi-weight-lifter</v-icon>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const nome = localStorage.getItem("nome_usuario");

export default {
  data() {
    return {
      nome: nome,
      item: [],
    };
  },

  mounted() {
    this.contador();
  },

  methods: {
    adicionaAluno() {
      this.$router.push("/aluno/novo");
    },

    adicionaExercicio() {
      this.$router.push("/listagem/exercicios");
    },

    contador() {
      this.nome = localStorage.getItem("nome_usuario");
      axios({
        url: "http://localhost:3000/dashboard",
        method: "GET",
      })
        .then((response) => {
          this.item = response.data;
        })
        .catch(() => {
          console.log("dasds não encontrados");
        });
    },
  },
};
</script>

<style scoped>
.main {
  margin: 100px auto;
  max-width: 800px;
}
.bem-vindo {
  margin-bottom: 50px;
}
.card-main {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.card {
  width: 300px;
  height: 120px;
  padding: 10px;

  display: flex;
  justify-content: space-between;
}

.card-info {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.card-icon {
}

.botao {
  width: 110px;
  height: 30px;
  background-color: #0d47a1;
  color: #fff;
}
</style>
