# Jest + Vue Hack Session

## Getting started

```
hub clone jonboiser/jest-hack-session
yarn install
yarn run test
```

## Running in watch mode

During exercises, run it in watch mode:

```
yarn run test:dev
```

Sometimes you will need to press <kbd>w</kbd> to see some options.

## Features to try

### Auto-detecting changed files

In watch mode, only tests related to recently changed files (uncommitted changes in git) will be run. Modify some bit of test or application code and see which tests get run.

Also check out the cool diffs and stack traces you get with errors.

### Snapshot tests

One test `HelloWorldSnap.spec.js` is designed as a snapshot test. Modify `HelloWorldSnap.vue` in way that changes how it would appear in the DOM and fix the failing test by editing its snapshot.

You can fix the snapshot manually (recommended) or automatically in the CLI by pressing <kbd>u</kbd>.

[Docs](https://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest)

### Mocking functions

The tests `Mocking.spec.js` are failing because the component `Mocking.vue` relies on an HTTP call made on its `beforeMount` lifecycle hook. We need to mock a method in `Mocking.vue` to get it to work.

[vue-test-utils docs on mocking](https://vue-test-utils.vuejs.org/api/options.html#mocks)

[using jest.fn() mockers](https://facebook.github.io/jest/docs/en/mock-function-api.html)

### Async tests

In `asyncStuff.js` there is a function `promiser` that returns a `Promise<string>`. Write a test for it. For fun, add a test that handles the error case as well.

Put the test in the same directory as `asyncStuff.js`, but in a sub folder `__tests__` (Jest will look for tests in directories with this name).

[jest docs](https://facebook.github.io/jest/docs/en/asynchronous.html#async-await)
