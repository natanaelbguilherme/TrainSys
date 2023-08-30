<template>
  <div class="container">
    <v-form class="formulario" @submit.prevent="cadastrarUsuario">
      <v-text-field v-model="nomeCompleto" label="Nome Completo"></v-text-field>
      <v-text-field v-model="email" label="E-mail"></v-text-field>
      <v-text-field v-model="password" label="Senha"></v-text-field>
      <v-text-field
        v-model="passwordConfirm"
        label="Repita Sua Senha"
      ></v-text-field>

      <div class="form-element">
        <p>Selecione um tipo de plano:</p>

        <div class="form-radio">
          <input id="bronze" type="radio" value="1" v-model="plano" />
          <label for="bronze">Bronze</label>
        </div>

        <div class="form-radio">
          <input id="prata" type="radio" value="2" v-model="plano" />
          <label for="prata">Prata</label>
        </div>

        <div class="form-radio">
          <input id="premium" type="radio" value="3" v-model="plano" />
          <label for="premium">Premium</label>
        </div>
      </div>

      <v-btn type="submit" block color="#0D47A1" class="mt-2">Cadastrar</v-btn>
      <v-btn type="submit" block class="mt-2">Voltar</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nomeCompleto: "",
      email: "",
      password: "",
      passwordConfirm: "",
      plano: "2",
    };
  },

  methods: {
    cadastrarUsuario() {
      console.log("cadastrou");
    },
  },
};
</script>

<style>
.container {
  margin: 100px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.formulario {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.form-element {
  margin-bottom: 15px;
}

.form-radio {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
