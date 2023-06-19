const { defineConfig } = require('cypress')
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  chromeWebSecurity: false,
  // responseTimeout: 60000,
  e2e: {
    baseUrl: 'https://mijn-homeworks.ict-works.info/',
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      return cloudPlugin(on, config);
    },
  },
})