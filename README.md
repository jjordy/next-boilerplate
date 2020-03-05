# Nextjs Boilerplate

This is a nextjs app pre setup with [Typescript](https://www.typescriptlang.org/), [Sentry](https://sentry.io), [Jest](https://jestjs.io), [cypress](https://cypress.io), [Tailwind CSS](https://tailwindcss.com/) and a few common hooks

## Getting Started

#### NPM

```bash
git clone https://github.com/jjordy/next-boilerplate.git my-app
rm -rf .git
npm install && npm run dev
```

#### Yarn

```bash
git clone https://github.com/jjordy/next-boilerplate.git my-app
rm -rf .git
yarn && yarn run dev
```

#### Commands

```
  Running

  npm run dev - run the dev server
  npm run build - build the production bundle
  npm start - start the production server

  Linting

  npm run lint - run prettier
  npm run lint:fix - run prettier and automatically fix issues.

  Unit Testing

  npm run test - run the test
  npm run test:dev - run the test in watch mode
  npm run test:ci - run the test on continuous integration

  Integration / e2e Testing

  npm run cypress:open - run cypress
  npm run cypress:run - run cypress headless (For CI)
```

#### Hooks

```
  // run something on a react safe interval
  useInterval(function, delay);

  // get the window height and width (throttled)
  const { width, height } = useWindowSize();
```

#### Github Action
This project includes a github action to run your tests when you check your code into master the action can be edited in ```.github/workflows/main.yml```

#### Maintainers

* Jordan Addison