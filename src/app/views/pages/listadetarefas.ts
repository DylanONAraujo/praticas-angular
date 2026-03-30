// Exercício de Fixação – CRUD de Produtos
// 🎯 Objetivo
// Construir uma aplicação Angular que permita Cadastrar, Listar, Editar e Excluir produtos.

// 🔹 Passo a Passo
// Estrutura inicial

// Crie um novo projeto Angular:

// bash
// ng new crud-produtos
// cd crud-produtos
// ng serve
// Crie um módulo ProductsModule com um componente ProductListComponent.

// Modelo de dados

// Crie uma interface Product:

// typescript
// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }
// Serviço de Produtos

// Crie product.service.ts para gerenciar os dados:

// typescript
// import { Injectable } from '@angular/core';
// import { Product } from './product.model';

// @Injectable({ providedIn: 'root' })
// export class ProductService {
//   private products: Product[] = [
//     { id: 1, name: 'Notebook', price: 3500, description: 'Notebook Dell' },
//     { id: 2, name: 'Mouse', price: 80, description: 'Mouse sem fio' }
//   ];

//   getAll() {
//     return this.products;
//   }

//   add(product: Product) {
//     product.id = this.products.length + 1;
//     this.products.push(product);
//   }

//   update(product: Product) {
//     const index = this.products.findIndex(p => p.id === product.id);
//     if (index !== -1) this.products[index] = product;
//   }

//   delete(id: number) {
//     this.products = this.products.filter(p => p.id !== id);
//   }
// }
// Listagem de Produtos

// No ProductListComponent, exiba os produtos com *ngFor.

// Adicione botões de Editar e Excluir.

// Formulário de Cadastro/Edição

// Crie ProductFormComponent com Reactive Forms.

// Permita adicionar novos produtos e editar existentes.

// Rotas

// Configure rotas:

// /products → lista

// /products/new → cadastro

// /products/edit/:id → edição

// Extra (para treinar mais)

// Persistir os dados em LocalStorage.

// Integrar com uma API fake usando JSON Server:

// bash
// npm install -g json-server
// json-server --watch db.json
// 🔹 Desafio Final
// Monte um mini sistema de estoque:

// Listagem com busca e filtro por preço.

// Cadastro com validação (nome obrigatório, preço > 0).

// Edição inline (editar direto na tabela).

// Exclusão com confirmação modal.


// Lista de Exercícios em Angular 13
// 🔹 Fundamentos
// Criar um Hello World em Angular usando ng serve.

// Montar um componente simples que exiba uma lista de nomes.

// Implementar data binding(interpolação, property binding e event binding).

// Criar um formulário reativo com validações básicas(campo obrigatório, mínimo de caracteres).

// 🔹 Componentes e Módulos
// Criar um componente de card reutilizável para mostrar informações de produtos.

// Dividir a aplicação em módulos(ex.: AuthModule, ProductsModule).

// Implementar comunicação entre componentes(Input / Output).

// 🔹 Diretivas e Pipes
// Usar diretivas estruturais(* ngIf, * ngFor) para renderizar listas e condições.

// Criar uma diretiva customizada que muda a cor de fundo ao passar o mouse.

// Implementar um pipe customizado para formatar textos(ex.: deixar tudo maiúsculo).

// 🔹 Serviços e Injeção de Dependência
// Criar um serviço de logging que registra ações no console.

// Implementar um serviço de produtos que retorna uma lista mockada.

// Usar injeção de dependência para compartilhar dados entre componentes.

// 🔹 HTTP e APIs
// Consumir uma API pública(ex.: JSONPlaceholder) com HttpClient.

// Criar um CRUD simples(listar, adicionar, editar e excluir itens).

// Implementar tratamento de erros em requisições HTTP.

// 🔹 Rotas
// Configurar rotas básicas(Home, Produtos, Login).

// Implementar rota protegida com AuthGuard.

// Criar rota com parâmetros(ex.: /produto/: id).

// 🔹 Extras(para se destacar)
// Implementar lazy loading de módulos.

// Criar um interceptor HTTP para adicionar token de autenticação.

// Usar RxJS para manipular observables(ex.: debounce em campo de busca).

// Criar testes unitários simples com Jasmine / Karma.




// Exercícios Intermediários em Angular 13
// 🔹 Estrutura e Organização
// Criar um layout com Angular Material (toolbar, sidenav, cards).

