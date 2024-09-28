const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  viewportWidth: 1920,
  viewportHeight: 1024,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 60000,
  defaultTimeout: 30000,
  defaultCommandTimeout: 40000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  timeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
