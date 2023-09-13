<template>
  <Menu></Menu>
  <div class="main">
    <div class="cabecalho">
      <h1>
        <v-icon class="card-icon" size="50">mdi-account</v-icon>Novo Aluno
      </h1>
    </div>

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

      <!-- <VueDatePicker v-model="date"></VueDatePicker> -->

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
        type="number"
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
        outlined
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
    <div class="rodape">
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

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import parse from "date-fns/parse";

import Menu from "../../components/Menu";

export default {
  components: {
    Menu,
  },

  data: () => ({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    dataFormatada: "",
    cep: "",
    endereco: "",
    numero: "",
    estado: "",
    bairro: "",
    cidade: "",
    complemento: "",

    errors: [],

    data: [],

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

  watch: {
    cep() {
      if (this.cep.length >= 8) this.viaCep();
    },

    dataNascimento() {
      this.formatDate();
    },
  },

  mounted() {
    //this.formatDate();
  },

  methods: {
    viaCep() {
      axios({
        url: `http://viacep.com.br/ws/${this.cep}/json/`,
        method: "GET",
      })
        .then((response) => {
          this.data = response.data;

          this.endereco = this.data.logradouro;
          this.cidade = this.data.localidade;
          this.bairro = this.data.bairro;
        })
        .catch(() => {
          console.log("dados nao encontrados");
        });
    },

    deashboard() {
      this.$router.push("/dashboard");
    },

    formatDate() {
      this.erros = [];

      const dataFormatada = parse(
        this.dataNascimento,
        "yyyy-MM-dd",
        new Date(),
        {
          locale: ptBR,
        }
      );

      if (dataFormatada > new Date()) {
        alert("data maior que a data atual");
        this.dataNascimento = "";
      } else {
        this.dataFormatada = format(dataFormatada, "dd/MM/yyy");
        console.log(dataFormatada);
        console.log(this.dataFormatada);
      }
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
            .string()
            .max(new Date(), "nao é permitido datas no futuro")
            .required("data obrigatoria"),
          cep: yup
            .string()
            .min(8, "o cep deve ter  8 numeros")
            .required("o CEP é obrigatorio"),
          endereco: yup.string().required("O endereço é obrigatório"),
          numero: yup.string().required("O Número é obrigatório"),
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
            date_birth: this.dataFormatada,
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

.cabecalho {
  display: flex;
  align-items: flex-start;
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

.rodape {
  display: flex;
  gap: 20px;
}

@media (max-width: 650px) {
  .main {
    margin: 10px auto;
  }

  .cabecalho {
    display: flex;
    align-items: flex-start;
  }

  .cad-aluno {
    width: 80%;
    margin: auto;
  }

  .cad-aluno .v-text-field {
    width: 80%;
  }
}
</style>
