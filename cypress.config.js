const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // requestTimeout: 2000,
    defaultCommandTimeout: 50000,
    // retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
