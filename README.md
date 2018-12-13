# Ejemplo *Angular como cliente* para una API REST y GraphQL

> Este proyecto esta sobre [Angular CLI](https://github.com/angular/angular-cli) versión 7.1.1.

## Paso I

> Se realiza el tutorial de [Angular Hero](https://angular.io/tutorial) con la unica diferencia que se renombra **Hero** por **Carro**, con el fin dejar el camino listo para consumir una [API REST](https://github.com/gonzaloperezbarrios/DDD-NET-CORE) al lado del servidor.

> [Repositorio/Rama -> HeroExample](https://github.com/gonzaloperezbarrios/CLIENTE-ANGULAR-7-NETCORE/tree/HeroExample)

## Paso II
> En este paso se conecta una [API REST](https://github.com/gonzaloperezbarrios/DDD-NET-CORE). Se actuliza el proyecto para implementar lógica CRUD.

## Paso III
> En este paso se conecta una [API GraphQL](https://github.com/gonzaloperezbarrios/DDD-NET-CORE), mediante el uso del cliente [Apollo - Angular](https://www.apollographql.com/docs/angular/). Se actuliza el proyecto para implementar lógica CRUD.

> [Repositorio/Rama -> ApolloGraphQL](https://github.com/gonzaloperezbarrios/CLIENTE-ANGULAR-7-NETCORE/tree/ApolloGraphQL)

> Video de Guía
[![Guía](https://img.youtube.com/vi/dp_64aX_6jI/0.jpg)](https://www.youtube.com/watch?v=dp_64aX_6jI "Guía")

> [Repositorio Guía](https://github.com/seeschweiler/apollo-client-angular) por **seeschweiler**

> Instalar Apollo: 

    npm install apollo-angular apollo-angular-link-http apollo-client apollo-cache-inmemory graphql-tag graphql

> Documentación de apoyo:

- [Querys](https://www.apollographql.com/docs/angular/basics/queries.html)
- [Mutations](https://www.apollographql.com/docs/angular/basics/mutations.html)
- [Query, Mutation, Subscription services](https://www.apollographql.com/docs/angular/basics/services.html)





## Comandos útiles 
> [Tutorial oficial](https://angular.io/tutorial/toh-pt0)
- ng new app-carros
- cd app-carros
- ng serve --open
- ng generate component carros
- ng generate component carro-detail
- ng generate service carro
- ng generate component messages
- ng generate service message
- ng generate component dashboard
- npm install angular-in-memory-web-api --save (opcional)
- npm install @angular/http
- ng generate service InMemoryData