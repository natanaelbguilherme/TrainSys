<template>
  <div class="main">
    <div class="bem-vindo">
      <h1>Bem vindo, Natanael</h1>
    </div>
    <div class="card-main">
      <v-card class="card" outlined>
        <div class="card-info">
          <h2>10 Alunos</h2>
          <v-btn class="botao"> Adicionar </v-btn>
        </div>
        <v-icon class="card-icon" size="100">mdi-account-multiple</v-icon>
      </v-card>

      <v-card class="card" outlined>
        <div class="card-info">
          <h2>10 Exercicios</h2>
          <v-btn class="botao"> Adicionar </v-btn>
        </div>
        <v-icon class="card-icon" size="90">mdi-weight-lifter</v-icon>
      </v-card>
    </div>
  </div>
</template>

<script></script>

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
