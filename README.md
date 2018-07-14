# Angular Dashboard Material do Zero

## Pré-requisitos

* NodeJS
* Angular CLI

## (1) Criando app Angular

```
ng new ngmaterial
```

## (2) Instalando Componentes 

```
npm i @angular/material @angular/cdk @angular/animations @angular/flex-layout
npm i @ngx-formly/material @ngx-formly/core
npm i hammerjs
npm install --save-dev @compodoc/compodoc
```

## (3) Configurando App

```html
index.xhml

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">

  <style>
      body{
        background-color: #3f51b5;
      }
      .loader {
          position: absolute;
          height: 80px;
          width: 80px;
          left: calc(50% - 40px);
          top: calc(50% - 40px);
      }
  </style>

  <body>
    <app-base>
        <img src="assets/svg-loaders/puff.svg" class="loader">
      </app-base>
  </body>

```

```
main.js

import 'hammerjs';

```

```
style.css

@import "~@angular/material/prebuilt-themes/indigo-pink.css";

body{
  margin: 0;
}
```

```
angular.json

    "styles": [
      "src/styles.css"
    ],
```

## (4) Criando componentes

```
ERP
ng g c erp/fatura --spec false
ng g c erp/cliente --spec false
ng g c erp/produto --spec false

PAGES
ng g c pages/base --spec false
ng g c pages/erro --spec false
ng g c pages/home --spec false
ng g c pages/login --spec false
ng g c pages/sidenav --spec false
ng g c pages/sobre --spec false

SHARED
ng g m shared/material --spec false --flat

INFRA
ng g c infra/adminGuard --spec false --flat
ng g c infra/authGuard --spec false --flat
ng g c infra/guestGuard --spec false --flat
ng g c infra/jwtInterceptor --spec false --flat
ng g c infra/messageService --spec false --flat
ng g c infra/resourceService --spec false --flat
ng g c infra/userService --spec false --flat

ROTAS
ng g m appRotas --spec false --flat

```

## (5) Estrutura da app

```
├───app
│   │   app-rotas.module.ts
│   │   app.module.ts
│   │
│   ├───erp
│   │   ├───cliente
│   │   │       cliente.component.css
│   │   │       cliente.component.html
│   │   │       cliente.component.spec.ts
│   │   │       cliente.component.ts
│   │   │       cliente.service.ts
│   │   │
│   │   ├───fatura
│   │   │       fatura.component.css
│   │   │       fatura.component.html
│   │   │       fatura.component.spec.ts
│   │   │       fatura.component.ts
│   │   │       fatura.service.ts
│   │   │
│   │   └───produto
│   │           produto.component.css
│   │           produto.component.html
│   │           produto.component.spec.ts
│   │           produto.component.ts
│   │           produto.service.ts
│   │
│   ├───infra
│   │       admin.guard.ts
│   │       auth.guard.ts
│   │       authentication.service.ts
│   │       config.service.ts
│   │       guest.guard.ts
│   │       index.ts
│   │       jwt.interceptor.ts
│   │       message.service.ts
│   │       resource.service.ts
│   │       user.service.ts
│   │
│   ├───pages
│   │   ├───base
│   │   │       base.component.html
│   │   │       base.component.ts
│   │   │
│   │   ├───erro
│   │   │       erro.component.css
│   │   │       erro.component.html
│   │   │       erro.component.ts
│   │   │
│   │   ├───home
│   │   │       home.component.css
│   │   │       home.component.html
│   │   │       home.component.ts
│   │   │
│   │   ├───login
│   │   │       login.component.html
│   │   │       login.component.scss
│   │   │       login.component.ts
│   │   │
│   │   ├───sidenav
│   │   │       sidenav.component.css
│   │   │       sidenav.component.html
│   │   │       sidenav.component.ts
│   │   │       sidenav.service.ts
│   │   │
│   │   └───sobre
│   │           sobre.component.css
│   │           sobre.component.html
│   │           sobre.component.ts
│   │
│   └───shared
│           material.module.ts
│
├───assets
│   │   .gitkeep
│   │
│   ├───icon
│   │       auth.svg
│   │       facebook.svg
│   │       firebase.svg
│   │       github-logo.svg
│   │       github-plus.png
│   │       google-plus.svg
│   │
│   ├───images
│   │       face-7.jpg
│   │       logo.svg
│   │
│   └───svg-loaders
│           puff.svg
│
└───environments
        environment.prod.ts
        environment.ts
```

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
