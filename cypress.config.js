const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.trymima.com/",
    pageLoadTimeout : 50000,
    defaultCommandTimeout: 10000,
    experimentalRunAllSpecs: true,
    experimentalWebKitSupport: true,
    viewportHeight: 800,
    viewportWidth: 1500,
    watchForFileChanges: false,
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
