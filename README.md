# Project Setup Guide

## 1. Create Vite Project

```bash
$ npm create vite@latest

  - Project name: react-template
  - Select a framework: React
  - Select a variant: TypeScript + SWC

[Source](https://vitejs.dev/guide/)
```

## 2. Install Material-UI

```bash
$ npm install @mui/material @emotion/react @emotion/styled

[Source](https://mui.com/material-ui/getting-started/installation/)

```

## 3. Install React Router

```bash
$ npm install react-router-dom

[Source](https://reactrouter.com/en/main/start/tutorial#setup)
- The tutorial recommends other packages, but they are unrelated to react-router.
```

## 4. Setup Redux Toolkit

```bash
$ npm install @reduxjs/toolkit
$ npm install react-redux

[Source](https://redux.js.org/introduction/installation)

- Redux Toolkit includes the Redux core, as well as other key packages.
- You also need the react-redux bindings for use with React.

[Guide](https://www.youtube.com/watch?v=YPVUPpKADb8)
- Used the above video to test if Redux worked properly.
```

## 5. Setup Redux Toolkit

```bash
$ npm install -D vitest

[Source](https://vitest.dev/guide/)


- Copied `vite.config.ts` from [GitHub](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib-msw/vite.config.ts)

- Modified the import "@vitejs/plugin-react" to be from "@vitejs/plugin-react-swc" instead inside the vite.config.ts.
```

## 6. Additional Dependencies:

```bash

All of the dependencies below are from the video guide to test react components with vitest

[Video Guide](https://youtu.be/cchqeWY0Nak?si=M1X3zxv0qMx9nlCY&t=1468)


$ npm install --save-dev @testing-library/react

- We need a testing library to test react components so we install testing-library/react

$ npm install --save-dev @testing-library/jest-dom

- jest-dom gives us access to more dom specific expectations. The github repo below contains a table of contents of all the custom matchers

  - https://github.com/testing-library/jest-dom

$ npm install jsdom

-  jsdom is a JavaScript implementation of the DOM. When running tests, it simulates a browser-like environment in Node.js, allowing you to test your React components without needing a real browser

```
