<template>
  <div class="main">
    <div class="cabecalho">
      <h1>
        <v-icon class="card-icon" size="50">mdi-account-multiple</v-icon> Alunos
      </h1>
      <v-btn color="#009688" type="submit">Novo Aluno</v-btn>
    </div>
    <v-form class="cad-exercicio" @submit.prevent="cadastrarExercicio">
      <v-text-field
        class="input-exercicio"
        v-model="exercicio"
        label="Nome do Aluno"
      ></v-text-field>
      <v-btn height="54" color="#0d47a1" type="submit">Buscar</v-btn>
    </v-form>

    <v-table>
      <thead>
        <tr>
          <th width="60%" class="text-left">Alunos</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>João</td>
          <td>
            <v-btn class="mr-2" height="20" color="#4527A0" type="submit"
              >Montar Treino</v-btn
            >
            <v-btn height="20" color="#E65100" type="submit">Ver</v-btn>
          </td>
        </tr>
        <tr>
          <td>Maria</td>
          <td>
            <v-btn class="mr-2" height="20" color="#4527A0" type="submit"
              >Montar Treino</v-btn
            >
            <v-btn height="20" color="#E65100" type="submit">Ver</v-btn>
          </td>
        </tr>
        <tr>
          <td>José</td>
          <td>
            <v-btn class="mr-2" height="20" color="#4527A0" type="submit"
              >Montar Treino</v-btn
            >
            <v-btn height="20" color="#E65100" type="submit">Ver</v-btn>
          </td>
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

.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
