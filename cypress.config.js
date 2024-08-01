const { defineConfig } = require("cypress");

const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
 e2e: {
  specPattern: "**/*.feature",
   baseUrl:"https://trello.com",
   chromeWebSecurity: false,
   video: true,
   screenshotOnRunFailure: true,
   screenshotsFolder: "TheScreenshots",
   setupNodeEvents(on, config) {
     on("file:preprocessor", cucumber());
   },

 },
});
