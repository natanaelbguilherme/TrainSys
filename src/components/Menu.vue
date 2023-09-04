<template>
  <v-layout>
    <v-app-bar color="#0D47A1">
      <v-app-bar-title class="titleMenu">TrainSys</v-app-bar-title>

      <button>
        <router-link class="botao" to="/dashboard"> HOME </router-link>
      </button>

      <button>
        <router-link class="botao" to="/listagem/alunos"> ALUNOS </router-link>
      </button>

      <button>
        <router-link class="botao" to="/listagem/exercicios">
          EXERCÍCIOS
        </router-link>
      </button>

      <button>
        <router-link class="botao" to="/"> SAIR </router-link>
      </button>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
export default {};
</script>

<style>
.botao {
  text-decoration: none;
  color: #fff;
  margin-right: 15px;
}
</style>
