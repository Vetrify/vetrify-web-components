![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

[![Node.js CI](https://github.com/Vetrify/vetrify-web-components/actions/workflows/build.yaml/badge.svg)](https://github.com/Vetrify/vetrify-web-components/actions/workflows/build.yaml)

# Vetrify Web Components

Vetrify's standalone Web Components.

## Toolset

### Stencil

[StencilJs](https://stenciljs.com/) is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular front-end frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

### Storybook

[Storybook](https://storybook.js.org) is a development environment for UI components.
It allows you to browse a component library, view the different states of each component, and interactively develop and test components. Find out more at https://storybook.js.org.

## Operation

### To Run

For development using storybook, run:

`npm install`<br/>
`npm start`<br/>
`vetrify storybook will run under: http://localhost:3000`

### To Build

To build the component for production, run:

`npm build`

To run the unit tests for the components, run:

`npm test`<br/>
`npm test -t special.spec.ts`

## Contributing

### Language Convention

Typescript should be the default language used for defining components, tests, and stories.

### Naming Convention

When creating new component tags, do _not_ use `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with StencilJs; it's just a web component!

Instead, use the prefix `v`.

## Using Components

Strategies for using Vetrify web components.

The first step is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/my-component/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

# Notes

* [Stencil 2.0.3](https://stenciljs.com/) 
* [Storybook 6.0.26](https://storybook.js.org/) 
* Real Stencil HMR (hot module reloading)
* Chromatic tested for visual regression testing of stories.

## Special Thanks to stencil storybook starters 
* [bjankord](https://github.com/bjankord/stencil-storybook-boilerplate) 
* [elwynelwyn](https://github.com/elwynelwyn/stencilbook-ding)
* [dutscher](https://dutscher.github.io/stencil-storybook)
* [shoelace](https://github.com/shoelace-style/shoelace)