# Nextjs App

This is a nextjs app pre setup with typescript, sentry, tailwind css and a few common hooks

### Commands

``` 
  npm run dev - run the dev server
  npm run build - build the production bundle
  npm start - start the production server

  npm run lint - run prettier
  npm run lint:fix - run prettier and automatically fix issues.

  npm run test - run the test
  npm run test:dev - run the test in watch mode
  npm run test:ci - run the test on continuous integration
```

### Hooks

```
  // run something on a react safe interval
  useInterval(function, delay);

  // get the window height and width (throttled)
  const { width, height } = useWindowSize();
```