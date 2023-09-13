# Total Power
## _Gerenciamento de Treinos_

O "Total Power" é um app para personal trainers, para gerenciar alunos e seus respectivos treinos, nele o personal poderá cadastrar alunos e exercicios, montar treinos personalizados para cada aluno, com cargas repetições e descanso, e acompanhar o treino dia a dia feito por cada aluno.

## Executar
```
npm install
```

```
npm run dev
```

## Tecnologias utilizadas

- Html
- Css
- Java Script
- Vue.js

## _Ferramentas adicionais_

- Date-fns
- Yup
- Vuetify

## Guia do sistema

Ao entrar no sistema o usuário deverá fazer login ou criar uma conta caso ainda não possua.
Após fazer login o usuário sera direcionado para a página inicial do sistema, o Dashboard.

## _Dasboard_
<img src="https://uploaddeimagens.com.br/images/004/606/227/original/paginicial.PNG?1694627506" />

Nela temos um Menu, abaixo o nome do usuário logado e dois cards, no primeiro o numero de alunos cadastrados no sistema e no segundo o número de exercicios. 

Em cada card há um botão onde o usuário será direcionado para a página de cadastro de um novo aluno ou um novo exercicio.

## _Cadastro de Alunos_
<img src="https://uploaddeimagens.com.br/images/004/606/234/full/cadaluno.PNG?1694627773" />

Aqui o usuário poderá cadastrar novos alunos, quase todos os campos são obrigatórios, exceto o campo "complemento" que é opcional.

## _Cadastro de Exercicios_
<img src="https://uploaddeimagens.com.br/images/004/606/244/full/cadexercicio.PNG?1694628040" />

Aqui o usuário poderá cadastrar novos exercicios, ao clicar no botão "cadastrar exercicio" o mesmo deverá ser adicionado à lista abaixo.

## _Gerenciamento de Alunos_
<img src="https://uploaddeimagens.com.br/images/004/606/252/full/gerealuno.PNG?1694628193" />

Nesta página o usuário também pode ir para a página de cadastro de alunos clicando no botão "novo aluno", abaixo há um campo de pesquisa para buscar alunos pelo nome cadastrado, o capo funciona automaticamente ao digitar o nome do aluno procurado.

Ao lado do nome de cada aluno existem dois botões, o "montar treino" e "ver", o botão montar treino leva para a página onde o usuário pode montar o treino personalizado para cada aluno.

O botão "ver" irá mostrar todos os treinos montados para o aluno.

## _Montar Treino_
<img src="https://uploaddeimagens.com.br/images/004/606/267/full/monttreino.PNG?1694628494" />

Nesta página o treino sera montado pelo usuário, no primeiro campo estarão listados os exercicios cadastrados na página "cadastro de exercicios", logo a abaixo pode se escolher o número de repetições, a carga, o descanso, o dia da semana que este treino sera executado e as observações.

## _Ver Treino_
<img src="https://uploaddeimagens.com.br/images/004/606/285/full/vertreino.PNG?1694628846" />

Nesta página está a ficha de treino de cada aluno, o dia da semana e o respectivo treino a ser realizado naquele dia, há também um chekbox ao lado de cada exercício, que pode ser marcado para acompanhar os exercicios feitos pelo aluno.
Abaixo temos a ficha de treino completa de todos os dias, onde o usuário pode clicar em cada dia da semana e ver qual treino realizará.

## Melhorias
- Fazer a paginação no cadastro de novos exercicios e no gerenciamento de alunos
- Implementar os outros métodos HTTP: DELETE e PUT
- Criar o acesso para cada aluno cadastrado acompanhar o seu respectivo treino
