1.

```
$ npm create vite@latest

  - Project name: react-template
  - Select a framework: React
  - Select a variant: TypeScript + SWC

source: https://vitejs.dev/guide/
```

2.

```
$ npm install @mui/material @emotion/react @emotion/styled

source : https://mui.com/material-ui/getting-started/installation/

```

3.

```
$ npm install react-router-dom

source : https://reactrouter.com/en/main/start/tutorial#setup

- The tutorial says to install other packages also but those are unrelated to react-router and something they use in the tutorial.

```

4.

```
$ npm install @reduxjs/toolkit
$ npm install react-redux

source : https://redux.js.org/introduction/installation
- Redux Toolkit includes the Redux core, as well as other key packages we feel are essential for building Redux applications (such as Redux Thunk and Reselect).

- Most likely, you'll also need the react-redux bindings for use with React

Guide: https://www.youtube.com/watch?v=YPVUPpKADb8
- I've  used the above video to test if redux worked properly

```

5.

```
$ npm install -D vitest


source : https://vitest.dev/guide/


I used this video as a guide to setup vitest to test react components: https://youtu.be/cchqeWY0Nak?si=M1X3zxv0qMx9nlCY&t=1468

- Copied vite.config.ts from the link below
  - https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib-msw/vite.config.ts

- changed the import react from "@vitejs/plugin-react-swc", to be from /plugin-react-swc instead of


npm install --save-dev @testing-library/react

-We need a testing library to test react components so we install testing-library/react


npm install --save-dev @testing-library/jest-dom

-Install package library called jest-dom that gives us access to more dom specific expectations. The github repo below contains a table of contents of all the custom matchers
https://github.com/testing-library/jest-dom


setup the setupTests.ts file with the instructions from the jest-dom repository from the part "With another Jest-compatible expect"




 MISSING DEPENDENCY  Cannot find dependency 'jsdom': ? Do you want to install jsdom? › (y/N)

 jsdom is a JavaScript implementation of the DOM. When running tests, it simulates a browser-like environment in Node.js, allowing you to test your React components without needing a real browser


```
