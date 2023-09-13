<template>
  <v-layout>
    <v-app-bar color="#0D47A1">
      <div class="menuBar">
        <v-app-bar-title class="titleMenu">Total Power</v-app-bar-title>

        <div>
          <button>
            <router-link class="botao" to="/dashboard"> HOME </router-link>
          </button>

          <button>
            <router-link class="botao" to="/listagem/alunos">
              ALUNOS
            </router-link>
          </button>

          <button>
            <router-link class="botao" to="/listagem/exercicios">
              EXERCÍCIOS
            </router-link>
          </button>

          <button>
            <router-link class="botao" to="/"> SAIR </router-link>
          </button>
        </div>
      </div>
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

.menuBar {
  display: flex;
  margin: auto;
  align-items: center;

  width: 800px;
}
</style>
