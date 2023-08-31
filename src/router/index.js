// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login/Login.vue'
import CadastroNovoAluno from '../views/CadastroNovoAluno/CadastroNovoAluno.vue'
import CadastroTreino from '../views/CadastroTreino/CadastroTreino.vue'
import CadastroUsuario from '../views/CadastroUsuario/CadastrarUsuario.vue'
import Deashboard from '../views/Dashboard/Dashboard.vue'
import GerenciamentoDeAlunos from '../views/GerenciamentoDeAlunos/GerenciamentoDeAlunos.vue'
import GerenciamentoDeExercicios from '../views/GerenciamentoDeExercicios/GerenciamentoDeExercicios.vue'
import VisualizacaoTreinos from '../views/VisualizacaoTreinos/VisualizacaoTreinos.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Login',
        component: Login
      },
      {
        path: '/aluno/novo',
        name: 'CadastroNovoAluno',
        component: CadastroNovoAluno
      },
      {
        path: '/treino/novo',
        name: 'CadastroTreino',
        component: CadastroTreino
      },
      {
        path: '/usuario/novo',
        name: 'CadastroUsuario',
        component: CadastroUsuario
      },
      {
        path: '/dashboard',
        name: 'Deashboard',
        component: Deashboard
      },
      {
        path: '/listagem/alunos',
        name: 'GerenciamentoDeAlunos',
        component: GerenciamentoDeAlunos
      },
      {
        path: '/listagem/exercicios',
        name: 'GerenciamentoDeExercicios',
        component: GerenciamentoDeExercicios
      },
      {
        path: '/listagem/treinos',
        name: 'VisualizacaoTreinos',
        component: VisualizacaoTreinos
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
