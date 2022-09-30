// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8080',
    viewportHeight: 800,
    viewportWidth: 1440,
  },

  env: {
    apiBaseUrl: 'http://localhost:3000',
  },
});