// Implementar lazy loading em módulos diferentes (ex.: módulo de autenticação carregado sob demanda).

// Configurar rotas filhas (nested routes) para páginas internas de um módulo.

// 🔹 Serviços e Estado
// Criar um serviço de autenticação que simula login/logout e guarda o estado do usuário.

// Implementar um AuthGuard que bloqueia acesso a rotas sem login.

// Usar BehaviorSubject ou ReplaySubject para compartilhar estado entre componentes.

// 🔹 HTTP e APIs
// Criar um interceptor HTTP que adiciona token de autenticação em cada requisição.

// Implementar tratamento global de erros com interceptores.

// Criar um CRUD completo com backend fake (ex.: JSON Server).

// 🔹 RxJS e Observables
// Implementar um campo de busca com debounce usando RxJS.

// Criar um timer reativo que atualiza a tela em tempo real.

// Usar operadores (map, filter, switchMap) para transformar dados de uma API.

// 🔹 Testes
// Escrever testes unitários para um serviço com Jasmine.

// Criar testes de componente verificando renderização condicional com *ngIf.

// Configurar testes de integração simulando chamadas HTTP.

// 🔹 Extras para Portfólio
// Criar uma aplicação de To-Do List com persistência em LocalStorage.

// Desenvolver um dashboard de produtos com gráficos usando ng2-charts.

// Implementar upload de arquivos com preview antes de enviar.


// Exercícios Difíceis em Angular 13
// 🔹 Arquitetura e Escalabilidade
// Criar uma aplicação modular complexa com múltiplos domínios (ex.: Auth, Admin, Products, Orders) usando lazy loading e rotas filhas.

// Implementar state management avançado com NgRx (actions, reducers, selectors, effects).

// Configurar feature flags para habilitar/desabilitar funcionalidades dinamicamente.

// 🔹 Performance e Otimização
// Implementar Change Detection Strategy OnPush em componentes para otimizar renderização.

// Usar trackBy em listas grandes para melhorar performance.

// Criar um pré-carregamento customizado de módulos (custom preloading strategy).

// 🔹 Integração e Segurança
// Criar um sistema de autenticação JWT completo (login, refresh token, logout).

// Implementar role-based access control (RBAC) para rotas e componentes.

// Configurar interceptor HTTP para renovar tokens automaticamente quando expiram.

// 🔹 RxJS Avançado
// Criar um autocomplete com busca em API usando switchMap, debounceTime e distinctUntilChanged.

// Implementar polling reativo (requisições periódicas a uma API até condição ser atendida).

// Usar combineLatest e forkJoin para integrar múltiplas fontes de dados.

// 🔹 Testes e Qualidade
// Escrever testes de integração com mocks de API usando HttpTestingController.

// Criar testes end-to-end (E2E) com Cypress ou Protractor simulando fluxo completo de login e CRUD.

// Configurar CI/CD pipeline para rodar testes automaticamente antes de deploy.

// 🔹 Projeto Desafiador (Integrador)
// Desenvolver um mini e-commerce:

// Login com JWT e roles (admin/cliente).

// CRUD de produtos com NgRx para gerenciamento de estado.

// Carrinho de compras persistente em LocalStorage.

// Checkout com integração a uma API fake de pagamento.

// Dashboard com gráficos (ng2-charts) mostrando vendas.

// Testes unitários e E2E cobrindo fluxo principal.


// Nível Fácil
// Criar um contador simples com botões de incrementar e decrementar.

// Montar um formulário de login com validação de campos obrigatórios.

// Exibir uma lista de tarefas usando *ngFor e permitir marcar como concluída.

// 🟡 Nível Intermediário
// Criar um CRUD de notas (adicionar, editar, excluir) usando HttpClient com uma API fake (JSON Server).

// Implementar rotas protegidas com AuthGuard e simulação de login.

// Criar um componente de busca com debounce usando RxJS (debounceTime, distinctUntilChanged).

// 🔴 Nível Difícil
// Desenvolver um sistema de autenticação JWT completo (login, refresh token, logout).

// Implementar NgRx para gerenciar estado de uma lista de produtos (actions, reducers, selectors).

// Criar um dashboard com gráficos dinâmicos usando ng2-charts, integrando dados de uma API.

// Configurar interceptor HTTP para adicionar token e tratar erros globalmente.