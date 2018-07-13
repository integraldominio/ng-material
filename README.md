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
npm i hammerjs
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



## (4) Estrutura da app


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
