<template>
  <v-layout>
    <v-app-bar color="#d6249f" v-if="renderizarMenu">
      <v-app-bar-title class="titleMenu">TrainSys</v-app-bar-title>

      <v-btn icon>
        <router-link to="/deashboard"> Home </router-link>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  computed: {
    renderizarMenu() {
      return this.$router.path == "/" && this.$router.path == "/usuario/novo";
    },
  },
};
</script>
