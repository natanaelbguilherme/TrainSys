// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login/Login.vue'
import CadastroNovoAluno from '../views/CadastroNovoAluno/CadastroNovoAluno.vue'
import CadastroTreino from '../views/CadastroTreino/CadastroTreino.vue'
import CadastroUsuario from '../views/CadastroUsuario/CadastrarUsuario.vue'
import Deashboard from '../views/Deashboard/Deashboard.vue'
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
        path: '/novoaluno',
        name: 'CadastroNovoAluno',
        component: CadastroNovoAluno
      },
      {
        path: '/novotreino',
        name: 'CadastroTreino',
        component: CadastroTreino
      },
      {
        path: '/novousuario',
        name: 'CadastroUsuario',
        component: CadastroUsuario
      },
      {
        path: '/deashboard',
        name: 'Deashboard',
        component: Deashboard
      },
      {
        path: '/gerenciamentoalunos',
        name: 'GerenciamentoDeAlunos',
        component: GerenciamentoDeAlunos
      },
      {
        path: '/gerenciamentoexercicios',
        name: 'GerenciamentoDeExercicios',
        component: GerenciamentoDeExercicios
      },
      {
        path: '/visualizacaotreinos',
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
