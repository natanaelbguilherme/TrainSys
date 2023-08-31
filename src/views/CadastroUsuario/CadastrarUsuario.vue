<template>
  <div class="container">
    <H2>Crie sua conta</H2>
    <v-form class="formulario" @submit.prevent="cadastrarUsuario">
      <v-text-field
        :error-messages="this.errors.nomeCompleto"
        v-model="nomeCompleto"
        label="Nome Completo"
      ></v-text-field>
      <v-text-field
        type="email"
        :error-messages="this.errors.email"
        v-model="email"
        label="E-mail"
      ></v-text-field>
      <v-text-field
        :error-messages="this.errors.password"
        v-model="password"
        label="Senha"
      ></v-text-field>
      <v-text-field
        type="password"
        :error-messages="this.errors.passwordConfirm"
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
      <v-btn type="submit" @click="pagLogin" block color="#fff" class="mt-2"
        >Voltar</v-btn
      >
    </v-form>
  </div>
</template>

<script>
import * as yup from "yup";
import { captureErrorYup } from "../../utils/captureErrorYup";
import axios from "axios";

export default {
  data() {
    return {
      nomeCompleto: "",
      email: "",
      password: "",
      passwordConfirm: "",
      plano: "2",

      errors: {},
    };
  },

  methods: {
    cadastrarUsuario() {
      try {
        const schema = yup.object().shape({
          nomeCompleto: yup.string().required("Nome é obrigatório"),
          email: yup
            .string()
            .email("Email não é valido")
            .required("Email é obrigatório"),
          password: yup
            .string()
            .min(6, "A senha deve ter no mínimo 6 caracteres")
            .max(20, "Deve ter entre 6-20 letras")
            .required("A senha é obrigatória"),
          passwordConfirm: yup
            .string()
            .required("A confirmação necessária")
            .oneOf([yup.ref("password")], "As senhas devem coincidir"),
        });

        schema.validateSync(
          {
            nomeCompleto: this.nomeCompleto,
            email: this.email,
            password: this.password,
            passwordConfirm: this.passwordConfirm,
          },
          { abortEarly: false }
        );

        axios({
          url: "http://localhost:3000/users",
          method: "POST",
          data: {
            name: this.nomeCompleto,
            email: this.email,
            password: this.password,
            type_plan: this.plano,
          },
        })
          .then(() => {
            alert("Cadastrado com sucesso");
            this.$router.push("/");
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
    pagLogin() {
      this.$router.push("/");
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
  margin-top: 20px;
}

.form-element {
  display: flex;
  flex-direction: column;
}

.form-radio {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
