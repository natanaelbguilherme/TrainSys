<template>
  <div class="main">
    <h1><v-icon class="card-icon" size="50">mdi-account</v-icon>Novo Aluno</h1>
    {{ dataNascimento }}
    <v-form class="cad-aluno">
      <v-text-field
        :error-messages="this.errors.nome"
        v-model="nome"
        label="Nome Completo"
      ></v-text-field>

      <v-text-field
        :error-messages="this.errors.email"
        v-model="email"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        :error-messages="this.errors.telefone"
        v-model="telefone"
        label="Telefone"
      ></v-text-field>

      <v-text-field
        :error-messages="this.errors.dataNascimento"
        type="date"
        v-model="dataNascimento"
        label="Data de Nascimento"
      ></v-text-field>

      <v-text-field
        :error-messages="this.errors.cep"
        v-model="cep"
        label="Cep"
      ></v-text-field>
      <v-text-field
        :error-messages="this.errors.endereco"
        v-model="endereco"
        label="Endereço"
      ></v-text-field>
      <v-text-field
        :error-messages="this.errors.numero"
        v-model="numero"
        label="Número"
      ></v-text-field>
      <v-select
        :error-messages="this.errors.estado"
        v-model="estado"
        :items="itens"
        label="Estado"
      ></v-select>
      <v-text-field
        :error-messages="this.errors.bairro"
        v-model="bairro"
        label="Bairro"
      ></v-text-field>
      <v-text-field
        :error-messages="this.errors.cidade"
        v-model="cidade"
        label="Cidade"
      ></v-text-field>
      <v-text-field
        :error-messages="this.errors.complemento"
        width="100"
        v-model="complemento"
        label="Complemento"
      ></v-text-field>
    </v-form>
    <div style="display: flex; gap: 20px; justify-content: flex-end">
      <v-btn color="#FFF" type="submit" @click="deashboard">Voltar</v-btn>
      <v-btn color="#0d47a1" type="submit" @click="cadastrarAluno"
        >Cadastrar</v-btn
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as yup from "yup";
import { captureErrorYup } from "../../utils/captureErrorYup";
import { dateFormat } from "../../utils/dateFormat";

export default {
  data: () => ({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    cep: "",
    endereco: "",
    numero: "",
    estado: "",
    bairro: "",
    cidade: "",
    complemento: "",

    errors: [],

    itens: [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO",
    ],
  }),
  methods: {
    deashboard() {
      this.$router.push("/deashboard");
    },
    cadastrarAluno() {
      console.log("entrei aqui");
      try {
        const schema = yup.object().shape({
          nome: yup.string().required("Nome é obrigatório"),
          email: yup
            .string()
            .email("Email não é valido")
            .required("Email é obrigatório"),
          telefone: yup
            .string()
            .min(8, "o telefone deve ter no minimo 8 numeros")
            .max(9, "o telefone deve ter no maximo 9 numeros")
            .required("o Telefone é obrigatorio"),
          dataNascimento: yup
            .date()
            .transform(dateFormat)
            .nullable()
            .required("a data é obrigatoria")
            .max(new Date(), "não é permitida uma data futura"),

          cep: yup
            .string()
            .min(8, "o cep deve ter  8 numeros")
            .required("o CEP é obrigatorio"),
          endereco: yup.string().required("O endereço é obrigatório"),
          numero: yup.number().required("O Número é obrigatório"),
          bairro: yup.string().required("O bairro é obrigatório"),
          cidade: yup.string().required("A cidade é obrigatória"),
          estado: yup.string().required("O estado é obrigatório"),
          complemento: yup.string().max(100, "digite no maximo 100 caracteres"),
        });

        schema.validateSync(
          {
            nome: this.nome,
            email: this.email,
            telefone: this.telefone,
            dataNascimento: this.dataNascimento,
            cep: this.cep,
            endereco: this.endereco,
            numero: this.numero,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado,
            complemento: this.complemento,
          },
          { abortEarly: false }
        );

        axios({
          url: "http://localhost:3000/students",
          method: "POST",
          data: {
            name: this.nome,
            email: this.email,
            contact: this.telefone,
            date_birth: this.dataNascimento,
            cep: this.cep,
            street: this.endereco,
            number: this.numero,
            neighborhood: this.bairro,
            city: this.cidade,
            province: this.estado,
            complement: this.complemento,
          },
        })
          .then(() => {
            alert("Cadastrado com sucesso");
            this.$router.push("/listagem/alunos");
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

.main h1 {
  display: flex;
  align-items: center;
}

.cad-aluno {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}

.cad-aluno .v-text-field {
  width: 40%;
}
</style>
